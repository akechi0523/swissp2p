"use client"

import Image from "next/image";


const ChatProfileDocument = () => {
  return (
    <div className="flex items-center">
      <div className="flex-none">
        <Image
          className="m-3"
          width={17}
          height={17}
          src={"/images/icon/icon-chat/icon-adobe.svg"}
          alt="Logo"
          priority
        />
      </div>
      <div className="grow text-[12px]">
        1 Document
      </div>
      <div className="flex-none">
        <Image
          className="m-3"
          width={17}
          height={17}
          src={"/images/icon/icon-chat/icon-download.svg"}
          alt="Logo"
          priority
        />
      </div>
    </div>

  );
};

export default ChatProfileDocument;