import Link from 'next/link';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SITE_CONSTANTS } from '@/utils/constants';

export default function Footer() {
  const { BUSINESS_NAME, CONTACT_PHONE, EMAIL, BUSINESS_DESCRIPTION } = SITE_CONSTANTS;
  return (
    <footer style={{ backgroundColor: '#4CAF50', color: '#FFFFFF' }} className="pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">{BUSINESS_NAME}</h3>
            <p className="mb-4">
              {BUSINESS_DESCRIPTION}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="transition-colors hover:opacity-80">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-green-300 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <a href={`tel:+91${CONTACT_PHONE}`} className="transition-colors hover:opacity-80">
                  +91 {CONTACT_PHONE}
                </a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="mr-2" />
                <a href={`https://wa.me/91${CONTACT_PHONE}`} target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-80">
                  WhatsApp Chat
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href={`mailto:${EMAIL.ENQUIRY_EMAIL}`} className="transition-colors hover:opacity-80">
                  {EMAIL.ENQUIRY_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center" style={{ borderColor: '#E8F5E930' }}>
          <p>&copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
