import React, { useState } from 'react';

const countryList = [
  {id:1, name:"country1"},
  {id:1, name:"country2"},
  {id:1, name:"country3"},
  {id:1, name:"country4"},
  {id:1, name:"country5"},
  {id:1, name:"country6"},
]

const CountryComboBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [countryName, setCountryName] = useState('country');
  
  const toggleCombobox = () => {
    setIsOpen(!isOpen);
  };

  const closeCombobox = () => {
    setIsOpen(false);
  };

  return (
    <div className='flex flex-col '>
      <div className="text-base font-medium text-primary dark:text-white mb-3">
        Choose Country
      </div>
      <button
        type='button'
        className='flex items-center justify-between text-primary dark:text-white dark:bg-primary rounded-full border-[1px] border-thrid dark:border-secondary px-6 py-3'
        onClick={toggleCombobox}
      >
        <div className="items-center">
          {countryName}
        </div>
        <svg className='w-4 h-4 ml-2.5 stroke-current' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
          <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
        </svg>     
      </button>

      {isOpen && (
        <div className='flex flex-col mt-1 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
          <ul className='' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
            {countryList.map((country) => (
              <li key={country.id} className='items-center text-base text-primary dark:text-white px-6 py-2 hover:bg-secondary hover:bg-opacity-20' onClick={() => {closeCombobox(); setCountryName(country.name);}}>
                {country.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountryComboBox;