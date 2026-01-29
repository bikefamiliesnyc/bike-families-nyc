export default function CargoBikeLibraryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-nyc-blue mb-6">Cargo Bike Library</h1>
      <p className="text-xl text-gray-600 mb-8">
        Curious about cargo bikes? Our lending library lets you try different models
        before making a purchase decision. Experience how a cargo bike can transform
        your family&apos;s transportation.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-navy">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-nyc-blue/10 p-6 rounded-lg border-l-4 border-nyc-blue">
            <div className="text-3xl font-bold text-nyc-blue mb-2">1</div>
            <h3 className="font-semibold mb-2 text-navy">Browse</h3>
            <p className="text-gray-600">Check out our available bikes and find one that fits your needs.</p>
          </div>
          <div className="bg-nyc-orange/10 p-6 rounded-lg border-l-4 border-nyc-orange">
            <div className="text-3xl font-bold text-nyc-orange mb-2">2</div>
            <h3 className="font-semibold mb-2 text-navy">Reserve</h3>
            <p className="text-gray-600">Book your preferred bike for a trial period.</p>
          </div>
          <div className="bg-nyc-blue/10 p-6 rounded-lg border-l-4 border-nyc-blue">
            <div className="text-3xl font-bold text-nyc-blue mb-2">3</div>
            <h3 className="font-semibold mb-2 text-navy">Ride</h3>
            <p className="text-gray-600">Test it out with your family and see if it&apos;s the right fit.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-navy">Available Bikes</h2>
        <div className="bg-nyc-yellow/20 p-8 rounded-lg text-center text-navy">
          <p className="font-medium">Our bike inventory will be displayed here.</p>
          <p className="mt-2">Contact us to learn about available models!</p>
        </div>
      </section>

      <section className="bg-nyc-orange/10 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-nyc-orange">Become a Bike Librarian</h2>
        <p className="text-gray-700 mb-4">
          Have space to store a cargo bike or a cargo bike you&apos;d like to donate to the community?
          Join our network of volunteer bike librarians! You&apos;ll help families discover the joy of cargo biking.
        </p>
        <a
          href="/participate"
          className="inline-block bg-nyc-orange text-white px-6 py-3 rounded-full font-bold hover:bg-nyc-orange-dark transition-colors"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
}
