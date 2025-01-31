import React from "react";
import { useParams } from "react-router-dom";
import { HiCalendarDateRange } from "react-icons/hi2";

const items = [
    {
        imgSrc: "https://i.ibb.co/HRyynjY/3.png",
        title: "19th Annual General Meeting of Nepal Remitters Association",
        description: "19th Annual General Meeting of Nepal Remitters Association was held at Shanker Hotel in Kathmandu.The annual general meeting was presided over by the president of the association, Mr. Chandra Tondon, while the welcome remarks were made by the Immediate Past president, Suman Pokharel, Former President Diwakar Thapa expressed his gratitude to the members and other visiting guests.",
        date: "Poush 18, 2081",
    },
    {
        imgSrc: "https://i.ibb.co/99c0zMc1/nrb-photo.jpg",
        title: "नेपाल राष्ट्र बैंकले बैंकिङ प्रणालीबाट आज फेरि रु. ३० अर्ब तान्दै",
        description: "काठमाडौं । बैंकिङ प्रणालीमा अधिक तरलता थुप्रिएपछि नेपाल राष्ट्र बैंकले लगातार निक्षेप संकलन उपकरण प्रयोग गर्दै पैसा खिचिरहेको छ। केन्द्रीय बैंकले आज माघ १५ गते फेरि बैंकिङ प्रणालीबाट एकैपटक ३० अर्ब रुपैयाँ तान्ने भएको छ। अधिक तरलता व्यवस्थापन गर्न केन्द्रीय बैंकले निक्षेप संकलन उपकरणको प्रयोग गर्दै बैंकिङ प्रणालीबाट आज फेरि पैसा खिच्न लागेको हो। यसका लागि आज दिउँसो २ बजे बोलकबोल हुने राष्ट्र बैंकले जनाएको छ। निक्षेप दिन चाहने बैंक तथा वित्तीय संस्थाले घटीमा १० करोड रुपैयाँ र बढीमा ५ करोड रुपैयाँले भाग गर्दा निःशेष भाग जाने गरी कुल आह्वान रकमसम्म बोलकबोल गर्न सक्नेछन्। निक्षेप संकलनको बोलकबोल ब्याजदरमा गर्नुपर्नेछ भने बहुब्याजदरमा पनि बहुबोलकबोल गर्न सकिने राष्ट्र बैंकले जनाएको छ। निक्षेप संकलन उपकरणको बोलकबोलमा ‘क’, ‘ख’ र ‘ग’ वर्गका बैंक तथा वित्तीय संस्थामात्र सहभागी हुन पाउनेछन्।",
        date: "Poush 18, 2081",
    },
    {
        imgSrc: "https://i.ibb.co/Kj5VNHXM/REmit-MOU.jpg",
        title: "राष्ट्रिय वाणिज्य बैंक र निओ रेमिट तथा युनाईटेड रेमिट बीच भुक्तानी सम्झौता",
        description: "काठमाडौं। विश्वका जुनसुकै देशबाट पनि निओ रेमिट तथा युनाईटेड रेमिटबाट पठाएको वैदेशिक रेमिटान्स अब राष्ट्रिय वाणिज्य बैंक लिमिटेडका ७७ जिल्लामा रहेका २९४ वटा शाखा कार्यालयबाट भुक्तानी हुने भएको छ । दूर दराजमा रहेका ग्राहकहरुले पनि यो सुबिधा प्राप्त गर्न सक्नेछन । साथै उक्त रेमिटबाट सोझै खातामा जम्मा हुने गरी पठाएको रकम पनि भुक्तानी प्राप्तकर्ताको खातामा जम्मा हुनेछ । राष्ट्रिय वाणिज्य बैंक लिमिटेड र निओ मनि ट्रान्सफर प्रा।लि।९नियो रेमिट० तथा युनाइटेड रेमिट प्रा।लि बीच यस्तो सम्झौता भएको हो ।",
        date: "Asoj 12, 2081",
    },
    
    {
        imgSrc: "https://i.ibb.co/gpgCQzL/remitance.jpg",
        title: "एक खर्ब ३६ अर्ब विप्रेषण देशभित्र भित्रियो",
        description: "काठमाडौँ । चालु आर्थिक वर्षको पहिलो महिनामा रु एक खर्ब ३६ अर्ब ९३ करोडको विप्रेषण देशभित्र भित्रिएको छ । नेपाल राष्ट्र बैंकले  सार्वजनिक गरेको विवरण अनुसार, समीक्षा अवधिमा विप्रेषण आप्रवाह १८ प्रतिशतले वृद्धि भएको हो ।",
        date: "Asoj 11, 2081",
    },
];

const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/[\s\W-]+/g, "-");
};

function NewsArticle() {
    const { title } = useParams(); 

    // Find the matching article
    const article = items.find(item => slugify(item.title) === title);

    if (!article) {
        return <h1 className="text-center text-2xl mt-10">Article not found</h1>;
    }

    return (    
        <div className="max-w-4xl mx-auto px-6 py-12 font-poppins">
            <h1 className="text-4xl font-semibold text-customBlue mb-4">{article.title}</h1>
            <div className="flex items-center gap-2 mb-4">
                <HiCalendarDateRange className="w-6 h-6"/>
                <p className=" text-xs md:text-base font-semibold">{article.date}</p>
            </div>
            <img src={article.imgSrc} alt={article.title} className="w-full h-80 object-cover rounded-lg mb-4" />
            <p className="text-lg text-gray-700">{article.description}</p>
        </div>
    );
}

export default NewsArticle;
