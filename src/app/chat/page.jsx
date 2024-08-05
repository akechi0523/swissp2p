"use client"

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import UserList from "@/components/Chat/UserList";
import ChatUserProfile from "@/components/Chat/ChatUserProfile";
import ChatBody from "@/components/Chat/ChatBody";

export default function Chat() {
  return (
    <>
      <DefaultLayout>
        <div>
          <div className="font-medium text-xl text-primary dark:text-white mb-5">Chat</div>
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <div className="flex md:w-1/4 w-full flex-col md:gap-8 gap-6">
              <UserList />
            </div>
            <div className="flex md:w-1/2 w-full flex-col md:gap-8 gap-6">
              <ChatBody />
            </div>
            <div className="flex md:w-1/4 w-full flex-col md:gap-8 gap-6">
              <ChatUserProfile />
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}