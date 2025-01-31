import React from "react";
import "swiper/css";
import "../../assets/css/partners.css"

const partners = [
  { id: 1, logo: "https://i.ibb.co/RT95n7xf/Nepal-Remit.png" },
  { id: 2, logo: "https://i.ibb.co/twV0gWnZ/IA1-Snm-Dimd0-PJow-JZpu-WE46b7-Uj-ES7e-Yzk-SBIh6y-Ozf0-EOe-FU6q-Mz-D7g61njtuf-Cgtut-T-Xs-U45p2z5-HIj.png" },
  { id: 3, logo: "https://i.ibb.co/ds2xhySH/Mahalaxmi.jpg" },
  { id: 4, logo: "https://i.ibb.co/27cmFBhn/Jyoti-Bikash.png" },
  { id: 5, logo: "https://i.ibb.co/hxLSXtvd/Prabhu.png" },
  { id: 6, logo: "https://i.ibb.co/r2jc4XgR/28724.jpg" },
  { id: 7, logo: "https://i.ibb.co/KjHC3JrQ/GME.png" },
  { id: 8, logo: "https://i.ibb.co/svQ8m4Cy/newlogo.png" },
  { id: 9, logo: "https://i.ibb.co/gFBzpjM1/CG-Finco.png" },
  { id: 10, logo: "https://i.ibb.co/Q7W3RbjZ/city-express-logo-1.png" },
  { id: 11, logo: "https://i.ibb.co/kskZ0z73/images-q-tbn-ANd9-Gc-RFi-J7-CBj1-Lu-Ng5l2gd7-UE8-NCxi-ZVEl4-UHyb-A-s.png" },
  { id: 12, logo: "https://i.ibb.co/TBDPGwk6/Global-IME-Bank-l-Tv6-M0pb-HL.png" },
  { id: 13, logo: "https://i.ibb.co/rKPQZ6Yf/HBL-Logo.jpg" },
  { id: 14, logo: "https://i.ibb.co/xShK02Bc/Hulas-remmitance-logo.jpg" },
  { id: 15, logo: "https://i.ibb.co/fYVDnF6d/912c62617b5979a36b5cd16cc6d0932793aa887e.jpg" },
  { id: 16, logo: "https://i.ibb.co/MFr4Q6p/ime-logo-2378920a.webp" },
  { id: 17, logo: "https://i.ibb.co/WWj84vv6/logo-light.png" },
  { id: 18, logo: "https://i.ibb.co/0pqyKjGh/Prabhu-logo-1.png" },
  { id: 19, logo: "https://i.ibb.co/RkR8HfnK/v6-IDg-Loy-ATd-GYqlv-OXDM.png" },
  { id: 20, logo: "https://i.ibb.co/tw8P8Pxp/Logo-Dc-Ir4uag.png" },
  { id: 21, logo: "https://i.ibb.co/chKNF1p9/Ysy-O17-Kd90i-Sfhs-Rswj-Ydx-HN25-GS0-MAh-Wbnltk0-UIG6.png" },
  { id: 22, logo: "https://i.ibb.co/Kv1FQkR/united-remit.png" },
  { id: 23, logo: "https://i.ibb.co/Vc6CHw1T/new-logo.jpg" },
  { id: 24, logo: "https://i.ibb.co/xtz47vG4/logo.png" },
  { id: 25, logo: "https://i.ibb.co/7Jqm1Mdn/Logo.png" },
  { id: 26, logo: "https://i.ibb.co/Dfq4X0TT/becdb806252d1cd9538739fcfc339427-148.jpg" },
  { id: 27, logo: "https://i.ibb.co/5tT5L60/ctzbank-international-limited-cover-e-2147483647-v-beta-t-e96-Hiv-Nb-Fwc-ZJ0-CQCBy-R-OKta-HRSx-Uvr-C.jpg" },
  { id: 28, logo: "https://i.ibb.co/HDJZr3z6/logo-dark.png" },
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
