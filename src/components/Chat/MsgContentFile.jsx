"use client"

import Image from "next/image";

const MsgContentFile = () => {

  return (
    <div>
      <div className="ms-2">
        <div className="text-[12px] text-center w-full max-w-64 text-wrap md:min-w-24 bg-[#E6E8EC] p-4 py-1 rounded-lg">
          <Image
            className="fill-current duration-300 ease-in-out m-8"
            width={36}
            height={36}
            src={"/images/icon/icon-chat/icon-adobe.svg"}
            alt="pdf"
          />
          <p className="mb-2">1 Document</p>
        </div>
      </div>
    </div>
  );

}

export default MsgContentFile;