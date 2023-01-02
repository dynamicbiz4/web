import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = ({ showNavLinks }) => {
  const router = useRouter();
  const hash = router.asPath.split("#")[1];

  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="container max-w-5xl py-3 flex items-center justify-between sm:flex-col sm:gap-2">
      <Link href="/">
        <div className="flex gap-2 items-center">
          <svg
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 424.36 424.36"
            className="h-11 sm:h-9"
          >
            <circle cx="212.18" cy="212.18" r="212.18" fill="#f79050" />
            <circle cx="212.18" cy="212.18" r="162.65" fill="#f1f2f2" />
            <path
              d="M61.82 150.07c7.28-14.37 24.26-20 37.09-13.9 10.65 5.09 16.95 17.61 14.74 30.47-2.53 6-21.67 53.13 4.13 99.1 17.9 31.89 46.85 44.36 54.42 47.36 9.77 3.87 40.93 14.57 76.34 1.35 39-14.57 55.93-48 61.43-61.18 17.31-41.44 3.77-78.56.68-86.46a30.28 30.28 0 0 1 53.79-12.6 165.9 165.9 0 0 1 10.38 56.17 163.94 163.94 0 0 1-16.81 73.89 162 162 0 0 1-25.58 37.42c-24.61 26.75-67.56 53.56-121.87 53.12-9.95-.08-73.1-1.65-119.82-53.79-40.35-45-41.38-97.54-41.18-111.33a164.09 164.09 0 0 1 12.26-59.62Z"
              fill="#72ccd8"
            />
            <circle cx="212.18" cy="212.18" r="108.52" fill="#231f20" />
          </svg>
          <h1 className="text-3xl font-bold">Dynamic Biz</h1>
        </div>
      </Link>

      <ul className="flex items-center gap-4">
        {showNavLinks && (
          <>
            <li
              className={
                hash == "about" ? "font-semibold text-orange-500" : undefined
              }
            >
              <Link href="#about">Why Us?</Link>
            </li>
            <li
              className={
                hash == "services" ? "font-semibold text-orange-500" : undefined
              }
            >
              <Link href="#services">What We Do?</Link>
            </li>
            <li
              className={
                hash == "works" ? "font-semibold text-orange-500" : undefined
              }
            >
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li
              className={
                hash == "team" ? "font-semibold text-orange-500" : undefined
              }
            >
              <Link href="#team">Team</Link>
            </li>
            <li
              className={
                hash == "contact" ? "font-semibold text-orange-500" : undefined
              }
            >
              <Link href="#contact">Contact</Link>
            </li>
          </>
        )}

        <li
          className="theme-toggle"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 473.931 473.931"
              className="h-8"
            >
              {resolvedTheme === "dark" ? (
                <>
                  <circle
                    cx="236.966"
                    cy="236.966"
                    r="236.966"
                    fill="#f2be3e"
                  />
                  <circle
                    cx="236.966"
                    cy="236.966"
                    r="117.154"
                    fill="#f1eb75"
                  />
                </>
              ) : (
                <>
                  <circle
                    cx="236.966"
                    cy="236.966"
                    r="236.966"
                    fill="#22272E"
                  />
                  <circle
                    cx="236.966"
                    cy="236.966"
                    r="117.154"
                    fill="#717171"
                  />
                </>
              )}
            </svg>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
