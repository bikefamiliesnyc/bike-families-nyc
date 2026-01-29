export default function RidesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-nyc-orange mb-6">Family Rides</h1>
      <p className="text-xl text-gray-600 mb-8">
        Join us for group rides designed specifically for families. Our rides feature
        safe routes, a pace suitable for all ages, and plenty of rest stops.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-navy">Upcoming Rides</h2>
        <div className="rounded-lg overflow-hidden border border-gray-200">
          <iframe
            src="https://lu.ma/embed/event/646i4gtr/simple"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: "none" }}
            allowFullScreen
            aria-hidden="false"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-navy">What to Expect</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-nyc-orange font-bold">✓</span>
            Family-friendly routes with minimal traffic
          </li>
          <li className="flex items-start gap-3">
            <span className="text-nyc-orange font-bold">✓</span>
            Moderate pace with regular rest stops
          </li>
          <li className="flex items-start gap-3">
            <span className="text-nyc-orange font-bold">✓</span>
            Ride marshals to ensure safety
          </li>
          <li className="flex items-start gap-3">
            <span className="text-nyc-orange font-bold">✓</span>
            All skill levels welcome
          </li>
          <li className="flex items-start gap-3">
            <span className="text-nyc-orange font-bold">✓</span>
            Kids on their own bikes, in trailers, or on cargo bikes
          </li>
        </ul>
      </section>
    </div>
  );
}
