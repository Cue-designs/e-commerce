import React from "react";
import Newsletter from "../components/ui/Newsletter";

const BrandStory = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 px-6 sm:px-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center mt-10">
          <h1 className="text-5xl px-3 sm:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-yellow-500">Story</span>
          </h1>
          <p className="text-lg text-gray-600">
            From street culture to global phenomenon. El Chapo is more than a
            brand—it's a movement.
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 py-20">
        <div className="space-y-12">
          {/* Origin */}
          <div>
            <h2 className="text-3xl font-bold text-yellow-500 mb-6">
              The Beginning
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              El Chapo was born from a simple vision: to create streetwear that
              captures the boldness, confidence, and rebellious spirit of urban
              culture. What started as a passion project in 2020 has evolved
              into a global brand worn by thousands of trendsetters.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Every piece is designed with intention. From the iconic logo to
              the perfectly curated color palettes, El Chapo represents
              authenticity in a world of imitation.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h2 className="text-3xl font-bold text-yellow-500 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              We believe in exclusive culture. Our drop-based model ensures
              scarcity and value. Limited quantities. Premium quality.
              Uncompromising design. These aren't just products—they're pieces
              of art that make a statement.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Every collection tells a story. Every drop is an event. We're not
              following trends; we're creating them.
            </p>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-3xl font-bold text-yellow-500 mb-6">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Authenticity",
                  desc: "Real designs for real people. No compromises.",
                },
                {
                  title: "Quality",
                  desc: "Premium materials. Expert craftsmanship. Every detail matters.",
                },
                {
                  title: "Exclusivity",
                  desc: "Limited drops. Unique pieces. Designed for the bold few.",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-yellow-500 transition"
                >
                  <h3 className="text-yellow-500 font-bold text-lg mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Community */}
          <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl border border-gray-200">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">
              The Community
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              El Chapo is built by our community. From exclusive Discord access
              to early drop notifications, VIP members get the full experience.
              We're not just selling products—we're building a movement.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Early Access",
                "Exclusive Drops",
                "VIP Discord",
                "Member Events",
                "Behind-the-Scenes",
                "Custom Pieces",
                "Lifetime Loyalty",
                "Global Community",
              ].map((perk) => (
                <div
                  key={perk}
                  className="bg-yellow-50 border border-yellow-500 rounded-lg p-4 text-center text-sm font-semibold text-yellow-600"
                >
                  {perk}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gradient-to-r from-gray-50 to-white py-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet The <span className="text-yellow-500">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "AYO AKINWANDE", role: "Founder & Creative Director" },
              { name: "AJAYI JOSEPH", role: "Operations Manager" },
              { name: "CAJETAN EMMANUEL", role: "Lead Designer" },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-lg mx-auto mb-4"></div>
                <h3 className="text-lg font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-yellow-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default BrandStory;
