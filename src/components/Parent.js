import React, { useState } from "react";
import Child from './Child';

function Parent() {
    const [feedBack, setfeedBack] = useState([]);
    const [visibility, setvisibility] = useState(false);

    const toggleVisibility = () => {
        setvisibility(!visibility);
    };

    const feedbackData = (Data)=>{
        setfeedBack(Data)
    }

    return (
        <>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleVisibility}>
                Submit Feedback
            </button>

            {feedBack.map((value, key) => (
                <div key={key} className="max-w-md mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg">
                    <div className="text-center text-gray-700 font-bold mb-2">
                        ID: {key}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name:</label>
                        <div>{value.Username}</div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email:</label>
                        <div>{value.email}</div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="feedback">Feedback:</label>
                        <div>{value.feedback}</div>
                    </div>
                </div>
            ))}

            {visibility && <Child feedBack={feedbackData} visibility={toggleVisibility} />}
        </>
    );
}

export default Parent;
