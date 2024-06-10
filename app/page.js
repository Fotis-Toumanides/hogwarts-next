import HousesList from './houses/page';
import MainHeader from "@/components/main-header";

// This will help the web crawlers to assign right the page and help the SEO.
export const metadata = {
  title: 'Hogwarts',
  description: "Harry Potter's school",
};

// Fetching data from back-end and spread them using the HouseList component
export default async function Home() {
let houses=[null];
try{
  const res = await fetch('https://wizard-world-api.herokuapp.com/houses/')
  if(res.ok){
    houses = await res.json()
  } else {
    console.error('Failed to fetch houses');
  }
} catch (error) {
  console.error('Error fetching houses:', error);
};
  
  

  return (
      <main>
      <MainHeader houses={houses}/>
        <div>
            <HousesList houses={houses}/>
        </div>
    </main>
  );
}
