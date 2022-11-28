import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container max-w-5xl mt-6 py-8 bg-zinc-900 flex items-start justify-between sm:block sm:space-y-2 sm:text-center">
      <p>
        Copyright &copy; {new Date().getFullYear()} <span>Dynamic Biz</span>. All Rights Reserved.
      </p>

      <div className="flex items-center gap-4 sm:justify-center">
        <p className="underline underline-offset-4">
          <Link href="/privacy-policy">Privacy Policy</Link>
        </p>
        <p className="underline underline-offset-4">
          <Link href="/terms-and-conditions">Terms and Conditions</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
