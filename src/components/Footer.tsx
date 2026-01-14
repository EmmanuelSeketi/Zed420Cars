import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, ArrowRight, ShieldCheck, CreditCard, Headphones } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-md">
            <h3 className="text-xl font-bold text-white mb-2">Join the inner circle</h3>
            <p className="text-sm text-slate-400">Get exclusive offers and the latest automotive news in Zambia delivered to your inbox.</p>
          </div>
          <div className="w-full md:w-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all w-full md:w-72" 
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2">
              Join <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Identity */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <img 
                src={`${import.meta.env.BASE_URL}images/Logo.png`} 
                alt="Zed420Cars" 
                className="h-10 w-auto brightness-110"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              Zambia's premier automotive marketplace. We facilitate seamless connections between buyers and sellers with industry-leading transparency.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={<Facebook size={18} />} href="#" />
              <SocialLink icon={<Twitter size={18} />} href="#" />
              <SocialLink icon={<Instagram size={18} />} href="#" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Marketplace</h4>
            <ul className="space-y-4">
              <FooterLink href="#">Browse Cars</FooterLink>
              <FooterLink href="#">Sell Your Car</FooterLink>
              <FooterLink href="#">New Arrivals</FooterLink>
              <FooterLink href="#">Car Inspection</FooterLink>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-4">
              <FooterLink href="#">Financing</FooterLink>
              <FooterLink href="#">Insurance</FooterLink>
              <FooterLink href="#">Price Guide</FooterLink>
              <FooterLink href="#">Help Center</FooterLink>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <ContactItem icon={<MapPin size={18} className="text-blue-500" />} text="Lusaka City Center, Zambia" />
              <ContactItem icon={<Phone size={18} className="text-blue-500" />} text="+260 977 777 777" isLink href="tel:+260977777777" />
              <ContactItem icon={<Mail size={18} className="text-blue-500" />} text="info@zed420cars.zm" isLink href="mailto:info@zed420cars.zm" />
            </div>
          </div>
        </div>

        {/* Value Props Bar */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-slate-800/50 py-8">
          <ValueProp icon={<ShieldCheck className="text-emerald-500" />} title="Verified Listings" />
          <ValueProp icon={<CreditCard className="text-blue-500" />} title="Secure Payments" />
          <ValueProp icon={<Headphones className="text-purple-500" />} title="Expert Support" />
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium uppercase tracking-widest">
          <p>© 2026 Zed420Cars. Built for the Zambian Road.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper Components for Cleanliness
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a href={href} className="text-slate-400 hover:text-white transition-all duration-200 text-sm flex items-center group">
      <span className="h-[1px] w-0 bg-blue-500 mr-0 transition-all duration-200 group-hover:w-3 group-hover:mr-2"></span>
      {children}
    </a>
  </li>
);

const SocialLink = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a href={href} className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300">
    {icon}
  </a>
);

const ContactItem = ({ icon, text, isLink, href }: any) => (
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
      {icon}
    </div>
    {isLink ? (
      <a href={href} className="text-sm text-slate-400 hover:text-white transition-colors">{text}</a>
    ) : (
      <span className="text-sm text-slate-400">{text}</span>
    )}
  </div>
);

const ValueProp = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="flex items-center justify-center gap-3">
    {icon}
    <span className="text-sm font-semibold text-slate-200">{title}</span>
  </div>
);