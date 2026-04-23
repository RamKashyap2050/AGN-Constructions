import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";
const Services = () => {
  const { hash } = useLocation();

  const { t, i18n } = useTranslation();
  const servicesData = t("services", { returnObjects: true });

  const currentServiceId = hash ? hash.substring(1) : (servicesData && Array.isArray(servicesData) && servicesData.length > 0 ? servicesData[0].id : null);
  const activeService = servicesData && Array.isArray(servicesData) ? servicesData.find(s => s.id === currentServiceId) : null;

  useEffect(() => {
    // Only scroll to top when changing services instead of scrolling to the element
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [hash]);


  return (
    <div className="pt-24 min-h-screen bg-[#1F2228] text-[#E0E0E0]">
      {/* Language Switch */}
      <div className="absolute top-6 left-6 md:right-6 md:left-auto z-50 flex gap-4">
        {/* <button
          onClick={() => i18n.changeLanguage("en")}
          className="text-white font-bold hover:text-secondary transition bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm"
        >
          EN
        </button>
        <button
          onClick={() => i18n.changeLanguage("fr")}
          className="text-white font-bold hover:text-secondary transition bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm"
        >
          FR
        </button> */}
      </div>
      <section className="bg-primary text-white py-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl mb-6 text-white">
          {t("servicesPageTitle")}
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-300">
          {t("servicesPageSubtitle")}
        </p>
      </section>

      <div className="section-padding space-y-32">
        <AnimatePresence mode="wait">
          {activeService && (
            <motion.div
              key={activeService.id}
              id={activeService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
            >
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl">{activeService.title}</h2>

                {activeService.content.map((para, i) => (
                  <p key={i} className="text-lg leading-relaxed">
                    {para}
                  </p>
                ))}

                {activeService.averagePrice && (
                  <p className="font-semibold text-secondary">
                    {activeService.averagePrice}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeService.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center space-x-3 bg-[#2A2E35] p-4 rounded-xl border border-white/5 shadow-sm"
                    >
                      <Check size={18} className="text-secondary" />
                      <span className="font-semibold text-sm text-[#E0E0E0]">{feature}</span>
                    </div>
                  ))}
                </div>

                {activeService.considerations && (
                  <div className="space-y-2 pt-6">
                    <h4 className="font-bold text-white">Things to Consider</h4>
                    {activeService.considerations.map((item) => (
                      <p key={item} className="text-sm text-[#A0A0A0]">
                        • {item}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-8">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                />

                <div className="bg-[#2A2E35] p-8 rounded-2xl border border-white/5">
                  <h3 className="text-2xl mb-6">
                    Estimated {activeService.title} Pricing
                  </h3>

                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b text-sm font-bold opacity-60">
                        <th className="pb-3">SERVICE ITEM</th>
                        <th className="pb-3 text-right">STARTING FROM</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {activeService.pricing.map((p) => (
                        <tr key={p.item}>
                          <td className="py-4 font-semibold text-[#E0E0E0]">{p.item}</td>
                          <td className="py-4 text-right font-bold text-secondary">
                            {p.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <p className="text-xs mt-6 text-gray-500">
                    * Prices are estimates and vary based on material choice and
                    project complexity.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Services;
