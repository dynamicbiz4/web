import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Grid = ({ data, title }) => {
  return (
    <>
      <Head>
        <title>Portfolio | Dynamic Biz</title>
      </Head>

      <section className="container max-w-5xl mt-6 pt-4" id="works">
        <h1 className="text-4xl font-semibold">{title}</h1>

        <div className="grid grid-cols-2 gap-4 mt-4 mb-8 md:grid-cols-2 sm:grid-cols-1">
          {data.map(({ title, thumbnail, url, stack }, index) => {
            return (
              <div
                className="bg-gray-300 dark:bg-neutral-800 dark:text-white rounded-md overflow-hidden"
                key={index}
              >
                <Link href={url} target="_blank">
                  <div className="relative group h-60">
                    <Image
                      src={thumbnail}
                      width={400}
                      height={200}
                      className="rounded-md w-full h-full object-cover group-hover:scale-105 duration-300 ease-in-out transition-transform"
                      alt={title}
                    />

                    <div className="bg-black absolute w-full h-full top-0 opacity-0 group-hover:opacity-60 rounded-md" />
                    <div className="absolute left-2 bottom-2 opacity-0 group-hover:opacity-100">
                      <p className="mx-4 mt-4 mb-2 text-sm bg-zinc-400 dark:bg-zinc-600 text-neutral-900 dark:text-white px-2 w-fit">
                        {stack}
                      </p>
                      <p className="mx-4 pb-2 text-2xl font-semibold text-white">
                        {title}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Grid;
