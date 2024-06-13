import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ComboboxOption {
  id: number;
  name: string;
  icon: string;
  token: string;
}

interface Props {
  options: ComboboxOption[];
  select: string;
  isConfirm: boolean;
}

const CommonComboBox = ({options, select, isConfirm}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(select =='Select Currency' ? 'USDT' : 'TRON');
  const [icon, setIcon] = useState(select =='Select Currency' ? '/images/icon/icon-usdt.svg' : '/images/icon/icon-tron.svg');
  const [token, setToken] = useState(select =='Select Currency' ? '' : 'TRC20');
 
  
  const toggleCombobox = () => {
    if (isConfirm) {
      setIsOpen(false);
    } else setIsOpen(!isOpen);
  };

  const closeCombobox = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="text-base text-primary mb-3 mt-3">
        {select}
      </div>
      <button
        type='button'
        className='flex items-center justify-between rounded-full border-[1px] border-[#E6E8EC] px-6 py-3'
        onClick={toggleCombobox}
      >
        <div className="flex items-center gap-2 font-medium text-primary">
          <Image src={icon} width={24} height={24} alt="icon"/>
          {name}
        </div>
        <div className='flex items-center'>
          <div className=''>{token}</div>
          <svg className='w-3 h-3 ml-2.5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
          </svg>
        </div>
        
      </button>

      <div className='relative'>
      {isOpen && (
        <div className='flex flex-col mt-1 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
          <ul className='' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
            {options.map((option) => (
              <li key={option.id} className='px-6 py-2 hover:bg-secondary hover:bg-opacity-20' onClick={() => {closeCombobox(); setName(option.name);setIcon(option.icon);setToken(option.token);}}>
                <div className='flex justify-between'>
                  <div className="flex items-center gap-2 font-medium text-primary">
                    <Image src={option.icon} width={24} height={24} alt="icon"/>
                    {option.name}
                  </div>
                  <div className='pr-6'>{option.token}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </>
  );
};

export default CommonComboBox;