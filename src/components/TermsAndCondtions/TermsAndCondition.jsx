import React from 'react';
import { Link } from 'react-router-dom';

function TermsAndCondition() {
  return (
    <>
      <div className='mt-12 mb-12 font-poppins xl:max-w-7xl lg:max-w-5xl md:max-w-3xl max-w-2xl mx-auto px-4'>
        <div className='mb-16'>
          <h1 className='font-poppins font-semibold text-black text-2xl sm:text-3xl md:text-4xl text-center py-2 md:py-4'>
            Terms & Conditions
          </h1>
          <p className='text-center font-poppins text-customPurple text-xs md:text-base font-semibold'>
            Last update: 11/7/2024
          </p>
        </div>
        <div className='flex flex-col justify-center gap-8 xl:ml-16 lg:ml-12'>
          <div className='flex flex-col justify-center gap-2'>
            <h1 className='text-xl md:text-2xl font-semibold'>1. Introduction</h1>
            <p className='text-sm md:text-base'>
              Welcome to the Nepal Remitters Association (NRA) website
              (<Link to="#" className='text-customPurple hover:text-purple-800 font-semibold'>www.nra.org.np</Link>). These Terms &
              Conditions govern your access and use of the Website. By using this Website, you agree to comply with these terms.
              If you do not agree, please do not use the Website.
            </p>
          </div>
          <div className='flex flex-col justify-center gap-2'>
            <h1 className='text-xl md:text-2xl font-semibold'>2. Use of Website</h1>
            <p className='text-sm md:text-base'>
              The content provided on this Website is for general information purposes only. You agree to use the Website
              responsibly and not engage in any illegal or prohibited activities.
            </p>
          </div>
          <div className='flex flex-col justify-center gap-2'>
            <h1 className='text-xl md:text-2xl font-semibold'>3. Intellectual Property</h1>
            <p className='text-sm md:text-base'>
              All content on this Website, including text, images, and logos, is the intellectual property of NRA. Unauthorized
              use, reproduction, or distribution of any content is strictly prohibited.
            </p>
          </div>
          <div className='flex flex-col justify-center gap-2'>
            <h1 className='text-xl md:text-2xl font-semibold'>4. Third-Party Links</h1>
            <p className='text-sm md:text-base'>
              This Website may contain links to third-party websites. NRA does not endorse or take responsibility for the
              content, privacy policies, or practices of any third-party sites.
            </p>
          </div>
          <div className='flex flex-col justify-center gap-2'>
            <h1 className='text-xl md:text-2xl font-semibold'>5. Limitation of Liability</h1>
            <p className='text-sm md:text-base'>
              NRA shall not be held liable for any damages arising from the use of this Website, including but not limited to
              direct, indirect, incidental, or consequential damages.
            </p>
          </div>
          <div className='flex flex-col justify-center gap-2'>
            <h1 className='text-xl md:text-2xl font-semibold'>6. Governing Law</h1>
            <p className='text-sm md:text-base'>
              These Terms & Conditions are governed by the laws of Nepal. Any disputes arising out of these terms shall be
              subject to the jurisdiction of the courts in Nepal.
            </p>
          </div>
          <div className='flex flex-col justify-center gap-2'>
            <h1 className='text-xl md:text-2xl font-semibold'>7. Contact Us</h1>
            <p className='text-sm md:text-base'>
              If you have any questions regarding these Terms & Conditions, please contact us at:
            </p>
            <div className='flex flex-col gap-1 text-sm md:text-base'>
              <p className='font-semibold'>Nepal Remitters Association</p>
              <p>
                Email:
                <Link to="#" className='text-customPurple hover:text-purple-800 font-semibold'> contact@nra.org.np</Link>
              </p>
              <p>Address: Kathmandu, Nepal</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TermsAndCondition;
