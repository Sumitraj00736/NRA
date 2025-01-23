import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="h-auto  bg-[rgba(0,11,68,1)] flex flex-col md:flex-row gap-8 justify-between text-[#eae7ef] px-4 md:px-[126px] py-4 md:py-[24px] text-[12px] md:text-[14px]">
      <div className="flex flex-col justify-center items-center gap-1 md:items-start w-full md:w-auto">
        <img className="w-[186px] mb-2" src="/assets/image 35.png" alt="Logo" />
        <p className="text-center md:text-left">
          Copyright&copy; 2024 zeenoPay.
        </p>
        <p className="text-[#333] text-[10px] md:text-[12px] text-center md:text-left">
          All rights reserved
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-1 md:items-start w-full md:w-auto">
        <Link className="text-center md:text-left">Get in touch</Link>
        <Link className="text-center md:text-left">support@zeenopay.com</Link>
      </div>

      <div className="flex flex-col justify-center items-center gap-2 md:items-start w-full md:w-auto">
        <Link className="text-center md:text-left">Privacy Policy</Link>
        <Link className="text-center md:text-left">Cookies Policy</Link>
        <Link className="text-center md:text-left">Terms of Use</Link>
      </div>
    </div>
  );
}

export default Footer;
