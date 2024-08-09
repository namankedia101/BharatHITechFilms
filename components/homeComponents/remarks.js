import React from 'react';
import { BiCustomize } from 'react-icons/bi';
import { SiAudiotechnica } from 'react-icons/si';
import { MdOutlineHighQuality } from 'react-icons/md';
import { FcProcess } from 'react-icons/fc';

export const Remarks = () => {
  return (
    <section
      className="py-14"
      style={{
        background:
          'linear-gradient(152.92deg, rgba(255, 0, 0, 0.2) 4.54%, rgba(255, 69, 0, 0.26) 34.2%, rgba(178, 34, 34, 0.1) 77.55%)',
      }}
    >
      <div className="grid grid-cols-2 text-center gap-y-10 p-8 gap-x-4">
        <div className="flex flex-col items-center text-6xl gap-3 ">
          <BiCustomize style={{ fill: 'purple' }} />
          <h1 className="font-bold text-sm md:text-2xl">CUSTOMIZATION</h1>
          <p className="text-sm">Requirement based product development</p>
        </div>
        <div className="flex flex-col items-center text-6xl gap-3">
          <SiAudiotechnica style={{ fill: 'purple' }} />
          <h1 className="font-bold text-sm md:text-2xl">TECHNOLOGY</h1>
          <p className="text-sm">
            Innovative processes with the latest technology
          </p>
        </div>
        <div className="flex flex-col items-center text-6xl gap-3">
          <MdOutlineHighQuality style={{ fill: 'purple' }} />
          <h1 className="font-bold text-sm md:text-2xl">QUALITY</h1>
          <p className="text-sm">Dedicated quality assurance team</p>
        </div>
        <div className="flex flex-col items-center text-6xl gap-3">
          <FcProcess />
          <h1 className="font-bold text-sm md:text-2xl">PROCESS</h1>
          <p className="text-sm">
            Collaborative approach with end-to-end solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Remarks;
