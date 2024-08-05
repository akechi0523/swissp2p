"use client"

import Image from "next/image";
import ChatSingleList from "../common/ChatSingleList";


const userListRecent = [
  { id: 1, name: "Talan Passaqu" },
  { id: 2, name: "Ann Siphron" },
  { id: 3, name: "Gustavo Gouse" },
]
const userListAll = [
  { id: 1, name: "Justin Torff" },
  { id: 2, name: "Cheyenne Lubin" },
  { id: 3, name: "Angel Ekstrom" },
  { id: 4, name: "Lincoln Rhiel" },
  { id: 5, name: "Cristofer Stanton" },
  { id: 6, name: "Corey Septimus" },
  { id: 7, name: "Jakob George" },
]

const UserList = () => {

  return (
    <div className="bg-white dark:bg-primary rounded-3xl px-4 pt-4 pb-0">
      <div className="h-12 w-full border-solid border-[#E6E8EC] border-2 rounded-lg flex">
        <div className="flex-none">
          <Image
          className="m-3"
          width={22}
          height={22}
          src={"/images/icon/icon-chat/icon-search.svg"}
          alt="Logo"
          priority
        />
        </div>
        <div className="grow">
          <input type="text" className="h-full w-40 outline-none"/>
        </div>        
      </div>
      <div className="text-black mt-3">Recent Chat</div>
      {userListRecent.map((user) => (
        <div key={user.id} className=''>
          <ChatSingleList name={user.name} />
        </div>
      ))}
      <div className="text-black mt-3">All Chat</div>
      {userListAll.map((user) => (
        <div key={user.id} className=''>
          <ChatSingleList name={user.name} final={user.id} />
        </div>
      ))}


    </div>
  );

}

export default UserList;