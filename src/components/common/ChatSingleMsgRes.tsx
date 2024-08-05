"use client"


import MsgContent from "@/components/Chat/MsgContent";

interface ChatSingleMsgResProps {
  direct: Boolean;
}

const ChatSingleMsgRes = ({ direct }: ChatSingleMsgResProps) => {
  return (
    <div>
      <div className="flex mt-3 flex-row-reverse mx-4">
        <div>
          <div className="h-9 w-9 bg-blue-800 rounded-full ml-3 mr-2 m-1 text-white text-xl p-1 pl-3 pb-2">P</div>
        </div>
        <MsgContent direct = {direct}/>
      </div>
    </div>

  );
};

export default ChatSingleMsgRes;