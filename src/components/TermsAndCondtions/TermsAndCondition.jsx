import React from 'react'
import { Link } from 'react-router-dom'

function TermsAndCondition() {
  return (
    <>
     <div className='mt-12 mb-12 font-poppins xl:max-w-7xl lg:max-w-5xl md:max-w-3xl max-w-2xl mx-auto px-4'>
        <div className='mb-16'>
            <h1 className='font-poppins font-semibold text-black text-2xl sm:text-3xl md:text-4xl text-center py-2 md:py-4'>Terms and Conditions</h1>
            <p className='text-center font-poppins text-customPurple text-xs md:text-base font-semibold'>Last update: 11/7/2024</p> 
        </div> 
        <div className='flex flex-col justify-center gap-8 xl:ml-16 lg:ml-12'>
            <p className='text-sm md:text-base'>Welcome to Quarkfin! These Terms and Conditions outline the rules and regulations
            for using Quarkfin's website, located at
                <Link to="#">
                    <span className='cursor-pointer text-customPurple hover:text-purple-800 font-semibold'> quarkfin.ai. </span>
                </Link>
                By accessing this website, we
                assume you accept these Terms and Conditions in full. If you do not agree with all the
                terms and conditions, please do not continue to use Quarkfin's website
            </p>
            <div className='flex flex-col justify-center gap-2'>
                <h1 className='text-xl md:text-2xl font-semibold'>Acceptance of Terms </h1>
                <p className='text-sm md:text-base'>By using our services, you agree to be bound by these terms, including our Privacy
                    Policy, and any additional guidelines or future modifications. If you do not agree with
                    these terms, you may not use our services.
                </p>
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <h1 className='text-xl md:text-2xl font-semibold'>Modification of Terms </h1>
                <p className='text-sm md:text-base'>Quarkfin reserves the right to modify or replace these Terms at any time. We will
                    provide notice of any material changes by posting the new Terms on our Site. Your
                    continued use of the Site following the posting of revised Terms means that you
                    accept and agree to the changes.
                </p>
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <h1 className='text-xl md:text-2xl font-semibold'>Services Provided </h1>
                <p className='text-sm md:text-base'>Quarkfin offers financial insights, tools, or other services to assist users in managing
                    their financial needs. The information provided on our Site is for general information
                    purposes only and does not constitute legal, financial, or professional advice.
                </p>
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <h1 className='text-xl md:text-2xl font-semibold'>User Obligations</h1>
                <p className='text-sm md:text-base'>As a user of the Site, you agree not to:</p>
                <div className='flex flex-row gap-2 items-start'>
                    <span className='border border-black rounded-full p-0.5 bg-black md:mt-2.5 mt-2 '></span>
                    <p className='text-sm md:text-base'> 
                        Use our Site for any unlawful purpose.
                    </p>    
                </div> 
                <div className='flex flex-row gap-2 items-start'>
                    <span className='border border-black rounded-full p-0.5 bg-black md:mt-2.5 mt-2 '></span>
                    <p className='text-sm md:text-base'> 
                        Engage in any activity that disrupts or interferes with the performance of the Site.
                    </p>    
                </div> 
                <div className='flex flex-row gap-2 items-start'>
                    <span className='border border-black rounded-full p-0.5 bg-black md:mt-2.5 mt-2 '></span>
                    <p className='text-sm md:text-base'> 
                        Submit false or misleading information.
                    </p>    
                </div> 
                <div className='flex flex-row gap-2 items-start'>
                    <span className='border border-black rounded-full p-0.5 bg-black md:mt-2.5 mt-2 '></span>
                    <p className='text-sm md:text-base'> 
                        Violate any applicable local, state, national, or international law while using the Site.
                    </p>    
                </div>   
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <h1 className='text-xl md:text-2xl font-semibold'>Intellectual Property </h1>
                <p className='text-sm md:text-base'>
                    The content, features, and functionality on the Site are and will remain the exclusive
                    property of Quarkfin. Unauthorized use of any materials on the Site, including text,
                    graphics, logos, images, and software, may violate intellectual property rights and is
                    strictly prohibited.
                </p>
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <h1 className='text-xl md:text-2xl font-semibold'>Third-Party Links</h1>
                <p className='text-sm md:text-base'>
                Our Site may contain links to third-party websites. These links are provided for your
                convenience and do not signify endorsement by Quarkfin. We have no control over,
                and assume no responsibility for, the content, privacy policies, or practices of any
                third-party websites.
                </p>
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <h1 className='text-xl md:text-2xl font-semibold'>Limitation of Liability</h1>
                <p className='text-sm md:text-base'>
                To the fullest extent permitted by law, Quarkfin and its affiliates, directors, employees,
                or agents shall not be liable for any indirect, incidental, special, consequential, or
                punitive damages, including without limitation, loss of profits, data, use, goodwill, or
                other intangible losses, resulting from your use or inability to use the Site or any
                related services.

                </p>
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <h1 className='text-xl md:text-2xl font-semibold'>Disclaimer of Warranties </h1>
                <p className='text-sm md:text-base'>
                Quarkfin provides the Site and services “as is” without any warranty of any kind,
                either express or implied, including but not limited to implied warranties of
                merchantability, fitness for a particular purpose, or non-infringement. We do not
                warrant that the Site will be uninterrupted, secure, or error-free.
                </p>
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <h1 className='text-xl md:text-2xl font-semibold'>Indemnification </h1>
                <p className='text-sm md:text-base'>
                You agree to indemnify, defend, and hold harmless Quarkfin and its affiliates, officers,
                agents, and employees from any claims, liabilities, damages, losses, and expenses,
                including without limitation, attorney’s fees, arising out of or in connection with your
                use of the Site, your violation of these Terms, or your violation of any rights of
                another.
                </p>
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <h1 className='text-xl md:text-2xl font-semibold'>Termination </h1>
                <p className='text-sm md:text-base'>
                Quarkfin reserves the right to suspend or terminate your access to the Site without
                prior notice if you breach these Terms or for any other reason.
                </p>
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <h1 className='text-xl md:text-2xl font-semibold'>Governing Law</h1>
                <p className='text-sm md:text-base'>
                These Terms shall be governed by and construed in accordance with the laws of
                [Your Country/State], without regard to its conflict of law principles. You agree to
                submit to the personal jurisdiction of the courts located within [Your Country/State]
                for the resolution of any disputes.
                </p>
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <h1 className='text-xl md:text-2xl font-semibold'>Contact Us</h1>
                <p className='text-sm md:text-base'>If you have any questions or concerns about these Terms, please contact us at:</p>
                    <div className='flex flex-col gap-1 text-sm md:text-base'>
                        <p className='font-semibold'>Quarkfin</p>
                        <p>Email:
                            <Link to="#">
                                <span className='cursor-pointer text-customPurple hover:text-purple-800 font-semibold'> contact@quarkfin.ai.</span>
                            </Link>
                        </p>
                        <p>Address: A1307, Gopalan Olympia, Kumbalagodu, Bangalore, Karnataka</p>
                    </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default TermsAndCondition