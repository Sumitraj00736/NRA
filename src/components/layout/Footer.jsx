import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
        <img
            src="http://www.nra.org.np/assets/image/nra-logo.png"
            alt="Nepal Remitters Association"
            className="w-full h-20"
          />

        </div>
        
        <div className="mt-6 md:mt-0 flex flex-col gap-2 text-sm">
          <h3 className="font-bold text-2xl">Menu Links</h3>
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">News and Updates</a>
          <a href="#" className="hover:text-blue-500">Message From Central Bank</a>
          <a href="#" className="hover:text-blue-500">Remittance Overview in Nepal</a>
          <a href="#" className="hover:text-blue-500">Members</a>
        </div>

        <div className="mt-6 md:mt-0 flex flex-col gap-2 text-sm">
          <h3 className="font-bold text-2xl">Address</h3>
          <p>📍 Kamalpokhari, Kathmandu, Nepal</p>
          <p>📞 +977-1-433166</p>
          <p>📧 contact@nra.org.np</p>
          <div className="mt-6 md:mt-0 flex flex-col gap-2 text-sm">
          <h3 className="font-bold text-xl">Get In Touch</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-500"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-500"><FaInstagram /></a>
          </div>
        </div>
        </div>

        
      </div>
      
      <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center border-t pt-4 text-xs text-gray-600">
        <p>&copy; 2021 Nepal Remitters Association | All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-blue-500">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500">Terms & Condition</a>
        </div>
      </div>
    </footer>
  );
}
