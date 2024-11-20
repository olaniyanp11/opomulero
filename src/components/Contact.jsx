import React, { useState } from 'react';
import Call from '../assets/call.jpeg';
import { Nav } from "../components/Nav"
import { Footer } from './Footer';
import { motion } from 'framer-motion';

export const Contact = () => {
    const [email, setEmail] = useState("");
    const [Subject, setSubject] = useState("");
    const [Message, setMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false); // State for pop-up visibility

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, Subject, Message);

        // Show pop-up
        setShowPopup(true);

        // Hide pop-up after 3 seconds
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);

        // Reset form fields
        setEmail("");
        setMessage("");
        setSubject("");
    };

    return (
        <>
            <Nav />
            <motion.div className="py-10" id='contact' initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
                <h2 className="font-bold text-[30px] text-secondary text-center pb-5"> Contact Us </h2>
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
                                />
                            </div>
                            <div>
                                <label htmlFor="Subject" className="font-bold text-neutral-500 text-[14px]">Subject</label>
                                <input
                                    type="text"
                                    className="w-full border border-neutral-300 rounded-lg p-2 outline-secondary invalid:outline-red-600 valid:outline-green-500"
                                    onChange={(e) => setSubject(e.target.value)}
                                    value={Subject}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="Message" className="font-bold text-neutral-500 text-[14px]">Message</label>
                                <textarea
                                    type="text"
                                    className="w-full border border-neutral-300 rounded-lg p-4 outline-secondary invalid:outline-red-600 valid:outline-green-500" minLength={5}
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={Message}
                                    required
                                />
                            </div>
                            <div>
                                <button className="btn" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src={Call} alt="" className="w-full" />
                    </div>
                </div>
                {/* Pop-up Notification */}
                {showPopup && (
                    <div className="fixed top-10 right-[10%] bg-green-500 text-white px-4 py-2 rounded shadow-lg">
                        Your message has been sent successfully!
                    </div>
                )}
            </motion.div>
            <Footer />
        </>
    );
};
