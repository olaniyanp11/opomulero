import React, { useState } from 'react';
import Call from '../assets/call.jpeg';
import { Nav } from "../components/Nav";
import { Footer } from './Footer';
import { motion } from 'framer-motion';
import axios from 'axios';
import "../custom.css"

export const Contact = () => {
    const [email, setEmail] = useState("");
    const [Subject, setSubject] = useState("");
    const [Message, setMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [errorPopup, setErrorPopup] = useState(false); // For error notifications
    const [loading, setLoading] = useState(false);
    const [whatsapp, setWhatsapp] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            email,
            whatsapp,
            subject: Subject,
            message: Message,
        };
        // const url = "http://localhost/php%20projects/practice/send_mail.php";
        const url = "/send_mail.php";

        setLoading(true); // Start loading
        try {
            const response = await axios.post(url, formData, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
            if (response.status === 200) {
                setShowPopup(true);
                setTimeout(() => {
                    setShowPopup(false);
                }, 3000);

                // Reset form fields
                setEmail("");
                setMessage("");
                setSubject("");
                setWhatsapp("");
            } else {
                throw new Error("Failed to send the message.");
            }
        } catch (err) {
            console.error(err);
            setErrorPopup(true); // Show error pop-up
            setTimeout(() => {
                setErrorPopup(false);
            }, 3000);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <>
            <Nav />
            <motion.div
                className="py-10"
                id="contact"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h2 className="font-bold text-[30px] text-secondary text-center pb-5">Contact Us</h2>
                <div className="flex flex-col md:flex-row md:items-center">
                    <div className="w-full md:w-1/2">
                        <form onSubmit={handleSubmit} className="px-[30px] mb-5">
                            <div>
                                <label htmlFor="email" className="font-bold text-neutral-500 text-[14px]">Email</label>
                                <input
                                    type="email"
                                    className="w-full border border-neutral-300 rounded-lg p-2 outline-secondary invalid:outline-red-600 valid:outline-green-500"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                    autoComplete="off"
                                    name='email'
                                />
                            </div>
                            <div>
                                <label htmlFor="Name" className="font-bold text-neutral-500 text-[14px]">Name</label>
                                <input
                                    type="text"
                                    className="w-full border border-neutral-300 rounded-lg p-2 outline-secondary invalid:outline-red-600 valid:outline-green-500"
                                    onChange={(e) => setSubject(e.target.value)}
                                    value={Subject}
                                    required
                                    name='name'
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="whatsapp"
                                    className="font-bold text-neutral-500 text-[14px]"
                                >
                                    WhatsApp Number
                                </label>
                                <input
                                    type="tel" // Use 'tel' for phone numbers
                                    className="w-full border border-neutral-300 rounded-lg p-2 outline-secondary invalid:outline-red-600 valid:outline-green-500"
                                    onChange={(e) => setWhatsapp(e.target.value)}
                                    value={whatsapp}
                                    required
                                    name="whatsapp"
                                    pattern="^\+?[1-9]\d{1,14}$" // Regex for international phone numbers
                                    placeholder="+234 704 438 4834"
                                />
                                {/* Show validation error dynamically */}
                                {whatsapp && !/^\+?[1-9]\d{1,14}$/.test(whatsapp) && (
                                    <p className="text-red-600 text-sm">Please enter a valid phone number.</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="Message" className="font-bold text-neutral-500 text-[14px]">Message</label>
                                <textarea
                                    className="w-full border border-neutral-300 rounded-lg p-4 outline-secondary invalid:outline-red-600 valid:outline-green-500"
                                    minLength={5}
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={Message}
                                    required
                                    name='message'
                                />
                            </div>
                            <div>
                                <button className="btn" type="submit" disabled={loading}>
                                    {loading ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src={Call} alt="" className="w-full" />
                    </div>
                </div>
                {/* Loading Spinner */}
                {loading && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="loader"></div>
                    </div>
                )}
                {/* Success Pop-up Notification */}
                {showPopup && (
                    <div className="fixed top-10 right-[10%] bg-green-500 text-white px-4 py-2 rounded shadow-lg">
                        Your message has been sent successfully!
                    </div>
                )}
                {/* Error Pop-up Notification */}
                {errorPopup && (
                    <div className="fixed top-10 right-[10%] bg-red-500 text-white px-4 py-2 rounded shadow-lg">
                        Failed to send your message. Please try again.
                    </div>
                )}
            </motion.div>
            <Footer />
        </>
    );
};
