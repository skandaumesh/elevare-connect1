"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Collaborate", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
        style={{ paddingTop: scrolled ? "12px" : "20px", transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <nav
          className="pointer-events-auto flex items-center justify-between transition-all duration-500"
          style={{
            width: "min(94vw, 1200px)",
            padding: "12px 16px 12px 32px",
            borderRadius: "100px",
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid rgba(0,0,0,0.03)",
            boxShadow: scrolled
              ? "0 10px 30px -10px rgba(0,0,0,0.08)"
              : "0 4px 20px -5px rgba(0,0,0,0.02)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center no-underline shrink-0 group">
            <img
              src="/elevera.png"
              alt="Elevare Connect"
              className="h-[55px] md:h-[65px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              style={{
                marginTop: "-15px",
                marginBottom: "-15px",
                mixBlendMode: "multiply",
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-5 py-2.5 text-[13px] font-medium tracking-tight no-underline transition-all duration-300 rounded-full
                    ${isActive
                      ? "text-[#111827] bg-gray-50"
                      : "text-[#6B7280] hover:text-[#111827] hover:bg-gray-50"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full text-[13px] font-semibold text-white no-underline
                bg-[#111827] hover:bg-[#000000] shadow-sm hover:shadow-md transition-all duration-300 ease-out"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#111827] cursor-pointer border-none hover:bg-gray-100 transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[88px] left-0 right-0 z-40 px-4"
          >
            <div className="bg-white/95 backdrop-blur-2xl rounded-[32px] shadow-2xl border border-gray-100 p-6 flex flex-col gap-1 max-w-[500px] mx-auto">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-6 py-4 rounded-2xl text-[15px] font-medium no-underline transition-all duration-200
                      ${isActive
                        ? "text-[#111827] bg-gray-50"
                        : "text-[#6B7280] hover:text-[#111827] hover:bg-gray-50"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="mt-4 pt-4 border-t border-gray-50">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center h-14 rounded-2xl text-[15px] font-bold text-white no-underline bg-[#111827] hover:bg-black transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}