import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { SITE_CONSTANTS } from '@/utils/constants';

// Initialize Resend with your API key
// NOTE: You'll need to set up the API key in your environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Get email from constants
    const { EMAIL, BUSINESS_NAME } = SITE_CONSTANTS;
    
    // Parse the request body
    const body = await request.json();
    const { name, phone, email, message } = body;
    
    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, phone number, and message are required' },
        { status: 400 }
      );
    }

    // Prepare the email
    const emailResponse = await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your verified domain
      to: EMAIL.ENQUIRY_EMAIL,
      subject: `New Contact Form Submission for ${BUSINESS_NAME} from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
        <p><strong>Message:</strong> ${message}</p>
        <p>Please respond to this customer as soon as possible.</p>
      `,
    });

    return NextResponse.json({ success: true, data: emailResponse });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send contact email' },
      { status: 500 }
    );
  }
}
