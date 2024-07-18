"use client"

import { useState } from "react";

const Support = () => {
  const [isSeleted, setIsSeleted] = useState("Buy");
  return (
    <div className="flex flex-col gap-6 bg-white dark:bg-primary rounded-3xl md:px-8 px-4 md:py-6 py-4">
      <div className="flex justify-between items-center">
        <div className="md:text-lg text-base text-primary dark:text-white">
          Order ID
        </div>
        <div className="flex items-center md:w-[80%] w-[65%] rounded-full border-[1px] border-third dark:border-secondary px-6 md:py-3 py-2">
          <input type="text" className="w-25 dark:bg-primary placeholder-secondary text-primary dark:text-white md:text-base text-sm outline-none" placeholder="#number"></input>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="md:text-lg text-base text-primary dark:text-white">
          Buy/Sell
        </div>
        <div className={`flex md:w-[80%] w-[65%] md:gap-12 gap-6`}>
          <div className="flex gap-4 cursor-pointer" onClick={() => setIsSeleted("Buy")}>
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" className={`${isSeleted==="Buy"?"fill-primary":"fill-secondary"} dark:fill-white`} xmlns="http://www.w3.org/2000/svg">
            {isSeleted==="Buy"&&<path d="M10.0457 15.7233L5.80273 11.4793L7.21673 10.0653L10.0457 12.8933L15.7017 7.23633L17.1167 8.65133L10.0457 15.7233Z" fill=""/>}
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.802734 11.4102C0.802734 5.33516 5.72773 0.410156 11.8027 0.410156C17.8777 0.410156 22.8027 5.33516 22.8027 11.4102C22.8027 17.4852 17.8777 22.4102 11.8027 22.4102C5.72773 22.4102 0.802734 17.4852 0.802734 11.4102ZM11.8027 20.4102C10.6208 20.4102 9.45051 20.1774 8.35858 19.7251C7.26665 19.2728 6.2745 18.6098 5.43877 17.7741C4.60305 16.9384 3.94011 15.9462 3.48782 14.8543C3.03553 13.7624 2.80273 12.5921 2.80273 11.4102C2.80273 10.2283 3.03553 9.05794 3.48782 7.96601C3.94011 6.87407 4.60305 5.88192 5.43877 5.0462C6.2745 4.21047 7.26665 3.54753 8.35858 3.09524C9.45051 2.64295 10.6208 2.41016 11.8027 2.41016C14.1897 2.41016 16.4789 3.35837 18.1667 5.0462C19.8545 6.73402 20.8027 9.02321 20.8027 11.4102C20.8027 13.7971 19.8545 16.0863 18.1667 17.7741C16.4789 19.4619 14.1897 20.4102 11.8027 20.4102Z" fill=""/>
          </svg>
            <div className={`${isSeleted==="Buy"?"text-primary":"text-secondary"} dark:text-white`}>Buy</div>
          </div>
          <div className="flex gap-4 cursor-pointer" onClick={() => setIsSeleted("Sell")}>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" className={`${isSeleted==="Sell"?"fill-primary":"fill-secondary"} dark:fill-white`} xmlns="http://www.w3.org/2000/svg">
              {isSeleted==="Sell"&&<path d="M10.0457 15.7233L5.80273 11.4793L7.21673 10.0653L10.0457 12.8933L15.7017 7.23633L17.1167 8.65133L10.0457 15.7233Z" fill=""/>}
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.802734 11.4102C0.802734 5.33516 5.72773 0.410156 11.8027 0.410156C17.8777 0.410156 22.8027 5.33516 22.8027 11.4102C22.8027 17.4852 17.8777 22.4102 11.8027 22.4102C5.72773 22.4102 0.802734 17.4852 0.802734 11.4102ZM11.8027 20.4102C10.6208 20.4102 9.45051 20.1774 8.35858 19.7251C7.26665 19.2728 6.2745 18.6098 5.43877 17.7741C4.60305 16.9384 3.94011 15.9462 3.48782 14.8543C3.03553 13.7624 2.80273 12.5921 2.80273 11.4102C2.80273 10.2283 3.03553 9.05794 3.48782 7.96601C3.94011 6.87407 4.60305 5.88192 5.43877 5.0462C6.2745 4.21047 7.26665 3.54753 8.35858 3.09524C9.45051 2.64295 10.6208 2.41016 11.8027 2.41016C14.1897 2.41016 16.4789 3.35837 18.1667 5.0462C19.8545 6.73402 20.8027 9.02321 20.8027 11.4102C20.8027 13.7971 19.8545 16.0863 18.1667 17.7741C16.4789 19.4619 14.1897 20.4102 11.8027 20.4102Z" fill=""/>
            </svg>
            <div className={`${isSeleted==="Sell"?"text-primary":"text-secondary"} dark:text-white`}>Sell</div>
          </div>
        </div>
      </div>
      <div>
        <div className="md:text-lg text-base text-primary dark:text-white mb-3">
          Ticket Description
        </div>
        <textarea className="w-full h-50 text-sm rounded-2xl dark:bg-primary border-[1px] border-third dark:border-secondary px-3 py-2" placeholder="Enter Ticket Description"></textarea>
      </div>
      <div className='flex justify-between gap-10'>
        <button
          className='flex w-1/2 items-center justify-center cursor-pointer text-secondary font-medium rounded-2xl bg-white dark:bg-primary border-[1px] border-secondary md:py-4 py-3'
        >Cancel</button>
        <button 
          className='flex w-1/2 items-center justify-center cursor-pointer text-white font-medium rounded-2xl bg-[#7A6FC1] border-[1px] border-[#7A6FC1] md:py-4 py-3'
        >Confirm</button>
      </div>

    </div>
  );
}

export default Support;