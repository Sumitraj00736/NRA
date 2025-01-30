import React from "react";
import "swiper/css";
import "../../assets/css/partners.css"

const partners = [
  { id: 1, logo: "https://nra.org.np/storage/images/partner/HIepzlu0my9YnWNxjLj3MWcAMf3SNoBdfCPbzdfU.png" },
  { id: 2, logo: "https://nra.org.np/storage/images/partner/6uJBiTyCh19Zcb7Z5nXpjQPUXXEri8q4UCo6Iw9m.png" },
  { id: 3, logo: "https://nra.org.np/storage/images/partner/51iIcqRxR1gBpw9c7RoM1hM8CuYyU41tkyZbY3kK.jpeg" },
  { id: 4, logo: "https://nra.org.np/storage/images/partner/PvcxPwlR1qvnd13vrKRlrO4rawrgZ6xXs9B8EA0H.png" },
  { id: 5, logo: "https://nra.org.np/storage/images/partner/byka3rhh7jMTfINQuwzYf1m5a6XbJD8wP6Qzvosm.png" },
  { id: 6, logo: "https://nra.org.np/storage/images/partner/erWgu7SqsvIndx4pY1EnAHaoYgVsB3U3PgWrrSAR.png" },
  { id: 7, logo: "https://nra.org.np/storage/images/partner/MRoLViTRbAUWrVmghW8EEetwImvismuwth1D0T1B.png" },
  { id: 8, logo: "https://nra.org.np/storage/images/partner/DeH4CzeSTZZ7FrhpqkViqx5QlbugmWe0ICMOYt3l.png" },
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
