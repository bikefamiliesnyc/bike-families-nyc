import NewsletterSignup from "@/components/NewsletterSignup";
import ContactForm from "@/components/ContactForm";

export default function ParticipatePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-nyc-orange mb-6">Participate</h1>
      <p className="text-xl text-gray-600 mb-8">
        Bike Families NYC is powered by volunteers and community members like you.
        There are many ways to get involved!
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-navy">Ways to Get Involved</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-nyc-orange pl-6 py-2">
            <h3 className="font-semibold text-lg mb-2 text-nyc-orange">Join a Ride</h3>
            <p className="text-gray-600">The easiest way to start! Come out to one of our family rides and meet the community.</p>
          </div>
          <div className="border-l-4 border-nyc-blue pl-6 py-2">
            <h3 className="font-semibold text-lg mb-2 text-nyc-blue">Volunteer</h3>
            <p className="text-gray-600">Help with ride marshalling, event planning, outreach, or bike maintenance.</p>
          </div>
          <div className="border-l-4 border-nyc-blue pl-6 py-2">
            <h3 className="font-semibold text-lg mb-2 text-nyc-blue">Start a Bike Bus</h3>
            <p className="text-gray-600">Organize a Bike Bus for your child&apos;s school and help more kids bike safely.</p>
          </div>
          <div className="border-l-4 border-nyc-orange pl-6 py-2">
            <h3 className="font-semibold text-lg mb-2 text-nyc-orange">Advocate</h3>
            <p className="text-gray-600">Join us in pushing for safer streets and better bike infrastructure in NYC.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-navy">Newsletter</h2>
        <NewsletterSignup />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-navy">Contact Us</h2>
        <ContactForm />
      </section>
    </div>
  );
}
