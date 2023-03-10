import Image from "next/image";
import { team } from "../data/team";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Team = () => {
  const { height, width } = useWindowDimensions();

  return (
    <section className="container max-w-5xl text-center mt-6 pt-4" id="team">
      <h1 className="text-4xl font-semibold">Our Team</h1>

      <Swiper
        slidesPerView={width > 920 ? 4 : width > 680 ? 3 : width > 460 ? 2 : width < 460 && 1}
        spaceBetween={5}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper my-8"
        loop={true}
      >
        {team.map(({ name, positions, avatar }, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="h-52 w-52 m-auto">
                <Image src={avatar} width={200} height={200} className="rounded-full h-full w-full block m-auto object-cover" alt={avatar.replace("/team/", "")} />
              </div>
              <div>
                <p className="mt-4 text-xl font-semibold">{name}</p>

                {positions.map((position, index) => {
                  return (
                    <p className="leading-tight text-sm" key={index}>
                      <i>{position}</i>
                    </p>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      

      {/* <div className="row my-8 pb-4 flex gap-6 overflow-auto shrink-0">
        {team.map(({ name, positions, avatar }, index) => {
          return (
            <div className="shrink-0 text-center" key={index}>
              <Image src={avatar} width={200} height={200} className="rounded-full" key={index} />

              <div>
                <p className="mt-4 text-xl font-semibold">{name}</p>

                {positions.map((position) => {
                  return (
                    <p className="leading-tight text-sm">
                      <i>{position}</i>
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div> */}
    </section>
  );
};

export default Team;
