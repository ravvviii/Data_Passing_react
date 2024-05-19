import React, { useState } from "react";

function Child({ feedBack, reset, visibility }) {
    const [feedbacks, setfeedbacks] = useState({
        Username: "",
        email: "",
        feedback: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setfeedbacks((prevFeedback) => ({
            ...prevFeedback,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        feedBack(feedbacks);
        visibility();
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Feedback Form</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name:</label>
                    <input aria-label="Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Username" type="text" placeholder="Enter your name" required onChange={handleChange} value={feedbacks.Username}/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email:</label>
                    <input aria-label="Email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" value={feedbacks.email} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="feedback">Feedback:</label>
                    <textarea aria-label="Feedback" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="feedback" rows="5" placeholder="Enter your feedback" value={feedbacks.feedback} onChange={handleChange} required></textarea>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Child;
