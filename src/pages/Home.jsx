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
    <div className="overflow-hidden bg-[#1F2228] text-[#E0E0E0]">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.dailyhive.com/20210324092213/13475719-12-alt.jpeg"
            alt="Modern construction"
            className="w-full h-full object-cover grayscale-[20%] opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F2228] via-[#1F2228]/80 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-secondary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Building Excellence</span>
              <h1 className="text-5xl md:text-8xl text-white mb-8 leading-[1.1]">
                {t("heroTitleLine1")} <br />
                <span className="text-secondary">
                  {t("heroTitleHighlight")}
                </span>{" "}
                {t("heroTitleLine2")}
              </h1>

              <p className="text-lg md:text-xl text-[#A0A0A0] mb-10 max-w-xl">
                {t("heroDesc")}
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/contact"
                  className="btn btn-primary text-sm uppercase tracking-widest px-10 py-4"
                >
                  {t("getQuote")}
                  <ArrowRight className="ml-2" size={18} />
                </Link>

                <Link
                  to="/services"
                  className="btn btn-secondary text-sm uppercase tracking-widest px-10 py-4"
                >
                  {t("ourServices")}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section - Premium Split Look */}
      <section className="bg-primary py-0">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          <div className="lg:w-1/2 relative min-h-[400px]">
             <div className="absolute inset-0 p-12 flex items-center justify-center">
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  src="https://thumbs.dreamstime.com/b/luxury-house-montreal-canada-luxury-house-montreal-canada-against-blue-sky-123981483.jpg"
                  alt="Construction team"
                  className="rounded-sm shadow-2xl w-full h-full object-cover"
                />
             </div>
          </div>
          
          <div className="lg:w-1/2 bg-secondary flex items-center p-12 md:p-24">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white space-y-8 max-w-xl"
            >
              <span className="text-white/60 font-bold tracking-[0.2em] uppercase text-xs uppercase px-1">Who We Are</span>
              <h2 className="text-4xl md:text-6xl text-white leading-tight">{t("whoWeAre")}</h2>
              
              <p className="text-white/90 text-lg leading-relaxed">
                {t("heroDesc")}
              </p>

              <div className="space-y-4 pt-4">
                {[
                  "Licensed & Insured Professional Team",
                  "Quality Materials & Elite Craftsmanship",
                  "On-Time Project Completion Guaranteed",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-white/70" size={20} />
                    <span className="font-bold tracking-wide uppercase text-xs">{item}</span>
                  </div>
                ))}
              </div>
              <button className="btn bg-white text-secondary hover:bg-white/90 px-8 mt-6 uppercase tracking-widest text-xs">
                About Our Group
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-accent/30">
        <div className="text-center mb-20">
          <h2 className="text-secondary font-heading text-xl uppercase tracking-[0.4em] mb-4">Core Expertise</h2>
          <h3 className="text-4xl md:text-6xl mb-6">{t("ourServices")}</h3>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {servicesPreview.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card group border-t-4 border-t-secondary/20 hover:border-t-secondary bg-[#2A2E35]"
            >
              <h3 className="text-2xl mb-6 group-hover:text-secondary transition-colors uppercase tracking-tight text-white">{service.title}</h3>
              <p className="mb-8 text-[#A0A0A0]">{service.desc}</p>

              <Link
                to="/services"
                className="text-secondary font-bold inline-flex items-center hover:translate-x-2 transition-transform uppercase tracking-widest text-xs"
              >
                {t("ourServices")}
                <ArrowRight size={14} className="ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
