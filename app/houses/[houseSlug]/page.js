import Link from 'next/link';
import classes from './page.module.css';

async function HouseDetails({params}){
    let fetchedHouses =[];
    let chosenHouse;

          await fetch('http://localhost:3300/houses/')
          .then(res => res.json())
          .then(data => {
            fetchedHouses = data;
            chosenHouse = fetchedHouses.find(house => house.id === params.houseSlug);
          })

    return(
        <section className="flex flex-col items-center justify-center min-w-screen container mx-auto">
            <header className='bg-gray-700 text-lg text-gray-200 flex pt-4 justify-center w-72 min-h-[4rem]'>
                <Link href='/'><h1 className='text-3xl font-bold'>{chosenHouse.name}</h1></Link>
                
            </header>
            <main className='bg-gray-100 flex flex-col items-center  py-4 w-72 min-h-[4rem]'>
            <p>Founder:  <strong>{chosenHouse.founder}</strong></p>
            <p>House Colours:  <strong>{chosenHouse.houseColours}</strong></p>
            <p>House Animal:  <strong>{chosenHouse.animal}</strong></p>
            <p>House Element:  <strong>{chosenHouse.element}</strong></p>
            <p>House Ghost:  <strong>{chosenHouse.ghost}</strong></p>
            <p>Room:  <strong>{chosenHouse.commonRoom}</strong></p>
            <br/>
            <h2>Heads:</h2>
            {chosenHouse.heads.map((head) => <p key={head.id}>Name:  <strong>{head.firstName}{' '}{head.lastName}</strong></p>)}
            <br/>
            <h2>Traits:</h2>
            {chosenHouse.traits.map((trait) => <p key={trait.id}><strong>{trait.name}</strong></p>)}

            </main>
        </section>
    )
};

export default HouseDetails;