"use client"

import MsgContent from "@/components/Chat/MsgContent";
import MsgContentFile from "@/components/Chat/MsgContentFile";
import Image from "next/image";

interface ChatSingleMsgReqProps {
  direct: Boolean;
}

const ChatSingleMsgReq = ({ direct }: ChatSingleMsgReqProps) => {
  return (
    <div>
      <div className="flex mt-3 flex-row mx-4">
        <div className="relative flex flex-none h-9 w-9 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white mr-1">
          <Image
            className="fill-current duration-300 ease-in-out"
            width={36}
            height={36}
            src={"/images/user/user-05.png"}
            alt="username"
          />
        </div>
        {
          direct === false ? <MsgContent /> : <MsgContentFile />
        }
      </div>
      <div className={`text-right w-full max-w-80 text-[11px] pr-2 ${direct === true ? 'hidden' : 'block'}`}>
        9:00pm
      </div>
    </div>

  );
};

export default ChatSingleMsgReq;