import React from "react";

const AboutUs = () => {
    return (
        <div className="bg-purple-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        About Our Company
                    </h2>
                    <p className="text-gray-500 text-lg mb-8">
                        At Pharmacy Inventory Solutions, we understand the challenges of
                        managing inventory in a pharmacy setting. That's why we've developed
                        a comprehensive inventory management system that makes it easy to
                        track inventory in real-time, manage orders, and receive automated
                        alerts for low stock.
                    </p>
                    <p className="text-gray-500 text-lg mb-8">
                        With over 10 years of experience in the pharmacy industry, we're
                        dedicated to providing solutions that help pharmacies of all sizes
                        streamline their operations and improve their bottom line.
                    </p>
                    <p className="text-gray-500 text-lg mb-8">
                        Contact us today to learn more about how our system can benefit your
                        pharmacy.
                    </p>
                    <a
                        href="#"
                        className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutUs