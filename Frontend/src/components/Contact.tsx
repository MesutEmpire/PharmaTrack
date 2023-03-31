import React from "react";
import { ReactComponent as PhoneIcon } from "../icons/phone-icon.svg";
import { ReactComponent as EmailIcon } from "../icons/email-icon.svg";
import { ReactComponent as SocialIcon } from "../icons/social-icon.svg";

const Contact = () => {
    return (
        <div className="bg-green-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Contact Us
                    </h2>
                    <p className="text-gray-500 text-lg mb-8">
                        We're always happy to hear from you! You can reach us by phone,
                        email, or social media using the links below:
                    </p>
                    <div className="flex items-center mb-8">
                        <PhoneIcon className="w-8 h-8 mr-4" />
                        <p className="text-gray-500 text-lg">
                            <a href="tel:+1234567890">123-456-7890</a>
                        </p>
                    </div>
                    <div className="flex items-center mb-8">
                        <EmailIcon className="w-8 h-8 mr-4" />
                        <p className="text-gray-500 text-lg">
                            <a href="mailto:info@pharmacyinventorysolutions.com">
                                info@pharmacyinventorysolutions.com
                            </a>
                        </p>
                    </div>
                    <div className="flex items-center mb-8">
                        <SocialIcon className="w-8 h-8 mr-4" />
                        <p className="text-gray-500 text-lg">
                            <a
                                href="https://www.facebook.com/pharmacyinventorysolutions"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Facebook
                            </a>{" "}
                            |{" "}
                            <a
                                href="https://twitter.com/pharmacyinventorysolutions"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Twitter
                            </a>{" "}
                            |{" "}
                            <a
                                href="https://www.linkedin.com/company/pharmacy-inventory-solutions"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact