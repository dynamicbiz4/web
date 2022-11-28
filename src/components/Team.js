import Image from "next/image";
import { team } from "../data/team";

const Team = () => {
  return (
    <section className="mt-6 pt-4" id="team">
      <h1 className="text-center text-4xl font-semibold">Our Team</h1>

      <div className="row my-8 pb-4 flex gap-6 overflow-auto shrink-0">
        {team.map(({ name, positions, avatar }, index) => {
          return (
            <div className="shrink-0 text-center" key={index}>
              <Image src={avatar} width={200} height={200} className="rounded-full" />

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
      </div>
    </section>
  );
};

export default Team;
