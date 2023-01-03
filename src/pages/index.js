import Head from "next/head";
import { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Showcase from "../components/Grid";
import Team from "../components/Team";

export default function Home() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <Head>
        <title>Dynamic Biz | Innovate • Connect • Inspire • Invests</title>
      </Head>

      <header
        className={`sticky ${
          visible
            ? "top-0 bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white  duration-200 transition-colors"
            : undefined
        } z-20`}
      >
        <Navbar showNavLinks={true} />
      </header>

      {/* <header
        className={`fixed top-0 right-0 left-0 text-neutral-900 dark:bg-neutral-900 dark:text-white  duration-200 transition-colors z-20`}
      >
        <Navbar showNavLinks={true} />
      </header> */}

      <main className="overflow-x-hidden scroll-smooth">
        <Hero />
        <About />
        <Services />
        <Team />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
