import HousesList from './houses/page';
import { Suspense } from "react";
import MainHeader from "@/components/main-header";
import Loading from "./loading";

// This will help the web crawlers to assign right the page and help the SEO.
export const metadata = {
  title: 'Hogwarts',
  description: "Harry Potter's school",
};

// Fetching data from back-end and spread them using the HouseList component
export default async function Home() {
let houses=[];
  await fetch('https://wizard-world-api.herokuapp.com/houses', { next: { revalidate: 100 } })
  .then(res => res.json())
  .then(data => {
      houses =  data;
  })

  return (
      <main>
      <MainHeader houses={houses}/>
        <div>
            <HousesList houses={houses}/>
        </div>
    </main>
  );
}
