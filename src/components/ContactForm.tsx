"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mwvbvavv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-nyc-blue/10 p-8 rounded-lg text-center">
        <p className="text-xl font-semibold text-nyc-blue">Message sent!</p>
        <p className="text-gray-600 mt-2">We&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-nyc-orange focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-nyc-orange focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-navy mb-1">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-nyc-orange focus:outline-none transition-colors"
        >
          <option value="">Select a topic...</option>
          <option value="Join a ride">Join a ride</option>
          <option value="Volunteer">Volunteer</option>
          <option value="Start a Bike Bus">Start a Bike Bus</option>
          <option value="Cargo Bike Library">Cargo Bike Library</option>
          <option value="Partnership">Partnership opportunity</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-nyc-orange focus:outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-nyc-orange text-white px-6 py-3 rounded-lg font-bold hover:bg-nyc-orange-dark transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-red-500 text-sm text-center">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
