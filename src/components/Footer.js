import Link from "next/link";
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#4A1561] text-white pt-16 md:pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">

                {/* Col 1 */}
                <div className="text-center md:text-left">
                    <Link href="/" className="flex items-center justify-center md:justify-start gap-2 text-2xl font-black text-white mb-6 font-['Roboto',sans-serif]">
                        Elevare Connect
                    </Link>
                    <p className="text-white/60 leading-relaxed font-medium max-w-sm mx-auto md:mx-0">
                        While degrees open doors, skills and self-confidence hold the key. We shape the next generation of confident, career-ready professionals.
                    </p>
                </div>

                {/* Col 2 */}
                <div className="text-center md:text-left">
                    <h4 className="text-lg font-bold mb-6 text-white tracking-widest uppercase text-sm">Quick Menu</h4>
                    <nav aria-label="Footer Navigation">
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-white/60 hover:text-white transition-colors font-bold text-sm tracking-wide">Home</Link></li>
                            <li><Link href="/about" className="text-white/60 hover:text-white transition-colors font-bold text-sm tracking-wide">About Us</Link></li>
                            <li><Link href="/services" className="text-white/60 hover:text-white transition-colors font-bold text-sm tracking-wide">Our Services</Link></li>
                            <li><Link href="/gallery" className="text-white/60 hover:text-white transition-colors font-bold text-sm tracking-wide">Gallery</Link></li>
                            <li><Link href="/contact" className="text-white/60 hover:text-white transition-colors font-bold text-sm tracking-wide">Collaborate with Us</Link></li>
                        </ul>
                    </nav>
                </div>

                {/* Col 3 */}
                <div className="text-center md:text-left">
                    <h4 className="text-lg font-bold mb-6 text-white tracking-widest uppercase text-sm">Contact Us</h4>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start justify-center md:justify-start gap-4 text-white/60 font-medium">
                            <Mail size={18} className="text-[#6E2690] mt-1 shrink-0" />
                            <a href="mailto:info@elevareconnect.in" className="hover:text-white transition-colors">info@elevareconnect.in</a>
                        </li>
                        <li className="flex items-start justify-center md:justify-start gap-4 text-white/60 font-medium">
                            <MapPin size={18} className="text-[#6E2690] mt-1 shrink-0" />
                            <span>Bengaluru, Karnataka</span>
                        </li>
                    </ul>

                    <div className="flex justify-center md:justify-start gap-5">
                        <a href="https://www.linkedin.com/in/wilma-merina-d-sa-462b2b101/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#6E2690] transition-all border border-white/10" aria-label="LinkedIn">
                            <Linkedin size={18} />
                        </a>
                        <a href="https://www.instagram.com/skandaumesh/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#6E2690] transition-all border border-white/10" aria-label="Instagram">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#6E2690] transition-all border border-white/10" aria-label="Facebook">
                            <Facebook size={18} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 text-center text-white/40 text-xs font-bold tracking-widest uppercase">
                © {new Date().getFullYear()} Elevare Connect. All rights reserved.
            </div>
        </footer>
    );
}
