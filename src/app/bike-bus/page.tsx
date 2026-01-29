export default function BikeBusPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Bike Bus</h1>
      <p className="text-xl text-gray-600 mb-8">
        A Bike Bus is a group of kids and families who bike to school together along
        a set route. It&apos;s safe, fun, and a great way to start the day!
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Join a Bike Bus?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Safety in Numbers</h3>
            <p className="text-gray-600">A group of cyclists is more visible to drivers and creates a safer environment for everyone.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Build Community</h3>
            <p className="text-gray-600">Get to know other families in your neighborhood and school community.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Healthy Start</h3>
            <p className="text-gray-600">Kids arrive at school energized and ready to learn.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Fun!</h3>
            <p className="text-gray-600">Biking with friends makes the commute something to look forward to.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Active Bike Buses</h2>
        <div className="bg-gray-50 p-8 rounded-lg text-center text-gray-500">
          <p>Current Bike Bus routes will be listed here.</p>
          <p className="mt-2">Contact us to find or start a Bike Bus in your neighborhood!</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Start a Bike Bus</h2>
        <p className="text-gray-700 mb-4">
          Interested in starting a Bike Bus for your school? We can help! Here&apos;s what you need:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>A few interested families to get started</li>
          <li>A route from a neighborhood meeting point to school</li>
          <li>Adult volunteers to lead the ride</li>
          <li>Enthusiasm and a willingness to have fun!</li>
        </ul>
      </section>
    </div>
  );
}
