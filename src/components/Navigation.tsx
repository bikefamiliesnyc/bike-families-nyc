"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Rides", href: "/rides" },
  { label: "Cargo Bike Library", href: "/cargo-bike-library" },
  { label: "Events", href: "/events" },
  {
    label: "Resources",
    href: "/resources",
    dropdown: [
      { label: "Bike Bus", href: "https://www.bikebus.nyc/", external: true },
      { label: "Cycling Without Age", href: "https://cyclingwithoutage.org/", external: true },
      { label: "Kids Books", href: "/resources#kids-books" },
    ],
  },
  { label: "Participate", href: "/participate" },
  { label: "Blog", href: "/blog" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-nyc-orange">Bike Families NYC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className="text-navy hover:text-nyc-orange font-medium transition-colors flex items-center gap-1"
                  >
                    {item.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="bg-white border rounded-lg shadow-lg py-2 min-w-[200px]">
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-navy hover:bg-gray-50 hover:text-nyc-orange font-medium"
                      >
                        All Resources
                      </Link>
                      <div className="border-t my-1"></div>
                      {item.dropdown.map((subItem) =>
                        subItem.external ? (
                          <a
                            key={subItem.href}
                            href={subItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-navy hover:bg-gray-50 hover:text-nyc-orange"
                          >
                            {subItem.label}
                          </a>
                        ) : (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2 text-navy hover:bg-gray-50 hover:text-nyc-orange"
                          >
                            {subItem.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-navy hover:text-nyc-orange font-medium transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 text-navy hover:text-nyc-orange font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-4">
                    {item.dropdown.map((subItem) =>
                      subItem.external ? (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block py-2 text-gray-600 hover:text-nyc-orange"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </a>
                      ) : (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block py-2 text-gray-600 hover:text-nyc-orange"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
