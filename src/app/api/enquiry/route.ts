import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { SITE_CONSTANTS } from '@/utils/constants';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Get email from constants
    const { EMAIL, BUSINESS_NAME } = SITE_CONSTANTS;
    
    // Parse the request body
    const body = await request.json();
    const { name, mobile, message, productName } = body;
    
    // Validate required fields
    if (!name || !mobile || !productName) {
      return NextResponse.json(
        { error: 'Name, mobile number, and product name are required' },
        { status: 400 }
      );
    }

    // Prepare the email
    const emailResponse = await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your verified domain
      to: EMAIL.ENQUIRY_EMAIL,
      subject: `${BUSINESS_NAME} - Product Enquiry: ${productName}`,
      html: `
        <h2>New Product Enquiry</h2>
        <p><strong>Product:</strong> ${productName}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
        <p>Please contact this customer as soon as possible regarding their interest in ${productName} from ${BUSINESS_NAME}.</p>
      `,
    });

    return NextResponse.json({ success: true, data: emailResponse });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send enquiry email' },
      { status: 500 }
    );
  }
}
