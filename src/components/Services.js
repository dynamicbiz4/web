import React from "react";

const Services = () => {
  return (
    <section className="mt-6 pt-4" id="services">
      <h1 className="text-center text-4xl font-semibold">What We Do</h1>

      <div className="mt-4 grid grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
        <div className=" bg-zinc-800 p-4 rounded-md">
          <div className="bg-zinc-900 p-5 rounded-3xl w-20 h-20 shadow-lg shadow-neutral-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-full w-full fill-zinc-200 block m-auto">
              <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0s224 35.8 224 80zm-54.8 134.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432v-85.9z" />
            </svg>
          </div>

          <h2 className="mt-4 mb-2 text-2xl font-medium leading-tight">Web Development</h2>
          <p className="opacity-90">We make every effort to provide cost-effective, high-quality websites with the latest web technological ideas.</p>
        </div>

        <div className=" bg-zinc-800 p-4 rounded-md">
          <div className="bg-zinc-900 p-5 rounded-3xl w-20 h-20 shadow-lg shadow-neutral-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-full w-full fill-zinc-200 block m-auto">
              <path d="M495.9 166.6c3.2 8.7.5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4l-55.6 17.8c-8.8 2.8-18.6.3-24.5-6.8-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4c-1.1-8.4-1.7-16.9-1.7-25.5s.6-17.1 1.7-25.4l-43.3-39.4c-6.9-6.2-9.6-15.9-6.4-24.6 4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2 5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8 8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80z" />
            </svg>
          </div>

          <h2 className="mt-4 mb-2 text-2xl font-medium leading-tight">Software Development</h2>
          <p className="opacity-90">We will identify a custom solution to fit your idea, timeline, budget and build the application.</p>
        </div>

        <div className=" bg-zinc-800 p-4 rounded-md">
          <div className="bg-zinc-900 p-5 rounded-3xl w-20 h-20 shadow-lg shadow-neutral-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-full w-full fill-zinc-200 block m-auto">
              <path d="M192 96c26.5 0 48-21.5 48-48S218.5 0 192 0s-48 21.5-48 48 21.5 48 48 48zm-8 384V352h16v128c0 17.7 14.3 32 32 32s32-14.3 32-32V192h136c17.7 0 32-14.3 32-32s-14.3-32-32-32h-16V64h192v192H384v-32h-64v48c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48v80H177.1c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9l28.7-47.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32z" />
            </svg>
          </div>

          <h2 className="mt-4 mb-2 text-2xl font-medium leading-tight">IT Consulting</h2>
          <p className="opacity-90">We help you to overcome agile challenges by matching technological strategies with business strategies.</p>
        </div>

        <div className=" bg-zinc-800 p-4 rounded-md">
          <div className="bg-zinc-900 p-5 rounded-3xl w-20 h-20 shadow-lg shadow-neutral-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-full w-full fill-zinc-200 block m-auto">
              <path d="M256 64h128v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-48v-32h256v32h-48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-48v-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352v-32h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448v-64h128v64H96zm320-64h128v64H416v-64z" />
            </svg>
          </div>

          <h2 className="mt-4 mb-2 text-2xl font-medium leading-tight">System Development</h2>
          <p className="opacity-90">We help you in the process of defining, designing, testing, and implementing a new software application.</p>
        </div>

        <div className=" bg-zinc-800 p-4 rounded-md">
          <div className="bg-zinc-900 p-5 rounded-3xl w-20 h-20 shadow-lg shadow-neutral-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-full w-full fill-zinc-200 block m-auto">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352c79.5 0 144-64.5 144-144S287.5 64 208 64 64 128.5 64 208s64.5 144 144 144z" />
            </svg>
          </div>

          <h2 className="mt-4 mb-2 text-2xl font-medium leading-tight">SEO</h2>
          <p className="opacity-90">We can improve the quality and quantity of website traffic to your website from search engines.</p>
        </div>

        <div className=" bg-zinc-800 p-4 rounded-md">
          <div className="bg-zinc-900 p-5 rounded-3xl w-20 h-20 shadow-lg shadow-neutral-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-full w-full fill-zinc-200 block m-auto">
              <path d="m368.4 18.3-55.7 55.8 125.2 125.2 55.7-55.7c21.9-21.9 21.9-57.3 0-79.2l-46-46.1c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8-144.1 43.2c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4l153.6-153.5c-3-6.3-4.7-13.3-4.7-20.7 0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z" />
            </svg>
          </div>

          <h2 className="mt-4 mb-2 text-2xl font-medium leading-tight">UI/UX Designing</h2>
          <p className="opacity-90">We offer User Interface (UI) design along with User Experience (UX) development.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
