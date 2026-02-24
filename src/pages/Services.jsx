import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
const Services = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  const { t, i18n } = useTranslation();

  const servicesData = t("services", { returnObjects: true });

  return (
    <div className="pt-24 min-h-screen">
      {/* Language Switch */}
      <div className="absolute top-6 right-6 z-50 flex gap-4">
        <button
          onClick={() => i18n.changeLanguage("en")}
          className="text-white font-bold hover:text-secondary transition"
        >
          EN
        </button>
        <button
          onClick={() => i18n.changeLanguage("fr")}
          className="text-white font-bold hover:text-secondary transition"
        >
          FR
        </button>
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
        {servicesData &&
          Array.isArray(servicesData) &&
          servicesData.map((service) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
            >
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl">{service.title}</h2>

                {service.content.map((para, i) => (
                  <p key={i} className="text-lg leading-relaxed">
                    {para}
                  </p>
                ))}

                {service.averagePrice && (
                  <p className="font-semibold text-primary">
                    {service.averagePrice}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center space-x-3 bg-white p-4 rounded-xl border shadow-sm"
                    >
                      <Check size={18} className="text-secondary" />
                      <span className="font-semibold text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {service.considerations && (
                  <div className="space-y-2 pt-6">
                    <h4 className="font-bold">Things to Consider</h4>
                    {service.considerations.map((item) => (
                      <p key={item} className="text-sm text-gray-600">
                        • {item}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-8">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                />

                <div className="bg-accent p-8 rounded-2xl">
                  <h3 className="text-2xl mb-6">
                    Estimated {service.title} Pricing
                  </h3>

                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b text-sm font-bold opacity-60">
                        <th className="pb-3">SERVICE ITEM</th>
                        <th className="pb-3 text-right">STARTING FROM</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {service.pricing.map((p) => (
                        <tr key={p.item}>
                          <td className="py-4 font-semibold">{p.item}</td>
                          <td className="py-4 text-right font-bold text-primary">
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
          ))}
      </div>
    </div>
  );
};

export default Services;
