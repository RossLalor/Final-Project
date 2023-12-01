import Image from "next/image";
import "../app/globals.css";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen bg-cover bg-[url('../images/background.svg')]">
      <div className="backdrop-blur-[3px] min-h-screen">
        <div className="flex justify-center py-4">
          <h1 className="backdrop-blur-md bg-white/10 drop-shadow-lg font-extrabold sm:text-[3rem] py-8 px-4 max-w-4xl text-white">
            Leccy cars innit ®️
          </h1>
        </div>

        <div className="flex justify-center py-10">
          <div className="max-w-screen-lg mx-auto grid grid-cols-2 gap-3">
            <div className="text-white-100 text-center hover:-translate-y-0 hover:scale-105 duration-500">
              Sustainable Development Goal 7 (SDG 7 or Global Goal 7) is one of
              17 Sustainable Development Goals established by the United Nations
              General Assembly in 2015. It aims to "Ensure access to affordable,
              reliable, sustainable and modern energy for all."[1] Access to
              energy is an important pillar for the wellbeing of the people as
              well as for economic development and poverty alleviation.[2] The
              goal has five targets to be achieved by 2030.[2] Progress towards
              the targets is measured by six indicators.[2] Three out of the
              five targets are outcome targets: Universal access to modern
              energy; increase global percentage of renewable energy; double the
              improvement in energy efficiency. The remaining two targets are
              means of implementation targets[3]: 
              <div className="inline-block rounded-xl sm:text-[3.5rem] px-16 py-16 bg-[url('../images/recycling.svg')] bg-cover transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300"></div> 
              to promote access to research,
              technology and investments in clean energy; and expand and upgrade
              energy services for developing countries. In other words, these
              targets include access to affordable and reliable energy while
              increasing the share of renewable energy in the global energy mix.
              They also focus on improving energy efficiency, international
              cooperation and investment in clean energy infrastructure.
              According to a review report in 2019, some progress towards
              achieving SDG 7 is being made, but many of the targets of SDG 7
              will not be met.[4]: 1  SDG 7 and SDG 13 (climate action) are
              closely related.[4]: 101  
            </div>
            <div className="text-gray-700 text-center bg-gray-400 hover:-translate-y-0 hover:scale-90 duration-100">
              {/* Area for inserting lots of content */}
            </div>
            <div className="text-gray-700 text-center bg-orange-400 hover:-translate-y-0 hover:scale-90 duration-100">
              {/* Area for inserting lots of content */}
            </div>
            <div className="text-gray-700 text-center bg-amber-400 hover:-translate-y-0 hover:scale-90 duration-100">
              {/* Area for inserting lots of content */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
