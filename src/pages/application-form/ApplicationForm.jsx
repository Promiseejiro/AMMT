import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Resend } from "resend";
import axios from "axios";
import toast from "react-hot-toast";
import Footer from "../components/Footer";
import Header from "../components/Header";
const resend = new Resend("re_fgFeEdCa_CpDdbjdSC5t8ksK3iRnZ4kvF");

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        surname: "",
        firstname: "",
        otherNames: "",
        gender: "",
        phoneNumber: "",
        alternatePhone: "",
        email: "",
        contactAddress: "",
        natureOfJob: "",
        jobDesignation: "",
        highestQualification: "",
        institutionOfIssue: "",
        highestCmd: "",
        agree: null, // To track user agreement (Yes/No)
    });
    const [isLoading, setIsloading] = useState(false);

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
            setIsloading(true);
            const response = await axios.post(
                import.meta.env.VITE_AAMT_BACKEND,
                formData
            );
            toast.dismiss();
            toast.success(response.data.message);
            setIsloading(false);
            setFormData({
                title: "",
                surname: "",
                firstname: "",
                otherNames: "",
                gender: "",
                phoneNumber: "",
                alternatePhone: "",
                email: "",
                contactAddress: "",
                natureOfJob: "",
                jobDesignation: "",
                highestQualification: "",
                institutionOfIssue: "",
                highestCmd: "",
                agree: null,
            });
        } catch (error) {
            toast.error(error.message)
            console.error(error);
        }
    };

    return (
        <>
            <Header />
            <div className="bg-gray-900 min-h-screen flex flex-col items-center p-6 text-gray-100">
                <div className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-3xl">
                    {/* <Link
                    to="/"
                    className="mb-6 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                >
                    Back to Home
                </Link> */}
                    <h1 className="text-2xl font-bold mb-6 text-center mt-6 lg:mt-0">
                        Membership Form
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Personal Information */}
                        <div>
                            <label className="block font-medium">Title:</label>
                            <div className="grid grid-cols-3 lg:flex space-x-4 mt-2">
                                {[
                                    "Mr.",
                                    "Mrs.",
                                    "Ms.",
                                    "Miss.",
                                    "Dr.",
                                    "Prof.",
                                    "Chief",
                                    "Hajia",
                                    "Alhaji",
                                ].map((title) => (
                                    <label key={title} className="flex items-center">
                                        <input
                                            type="radio"
                                            name="title"
                                            value={title}
                                            checked={formData.title === title}
                                            onChange={handleInputChange}
                                            required
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
                                    required
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
                                    required
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

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                                <label className="block font-medium">Gender:</label>
                                <div className="flex space-x-4 mt-2">
                                    {["Male", "Female", "Other"].map((gender) => (
                                        <label key={gender} className="flex items-center">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value={gender}
                                                checked={formData.gender === gender}
                                                onChange={handleInputChange}
                                                required
                                                className="mr-2 bg-gray-700 border-gray-600"
                                            />
                                            {gender}
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block font-medium">Phone Number:</label>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    required
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
                                required
                                className="w-full border border-gray-600 bg-gray-700 rounded-md p-2 text-gray-100"
                            />
                        </div>

                        <div>
                            <label className="block font-medium">Contact Address:</label>
                            <textarea
                                name="contactAddress"
                                value={formData.contactAddress}
                                onChange={handleInputChange}
                                required
                                className="w-full border border-gray-600 bg-gray-700 rounded-md p-2 text-gray-100"
                            />
                        </div>
                        {/* Declaration */}
                        <div>
                            <h2 className="text-xl font-bold mt-6">Declaration</h2>
                            <p className="mt-2">
                                Do you agree that the information provided is true and abide by
                                the rules of the association?
                            </p>
                            <div className="flex space-x-4 mt-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="agree"
                                        value="Yes"
                                        checked={formData.agree === "Yes"}
                                        onChange={handleInputChange}
                                        required
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
                                        required
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
                            disabled={isLoading ? true : false}
                        >
                            {isLoading ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ApplicationForm;
