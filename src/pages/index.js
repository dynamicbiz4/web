import Head from "next/head";
import { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Showcase from "../components/Showcase";
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
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </Head>

      <header className={`sticky ${visible && "top-0 bg-gray-200 text-neutral-900 dark:bg-dynamic-dark dark:text-white"} z-20`}>
        <Navbar />
      </header>

      <main className="container max-w-5xl scroll-smooth">
        <Hero />
        <About />
        <Services />
        <Showcase />
        <Team />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
