import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const testimonials = t("testimonials", { returnObjects: true }) || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
        setLoading(false);
        setTimeout(() => setStatus(""), 5000);
      })
      .catch(() => {
        setStatus("error");
        setLoading(false);
        setTimeout(() => setStatus(""), 5000);
      });
  };

  const gallery = [
    "https://st.hzcdn.com/simgs/pictures/basements/61e-rue-nicolas-savard-immobilier-et-construction-img~97919a5d04efdc0e_9-4915-1-84734f1.jpg",
    "https://adaconstruction.ca/wp-content/uploads/2025/05/Bathroom-Remodeling.webp",
    "https://media.minto.com/slideshows/1643/5_haddon_hall_2255_rue_lambert_closse_montreal_kitchen.jpg",
    "https://www.drywallproscleveland.com/wp-content/uploads/2021/02/Cleveland-Drywall-Pros-Drywall-Repair-2.jpg",
    "https://images.squarespace-cdn.com/content/v1/6373db11a264167b4fdd326a/48c7dbf5-b7a6-41a1-8c4a-7f5fb02b9993/IMG_5651.jpg",
    "https://img.freepik.com/premium-photo/before-after-photos-grouting-ceramic-tiles-home-renovation-repair-work-concept-home-renovation-grouting-ceramic-tiles-before-after-repair-work_918839-43247.jpg?w=2000",
  ];

  return (
    <div className="pt-24 min-h-screen">

      {/* HERO */}
      <section className="bg-primary text-white py-24 px-6 text-center">
        <h1 className="text-5xl md:text-6xl mb-6">
          {t("contactTitle")}
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-300">
          {t("contactSubtitle")}
        </p>
      </section>

      {/* MAIN GRID */}
      <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 md:p-14 rounded-2xl shadow-xl border border-gray-100"
        >
          <h2 className="text-3xl font-bold mb-2">
            {t("formQuoteTitle")}
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8"></div>

          <form ref={form} onSubmit={handleSubmit} className="space-y-6">

            {/* Honeypot Field */}
            <input type="text" name="company" className="hidden" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-bold text-primary uppercase tracking-wider">
                  {t("labelName")}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-accent rounded-lg p-4 mt-2 focus:ring-2 focus:ring-secondary focus:bg-white transition"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-primary uppercase tracking-wider">
                  {t("labelEmail")}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-accent rounded-lg p-4 mt-2 focus:ring-2 focus:ring-secondary focus:bg-white transition"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-bold text-primary uppercase tracking-wider">
                {t("labelPhone")}
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full bg-accent rounded-lg p-4 mt-2 focus:ring-2 focus:ring-secondary focus:bg-white transition"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-primary uppercase tracking-wider">
                {t("labelDetails")}
              </label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder={t("placeholderDetails")}
                className="w-full bg-accent rounded-lg p-4 mt-2 focus:ring-2 focus:ring-secondary focus:bg-white transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-secondary w-full py-4 text-lg flex items-center justify-center"
            >
              {loading ? t("btnSending") : t("btnSend")}
              <Send className="ml-2" size={18} />
            </button>

            {status === "success" && (
              <div className="p-4 bg-green-50 text-green-700 rounded-lg text-center font-semibold">
                {t("successMsg")}
              </div>
            )}

            {status === "error" && (
              <div className="p-4 bg-red-50 text-red-700 rounded-lg text-center font-semibold">
                {t("errorMsg")}
              </div>
            )}
          </form>
        </motion.div>

        {/* CONTACT INFO + TESTIMONIALS */}
        <div className="space-y-16">

          <div>
            <h2 className="text-3xl font-bold mb-8">
              {t("reachOutTitle")}
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-lg text-white">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-500">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-lg text-white">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-500">
                    info@gnconstructions.ca
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-lg text-white">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-500">Montreal, QC</p>
                </div>
              </div>
            </div>
          </div>

          {/* TESTIMONIALS */}
          <div>
            <h2 className="text-3xl font-bold mb-8">
              {t("testimonialsTitle")}
            </h2>

            <div className="space-y-6">
              {testimonials.map((test, idx) => (
                <div key={idx} className="bg-accent p-6 rounded-xl">
                  <div className="flex mb-3">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-secondary fill-secondary"
                      />
                    ))}
                  </div>
                  <p className="italic text-primary mb-4">
                    "{test.content}"
                  </p>
                  <div className="font-bold text-sm">
                    — {test.name}, {test.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <section className="section-padding bg-accent">
        <h2 className="text-4xl text-center mb-16">
          {t("galleryTitle")}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((img, i) => (
            <div
              key={i}
              className="aspect-square overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={img}
                alt={`Project ${i}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Contact;