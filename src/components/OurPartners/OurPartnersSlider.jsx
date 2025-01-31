import React from "react";
import "swiper/css";
import "../../assets/css/partners.css"

const partners = [
  { id: 1, logo: "https://i.ibb.co/RT95n7xf/Nepal-Remit.png" },
  { id: 2, logo: "https://i.ibb.co/0pjB7m4w/Civil-Bank.png" },
  { id: 3, logo: "https://i.ibb.co/ds2xhySH/Mahalaxmi.jpg" },
  { id: 4, logo: "https://i.ibb.co/27cmFBhn/Jyoti-Bikash.png" },
  { id: 5, logo: "https://i.ibb.co/hxLSXtvd/Prabhu.png" },
  { id: 6, logo: "https://i.ibb.co/1fv3Mj1n/Sunrise.webp" },
  { id: 7, logo: "https://i.ibb.co/KjHC3JrQ/GME.png" },
  { id: 8, logo: "https://i.ibb.co/0j323MRc/century-bank-full-logo.jpg" },
];


export default function OurPartnersSlider() {
  return (
    <div className="w-full max-w-7xl overflow-hidden py-10 mx-auto">
      <div className="flex whitespace-nowrap animate-scroll">
        {[...partners, ...partners].map((partner, index) => (
          <div key={index} className="flex-shrink-0 w-40 mx-5">
            <img src={partner.logo} alt="Partner Logo" className="h-24 w-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
