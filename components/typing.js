'use client';

import HousesList from "@/app/houses/page";
import { useState } from "react";

function SearchHouse({houses}) {
    const [searchHouse, setSearchHouse] = useState('');
    const [showContent, setShowContent] = useState([]);

    function handleSearch(value){
        setShowContent([]);
            const lowerCaseValue = value.toLowerCase();

        houses.foreach((house) => {
            const lowName = house.name.toLowerCase();
            if(lowName.includes(lowerCaseValue)) {
                setShowContent(prevContent => [...prevContent, house]);
            }
        });
        
    }
    return(
        <>
            {showContent && <HousesList houses={showContent} />}

            <section className="my-8">
                <main className="flex">
                    <label>Search for a house</label>
                    <input type="text"
                        onChange={e => {
                            const value = e.target.value;
                            setSearchHouse(value);
                            handleSearch(value);
                        }}
                    />
                </main>
            </section>
        </>
    )
}
export default SearchHouse; 