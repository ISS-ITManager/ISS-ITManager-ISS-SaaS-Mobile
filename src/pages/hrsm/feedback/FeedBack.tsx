import React, { useState } from 'react';
import MasterComponent from '../../../components/layouts/MasterComponent';
import TitleComponent from '../../../components/layouts/TitleComponent';

const Feedback: React.FC = () => {
    const [feedbackType, setFeedbackType] = useState('suggestion');
    const [details, setDetails] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // HardCoded for the meantime
        const feedbackData = {
            type: feedbackType,
            details,
            email,
        };

        console.log('Feedback submitted:', feedbackData);

        setDetails('');
        setEmail('');
        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
        }, 5000);
    };

    return (
        <MasterComponent page="feedback">
            <TitleComponent title="Submit Suggestion or Complaint" />
            <div className="container mt-4">
                {submitted && (
                    <div className="alert alert-success" role="alert">
                        Your feedback has been submitted successfully!
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="feedbackType" className="form-label">Feedback Type</label>
                        <select
                            id="feedbackType"
                            className="form-select"
                            value={feedbackType}
                            onChange={(e) => setFeedbackType(e.target.value)}
                        >
                            <option value="suggestion">Suggestion</option>
                            <option value="complaint">Complaint</option>
                        </select>
                    </div>

                    {/* Details Text Area */}
                    <div className="mb-3">
                        <label htmlFor="details" className="form-label">Details</label>
                        <textarea
                            id="details"
                            className="form-control"
                            rows={5}
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            placeholder="Provide your suggestions or complaints here..."
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Your Email (optional)</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email (optional)"
                        />
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Submit Feedback
                        </button>
                    </div>
                </form>
            </div>
        </MasterComponent>
    );
};

export default Feedback;
