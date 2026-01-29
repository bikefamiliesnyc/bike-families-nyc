import Link from "next/link";
import NewsletterSignup from "./NewsletterSignup";

export default function Footer() {
  return (
    <footer className="bg-nyc-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-nyc-orange mb-4">Bike Families NYC</h3>
            <p className="text-blue-100">
              Building a community of biking families across the five boroughs.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-nyc-yellow">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li><Link href="/rides" className="hover:text-nyc-orange transition-colors">Rides</Link></li>
              <li><Link href="/cargo-bike-library" className="hover:text-nyc-orange transition-colors">Cargo Bike Library</Link></li>
              <li><Link href="/events" className="hover:text-nyc-orange transition-colors">Events</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-nyc-yellow">Get Involved</h4>
            <ul className="space-y-2 text-blue-100">
              <li><Link href="/resources" className="hover:text-nyc-orange transition-colors">Resources</Link></li>
              <li><Link href="/participate" className="hover:text-nyc-orange transition-colors">Participate</Link></li>
              <li><Link href="/blog" className="hover:text-nyc-orange transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-nyc-yellow">Newsletter</h4>
            <NewsletterSignup variant="footer" />
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} Bike Families NYC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
