import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, AlertTriangle, CheckCircle2, ShieldAlert } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  // Scroll to top when opening the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "REQUIRED // SPECIFY_NAME";
    }
    if (!formData.email.trim()) {
      newErrors.email = "REQUIRED // SPECIFY_EMAIL";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "INVALID_SYNTAX // ENTER_VALID_EMAIL";
    }
    if (!formData.message.trim()) {
      newErrors.message = "PAYLOAD_EMPTY // ENTER_TRANSMISSION";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

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
      setErrors({});
      
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
    <main className="relative bg-black text-white min-h-screen pt-40 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Dynamic Background: Multiple Big Blurred Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-0">
        {/* Orb 1: Primary Orange Glow (Top Right) */}
        <motion.div
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -70, 50, 0],
            scale: [1, 1.25, 0.95, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 -right-20 w-[550px] h-[550px] sm:w-[700px] sm:h-[700px] rounded-full bg-[#ea580c]/20 blur-[130px]"
        />

        {/* Orb 2: Electric Cyan / Blue (Center Left behind title) */}
        <motion.div
          animate={{
            x: [0, -80, 50, 0],
            y: [0, 80, -60, 0],
            scale: [1, 1.3, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-[25%] -left-32 w-[600px] h-[600px] sm:w-[750px] sm:h-[750px] rounded-full bg-[#3b82f6]/18 blur-[150px]"
        />

        {/* Orb 3: Deep Cyber Purple / Violet (Bottom Right) */}
        <motion.div
          animate={{
            x: [0, 70, -60, 0],
            y: [0, -90, 70, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-32 right-[5%] w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] rounded-full bg-[#8b5cf6]/18 blur-[140px]"
        />

        {/* Orb 4: Warm Amber / Sunset Glow (Center) */}
        <motion.div
          animate={{
            x: [0, -50, 60, 0],
            y: [0, 50, -40, 0],
            scale: [1, 1.35, 1, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute top-[55%] left-[30%] w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] rounded-full bg-[#f97316]/14 blur-[135px]"
        />

        {/* Orb 5: Subtle Cool Sky Blue (Bottom Left) */}
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.2, 0.95, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute -bottom-20 -left-20 w-[450px] h-[450px] sm:w-[550px] sm:h-[550px] rounded-full bg-[#06b6d4]/15 blur-[125px]"
        />

        {/* Subtle Dark Vignette & Mesh Grid Grain for premium texture */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-20">
        
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
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-10 lg:gap-14">
              
              {/* Field 01: Name */}
              <div className={`flex flex-col md:flex-row gap-10 md:gap-8 border-b pb-4 transition-colors relative group ${
                errors.name ? "border-[#ea580c]" : "border-neutral-700 focus-within:border-white"
              }`}>
                <div className={`font-medium transition-colors ${errors.name ? "text-[#ea580c]" : "text-neutral-400"}`}>
                  01
                </div>
                <div className="flex flex-col w-full relative">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-lg md:text-2xl font-bold text-white/90 group-focus-within:text-white transition-colors">
                      What's your name?
                    </label>

                    {/* Futuristic Validation Alert Badge (Matte Cyber style, no aura) */}
                    <AnimatePresence>
                      {errors.name && (
                        <motion.div
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 8 }}
                          className="flex items-center gap-1.5 px-2.5 py-1 bg-[#141414] border border-[#ea580c] text-[#ea580c] rounded"
                        >
                          <AlertTriangle className="w-3.5 h-3.5 text-[#ea580c] shrink-0" />
                          <span
                            className="text-[10px] font-mono font-bold tracking-wider uppercase"
                            style={{ fontFamily: '"Space Mono", monospace' }}
                          >
                            [!] {errors.name}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe *"
                    className="bg-transparent border-none outline-none text-neutral-300 text-lg md:text-xl placeholder:text-neutral-600 w-full font-medium"
                  />
                </div>
              </div>

              {/* Field 02: Email */}
              <div className={`flex flex-col md:flex-row gap-10 md:gap-8 border-b pb-4 transition-colors relative group ${
                errors.email ? "border-[#ea580c]" : "border-neutral-700 focus-within:border-white"
              }`}>
                <div className={`font-medium transition-colors ${errors.email ? "text-[#ea580c]" : "text-neutral-400"}`}>
                  02
                </div>
                <div className="flex flex-col w-full relative">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-lg md:text-2xl font-bold text-white/90 group-focus-within:text-white transition-colors">
                      What's your email?
                    </label>

                    {/* Futuristic Validation Alert Badge (Matte Cyber style, no aura) */}
                    <AnimatePresence>
                      {errors.email && (
                        <motion.div
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 8 }}
                          className="flex items-center gap-1.5 px-2.5 py-1 bg-[#141414] border border-[#ea580c] text-[#ea580c] rounded"
                        >
                          <AlertTriangle className="w-3.5 h-3.5 text-[#ea580c] shrink-0" />
                          <span
                            className="text-[10px] font-mono font-bold tracking-wider uppercase"
                            style={{ fontFamily: '"Space Mono", monospace' }}
                          >
                            [!] {errors.email}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@doe.com *"
                    className="bg-transparent border-none outline-none text-neutral-300 text-lg md:text-xl placeholder:text-neutral-600 w-full font-medium"
                  />
                </div>
              </div>

              {/* Field 03: Message */}
              <div className={`flex flex-col md:flex-row gap-10 md:gap-8 border-b pb-4 transition-colors relative group ${
                errors.message ? "border-[#ea580c]" : "border-neutral-700 focus-within:border-white"
              }`}>
                <div className={`font-medium transition-colors ${errors.message ? "text-[#ea580c]" : "text-neutral-400"}`}>
                  03
                </div>
                <div className="flex flex-col w-full relative">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-lg md:text-2xl font-bold text-white/90 group-focus-within:text-white transition-colors">
                      Your message
                    </label>

                    {/* Futuristic Validation Alert Badge (Matte Cyber style, no aura) */}
                    <AnimatePresence>
                      {errors.message && (
                        <motion.div
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 8 }}
                          className="flex items-center gap-1.5 px-2.5 py-1 bg-[#141414] border border-[#ea580c] text-[#ea580c] rounded"
                        >
                          <AlertTriangle className="w-3.5 h-3.5 text-[#ea580c] shrink-0" />
                          <span
                            className="text-[10px] font-mono font-bold tracking-wider uppercase"
                            style={{ fontFamily: '"Space Mono", monospace' }}
                          >
                            [!] {errors.message}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Red Bora, can you help me with... *"
                    rows="3"
                    className="bg-transparent border-none outline-none text-neutral-300 text-lg md:text-xl placeholder:text-neutral-600 w-full resize-none font-medium"
                  />
                </div>
              </div>

              {/* Status Display: Cyber Transmission Console */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    className="flex items-center gap-3 text-emerald-400 bg-emerald-950/40 py-3.5 px-5 rounded-xl border border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.25)] backdrop-blur-xl"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs font-mono font-bold tracking-widest uppercase">
                        [TRANSMISSION // 200 OK]
                      </span>
                      <span className="text-sm font-medium text-emerald-200">
                        Payload successfully delivered! I will establish contact shortly.
                      </span>
                    </div>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    className="flex items-center gap-3 text-red-400 bg-red-950/40 py-3.5 px-5 rounded-xl border border-red-500/40 shadow-[0_0_25px_rgba(239,68,68,0.25)] backdrop-blur-xl"
                  >
                    <ShieldAlert className="w-5 h-5 text-red-400 shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs font-mono font-bold tracking-widest uppercase">
                        [TRANSMISSION // FAILED]
                      </span>
                      <span className="text-sm font-medium text-red-200">
                        Signal lost. Please retry or contact directly via email.
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Futuristic Cyber-Utilitarian Orange Submit Button */}
              <div className="pt-8">
                <button
                  disabled={isLoading}
                  type="submit"
                  className="group relative inline-flex items-center gap-4 bg-[#ea580c] hover:bg-[#ff6d1a] text-white px-8 py-5 md:px-11 md:py-5 rounded-2xl border-2 border-[#ff7828] hover:border-white shadow-[0_0_35px_rgba(234,88,12,0.45)] hover:shadow-[0_0_50px_rgba(234,88,12,0.7)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {/* Subtle diagonal scanning laser sheen */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                  {/* Cyber Corner Decals */}
                  <span className="absolute top-1 left-1 w-1.5 h-1.5 border-t-2 border-l-2 border-white/70" />
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 border-t-2 border-r-2 border-white/70" />
                  <span className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b-2 border-l-2 border-white/70" />
                  <span className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b-2 border-r-2 border-white/70" />

                  {/* Telemetry Tag */}
                  <span
                    className="text-[10px] font-mono tracking-widest text-white/80 uppercase font-bold bg-black/30 px-2 py-0.5 rounded border border-white/20"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    [TX // 01]
                  </span>

                  {/* Main Action Text */}
                  <span
                    className="relative z-10 text-base md:text-lg font-black tracking-wider uppercase drop-shadow-md"
                    style={{ fontFamily: '"Audiowide", cursive, sans-serif' }}
                  >
                    {isLoading ? "TRANSMITTING..." : "SEND IT // TRANSMIT"}
                  </span>

                  {/* Pulsing Quantum Signal Dot */}
                  <div className="relative flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-white group-hover:scale-125 transition-transform shadow-[0_0_8px_#ffffff]" />
                    <span className="absolute w-4 h-4 rounded-full border border-white/60 animate-ping pointer-events-none" />
                  </div>
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
              <h5 className="text-neutral-500 text-xs font-bold uppercase tracking-widest font-mono">Contact Details</h5>
              <a href="mailto:boraofficial76@gmail.com" className="text-xl md:text-2xl font-medium text-white hover:text-[#ea580c] transition-colors inline-block w-fit">
                boraofficial76@gmail.com
              </a>
              <p className="text-xl md:text-2xl font-medium text-white">
                Phnom Penh, Cambodia
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h5 className="text-neutral-500 text-xs font-bold uppercase tracking-widest font-mono">Connect</h5>
              <div className="flex flex-col gap-2">
                <a href="https://github.com/borared" target="blank" className="text-xl font-medium inline-flex items-center gap-2 text-white hover:text-[#ea580c] w-fit group">
                  <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-[#ea580c] transition-colors" />
                  GitHub / borared
                </a>
                <a href="#" className="text-xl font-medium inline-flex items-center gap-2 text-white hover:text-[#ea580c] w-fit group">
                  <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-[#ea580c] transition-colors" />
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
