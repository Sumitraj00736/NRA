import React from 'react';

const MemberList = () => {
  const partners = [
    { id: 1, logo: "https://i.ibb.co/RT95n7xf/Nepal-Remit.png", title: "Nepal Remit International  Pvt.Ltd" },
    { id: 2, logo: "https://i.ibb.co/twV0gWnZ/IA1-Snm-Dimd0-PJow-JZpu-WE46b7-Uj-ES7e-Yzk-SBIh6y-Ozf0-EOe-FU6q-Mz-D7g61njtuf-Cgtut-T-Xs-U45p2z5-HIj.png", title: "Advance Money Transfer  Pvt.Ltd." },
    { id: 3, logo: "https://i.ibb.co/ds2xhySH/Mahalaxmi.jpg", title: "Mahalaxmi Bikash Bank Ltd." },
    { id: 4, logo: "https://i.ibb.co/27cmFBhn/Jyoti-Bikash.png", title: "Jyoti Bikas Bank Ltd." },
    { id: 5, logo: "https://i.ibb.co/hxLSXtvd/Prabhu.png", title: "Prabhu Bank.Ltd ." },
    { id: 6, logo: "https://i.ibb.co/tw8P8Pxp/Logo-Dc-Ir4uag.png", title: "Surya Remit Pvt.Ltd." },
    { id: 7, logo: "https://i.ibb.co/HDJZr3z6/logo-dark.png", title: "MyPay Money Transfer Pvt. Ltd." },
    { id: 8, logo: "https://i.ibb.co/svQ8m4Cy/newlogo.png", title: "CG Remit Pvt. Ltd." },
    { id: 9, logo: "https://i.ibb.co/gFBzpjM1/CG-Finco.png", title: "CG Finco Ltd." },
    { id: 10, logo: "https://i.ibb.co/Q7W3RbjZ/city-express-logo-1.png", title: "City Express Money Transfer Pvt. Ltd." },
    { id: 11, logo: "https://i.ibb.co/kskZ0z73/images-q-tbn-ANd9-Gc-RFi-J7-CBj1-Lu-Ng5l2gd7-UE8-NCxi-ZVEl4-UHyb-A-s.png", title: "Easylink Remittance Pvt. Ltd." },
    { id: 12, logo: "https://i.ibb.co/TBDPGwk6/Global-IME-Bank-l-Tv6-M0pb-HL.png", title: "Global Ime Bank Ltd." },
    { id: 13, logo: "https://i.ibb.co/rKPQZ6Yf/HBL-Logo.jpg", title: "Himalayan Bank Ltd." },
    { id: 14, logo: "https://i.ibb.co/xShK02Bc/Hulas-remmitance-logo.jpg", title: "Hulas Remittance Pvt. Ltd." },
    { id: 15, logo: "https://i.ibb.co/fYVDnF6d/912c62617b5979a36b5cd16cc6d0932793aa887e.jpg", title: "I Pay  Remit Pvt. Ltd" },
    { id: 16, logo: "https://i.ibb.co/MFr4Q6p/ime-logo-2378920a.webp", title: "IME Ltd." },
    { id: 17, logo: "https://i.ibb.co/WWj84vv6/logo-light.png", title: "Maya Remit Pvt. Ltd." },
    { id: 18, logo: "https://i.ibb.co/0pqyKjGh/Prabhu-logo-1.png", title: "Prabhu Money Transfer Pvt. Ltd." },
    { id: 19, logo: "https://i.ibb.co/RkR8HfnK/v6-IDg-Loy-ATd-GYqlv-OXDM.png", title: "Samsara Remit Pvt. Ltd." },
    { id: 20, logo: "https://i.ibb.co/r2jc4XgR/28724.jpg", title: "ATT Remit Pvt.Ltd." },
    { id: 21, logo: "https://i.ibb.co/chKNF1p9/Ysy-O17-Kd90i-Sfhs-Rswj-Ydx-HN25-GS0-MAh-Wbnltk0-UIG6.png", title: "Thamel Remit Pvt. Ltd." },
    { id: 22, logo: "https://i.ibb.co/Kv1FQkR/united-remit.png", title: "United Remit Pvt. Ltd." },
    { id: 23, logo: "https://i.ibb.co/Vc6CHw1T/new-logo.jpg", title: "Machhapuchhre Bank Ltd." },
    { id: 24, logo: "https://i.ibb.co/xtz47vG4/logo.png", title: "Muktinath Bikas Bank Ltd." },
    { id: 25, logo: "https://i.ibb.co/7Jqm1Mdn/Logo.png", title: "Goodwill Remit Pvt. Ltd." },
    { id: 26, logo: "https://i.ibb.co/Dfq4X0TT/becdb806252d1cd9538739fcfc339427-148.jpg", title: "Siddhartha Bank Ltd." },
    { id: 27, logo: "https://i.ibb.co/5tT5L60/ctzbank-international-limited-cover-e-2147483647-v-beta-t-e96-Hiv-Nb-Fwc-ZJ0-CQCBy-R-OKta-HRSx-Uvr-C.jpg", title: "Citizens Bank International Ltd." },
  ];

  return (
    <div className="max-w-7xl w-full mx-auto py-8 px-4 font-poppins">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center justify-between group"
          >
            <div className="w-full h-48 relative mb-4">
              <img
                src={partner.logo}
                alt={partner.title}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-center text-sm sm:text-base font-semibold text-gray-800 line-clamp-2">
              {partner.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberList;