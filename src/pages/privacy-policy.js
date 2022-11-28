import Head from "next/head";
import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Dynamic Biz | Innovate • Connect • Inspire • Invests</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </Head>

      <header>
        <nav className="container max-w-5xl flex items-center justify-between h-20">
          <Link href="/">
            <div className="flex gap-2 items-center">
              <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 424.36 424.36" className="h-11">
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
        </nav>
      </header>

      <main className="container max-w-5xl scroll-smooth">
        <h1 className="text-4xl font-semibold mb-6">Privacy Policy</h1>

        <p className="mb-2">
          <strong>Dynamic Biz</strong> is committed to providing quality services to you and this policy outlines our ongoing obligations to you in respect of how we manage your Personal Information.
        </p>
        <p className="mb-2">
          We have adopted the PERSONAL DATA PROTECTION ACT, No. 9 OF 2022. The PDPA govern the way in which we collect, use, disclose, store, secure and dispose of your Personal Information.
        </p>
        <p className="mb-2">
          A copy of the Sri Lankan Privacy Principles may be obtained from the website of The Office of the Privacy Commissioner at{" "}
          <a href="https://www.parliament.lk/uploads/acts/gbills/english/6242.pd" target="_blank" rel="noopener">
            <span>https://www.parliament.lk/uploads/acts/gbills/english/6242.pd</span>
          </a>
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-1">What is Personal Information and why do we collect it?</h3>
        <p className="mb-2">
          Personal Information is information or an opinion that identifies an individual. Examples of Personal Information we collect include: names, addresses, email addresses, phone and facsimile
          numbers.
        </p>
        <p className="mb-2">
          This Personal Information is obtained in many ways including <strong>interviews, correspondence, by telephone and facsimile, by email, via our website </strong>
          <a href="about:blank" target="_blank" rel="noopener">
            <span>
              <strong>https://dynamicbiz.org.lk,</strong>
            </span>
          </a>
          <strong>from our website, from media and publications, from other publicly available sources, </strong>and from third parties. We don&rsquo;t guarantee website links or policy of authorised
          third parties.
        </p>
        <p className="mb-2">
          We collect your Personal Information for the primary purpose of providing our services to you, providing information to our clients and marketing. We may also use your Personal Information
          for secondary purposes closely related to the primary purpose, in circumstances where you would reasonably expect such use or disclosure. You may unsubscribe from our mailing/marketing lists
          at any time by contacting us in writing.
        </p>
        <p className="mb-2">When we collect Personal Information we will, where appropriate and where possible, explain to you why we are collecting the information and how we plan to use it.</p>
        <h3 className="text-xl font-semibold mt-4 mb-1">Sensitive Information</h3>
        <p className="mb-2">
          Sensitive information is defined in the Privacy Act to include information or opinion about such things as an individual's racial or ethnic origin, political opinions, membership of a
          political association, religious or philosophical beliefs, membership of a trade union or other professional body, criminal record or health information.
        </p>
        <p className="mb-2">Sensitive information will be used by us only:</p>
        <ul className="list-disc ml-6">
          <li>For the primary purpose for which it was obtained</li>
          <li>For a secondary purpose that is directly related to the primary purpose</li>
          <li>With your consent; or where required or authorised by law.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-1">Third Parties</h3>
        <p className="mb-2">
          Where reasonable and practicable to do so, we will collect your Personal Information only from you. However, in some circumstances we may be provided with information by third parties. In
          such a case we will take reasonable steps to ensure that you are made aware of the information provided to us by the third party.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-1">Disclosure of Personal Information</h3>
        <p className="mb-2">Your Personal Information may be disclosed in a number of circumstances including the following:</p>
        <ul className="list-disc ml-6">
          <li>Third parties where you consent to the use or disclosure; and</li>
          <li>Where required or authorised by law.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-1">Security of Personal Information</h3>
        <p className="mb-2">Your Personal Information is stored in a manner that reasonably protects it from misuse and loss and from unauthorized access, modification or disclosure.</p>
        <p className="mb-2">
          When your Personal Information is no longer needed for the purpose for which it was obtained, we will take reasonable steps to destroy or permanently de-identify your Personal Information.
          However, most of the Personal Information is or will be stored in client files which will be kept by us for a minimum of 7 years.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-1">Access to your Personal Information</h3>
        <p className="mb-2">
          You may access the Personal Information we hold about you and to update and/or correct it, subject to certain exceptions. If you wish to access your Personal Information, please contact us
          in writing.
        </p>
        <p className="mb-2">
          <strong>Dynamic Biz </strong>will not charge any fee for your access request, but may charge an administrative fee for providing a copy of your Personal Information.
        </p>
        <p className="mb-2">In order to protect your Personal Information we may require identification from you before releasing the requested information.</p>
        <h3 className="text-xl font-semibold mt-4 mb-1">Maintaining the Quality of your Personal Information</h3>
        <p className="mb-2">
          It is an important to us that your Personal Information is up to date. We will take reasonable steps to make sure that your Personal Information is accurate, complete and up-to-date. If you
          find that the information we have is not up to date or is inaccurate, please advise us as soon as practicable so we can update our records and ensure we can continue to provide quality
          services to you.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-1">Policy Updates</h3>
        <p className="mb-2">This Policy may change from time to time and is available on our website.</p>
        <h3 className="text-xl font-semibold mt-4 mb-1">Privacy Policy Complaints and Enquiries</h3>
        <p className="mb-2">If you have any queries or complaints about our Privacy Policy please contact us at:</p>
        <p className="mb-2">
          <strong>Dynamic Biz</strong>
        </p>
        <p className="mb-2">
          <strong>dynamicbiz4@gmail.com</strong>
        </p>
        <p className="mb-2">
          <strong>(+94)-767881256</strong>
        </p>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
