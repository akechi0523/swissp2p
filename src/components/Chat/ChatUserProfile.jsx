"use client"

import Image from "next/image";
import ChatProfileDocument from "../common/ChatProfileDocument";



const ChatUserProfile = () => {

  return (
    <div className="text-black h-full max-h-full bg-white dark:bg-primary rounded-3xl">
      <div className="mb-5 mx-6">
        <div className="flex justify-center m-6">
          <Image
            className="fill-current duration-300 ease-in-out  "
            width={110}
            height={110}
            src={"/images/user/user-05.png"}
            alt="username"
          />
        </div>
        <div className="grow text-xl text-center ms-4">Talan Passaqu</div>
      </div>
      <hr className='text-[#E6E8EC] border-1' />
      <div className="m-3 mb-5">
        <div className="mt-4">Files</div>
        <ChatProfileDocument />
        <ChatProfileDocument />
        <ChatProfileDocument />
        <ChatProfileDocument />
      </div>
      <hr className='text-[#E6E8EC] border-1' />
      <div className="m-3">
        <div className="m-2 mt-10">Settings</div>
        <div className="m-2">Block</div>
        <div className="m-2">Report</div>
        <div className="m-2">History</div>
      </div>
    </div>
  );

}

export default ChatUserProfile;