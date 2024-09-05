import React, { useState } from 'react';
import MasterComponent from '../../../components/layouts/MasterComponent';
import TitleComponent from '../../../components/layouts/TitleComponent';

const FAQS = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeFAQ, setActiveFAQ] = useState(null);

    // Updated articles content relevant to Software and Hardware
    const articles = {
        "Software": [
            {
                question: "How to Install Company Software",
                answer: "Follow these steps to install the company-provided software on your computer.",
                steps: [
                    "Step 1: Download the installer from the company portal.",
                    "Step 2: Run the installer and follow the on-screen instructions.",
                    "Step 3: Restart your computer after installation."
                ],
                attachments: [
                    { name: "Software_Installation_Guide.pdf", url: "/attachments/Software_Installation_Guide.pdf" }
                ]
            },
            {
                question: "Troubleshooting Software Crashes",
                answer: "If your software crashes, try these troubleshooting steps.",
                steps: [
                    "Step 1: Check for updates and install any available updates.",
                    "Step 2: Restart the software and try again.",
                    "Step 3: If the issue persists, contact IT support with the error details."
                ],
                attachments: [
                    { name: "Troubleshooting_Software_Crashes.pdf", url: "/attachments/Troubleshooting_Software_Crashes.pdf" }
                ]
            }
        ],
        "Hardware": [
            {
                question: "Requesting New Hardware",
                answer: "To request new hardware, follow these instructions.",
                steps: [
                    "Step 1: Log into the IT Request System.",
                    "Step 2: Select 'Request New Hardware'.",
                    "Step 3: Choose the type of hardware you need and submit your request."
                ],
                attachments: [
                    { name: "Hardware_Request_Form.pdf", url: "/attachments/Hardware_Request_Form.pdf" }
                ]
            },
            {
                question: "Handling Hardware Repairs",
                answer: "If you need to repair hardware, use the following procedure.",
                steps: [
                    "Step 1: Report the hardware issue through the IT support portal.",
                    "Step 2: Provide detailed information about the problem.",
                    "Step 3: Schedule a repair appointment with the IT team."
                ],
                attachments: [
                    { name: "Hardware_Repair_Guide.pdf", url: "/attachments/Hardware_Repair_Guide.pdf" }
                ]
            }
        ],
        "Others": [
            {
                question: "How to Access Remote Work Tools",
                answer: "To access remote work tools, follow these steps.",
                steps: [
                    "Step 1: Log into the remote work portal.",
                    "Step 2: Use your company credentials to access tools and resources.",
                    "Step 3: If you have trouble logging in, contact IT support."
                ],
                attachments: [
                    { name: "Remote_Work_Access_Guide.pdf", url: "/attachments/Remote_Work_Access_Guide.pdf" }
                ]
            },
            {
                question: "Booking IT Training Sessions",
                answer: "Book IT training sessions through the following process.",
                steps: [
                    "Step 1: Visit the IT Training Portal.",
                    "Step 2: Select 'Book Training Session'.",
                    "Step 3: Choose a session from the available options and confirm your booking."
                ],
                attachments: [
                    { name: "Training_Session_Booking_Guide.pdf", url: "/attachments/Training_Session_Booking_Guide.pdf" }
                ]
            }
        ]
    };

    const toggleFAQ = (category, index) => {
        const faqKey = `${category}-${index}`;
        setActiveFAQ(activeFAQ === faqKey ? null : faqKey);
    };

    const filteredArticles = selectedCategory ? articles[selectedCategory].filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ) : [];

    return (
        <MasterComponent page='knowledge-database'>
            <TitleComponent title="Knowledge Database" />
            <div className="container mt-4">
                {/* Search Input */}
                <div className="row mb-4">
                    <div className="col-12">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Categories Section */}
                <div className="row">
                    <div className="col-md-4">
                        <div className="list-group">
                            {Object.keys(articles).map((category, index) => (
                                <button
                                    key={index}
                                    className={`list-group-item list-group-item-action ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Articles Display Section */}
                    <div className="col-md-8">
                        {selectedCategory && (
                            <>
                                <h4 className="mb-4">{selectedCategory}</h4>
                                {filteredArticles.length === 0 && (
                                    <p>No articles found for your search.</p>
                                )}
                                {filteredArticles.map((faq, index) => (
                                    <div key={index} className="mb-3">
                                        <button
                                            className="btn btn-link text-decoration-none text-start d-flex justify-content-between align-items-center w-100"
                                            onClick={() => toggleFAQ(selectedCategory, index)}
                                            aria-expanded={activeFAQ === `${selectedCategory}-${index}`}
                                        >
                                            <span>{faq.question}</span>
                                            <i className={`fas ${activeFAQ === `${selectedCategory}-${index}` ? 'fa-minus' : 'fa-plus'}`} />
                                        </button>
                                        {activeFAQ === `${selectedCategory}-${index}` && (
                                            <div className="collapse show">
                                                <p>{faq.answer}</p>
                                                <h6>Steps:</h6>
                                                <ul>
                                                    {faq.steps.map((step, idx) => (
                                                        <li key={idx}>{step}</li>
                                                    ))}
                                                </ul>
                                                {faq.attachments && faq.attachments.length > 0 && (
                                                    <div className="mt-2">
                                                        <h6>Attachments:</h6>
                                                        <ul className="list-unstyled">
                                                            {faq.attachments.map((attachment, i) => (
                                                                <li key={i}>
                                                                    <a href={attachment.url} download className="text-primary">
                                                                        <i className="fas fa-paperclip"></i> {attachment.name}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </MasterComponent>
    );
};

export default FAQS;
