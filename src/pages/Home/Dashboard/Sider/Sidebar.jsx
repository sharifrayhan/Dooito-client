import { useState } from "react";
import { ChevronLast, ChevronFirst } from "lucide-react"



import { additionalLinks, mainLinks } from "../../../../constants/constants";
import SidebarItem from "./SidebarItem";
import Render from "../Render";
import Additionaltem from "./Additionaltem";


function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const [active, setActive] = useState(mainLinks[0].id);

  return (
    <>
   
    <div className="flex  items-start gap-11 ">
    <aside className="h-screen w-max px-4 py-6 bg-black flex flex-col justify-between items-center">
      <div className="flex flex-col gap-4 items-center">
        <div
          className={`flex items-center justify-between transition-all ${
            expanded ? "w-full" : "w-auto"
          }`}
        >
          <div
            className={`flex items-center gap-3 overflow-hidden transition-all ${
              expanded ? "w-36" : "w-0"
            }`}
          >
        
            <h2 className="text-lg text-white font-bold line-clamp-1">
              Dooito
            </h2>
          </div>
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="p-1.5 text-gray-100 rounded-lg bg-accent-light hover:bg-accent-lighter"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <ul className="py-3 border-b border-[hsl(217,20%,45%)] border-opacity-30">
          {mainLinks.map((link) => (
            <SidebarItem
              key={link.id}
              link={link}
              expanded={expanded}
              active={active}
              setActive={setActive}
            />
          ))}
        </ul>

        <ul className={`py-3`}>
          {additionalLinks?.map((link) => (
            <Additionaltem
              key={link?.id}
              link={link}
              expanded={expanded}
              active={active}
              setActive={setActive}
            />
          ))}
        </ul>
      </div>

    </aside>
    <div className="flex items-center justify-center mt-5">
    <Render activeLink={active}></Render>
    </div>
    </div>
    </>
  );
}



export default Sidebar;
