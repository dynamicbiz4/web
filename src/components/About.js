import React from "react";
import { stats } from "../data/stats";

const About = () => {
  return (
    <section className="container max-w-5xl pt-4" id="about">
      <h1 className="text-center text-4xl font-semibold">Why Us?</h1>

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
            We’re experts in this industry, and as a team, we’re committed to
            completing your project on time. As well as being smart, efficient,
            accurate, innovative, and creative souls, we are always striving to
            provide our maximum working output for our clients. As a team, we
            are ambitious, friendly, courageous, and filled with determination
            for the work. Our main goal is to provide better service, inspire,
            and give our clients the best experience possible.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-10 md:grid-cols-2 sm:grid-cols-1">
        <div className="bg-gray-200 dark:bg-neutral-800 dark:text-white p-3 rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">Vision</h3>
          <p>
            Dynamic Biz is moving forward with changing world with modern
            technology &amp; becoming a world to provide technical solutions.
          </p>
        </div>

        <div className="bg-gray-200 dark:bg-neutral-800 dark:text-white p-3 rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">Mission</h3>
          <p>
            To develop lasting client relationships by providing exceptional
            stakeholder value in an environment of trust &amp; respect.
          </p>
        </div>

        <div className="bg-gray-200 dark:bg-neutral-800 dark:text-white p-3 rounded-lg">
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

      {/* <div>
        <h1 className="py-6 text-center text-4xl font-semibold">Partners</h1>

        <div className="grid grid-cols-8 delay-300 ease-in-out transition-colors">
          <div>
            <svg
              viewBox="0 0 197.0956 118.3498"
              xmlns="http://www.w3.org/2000/svg"
              className="grayscale hover:grayscale-0"
            >
              <path d="M65.7744.0003v78.9293L32.8872 59.1973 0 39.4649l32.8872-19.7323z" />
              <path
                d="M65.6578 78.9292V0L98.545 19.7323l32.8872 19.7323L98.545 59.197z"
                fill="#ff914d"
              />
              <path
                d="M131.4378 39.4206v78.9292L98.5506 98.6175 65.6634 78.8852l32.8872-19.7323z"
                fill="#5ce1e6"
              />
              <path
                d="M131.3212 118.3495V39.4203l32.8872 19.7323 32.8872 19.7323-32.8872 19.7323z"
                fill="#737373"
              />
            </svg>
          </div>

          <div></div>
        </div>
      </div> */}

      <div className="grid grid-cols-3 gap-4 mt-10 md:grid-cols-2 sm:grid-cols-1">
        {stats.map(({ title, count }, index) => {
          return (
            <div
              className="border border-gray-300 dark:border-neutral-600 dark:text-white p-3 rounded-lg text-center py-8"
              key={index}
            >
              <div className="flex justify-center">
                <h3 className="text-6xl font-semibold">{count}</h3>
                <p className="text-4xl font-bold ml-1">+</p>
              </div>
              <p className="text-lg font-medium">{title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
