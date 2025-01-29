import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";


export default function Footer() {

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 px-6 md:px-12 lg:px-20 font-poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <img className="w-32 md:w-48" src="http://www.nra.org.np/assets/image/nra-logo.png" alt="Logo" />
          <p className="mt-4 text-sm">
            We take the time to understand your unique needs & goals, offering tailored advice that drives real results.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="text-xl cursor-pointer hover:text-white" />
            <FaTwitter className="text-xl cursor-pointer hover:text-white" />
            <FaLinkedinIn className="text-xl cursor-pointer hover:text-white" />
            <FaYoutube className="text-xl cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-white text-lg font-semibold">Products</h3>
          <ul className="mt-4 space-y-4 ">
            {['Tailorfit', 'InnoFlow', 'Data Forge', 'Vision Edge', 'Flexi Build'].map((product) => (
              <li key={product} className="hover:text-white cursor-pointer text-sm">{product}</li>
            ))}
          </ul>
        </div>

        {/* Location & Contact */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-white text-lg font-semibold">Address</h3>
            <p className="mt-4 text-sm">Kamalpokhari</p>
            <p className="mt-2 text-sm">Kathmandu, Nepal</p>
          </div>

            <div>
            <h4 className="text-white font-semibold  text-lg">Get In Touch</h4>
          <p className="mt-4 text-sm">contact@nra.org.np</p>
          <p className="mt-2 text-sm font-bold text-white">+977-9817672867</p>
            </div>
          
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-lg font-semibold">Subscribe Newsletter</h3>
          <p className="mt-4 text-sm">Subscribe to our newsletter to get more updates</p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex mt-4">
            <div className="relative flex-1">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-900" />
              <input
                type="email"
                {...register("email")}
                placeholder="Email Address"
                className="w-full px-10 py-2 rounded-l-lg text-black focus:outline-none text-sm"
              />
            </div>
            <button type="submit" className="px-4 py-2 text-sm rounded-r-lg text-white bg-blue-900 hover:bg-orange-400 focus:outline-none">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between text-sm ">
        <p>&copy; 2021 <span className="text-white font-semibold">Nepal Remitters Association</span> - All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0  ">
          <p className="hover:text-white cursor-pointer">Home</p>
          <p className="hover:text-white cursor-pointer">About</p>
          <p className="hover:text-white cursor-pointer">Privacy Policy</p>
          <p className="hover:text-white cursor-pointer">Contact</p>
        </div>

      </div>
    </footer>
  );
}
