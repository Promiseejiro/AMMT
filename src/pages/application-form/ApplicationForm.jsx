import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Resend } from "resend";

const resend = new Resend("re_fgFeEdCa_CpDdbjdSC5t8ksK3iRnZ4kvF");

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        title: "Mr.",
        surname: "CHUKWUEMEKA",
        firstname: "EBERE",
        otherNames: "ONYEMALU",
        gender: "Male",
        phoneNumber: "08033092996",
        alternatePhone: "09123704063",
        email: "emekeabere1@yahoo.com",
        contactAddress: "Flat 3, B43, Zone 3, Games Village Estate Abuja",
        natureOfJob: "Owned",
        jobDesignation: "Managing Director",
        highestQualification: "B. Engr (Electrical/Electron)",
        institutionOfIssue: "Enugu State University of Science",
        highestCmd: "NCMD",
        agree: null, // To track user agreement (Yes/No)
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Logic for sending the email
            alert("Email sent successfully!");
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Failed to send email. Please try again.");
        }
    };
    
    return (
        <div className="bg-gray-900 min-h-screen flex flex-col items-center p-6 text-gray-100">
            <div className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-3xl">
                <Link
                    to="/"
                    className="mb-6 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                >
                    Back to Home
                </Link>
                <h1 className="text-2xl font-bold mb-6 text-center">Membership Form</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Personal Information */}
                    <div>
                        <label className="block font-medium">Title:</label>
                        <div className="flex space-x-4 mt-2">
                            {["Mr.", "Mrs.", "Ms.", "Miss.", "Dr.", "Prof.", "Chief", "Hajia", "Alhaji"].map((title) => (
                                <label key={title} className="flex items-center">
                                    <input
                                        type="radio"
                                        name="title"
                                        value={title}
                                        checked={formData.title === title}
                                        onChange={handleInputChange}
                                        className="mr-2 bg-gray-700 border-gray-600"
                                    />
                                    {title}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium">Surname:</label>
                            <input
                                type="text"
                                name="surname"
                                value={formData.surname}
                                onChange={handleInputChange}
                                className="w-full border border-gray-600 bg-gray-700 rounded-md p-2 text-gray-100"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Firstname:</label>
                            <input
                                type="text"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleInputChange}
                                className="w-full border border-gray-600 bg-gray-700 rounded-md p-2 text-gray-100"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block font-medium">Other Names:</label>
                        <input
                        type="text"
                        name="otherNames"
                        value={formData.otherNames}
                        onChange={handleInputChange}
                        className="w-full border border-gray-600 bg-gray-700 rounded-md p-2 text-gray-100"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                        <label className="block font-medium">Gender:</label>
                        <input
                            type="text"
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            className="w-full border border-gray-600 bg-gray-700 rounded-md p-2 text-gray-100"
                        />
                        </div>
                        <div>
                        <label className="block font-medium">Phone Number:</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className="w-full border border-gray-600 bg-gray-700 rounded-md p-2 text-gray-100"
                        />
                        </div>
                    </div>

                    <div>
                        <label className="block font-medium">Alternate Phone:</label>
                        <input
                        type="text"
                        name="alternatePhone"
                        value={formData.alternatePhone}
                        onChange={handleInputChange}
                        className="w-full border border-gray-600 bg-gray-700 rounded-md p-2 text-gray-100"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Email:</label>
                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border border-gray-600 bg-gray-700 rounded-md p-2 text-gray-100"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Contact Address:</label>
                        <textarea
                        name="contactAddress"
                        value={formData.contactAddress}
                        onChange={handleInputChange}
                        className="w-full border border-gray-600 bg-gray-700 rounded-md p-2 text-gray-100"
                        />
                    </div>
                    {/* Declaration */}
                    <div>
                        <h2 className="text-xl font-bold mt-6">Declaration</h2>
                        <p className="mt-2">
                            Do you agree that the information provided is true and abide by the rules of the association?
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="agree"
                                    value="Yes"
                                    checked={formData.agree === "Yes"}
                                    onChange={handleInputChange}
                                    className="mr-2 bg-gray-700 border-gray-600"
                                />
                                Yes
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="agree"
                                    value="No"
                                    checked={formData.agree === "No"}
                                    onChange={handleInputChange}
                                    className="mr-2 bg-gray-700 border-gray-600"
                                />
                                No
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ApplicationForm;
