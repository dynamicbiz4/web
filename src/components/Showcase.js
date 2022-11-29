import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

const Showcase = () => {
  return (
    <section className="mt-6 pt-4" id="works">
      <h1 className="text-center text-4xl font-semibold">Featured Works</h1>

      <div className="grid grid-cols-3 gap-4 my-8 md:grid-cols-2 sm:grid-cols-1">
        {projects.map(({ title, thumbnail, url, stack }, index) => {
          return (
            <div className="bg-gray-300 dark:bg-zinc-800 dark:text-white rounded-md group" key={index}>
              <Link href={url} target="_blank">
                <div className="relative">
                  <Image src={thumbnail} width={400} height={200} className="rounded-t-md w-full h-auto" />
                  <div className="opacity-0 group-hover:opacity-100 duration-150 ease-in-out transition-opacity">
                    <div className="bg-black absolute w-full h-full top-0 opacity-70 rounded-t-md" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="fill-white hover:opacity-100 h-12 block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4 142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zm144 224c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.6-8.4-.2 2.8-.4 5.5-.4 8.4 0 53 43 96 96 96s96-43 96-96-43-96-96-96c-2.8 0-5.6.1-8.4.4 5.3 9.3 8.4 20.1 8.4 31.6z" />
                    </svg>
                  </div>
                </div>
              </Link>
              <p className="mx-4 mt-4 mb-2 text-sm bg-zinc-400 dark:bg-zinc-600 text-neutral-900 px-2 w-fit">{stack}</p>
              <p className="mx-4 pb-2 text-2xl font-semibold">{title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Showcase;
