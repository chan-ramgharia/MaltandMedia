import React from 'react';

const founders = [
  {
    name: "Chanpreet Singh",
    role: "Founder & Creative Director",
    photo: "/photo.png",// Place your image in public/images/
    bio: "Chanpreet Singh is a tech-driven marketer and founder of Malt & Media. With a background in engineering and a passion for storytelling, he helps brands craft meaningful digital experiences through strategy, design, and smart technology.."
  },
//   {
//     name: "Priya Patel",
//     role: "Co-Founder & Strategy Lead",
//     photo: "/images/founder-priya.jpg",
//     bio: "Priya brings strategic vision and a love for analytics. Her expertise in campaign strategy and automation ensures every project delivers measurable results and lasting impact."
//   }
];

const OurStory = () => (
  <section id="our-story" className="py-20 bg-white relative">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block px-3 py-1 bg-secondary-500 bg-opacity-20 text-primary-900 text-sm font-medium rounded-full mb-4">
          Our Story
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-900 mb-6">
          The Malt & Media Journey
        </h2>
        <p className="text-lg text-primary-700 font-accent">
          Malt & Media was born from a shared love of creativity, strategy, and the art of storytelling. Like a perfectly aged whiskey, our agency blends diverse talents and perspectives to craft marketing solutions with depth, character, and impact.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {founders.map((founder) => (
          <div key={founder.name} className="flex flex-col items-center text-center max-w-sm">
            <img
              src={founder.photo}
              alt={founder.name}
              className="w-40 h-40 object-cover rounded-full shadow-lg mb-6 border-4 border-primary-600"
            />
            <h3 className="text-xl font-semibold text-primary-900">{founder.name}</h3>
            <p className="text-primary-600 font-medium mb-2">{founder.role}</p>
            <p className="text-primary-700">{founder.bio}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 max-w-3xl mx-auto text-center">
        <p className="text-lg text-primary-800 font-accent">
          Today, Malt & Media partners with brands who want to stand out and make a difference. Our story is still being written—let’s create the next chapter together.
        </p>
      </div>
    </div>
  </section>
);

export default OurStory;