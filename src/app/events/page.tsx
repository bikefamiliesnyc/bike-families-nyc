export default function EventsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-nyc-blue mb-6">Events</h1>
      <p className="text-xl text-gray-600 mb-8">
        From community rides to advocacy events, there&apos;s always something happening
        with Bike Families NYC. Join us!
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-navy">Upcoming Events</h2>
        <div className="rounded-lg overflow-hidden border border-gray-200">
          <iframe
            src="https://lu.ma/embed/event/nnillx7k/simple"
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
        <h2 className="text-2xl font-semibold mb-4 text-navy">Event Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-nyc-orange rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-lg mb-2 text-nyc-orange">Community Rides</h3>
            <p className="text-gray-600">Regular group rides for families of all experience levels.</p>
          </div>
          <div className="border-2 border-nyc-blue rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-lg mb-2 text-nyc-blue">Workshops</h3>
            <p className="text-gray-600">Learn bike maintenance, safety skills, and more.</p>
          </div>
          <div className="border-2 border-nyc-blue rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-lg mb-2 text-nyc-blue">Advocacy Events</h3>
            <p className="text-gray-600">Join us in making NYC streets safer for biking families.</p>
          </div>
          <div className="border-2 border-nyc-orange rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-lg mb-2 text-nyc-orange">Social Gatherings</h3>
            <p className="text-gray-600">Meet other bike families at picnics and meetups.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
