import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const StickyContact = () => {
  const { t } = useTranslation();
  const formRef = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("email");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button when scrolled down more than 150px
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check in case page starts scrolled
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
        setLoading(false);
        setTimeout(() => {
          setStatus("");
          setIsOpen(false);
        }, 3000);
      })
      .catch(() => {
        setStatus("error");
        setLoading(false);
        setTimeout(() => setStatus(""), 5000);
      });
  };

  return (
    <>
      {/* Floating Action Button (FAB) */}
      <AnimatePresence>
        {(isVisible || isOpen) && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setIsOpen(!isOpen)}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-secondary text-white shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-200 flex items-center justify-center border border-white/10"
            aria-label={t("contactTitle")}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Contact Popover Form */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] bg-[#2A2E35]/95 border border-white/10 shadow-2xl rounded-2xl p-6 glass text-[#E0E0E0]"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{t("contactTitle")}</h3>
                <div className="w-8 h-0.5 bg-secondary mt-1"></div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Premium Tab Switcher */}
            <div className="flex bg-[#1F2228] p-1 rounded-xl mb-6 relative border border-white/5">
              <div
                className="absolute top-1 bottom-1 rounded-lg bg-secondary transition-all duration-300 ease-out"
                style={{
                  left: activeTab === "email" ? "4px" : "50%",
                  width: "calc(50% - 8px)",
                }}
              />
              <button
                type="button"
                onClick={() => setActiveTab("email")}
                className={`flex-1 text-center py-2 text-xs font-bold uppercase tracking-wider transition-colors z-10 ${
                  activeTab === "email" ? "text-white" : "text-white/50 hover:text-white/80"
                }`}
              >
                {t("tabEmail")}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("whatsapp")}
                className={`flex-1 text-center py-2 text-xs font-bold uppercase tracking-wider transition-colors z-10 ${
                  activeTab === "whatsapp" ? "text-white" : "text-white/50 hover:text-white/80"
                }`}
              >
                {t("tabWhatsApp")}
              </button>
            </div>

            {/* Tab Contents */}
            <AnimatePresence mode="wait">
              {activeTab === "email" ? (
                <motion.form
                  key="email-form"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Honeypot Field */}
                  <input type="text" name="company" className="hidden" />

                  <div>
                    <label className="text-xs font-bold text-white/80 uppercase tracking-wider">
                      {t("labelName")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-[#1F2228] text-white border border-white/10 rounded-lg p-3 mt-1.5 focus:ring-2 focus:ring-secondary focus:bg-[#25282E] text-sm transition focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-white/80 uppercase tracking-wider">
                      {t("labelEmail")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-[#1F2228] text-white border border-white/10 rounded-lg p-3 mt-1.5 focus:ring-2 focus:ring-secondary focus:bg-[#25282E] text-sm transition focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-white/80 uppercase tracking-wider">
                      {t("labelDetails")}
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      placeholder={t("placeholderDetails")}
                      className="w-full bg-[#1F2228] text-white border border-white/10 rounded-lg p-3 mt-1.5 focus:ring-2 focus:ring-secondary focus:bg-[#25282E] text-sm transition focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary w-full py-3 text-sm flex items-center justify-center mt-2"
                  >
                    {loading ? t("btnSending") : t("btnSend")}
                    <Send className="ml-2" size={14} />
                  </button>

                  {status === "success" && (
                    <div className="p-3 bg-green-950/80 border border-green-500/30 text-green-300 rounded-lg text-center text-xs font-semibold mt-3">
                      {t("successMsg")}
                    </div>
                  )}

                  {status === "error" && (
                    <div className="p-3 bg-red-950/80 border border-red-500/30 text-red-300 rounded-lg text-center text-xs font-semibold mt-3">
                      {t("errorMsg")}
                    </div>
                  )}
                </motion.form>
              ) : (
                <motion.div
                  key="whatsapp-content"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center py-4 text-center"
                >
                  <div className="w-16 h-16 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-10 h-10 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.054L2 22l5.106-1.335a9.957 9.957 0 004.9 1.282h.005c5.506 0 9.99-4.478 9.99-9.983A9.972 9.972 0 0012.012 2zm0 18.29h-.003a8.272 8.272 0 01-4.218-1.155l-.303-.18-3.13.818.835-3.048-.198-.314a8.272 8.272 0 01-1.268-4.417c.001-4.568 3.72-8.282 8.292-8.282 2.213 0 4.294.86 5.856 2.428a8.23 8.23 0 012.426 5.86c-.002 4.568-3.72 8.283-8.292 8.283zm4.56-6.233c-.25-.125-1.476-.728-1.704-.811-.228-.083-.395-.125-.561.125-.167.25-.646.812-.792.979-.146.166-.292.187-.542.062-.25-.125-1.054-.388-2.008-1.238-.742-.66-1.243-1.478-1.389-1.728-.146-.25-.015-.385.11-.51.113-.112.25-.291.375-.437.125-.145.166-.25.25-.416.083-.166.042-.312-.02-.437-.063-.125-.563-1.353-.77-1.853-.203-.488-.41-.422-.56-.43-.146-.008-.313-.008-.479-.008-.166 0-.437.062-.666.312-.228.25-.874.853-.874 2.08 0 1.229.895 2.417 1.02 2.583.125.167 1.762 2.69 4.269 3.771.596.257 1.062.41 1.424.525.6.19 1.145.163 1.576.099.48-.072 1.476-.603 1.684-1.186.208-.583.208-1.083.146-1.187-.062-.104-.229-.166-.479-.291z" />
                    </svg>
                  </div>
                  <p className="text-sm text-[#A0A0A0] mb-6 max-w-[260px] leading-relaxed">
                    {t("whatsappPrompt")}
                  </p>
                  <a
                    href={`https://wa.me/15149274131?text=${encodeURIComponent(
                      t("whatsappDefaultMessage")
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] text-white py-3 rounded-lg flex items-center justify-center font-bold hover:bg-[#20ba56] transition-colors mt-2 text-sm shadow-md hover:shadow-lg active:scale-95 transform duration-150"
                  >
                    {t("whatsappBtn")}
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StickyContact;
