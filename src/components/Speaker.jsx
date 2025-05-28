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
  {
    name: "Anil fernandez",
    title: "Founder - SLIM (Strategy, Leadership, Innovation, Marketing) Solutions Visiting Faculty",
    bio: " NMIMS and Corporate Mentor - SIESCOMS",
    image: "/images/m1.jfif",
    className: "rounded-full",
  },
  {
    name: "Thamburaj Anthuvan ",
    title: "Senior Vice President -Sales",
    bio: "Marketing & Digital Transformation ,BU Head, SFE, L&D, USV PVT LTD | PhD Scholar in Pharma Marketing AI & SFE Expert | Researcher & Peer Reviewer | Industry Mentor | Athlete & Artist",
    image: "/images/m2.jfif" ,
  },
  {
    name: "Devdutt Kaushal ",
    title: "Associate Director Business Development Commercial manager LATAM Countries at Cipla",
    bio: " P&L, Product Launches, Cardio-Uro Therapy Strategy",
    image: "/images/m3.jfif",
  },
];

const Speaker = () => {
  return (
    <section className="py-12" style={{ background: "#E1EBF1" }}>
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold" style={{ color: "#0F93CA" }}>Speakers</h2>
        <h5 className="text-gray-600 mt-2">
          Proud to bring inspirational speakers to our conference.
        </h5>
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

export default Speaker;
