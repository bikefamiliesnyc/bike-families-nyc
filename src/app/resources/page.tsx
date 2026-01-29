export default function ResourcesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-nyc-blue mb-6">Resources</h1>
      <p className="text-xl text-gray-600 mb-8">
        Helpful links, guides, and information for biking families in NYC.
      </p>

      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-navy">NYC Biking Maps & Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ResourceLink
              title="NYC Bike Map"
              description="Official NYC DOT bike map with all bike lanes and greenways"
              href="https://www.nyc.gov/html/dot/html/bicyclists/bikemaps.shtml"
            />
            <ResourceLink
              title="Citi Bike Station Map"
              description="Find Citi Bike stations across NYC"
              href="https://citibikenyc.com/map"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-navy">Safety & Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ResourceLink
              title="Bike New York"
              description="Free bike education classes for all ages and skill levels"
              href="https://www.bike.nyc/"
            />
            <ResourceLink
              title="NYC DOT Bicycle Safety"
              description="Safety tips and rules of the road"
              href="https://www.nyc.gov/html/dot/html/bicyclists/bikesafety.shtml"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-navy">Advocacy Organizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ResourceLink
              title="Transportation Alternatives"
              description="NYC&apos;s leading advocate for walking, biking, and public transit"
              href="https://transalt.org/"
            />
            <ResourceLink
              title="Bike Bus NYC"
              description="Organizing bike buses across New York City schools"
              href="https://www.bikebus.nyc/"
            />
            <ResourceLink
              title="Cycling Without Age"
              description="Giving elderly and less mobile people the right to wind in their hair"
              href="https://cyclingwithoutage.org/"
            />
            <ResourceLink
              title="Kids Over Cars"
              description="Advocating for safer streets and kid-friendly transportation policies"
              href="https://www.kidsovercars.org/"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-navy">Family Biking Gear</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ResourceLink
              title="Cargo Bike Rider"
              description="Reviews and guides for family cargo bikes"
              href="https://www.cargobikerider.com/"
            />
            <ResourceLink
              title="Two Wheeling Tots"
              description="Balance bike and kids bike reviews"
              href="https://www.twowheeling.net/"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-navy">Local Bike Shops</h2>
          <div className="bg-nyc-yellow/20 p-6 rounded-lg">
            <p className="text-navy">
              Looking for a family-friendly bike shop? We&apos;re compiling a list of shops
              that specialize in cargo bikes, kids bikes, and family biking gear.
              Check back soon!
            </p>
          </div>
        </section>

        <section id="kids-books">
          <h2 className="text-2xl font-semibold mb-4 text-navy">Kids Books</h2>
          <p className="text-gray-600 mb-4">
            Get your little ones excited about biking with these great children&apos;s books!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://www.thriftbooks.com/w/duck-on-a-bike_david-shannon/257123/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-100 rounded-lg p-4 hover:border-nyc-orange hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-nyc-orange">Duck on a Bike →</h3>
              <p className="text-gray-600 text-sm mt-1">by David Shannon — A Caldecott Honor winner about a duck who decides to try riding a bike and loves it!</p>
            </a>
            <a
              href="https://www.thriftbooks.com/browse/?b.search=sally%20jean%20bicycle%20queen"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-100 rounded-lg p-4 hover:border-nyc-orange hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-nyc-orange">Sally Jean, the Bicycle Queen →</h3>
              <p className="text-gray-600 text-sm mt-1">by Cari Best — A girl born to ride outgrows her beloved bike Flash and builds a new one from old parts.</p>
            </a>
            <a
              href="https://www.thriftbooks.com/browse/?b.search=red%20bicycle%20jude%20isabella"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-100 rounded-lg p-4 hover:border-nyc-orange hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-nyc-orange">The Red Bicycle →</h3>
              <p className="text-gray-600 text-sm mt-1">by Jude Isabella — The powerful story of a donated bicycle&apos;s journey and impact around the world.</p>
            </a>
            <a
              href="https://www.thriftbooks.com/browse/?b.search=everyone%20can%20learn%20ride%20bicycle%20raschka"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-100 rounded-lg p-4 hover:border-nyc-orange hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-nyc-orange">Everyone Can Learn to Ride a Bicycle →</h3>
              <p className="text-gray-600 text-sm mt-1">by Chris Raschka — A sweet story about that big milestone in every child&apos;s life.</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

function ResourceLink({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block border-2 border-gray-100 rounded-lg p-4 hover:border-nyc-orange hover:shadow-md transition-all"
    >
      <h3 className="font-semibold text-nyc-orange hover:text-nyc-orange-dark transition-colors">
        {title} →
      </h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </a>
  );
}
