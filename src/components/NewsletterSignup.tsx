"use client";

import { useState } from "react";

interface NewsletterSignupProps {
  variant?: "default" | "hero" | "footer";
}

export default function NewsletterSignup({ variant = "default" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/mwvbvavv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={`text-center ${variant === "hero" ? "text-white" : variant === "footer" ? "text-white" : "bg-nyc-blue/10 p-8 rounded-lg"}`}>
        <p className={`text-xl font-semibold ${variant === "hero" || variant === "footer" ? "text-white" : "text-nyc-blue"}`}>
          You&apos;re on the list!
        </p>
        <p className={`mt-2 ${variant === "hero" ? "text-blue-100" : variant === "footer" ? "text-blue-200" : "text-gray-600"}`}>
          Check your inbox to confirm your subscription.
        </p>
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <p className="text-blue-100 mb-4">
          Get monthly ride updates, family biking tips, advocacy opportunities, and event announcements.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-3 rounded-full text-navy border border-nyc-orange/70 focus:outline-none focus:ring-1 focus:ring-nyc-orange"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-nyc-orange text-white px-6 py-3 rounded-full font-bold hover:bg-nyc-orange-dark transition-colors disabled:opacity-50 whitespace-nowrap"
          >
            {status === "loading" ? "..." : "Join Us"}
          </button>
        </div>
        {status === "error" && (
          <p className="text-red-300 mt-2 text-sm">Something went wrong. Please try again.</p>
        )}
      </form>
    );
  }

  if (variant === "footer") {
    return (
      <form onSubmit={handleSubmit}>
        <p className="text-blue-200 mb-3 text-sm">
          Monthly updates about biking in NYC in your inbox.
        </p>
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-3 py-2 rounded text-navy text-sm focus:outline-none focus:ring-2 focus:ring-nyc-orange"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-nyc-orange text-white px-4 py-2 rounded font-bold hover:bg-nyc-orange-dark transition-colors disabled:opacity-50 text-sm"
          >
            {status === "loading" ? "..." : "Join"}
          </button>
        </div>
        {status === "error" && (
          <p className="text-red-300 mt-2 text-sm">Something went wrong.</p>
        )}
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-nyc-yellow/20 p-8 rounded-lg">
      <h3 className="text-xl font-bold text-navy mb-2">Join our newsletter</h3>
      <p className="text-gray-600 mb-4">
        Get monthly ride updates, family biking tips, advocacy opportunities, and event announcements.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-3 rounded-full border-2 border-gray-200 focus:border-nyc-orange focus:outline-none transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-nyc-orange text-white px-6 py-3 rounded-full font-bold hover:bg-nyc-orange-dark transition-colors disabled:opacity-50"
        >
          {status === "loading" ? "Signing up..." : "Subscribe"}
        </button>
      </div>
      {status === "error" && (
        <p className="text-red-500 mt-3 text-sm">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
