import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Home() {
  return (
    <div>
      {/* Hero Section with Video */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-nyc-blue/60" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bike Families NYC
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-blue-100">
            Building a community of biking families across the five boroughs.
          </p>
          <NewsletterSignup variant="hero" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Family Rides"
              description="Regular group rides designed for families with kids of all ages. Safe routes, moderate pace, and lots of fun."
              href="/rides"
              color="orange"
            />
            <FeatureCard
              title="Cargo Bike Library"
              description="Try before you buy! Borrow a cargo bike to see if it's right for your family."
              href="/cargo-bike-library"
              color="blue"
            />
            <FeatureCard
              title="School Bike Events"
              description="Bike rodeos, safety workshops, bike education, and fun biking activities at schools across NYC."
              href="/events"
              color="orange"
            />
          </div>
        </div>
      </section>

    </div>
  );
}

function FeatureCard({
  title,
  description,
  href,
  color,
  external,
}: {
  title: string;
  description: string;
  href: string;
  color: "orange" | "blue";
  external?: boolean;
}) {
  const colorClasses = {
    orange: "border-t-nyc-orange hover:shadow-nyc-orange/20",
    blue: "border-t-nyc-blue hover:shadow-nyc-blue/20",
  };

  const titleColors = {
    orange: "text-nyc-orange",
    blue: "text-nyc-blue",
  };

  const CardWrapper = external ? "a" : Link;
  const extraProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <CardWrapper
      href={href}
      className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 ${colorClasses[color]}`}
      {...extraProps}
    >
      <h3 className={`text-xl font-bold mb-3 ${titleColors[color]}`}>{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardWrapper>
  );
}
