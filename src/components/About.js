import React from "react";

const About = () => {
  return (
    <section className="pt-4" id="about">
      <h1 className="text-center text-4xl font-semibold">About Us</h1>

      <div className="my-8 flex gap-8 xmd:flex-col">
        <div>
          <iframe
            width="480"
            height="270"
            className="xmd:w-full xmd:h-80 outline-none"
            src="https://www.youtube.com/embed/3BXUpkW7krA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div>
          <p>
            <span className="font-semibold">Dynamic Biz</span> is an IT solution company founded by entrepreneur <i>Isuru Chandimal Peiris</i>, inspired by the desire to digitalize Sri Lanka. It
            started in 2022 with six of his friends. We innovate, connect, inspire, and invest our knowledge to give a better dynamic experience to our clients, and we are always working on that
            vision. Our team is always striving to provide the most efficient service to our clients. We are an ambitious, courageous, inspired, and knowledgeable team to provide our maximum effort to
            our clients. Our aim is to provide better service, inspire, and also give the best experience for our beloved clients.
          </p>
          <p className="mt-4">
            Innovate • Connect • Inspire • Invests
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-10 md:grid-cols-2 sm:grid-cols-1">
        <div className="bg-zinc-800 p-3 rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">Vision</h3>
          <p>Dynamic Biz is moving forward with changing world with modern technology &amp; becoming a world to provide technical solutions.</p>
        </div>

        <div className="bg-zinc-800 p-3 rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">Mission</h3>
          <p>To develop lasting client relationships by providing exceptional stakeholder value in an environment of trust &amp; respect.</p>
        </div>

        <div className="bg-zinc-800 p-3 rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">Core values</h3>
          <div className="flex gap-12">
            <ul className="ml-4 list-disc">
              <li>Integrity</li>
              <li>HSE</li>
              <li>Quality</li>
            </ul>
            <ul className="ml-6 list-disc">
              <li>Reliability</li>
              <li>Team Work</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
