import React from "react";

const HeroPage = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Pharmacy Inventory Management Made Easy
                    </h1>
                    <p className="text-xl text-gray-700">
                        Our system streamlines pharmacy operations, so you can focus on what
                        matters most – providing quality care to your patients.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-8 rounded">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroPage;
