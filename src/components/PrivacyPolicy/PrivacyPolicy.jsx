import React from 'react'
import { Link } from 'react-router-dom'

function PrivacyPolicy() {
  return (
    <>
     <div className='mt-12 mb-12 font-poppins xl:max-w-7xl lg:max-w-5xl md:max-w-3xl max-w-2xl mx-auto px-4'>
        <div className='mb-16'>
            <h1 className='font-poppins font-semibold text-black text-2xl sm:text-3xl md:text-4xl text-center py-2 md:py-4'>Privacy Policy for Quarkfin</h1>
            <p className='text-center font-poppins text-customPurple text-xs md:text-base font-semibold'>Last update: 11/6/2024</p> 
        </div> 
        <div className='flex flex-col justify-center gap-8 xl:ml-16 lg:ml-12'>
            <div className='flex flex-col justify-center gap-2'>
                <h1 className='text-xl md:text-2xl font-semibold'>Introduction</h1>
                <p className='text-sm md:text-base'>Welcome to Quarkfin! We priortize of our users and are committed to protecting any personal information you provide. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website at
                    <Link to="#">
                        <span className='cursor-pointer text-customPurple hover:text-purple-800 font-semibold'> quarkfin.ai.</span>
                    </Link>
                </p>
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <h1 className='text-xl md:text-2xl font-semibold'>Information We Collect</h1>
                <p className='text-sm md:text-base'>We collect two types of information:</p>
                <div className='flex flex-row gap-2 items-start'>
                    <span className='border border-black rounded-full p-0.5 bg-black md:mt-2.5 mt-2 '></span>
                    <p className='text-sm md:text-base'><span className='text-sm md:text-base font-semibold'>Personal Information:</span> Information that identifies you personally, such as your
                        name, email address, and contact information, if you voluntarily provide it.
                    </p>    
                </div>   
                <div className='flex flex-row gap-2 items-start'>
                    <span className='border border-black rounded-full p-0.5 bg-black md:mt-2.5 mt-2 '></span>
                    <p className='text-sm md:text-base'><span className='text-sm md:text-base font-semibold'>Non-Personal Information: </span> 
                        Information that does not directly identify you, such as your IP address, browser type, and browsing behavior on our site.
                    </p>
                </div>
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <h1 className='text-xl md:text-2xl font-semibold'>How We Use Your Information</h1>
                <p className='text-sm md:text-base'>We use the information we collect to:</p>
                <div className='flex flex-row gap-2 items-start'>
                    <span className='border border-black rounded-full p-0.5 bg-black md:mt-2.5 mt-2 '></span>
                    <p className='text-sm md:text-base'> 
                        Improve our website's functionality and user experience
                    </p>    
                </div> 
                <div className='flex flex-row gap-2 items-start'>
                    <span className='border border-black rounded-full p-0.5 bg-black md:mt-2.5 mt-2 '></span>
                    <p className='text-sm md:text-base'> 
                        Respond to inquiries, comments, and requests
                    </p>    
                </div> 
                <div className='flex flex-row gap-2 items-start'>
                    <span className='border border-black rounded-full p-0.5 bg-black md:mt-2.5 mt-2 '></span>
                    <p className='text-sm md:text-base'> 
                        Analyze usage trends to enhance our services
                    </p>    
                </div> 
                <div className='flex flex-row gap-2 items-start'>
                    <span className='border border-black rounded-full p-0.5 bg-black md:mt-2.5 mt-2 '></span>
                    <p className='text-sm md:text-base'> 
                        Protect our website from misuse or unauthorized access
                    </p>    
                </div>   
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <h1 className='text-xl md:text-2xl font-semibold'>Cookies and Tracking Technologies</h1>
                <p className='text-sm md:text-base'>
                We may use cookies, web beacons, and similar tracking technologies to monitor
                activity on our site, enhance user experience, and personalize content. You may
                control the use of cookies through your browser settings; however, disabling cookies
                may affect certain functionalities of the site.
                </p>
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <h1 className='text-xl md:text-2xl font-semibold'>Third-Party Services</h1>
                <p className='text-sm md:text-base'>
                We may share your information with trusted third-party providers to facilitate our
                services. These providers are only permitted to access your information as necessary
                to perform tasks on our behalf and are obligated not to disclose or use it for any other
                purpose.
                </p>
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <h1 className='text-xl md:text-2xl font-semibold'>Security of Your Information</h1>
                <p className='text-sm md:text-base'>
                We take reasonable steps to protect your information from unauthorized access or
                disclosure. However, no method of transmission over the internet is 100% secure, so
                we cannot guarantee absolute security.
                </p>
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <h1 className='text-xl md:text-2xl font-semibold'>Links to Other Websites</h1>
                <p className='text-sm md:text-base'>
                Our website may contain links to third-party sites. We are not responsible for the
                privacy practices or content of these external sites. We encourage you to review the
                privacy policies of any third-party sites you visit.
                </p>
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <h1 className='text-xl md:text-2xl font-semibold'>Changes to This Privacy Policy</h1>
                <p className='text-sm md:text-base'>
                We may update our Privacy Policy from time to time. Any changes will be posted on
                this page, and we recommend you review it periodically for any updates.
                </p>
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <h1 className='text-xl md:text-2xl font-semibold'>Contact Us</h1>
                <p className='text-sm md:text-base'>If you have any questions or concerns about this Privacy Policy, please contact us at
                    <Link to="#">
                        <span className='cursor-pointer text-customPurple hover:text-purple-800 font-semibold'> contact@quarkfin.ai.</span>
                    </Link>
                </p>
            </div>
        </div>
     </div>
    </>
  )
}

export default PrivacyPolicy