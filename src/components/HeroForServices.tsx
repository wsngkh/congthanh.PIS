"use client";
import React, { useState, useEffect } from "react";
import { navLinks } from "./navLinks";
import SparklesText from "./ui/sparklestext";




const StackerLogo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0z"
      fill="#4F46E5"
    />
    <path d="M19.333 9.333h-6.666v1.334h6.666V9.333z" fill="#fff" />
    <path d="M22.667 15.333h-10v1.334h10v-1.334z" fill="#fff" />
    <path d="M16 21.333h-3.333v1.334H16v-1.334z" fill="#fff" />
  </svg>
);

const MenuIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const HeroSection: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <div className="bg-primary-1 text-primary-3 w-full">
      <div className="w-full">
        <header className="py-6 px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between mx-auto">
            <div className="flex items-center">
              <StackerLogo className="h-8 w-8" />
              <a href="/">
              <span className="ml-2 font-bold text-2xl text-primary-6">Pend</span>
              <span className="font-bold text-2xl text-primary-3">leton</span>
              </a>
            </div>

            <div className="absolute hidden left-1/2 -translate-x-1/2 lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-primary-3 transition-all hover:scale-110 hover:text-primary-7"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="Contact"
              className="hidden lg:inline-block bg-primary-4 text-primary-3 font-semibold px-5 py-2 rounded-lg hover:bg-primary-5 hover:scale-110 transition-all shadow-sm"
            >
              Liên hệ
            </a>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-primary-3 hover:text-primary-7"
              >
                <MenuIcon className="h-6 w-6" />
              </button>
            </div>
          </nav>
        </header>

        <div
          className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          <div
            className={`relative z-50 bg-primary-1 h-full w-4/5 max-w-sm ml-auto p-6 flex flex-col transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"} `}
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-bold text-2xl text-primary-3">
                Menu
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-primary-3 hover:text-primary-7"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col items-start gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-primary-3 hover:text-primary-7 transition-colors text-lg w-full text-left py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="Contact"
                className="w-full mt-6 text-center bg-primary-4 text-primary-3 font-semibold px-5 py-3 rounded-lg hover:bg-primary-5 hover:scale-110 transition-all shadow-sm"
              >
                Liên hệ
              </a>
            </nav>
          </div>
        </div>

        <main className="relative flex-1 flex items-center justify-center w-full">
            <div className="relative flex flex-col items-start justify-center py-10 sm:py-16 px-4 max-w-5xl mx-auto">
                <div className="ctn-about bg-primary-1 px-[40px]">
                  {" "}
                                  <span className="text-primary-6">
                                      <SparklesText
                                          as="h1"
                                          className="text-3xl [@media(min-width:480px)]:text-5xl md:text-6xl font-bold text-primary-6 tracking-tight"
                                          sparkleCount={15}
                                          sparkleSize={18}
                                          colors={{ first: '#ffffff', second: '#b52733' }}
                                      >
                                          DỊCH VỤ CỦA PIS
                                      </SparklesText>
                                  </span>{" "}
                </div>
            </div>
        </main>

      </div>
    </div>
  );
};

export default HeroSection;
