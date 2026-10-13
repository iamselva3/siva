import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Send, Phone, Linkedin, Github, MapPin, Sparkles, ArrowUpRight } from 'lucide-react';
import { profileData } from '@/data/profile';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { TiltCard } from '@/components/ui/TiltCard';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please include a message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // PLACEHOLDER: Connect to Formspree or EmailJS using import.meta.env.VITE_FORMSPREE_KEY
    await new Promise((res) => setTimeout(res, 900));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto flex flex-col justify-between"
    >
      <div>
        <SectionHeader
          number="(05)"
          label="Communication & Hiring"
          title={
            <>
              Let's make something <span className="font-serif italic font-normal text-lime-dark dark:text-lime">good</span>.
            </>
          }
          tagline="Open to full-time frontend engineering and graduate opportunities in Chennai, hybrid, or remote teams."
        />

        {/* GIANT CLICKABLE EMAIL BANNER */}
        <div className="relative my-10 group">
          <button
            onClick={handleCopyEmail}
            data-cursor="copy"
            aria-label="Copy email address"
            className="w-full text-left p-6 sm:p-10 md:p-12 rounded-3xl border-2 border-rule-light dark:border-rule-dark bg-card-light dark:bg-card-dark hover:bg-lime hover:border-ink-light transition-all duration-300 shadow-xl group cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-ink-light/60 dark:text-ink-dark/60 group-hover:text-ink-light block mb-2 font-bold">
                DIRECT INBOX [CLICK TO COPY]
              </span>
              <span className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-ink-light dark:text-ink-dark group-hover:text-ink-light break-all transition-colors">
                {profileData.contact.email}
              </span>
            </div>

            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-ink-light/20 dark:border-ink-dark/20 group-hover:border-ink-light group-hover:bg-ink-light group-hover:text-lime flex items-center justify-center shrink-0 transition-all shadow-md">
              {copied ? (
                <Check className="w-6 h-6 text-lime group-hover:text-lime" />
              ) : (
                <Copy className="w-6 h-6 text-ink-light dark:text-ink-dark group-hover:text-lime" />
              )}
            </div>
          </button>

          {/* Copy Toast Alert */}
          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute -top-12 left-1/2 -translate-x-1/2 bg-ink-light text-lime font-mono text-xs px-4 py-2 rounded-full shadow-lg border border-lime flex items-center gap-2 z-30"
              >
                <Check className="w-3.5 h-3.5 text-lime" />
                <span>COPIED TO CLIPBOARD: {profileData.contact.email}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 2-Column: Quick Contact Cards & Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Quick Contact Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {/* Phone Card */}
            <a
              href={`tel:${profileData.contact.phone.replace(/\s+/g, '')}`}
              className="p-5 rounded-2xl bg-card-light dark:bg-card-dark border-2 border-rule-light dark:border-rule-dark hover:border-lime transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-lime/10 border border-lime/30 flex items-center justify-center text-lime-dark dark:text-lime">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-ink-light/50 dark:text-ink-dark/50 uppercase block">
                    Phone / WhatsApp
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-ink-light dark:text-ink-dark">
                    {profileData.contact.phone}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-ink-light/40 group-hover:text-lime transition-colors" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={profileData.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-card-light dark:bg-card-dark border-2 border-rule-light dark:border-rule-dark hover:border-lime transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky/10 border border-sky/30 flex items-center justify-center text-sky">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-ink-light/50 dark:text-ink-dark/50 uppercase block">
                    LinkedIn
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-ink-light dark:text-ink-dark">
                    {profileData.contact.linkedin}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-ink-light/40 group-hover:text-lime transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={profileData.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-card-light dark:bg-card-dark border-2 border-rule-light dark:border-rule-dark hover:border-lime transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-ink-light/10 dark:bg-ink-dark/10 border border-rule-light dark:border-rule-dark flex items-center justify-center text-ink-light dark:text-ink-dark">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-ink-light/50 dark:text-ink-dark/50 uppercase block">
                    GitHub Profile
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-ink-light dark:text-ink-dark">
                    {profileData.contact.github}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-ink-light/40 group-hover:text-lime transition-colors" />
            </a>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-card-light dark:bg-card-dark border-2 border-rule-light dark:border-rule-dark flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-tangerine/10 border border-tangerine/30 flex items-center justify-center text-tangerine">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-ink-light/50 dark:text-ink-dark/50 uppercase block">
                  Location
                </span>
                <span className="font-mono text-xs sm:text-sm font-bold text-ink-light dark:text-ink-dark">
                  {profileData.location.city}, {profileData.location.state}, India
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Form (7 cols) */}
          <div className="lg:col-span-7 bg-card-light dark:bg-card-dark p-6 sm:p-8 rounded-3xl border-2 border-rule-light dark:border-rule-dark shadow-xl">
            <h4 className="font-display text-xl sm:text-2xl font-bold mb-2 text-ink-light dark:text-ink-dark">
              Send a Dispatch
            </h4>
            <p className="font-mono text-xs text-ink-light/60 dark:text-ink-dark/60 mb-6">
              Have a role, freelance engagement, or engineering question? Drop a note below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-ink-light/70 dark:text-ink-dark/70 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ada Lovelace"
                  className="w-full px-4 py-3 rounded-xl bg-paper dark:bg-charcoal border border-rule-light dark:border-rule-dark text-ink-light dark:text-ink-dark focus:border-lime focus:outline-none font-sans text-sm"
                />
                {errors.name && (
                  <p className="font-mono text-[11px] text-tangerine mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-ink-light/70 dark:text-ink-dark/70 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ada@computing.org"
                  className="w-full px-4 py-3 rounded-xl bg-paper dark:bg-charcoal border border-rule-light dark:border-rule-dark text-ink-light dark:text-ink-dark focus:border-lime focus:outline-none font-sans text-sm"
                />
                {errors.email && (
                  <p className="font-mono text-[11px] text-tangerine mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-ink-light/70 dark:text-ink-dark/70 mb-1">
                  Your Message *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hey Siva, let's discuss an engineering opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-paper dark:bg-charcoal border border-rule-light dark:border-rule-dark text-ink-light dark:text-ink-dark focus:border-lime focus:outline-none font-sans text-sm resize-none"
                />
                {errors.message && (
                  <p className="font-mono text-[11px] text-tangerine mt-1">{errors.message}</p>
                )}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <MagneticButton
                  type="submit"
                  disabled={isSubmitting}
                  variant="lime"
                  size="md"
                  className="gap-2"
                >
                  {isSubmitting ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </MagneticButton>

                {submitted && (
                  <span className="font-mono text-xs text-lime-dark dark:text-lime font-bold flex items-center gap-1.5 animate-pulse">
                    <Check className="w-4 h-4" />
                    Message delivered successfully!
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
