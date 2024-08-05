"use client"

import ChatAvatar from "./ChatAvatar";
import ChatSingleMsgReq from "../common/ChatSingleMsgReq"
import ChatSingleMsgRes from "../common/ChatSingleMsgRes"
import Image from "next/image";


const ChatBody = () => {

  return (
    <div className="h-full max-h-full bg-white dark:bg-primary rounded-3xl pt-4 pb-0 relative">
      <div className="flex flex-row flex flex-row mb-5 mx-4">
        <div className="flex-none">
          <ChatAvatar />
        </div>
        <div className="grow text-lg text-black ms-4">Talan Passaqu</div>
        <div className="flex-none mr-2">
          <div className="h-1 w-1 bg-primary rounded-full m-1"></div>
          <div className="h-1 w-1 bg-primary rounded-full m-1"></div>
          <div className="h-1 w-1 bg-primary rounded-full m-1"></div>
        </div>
      </div>
      <hr className='text-[#E6E8EC] border-1 mb-5' />
      <div>
        <ChatSingleMsgReq direct={false} />
        <ChatSingleMsgReq direct={false} />
        <ChatSingleMsgRes direct={true} />
        <div className="flex flex-row">
          <ChatSingleMsgReq direct={true} />
          <Image
            className="fill-current duration-300 ease-in-out m-2"
            width={18}
            height={18}
            src={"/images/icon/icon-chat/icon-download.svg"}
            alt="pdf"
          />
        </div>

      </div>
      <div className="absolute bottom-0 w-full p-3">
        <div className="h-14 text-[12px] border-solid bg-[#E6E8EC] rounded-xl p-3 flex items-center">
          <div className="grow">
            <input type="text" className="h-full w-40 outline-none bg-[#E6E8EC]" placeholder="Type Message"/>            
          </div>
          <div className="flex-none">
            <Image
              className="m-3"
              width={20}
              height={20}
              src={"/images/icon/icon-chat/icon-coin.svg"}
              alt="Logo"
              priority
            />
          </div>
          <div className="text-[30px] flex-none">
            |
          </div>
          <div className="flex-none">
            <Image
              className="m-3 mb-2"
              width={24}
              height={24}
              src={"/images/icon/icon-chat/icon-send.svg"}
              alt="Logo"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );

}

export default ChatBody;