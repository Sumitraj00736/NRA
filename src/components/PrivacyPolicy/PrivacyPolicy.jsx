import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className='mt-12 mb-12 font-poppins xl:max-w-7xl lg:max-w-5xl md:max-w-3xl max-w-2xl mx-auto px-4'>
      <div className='mb-16'>
        <h1 className='font-poppins font-semibold text-black text-2xl sm:text-3xl md:text-4xl text-center py-2 md:py-4'>Privacy Policy</h1>
        <p className='text-center font-poppins text-customPurple text-xs md:text-base font-semibold'>Effective Date: 1st January, 2025</p>
      </div>
      <div className='flex flex-col justify-center gap-8 xl:ml-16 lg:ml-12'>
        <div className='flex flex-col justify-center gap-2'>
          <h1 className='text-xl md:text-2xl font-semibold'>Introduction</h1>
          <p className='text-sm md:text-base'>Nepal Remitters Association (“Company,” “we,” “us,” or “our”) respects users' privacy and is committed to protecting users' personal information. This Privacy Policy explains how this site collects, uses, discloses, and protects any personal data obtained through
            <Link to='#'>
              <span className='cursor-pointer text-customPurple hover:text-purple-800 font-semibold'> www.nra.org.np</span>
            </Link>. By accessing or using the Website, users acknowledge that they have read, understood, and agreed to this Privacy Policy.
          </p>
        </div>
        <div className='flex flex-col justify-center gap-2'>
          <h1 className='text-xl md:text-2xl font-semibold'>Information Collected</h1>
          <p className='text-sm md:text-base'>Our Website is primarily informational and collects minimal personal data. However, we may collect and process the following types of information:</p>
          <ul className='list-disc ml-5'>
            <li className='text-sm md:text-base'><span className='font-semibold'>Personal Data:</span> If you voluntarily submit a contact form, we may collect your name, email address, and any message or information you provide.</li>
            <li className='text-sm md:text-base'><span className='font-semibold'>Non-Personal Data:</span> We may automatically collect certain technical data, including IP addresses, browser type, operating system, and Website usage data through cookies or analytics tools.</li>
          </ul>
        </div>
        <div className='flex flex-col justify-center gap-2'>
          <h1 className='text-xl md:text-2xl font-semibold'>Legal Basis for Processing</h1>
          <ul className='list-disc ml-5'>
            <li className='text-sm md:text-base'><span className='font-semibold'>Consent:</span> When you voluntarily provide personal information via our contact form.</li>
            <li className='text-sm md:text-base'><span className='font-semibold'>Legitimate Interest:</span> To maintain and improve our Website, ensure security, and respond to inquiries.</li>
            <li className='text-sm md:text-base'><span className='font-semibold'>Legal Obligations:</span> When required by applicable laws or regulatory authorities.</li>
          </ul>
        </div>
        <div className='flex flex-col justify-center gap-2'>
          <h1 className='text-xl md:text-2xl font-semibold'>Use of Information</h1>
          <p className='text-sm md:text-base'>The information collected may be used for the following purposes:</p>
          <ul className='list-disc ml-5'>
            <li className='text-sm md:text-base'>To respond to inquiries submitted via our contact form.</li>
            <li className='text-sm md:text-base'>To analyze Website performance and enhance user experience.</li>
            <li className='text-sm md:text-base'>To detect and prevent fraudulent or unauthorized activities.</li>
            <li className='text-sm md:text-base'>To comply with applicable legal requirements.</li>
          </ul>
        </div>
        <div className='flex flex-col justify-center gap-2'>
          <h1 className='text-xl md:text-2xl font-semibold'>Data Sharing and Disclosure</h1>
          <p className='text-sm md:text-base'>We do not sell, rent, or trade your personal information. However, we may share information under the following circumstances:</p>
          <ul className='list-disc ml-5'>
            <li className='text-sm md:text-base'><span className='font-semibold'>Service Providers:</span> We may engage third-party service providers (e.g., analytics providers) to assist with Website operations. These providers are contractually bound to protect personal data.</li>
            <li className='text-sm md:text-base'><span className='font-semibold'>Legal Compliance:</span> We may disclose information if required to do so by law, legal process, or governmental request.</li>
            <li className='text-sm md:text-base'><span className='font-semibold'>Business Transfers:</span> In the event of a business merger, sale, or acquisition, personal data may be transferred as part of the transaction.</li>
          </ul>
        </div>
        <div className='flex flex-col justify-center gap-2'>
          <h1 className='text-xl md:text-2xl font-semibold'>Cookies and Tracking Technologies</h1>
          <p className='text-sm md:text-base'>Our Website may use cookies and similar tracking technologies to enhance functionality and analyze traffic. By using the Website, you consent to the use of cookies in accordance with applicable laws. You may manage cookie preferences through your browser settings.</p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
