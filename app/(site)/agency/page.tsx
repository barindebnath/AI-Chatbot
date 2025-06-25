"use client";
import Sidebar, { NavItem } from "@/components/Sidebar";
import Link from "next/link";

export default function AgencyPage() {
  // Define navigation items for this specific page
  const navItems: NavItem[] = [
    { id: "about", label: "About Us", href: "#about" },
    { id: "approach", label: "Our Approach", href: "#approach" },
    { id: "team", label: "Team", href: "#team" },
    { id: "values", label: "Values", href: "#values" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
      {/* Sidebar */}
      <aside className="md:col-span-3">
        <Sidebar items={navItems} />
      </aside>

      {/* Main content area */}
      <section className="md:col-span-9">
        {/* Hero section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            MoonLab© Agency
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            We are a creative collective that transforms brands through
            strategic design and innovative digital solutions.
          </p>
        </div>

        {/* About us section */}
        <div id="about" className="mb-20 scroll-mt-8">
          <h2 className="text-3xl font-semibold mb-8">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                Founded in 2018, MoonLab© has evolved from a small design studio
                to a full-service creative agency. We believe that exceptional
                design should be accessible to businesses of all sizes.
              </p>
              <p className="text-lg">
                Our international team brings diverse perspectives to every
                project, allowing us to craft unique solutions that resonate
                across markets and cultures.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
              <p className="text-gray-500 italic text-center p-6">
                Agency office image placeholder
              </p>
            </div>
          </div>
        </div>

        {/* Our approach section */}
        <div id="approach" className="mb-20 scroll-mt-8">
          <h2 className="text-3xl font-semibold mb-8">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium mb-3">Discovery</h3>
              <p className="text-gray-700">
                We immerse ourselves in your brand&apos;s story, audience, and
                objectives to build a strategic foundation.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium mb-3">Creation</h3>
              <p className="text-gray-700">
                Our designers and developers collaborate to craft solutions that
                are both beautiful and functional.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium mb-3">Evolution</h3>
              <p className="text-gray-700">
                We measure, refine, and optimize to ensure your brand continues
                to grow and succeed.
              </p>
            </div>
          </div>
        </div>

        {/* Team section */}
        <div id="team" className="mb-20 scroll-mt-8">
          <h2 className="text-3xl font-semibold mb-8">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Team members */}
            {[1, 2, 3, 4, 5, 6].map((member) => (
              <div key={member} className="group">
                <div className="aspect-square rounded-xl bg-gray-100 mb-4 overflow-hidden group-hover:bg-black transition-colors">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 group-hover:text-white">
                    Team member photo
                  </div>
                </div>
                <h3 className="text-lg font-medium">Team Member {member}</h3>
                <p className="text-gray-600">Creative Director</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values section */}
        <div id="values" className="mb-12 scroll-mt-8">
          <h2 className="text-3xl font-semibold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Innovation</h3>
                <p className="text-gray-700">
                  We push boundaries and explore new possibilities in design and
                  technology.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Collaboration</h3>
                <p className="text-gray-700">
                  We work closely with our clients to co-create solutions that
                  truly represent their vision.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Quality</h3>
                <p className="text-gray-700">
                  We&apos;re committed to excellence in every detail of our
                  work.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Integrity</h3>
                <p className="text-gray-700">
                  We build relationships based on trust, transparency, and
                  mutual respect.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Ready to transform your brand?
            </h2>
            <p className="text-gray-600">
              Let&apos;s discuss how we can help you achieve your goals.
            </p>
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
