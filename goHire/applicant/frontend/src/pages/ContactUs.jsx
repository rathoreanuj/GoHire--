import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import anujImage from "../assets/images/AnujRathore.png";

const teamMembers = [
  {
    name: "Anuj Rathore",
    email: "anuj.r23@iiits.in",
    phone: "9340041042",
    image: anujImage,
  },
];

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">

      <section className="pt-14 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
  Contact us
</h1>

<h2 className="pt-4 text-2xl md:text-3xl font-bold text-gray-800">
  Our team at <span className="text-blue-600">Go</span>
  <span className="text-yellow-400">Hire</span> is here to help
</h2>

        <p className="text-gray-600 max-w-xl mx-auto">
          Get support 24/7 with our dedicated team. Reach out to any of our
          experts for quick assistance.
        </p>
      </section>

      {/* Team Cards Section */}
      <section className="pb-24">
  <div className="max-w-4xl mx-auto px-6">

    <div className="grid grid-cols-1 max-w-sm mx-auto">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-2xl p-6 text-center
                     shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
          />

          <h3 className="font-semibold text-lg">{member.name}</h3>

          <a
            href={`mailto:${member.email}`}
            className="text-blue-600 text-sm block hover:underline"
          >
            {member.email}
          </a>

          <p className="text-sm text-gray-600 mt-1">{member.phone}</p>
        </div>
      ))}
    </div>

  </div>
</section>

    </div>
  );
};

export default Contact;
