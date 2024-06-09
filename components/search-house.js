'use client'

import { useState } from 'react';
import HousesList from '@/app/houses/page';

function SearchHouse({houses}) {
  const [showContent, setShowContent] = useState([]);
  
  function handleSearch(value) {
    setShowContent([]);
    const lowerCaseValue = value.toLowerCase();

    // Searching all house names to get a match with user's input
    houses.forEach((house) => {
      const lowName = house.name.toLowerCase();
      if (lowName.includes(lowerCaseValue) && lowerCaseValue !=="") {
        setShowContent(prevContent => [...prevContent, house]);
      }
    });
  }

  return (
    <>
      {showContent && <HousesList houses={showContent} />}
      <section className="my-8 flex items-center">
        <main className="flex items-center mt-4 p-4 gap-2">
          <label className="text-md m-3">Search for a house</label>
          <input 
            type="text" 
            onChange={e => {
              const value = e.target.value;   // To get the current value and not the previous
              handleSearch(value);
            }} 
            className="border-2 rounded"
          />
        </main>
      </section>
    </>
  );
}

export default SearchHouse;
