import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  const servicesPreview = [
    {
      title: t("kitchenTitle"),
      desc: t("kitchenDesc"),
    },
    {
      title: t("bathroomTitle"),
      desc: t("bathroomDesc"),
    },
    {
      title: t("basementTitle"),
      desc: t("basementDesc"),
    },
  ];

  return (
    <div className="overflow-hidden relative">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.dailyhive.com/20210324092213/13475719-12-alt.jpeg"
            alt="Modern construction"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-white w-full px-6 md:px-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
                {t("heroTitleLine1")} <br />
                <span className="text-secondary">
                  {t("heroTitleHighlight")}
                </span>{" "}
                {t("heroTitleLine2")}
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-xl">
                {t("heroDesc")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="btn btn-secondary text-lg px-8 flex items-center justify-center"
                >
                  {t("getQuote")}
                  <ArrowRight className="ml-2" />
                </Link>

                <Link
                  to="/services"
                  className="btn btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8"
                >
                  {t("ourServices")}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-accent px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="https://thumbs.dreamstime.com/b/luxury-house-montreal-canada-luxury-house-montreal-canada-against-blue-sky-123981483.jpg"
            alt="Construction team"
            className="rounded-2xl shadow-2xl"
          />

          <div>
            <h2 className="text-4xl md:text-5xl mb-6">{t("whoWeAre")}</h2>

            <p className="text-lg mb-6">{t("heroDesc")}</p>

            <div className="space-y-4">
              {[
                "Licensed & Insured Professional Team",
                "Quality Materials & Elite Craftsmanship",
                "On-Time Project Completion Guaranteed",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-6 md:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">{t("ourServices")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesPreview.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-2xl shadow-lg bg-white hover:-translate-y-2 transition"
            >
              <h3 className="text-2xl mb-4">{service.title}</h3>
              <p className="mb-6">{service.desc}</p>

              <Link
                to="/services"
                className="text-primary font-bold inline-flex items-center"
              >
                {t("ourServices")}
                <ArrowRight size={18} className="ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
