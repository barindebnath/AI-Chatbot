import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
      {/* Sidebar */}
      <aside className="md:col-span-3">
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-gray-400 mr-3"></span>
            <span>Services</span>
          </li>
          <li className="ml-5">( Web Design )</li>
          <li className="ml-5">( Branding )</li>
          <li className="ml-5">( Social Media )</li>
          <li className="ml-5 flex items-center mt-2">
            <Link href="/services" className="inline-flex items-center text-sm">
              View all <span className="ml-1">↗</span>
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main content area */}
      <section className="md:col-span-9">
        {/* Project cards showcase */}
        <div className="relative h-80 md:h-96 mb-12 perspective-1000">
          {/* These would ideally be proper images in your public folder */}
          <div className="absolute top-10 left-24 w-72 h-40 bg-gray-900 rounded-xl shadow-lg transform rotate-12 z-20 overflow-hidden">
            <div className="p-5 text-white">
              <h3 className="text-xl font-bold">Shello</h3>
              <p className="text-sm">Blocking 88/12.</p>
              <p className="text-xs opacity-70">design/deeco</p>
            </div>
          </div>

          <div className="absolute top-20 left-48 w-72 h-40 bg-black rounded-xl shadow-lg transform rotate-6 z-30 overflow-hidden">
            <div className="p-5 text-white">
              <p className="text-xs">
                A exclusive experience for this element where project named to
                get elements on products
              </p>
            </div>
          </div>

          <div className="absolute top-0 right-10 w-64 h-64 bg-black rounded-xl shadow-lg transform -rotate-6 z-10 overflow-hidden">
            <div className="flex justify-center items-center h-full">
              <div className="w-24 h-24 bg-red-500 transform rotate-45"></div>
            </div>
          </div>

          <div className="absolute bottom-0 right-32 w-56 h-56 bg-gray-300 rounded-xl shadow-lg overflow-hidden">
            <div className="flex justify-center items-center h-full">
              <div className="w-32 h-32 rounded-full border-8 border-pink-500 transform"></div>
            </div>
          </div>

          <div className="absolute top-24 left-0 w-48 h-64 bg-amber-800 rounded-xl shadow-lg transform -rotate-12 z-0 overflow-hidden">
            <div className="p-5">
              <div className="w-16 h-16 mx-auto mt-8 rounded-full bg-amber-200 flex items-center justify-center">
                <div className="text-red-600 text-xs">Whisky Brand</div>
              </div>
            </div>
          </div>
        </div>

        {/* Agency title and CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-16">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              MoonLab© Agency
            </h1>
            <p className="text-xl md:text-2xl">Your brand is our work.</p>
          </div>
          <Link
            href="/contact"
            className="mt-6 md:mt-0 bg-black text-white px-6 py-3 rounded-full"
          >
            Get Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
