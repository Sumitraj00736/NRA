import React from "react";
import { useParams } from "react-router-dom";

const items = [
    {
        imgSrc: "https://images.unsplash.com/photo-1611516491426-03025e6043c8?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Title-1",
        description: "Detailed description for Title 1.",
    },
    {
        imgSrc: "https://images.unsplash.com/photo-1611516491426-03025e6043c8?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Title-2",
        description: "Detailed description for Title 2.",
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
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-semibold text-customBlue mb-4">{article.title}</h1>
            <img src={article.imgSrc} alt={article.title} className="w-full h-80 object-cover rounded-lg mb-4" />
            <p className="text-lg text-gray-700">{article.description}</p>
        </div>
    );
}

export default NewsArticle;
