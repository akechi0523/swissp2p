"use client"

import Image from "next/image";


const ChatAvatar = () => {

  return (
    <div>
      <div className="relative flex flex-none h-9 w-9 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white">
        <span className="absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-green-500 inline">
          <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
        </span>
        <Image
          className="fill-current duration-300 ease-in-out"
          width={36}
          height={36}
          src={"/images/user/user-05.png"}
          alt="username"
        />
      </div>
    </div>
  );

}

export default ChatAvatar;