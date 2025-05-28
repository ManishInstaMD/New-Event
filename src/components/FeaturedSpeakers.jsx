import React from "react";

const speakers = [
  {
    name: "Dr. Subhojit Mukherjee",
    title: "Head Of India Formulations",
    bio: " At Celsius Healthcare Pvt. Ltd",
    image: "/images/m5.jpeg",
  },
  {
    name: "Mr. Devesh Gangani ",
    title: "Associate General Manager ",
    bio: "At Alkem Laboratories Ltd.",
    image: "/images/m6.jpeg",
  },
  {
    name: "Dr. Pramod Kumar Rajput",
    title: "Global Leadership Coach | Pharma Business Leader | Author ",
    bio: " Sr. Vice President (F.) At Cadila Pharma",
    image: "/images/m7.jpeg",
  },
  {
    name: "Dr. ICS Varma",
    title: "Co-Founder Of Regson Healthcare ",
    bio: " Live Pharma Coalition | ExpertOnBoard.",
    image: "/images/m4.jfif",
  },
];

const FeaturedSpeakers = () => {
  return (
    <section className="py-12" style={{ background: "#d7dde2" }}>
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-800">Speakers</h2>
        <p className="text-gray-600 mt-2">
          Proud to bring inspirational speakers to our conference.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto px-4">
        {speakers.map((speaker, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="w-full h-96 overflow-hidden rounded-t-2xl">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-[90%] h-[520px] object-cover rounded-t-2xl border-b-2 border-gray-200 mx-auto mt-4"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {speaker.name}
              </h3>
              <p className="text-sm text-indigo-600 mb-2">{speaker.title}</p>
              <p className="text-gray-600 text-sm">{speaker.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSpeakers;
