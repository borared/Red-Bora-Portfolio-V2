import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  // Scroll to top when opening the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);
    try {
      await emailjs.send(
        "service_wik08fh",
        "template_lw3k4qx",
        {
          from_name: formData.name,
          to_name: "Red Bora",
          from_email: formData.email,
          to_email: "boraofficial76@gmail.com",
          message: formData.message,
        },
        "hVDbZjK4qlfMea4TT"
      );
      setIsLoading(false);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Auto clear success message
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      setIsLoading(false);
      setStatus("error");
      console.error(error);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <main className="bg-black text-white min-h-screen pt-40 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-4">
            <span className="w-16 md:w-24 h-[1px] bg-neutral-600 block"></span>
            <span className="text-neutral-400 uppercase tracking-widest text-sm font-semibold">Contact</span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter" style={{ fontFamily: "Mooli, sans-serif" }}>
            Let's start<br />a project together
          </h1>
        </motion.div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 w-full justify-between items-start">
          
          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-[60%]"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-10 lg:gap-14">
              
              <div className="flex flex-col md:flex-row gap-10 md:gap-8 border-b border-neutral-700 pb-4 focus-within:border-white transition-colors relative group">
                <div className="text-neutral-400 font-medium">01</div>
                <div className="flex flex-col w-full">
                  <label className="text-lg md:text-2xl font-bold mb-2 text-white/90 group-focus-within:text-white transition-colors">What's your name?</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe *"
                    required
                    className="bg-transparent border-none outline-none text-neutral-300 text-lg md:text-xl placeholder:text-neutral-600 w-full font-medium"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-10 md:gap-8 border-b border-neutral-700 pb-4 focus-within:border-white transition-colors relative group">
                <div className="text-neutral-400 font-medium">02</div>
                <div className="flex flex-col w-full">
                  <label className="text-lg md:text-2xl font-bold mb-2 text-white/90 group-focus-within:text-white transition-colors">What's your email?</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@doe.com *"
                    required
                    className="bg-transparent border-none outline-none text-neutral-300 text-lg md:text-xl placeholder:text-neutral-600 w-full font-medium"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-10 md:gap-8 border-b border-neutral-700 pb-4 focus-within:border-white transition-colors relative group">
                <div className="text-neutral-400 font-medium">03</div>
                <div className="flex flex-col w-full">
                  <label className="text-lg md:text-2xl font-bold mb-2 text-white/90 group-focus-within:text-white transition-colors">Your message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Red Bora, can you help me with... *"
                    required
                    rows="3"
                    className="bg-transparent border-none outline-none text-neutral-300 text-lg md:text-xl placeholder:text-neutral-600 w-full resize-none font-medium"
                  />
                </div>
              </div>

              {/* Status Display */}
              {status === "success" && (
                <div className="text-green-500 font-medium bg-green-500/10 py-3 px-4 rounded-lg border border-green-500/20">
                  Message successfully sent! I will get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="text-red-500 font-medium bg-red-500/10 py-3 px-4 rounded-lg border border-red-500/20">
                  Failed to send message. Please try again later.
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-8">
                <button
                  disabled={isLoading}
                  type="submit"
                  className="group relative inline-flex items-center gap-4 bg-[#3163eb] text-white px-8 py-5 md:px-12 md:py-6 rounded-full overflow-hidden hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-[#3163eb]/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-[#2850be] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 rounded-full" />
                  <span className="relative z-10 text-lg md:text-xl font-bold tracking-wide">
                    {isLoading ? "Sending..." : "Send it"}
                  </span>
                  <div className="w-[10px] h-[10px] bg-white rounded-full relative z-10 group-hover:scale-125 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

          {/* Details Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="w-full lg:w-[30%] flex flex-col gap-12"
          >
            <div className="flex flex-col gap-4">
              <h5 className="text-neutral-500 text-xs font-bold uppercase tracking-widest">Contact Details</h5>
              <a href="mailto:boraofficial76@gmail.com" className="text-xl md:text-2xl font-medium text-white hover:text-[#3163eb] transition-colors inline-block w-fit">
                boraofficial76@gmail.com
              </a>
              <p className="text-xl md:text-2xl font-medium text-white">
                Phnom Penh, Cambodia
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h5 className="text-neutral-500 text-xs font-bold uppercase tracking-widest">Connect</h5>
              <div className="flex flex-col gap-2">
                <a href="https://github.com/borared" target="blank" className="text-xl font-medium inline-flex items-center gap-2 text-white hover:text-[#3163eb] w-fit group">
                  <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-[#3163eb] transition-colors" />
                  GitHub / borared
                </a>
                <a href="#" className="text-xl font-medium inline-flex items-center gap-2 text-white hover:text-[#3163eb] w-fit group">
                  <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-[#3163eb] transition-colors" />
                  LinkedIn / Red Bora
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
