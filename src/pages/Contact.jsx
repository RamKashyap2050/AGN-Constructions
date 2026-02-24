import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Star, Hammer } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef(); 
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const testimonials = t('testimonials', { returnObjects: true }) || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm('your_service_id', 'your_template_id', form.current, 'your_public_key')
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, (error) => {
        setStatus('error');
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const gallery = [
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2070",
    "https://images.unsplash.com/photo-1620626011761-9963d7b59675?auto=format&fit=crop&q=80&w=2070",
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2070",
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=2070",
    "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=2070",
    "https://images.unsplash.com/photo-1541915332210-90928a6fdf94?auto=format&fit=crop&q=80&w=2070",
  ];

  return (
    <div className="pt-24 min-h-screen">
      <section className="bg-primary text-white py-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl text-white mb-6">{t('contactTitle')}</h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-300">{t('contactSubtitle')}</p>
      </section>

      <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100"
        >
          <h2 className="text-3xl mb-8">{t('formQuoteTitle')}</h2>
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">{t('labelName')}</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-accent border-none rounded-lg p-4 focus:ring-2 focus:ring-secondary focus:bg-white transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">{t('labelEmail')}</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-accent border-none rounded-lg p-4 focus:ring-2 focus:ring-secondary focus:bg-white transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary uppercase tracking-wider">{t('labelPhone')}</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-accent border-none rounded-lg p-4 focus:ring-2 focus:ring-secondary focus:bg-white transition-all" placeholder="(555) 000-0000" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary uppercase tracking-wider">{t('labelDetails')}</label>
              <textarea name="message" required rows="5" value={formData.message} onChange={handleChange} className="w-full bg-accent border-none rounded-lg p-4 focus:ring-2 focus:ring-secondary focus:bg-white transition-all" placeholder={t('placeholderDetails')}></textarea>
            </div>

            <button type="submit" disabled={status === 'sending'} className="btn btn-secondary w-full py-4 text-xl group">
              {status === 'sending' ? t('btnSending') : t('btnSend')}
              <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            {status === 'success' && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-green-50 text-green-700 rounded-lg text-center font-bold">{t('successMsg')}</motion.div>}
            {status === 'error' && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-red-50 text-red-700 rounded-lg text-center font-bold">{t('errorMsg')}</motion.div>}
          </form>
        </motion.div>

        <div className="space-y-16">
          <div className="space-y-8">
            <h2 className="text-3xl">{t('reachOutTitle')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary p-3 rounded-lg text-white"><Phone size={24} /></div>
                <div><h4 className="font-bold">Phone</h4><p className="text-gray-500">(555) 123-4567</p></div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-secondary p-3 rounded-lg text-white"><Mail size={24} /></div>
                <div><h4 className="font-bold">Email</h4><p className="text-gray-500">info@agnconstructions.ca</p></div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-secondary p-3 rounded-lg text-white"><MapPin size={24} /></div>
                <div><h4 className="font-bold">Location</h4><p className="text-gray-500">Montreal, QC</p></div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-secondary p-3 rounded-lg text-white"><Hammer size={24} /></div>
                <div><h4 className="font-bold">RBQ Number</h4><p className="text-gray-500">1234-5678-90</p></div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl">{t('testimonialsTitle')}</h2>
            <div className="space-y-6">
              {testimonials.map((test, idx) => (
                <div key={idx} className="bg-accent p-6 rounded-xl relative">
                  <div className="flex mb-3">
                    {[...Array(test.rating)].map((_, i) => <Star key={i} size={16} className="text-secondary fill-secondary" />)}
                  </div>
                  <p className="italic text-primary mb-4">"{test.content}"</p>
                  <div className="font-bold text-sm">— {test.name}, {test.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding bg-accent">
        <h2 className="text-4xl text-center mb-16">{t('galleryTitle')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-xl shadow-lg">
              <img src={img} alt={`Project ${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;