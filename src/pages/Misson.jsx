import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Mission = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 overflow-hidden">
      {/* SECTION 1 — IMAGE LEFT / TEXT RIGHT */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        <div className="relative">
          <img
            src="https://wallpaperaccess.com/full/2594958.jpg"
            alt="Construction blueprint"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-primary text-white flex items-center px-10 md:px-20 py-20">
          <div className="max-w-xl space-y-6">
            <h1 className="text-5xl md:text-6xl leading-tight">
              {t("missionHeroLine1")} <br />
              <span className="text-secondary">
                {t("missionHeroHighlight")}
              </span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              {t("missionHeroDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — TEXT LEFT / IMAGE RIGHT */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[65vh]">
        <div className="bg-secondary/90 text-white flex items-center px-10 md:px-20 py-20">
          <div className="max-w-xl space-y-6">
            <h2 className="text-4xl font-bold">
              {t("missionCommitmentTitle")}
            </h2>

            <p className="text-lg leading-relaxed">
              {t("missionCommitmentText")}
            </p>

            <ul className="space-y-3 text-base">
              <li>• {t("missionValue1Title")}</li>
              <li>• {t("missionValue2Title")}</li>
              <li>• {t("missionValue3Title")}</li>
            </ul>
            <p className="text-lg leading-relaxed">
              - Jay Fernando, Chariman of GN Constructions
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://i.pinimg.com/originals/46/32/43/463243e9ee86506a083cde2c726a52f4.webp"
            alt="Construction team"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* SECTION 3 — DARK STATEMENT BAND */}
      <section className="bg-primary text-white py-28 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl leading-tight">
            {t("missionStatement")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 uppercase tracking-widest text-sm font-semibold">
            <div>
              <p className="text-secondary text-2xl font-bold mb-2">
                {t("missionStat1Top")}
              </p>
              {t("missionStat1Bottom")}
            </div>
            <div>
              <p className="text-secondary text-2xl font-bold mb-2">
                {t("missionStat2Top")}
              </p>
              {t("missionStat2Bottom")}
            </div>
            <div>
              <p className="text-secondary text-2xl font-bold mb-2">
                {t("missionStat3Top")}
              </p>
              {t("missionStat3Bottom")}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — LARGE IMAGE + CTA */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white">
        <img
          src="https://images.dailyhive.com/20221202131219/Montreal-homes10-1536x1014.jpeg"
          alt="Modern construction interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-5xl mb-8">{t("missionCtaTitle")}</h2>

          <Link to="/contact" className="btn btn-secondary text-lg px-10 py-4">
            {t("getQuote")}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Mission;
