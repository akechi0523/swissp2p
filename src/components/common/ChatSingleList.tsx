"use client"

import ChatAvatar from "@/components/Chat/ChatAvatar";

interface ChatsinglelistProps {
  name: string;
  final: number;
}

const ChatSingleList = ({ name, final }: ChatsinglelistProps) => {
  return (
    <div>
      <div className="flex my-2 flex-row">
        <ChatAvatar/>
        <div className="grow ms-2">
          <div className="text-black">{name}</div>
          <div className="text-sm">Okay...</div>
        </div>
        <div className="flex-none text-sm">
          2mins
        </div>
      </div>
      <hr className={`text-[#E6E8EC] ${final === 7 ? 'hidden':'block'}`}/>
    </div>

  );
};

export default ChatSingleList;