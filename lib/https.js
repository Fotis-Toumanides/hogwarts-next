

/* Fetching data from a sqlite database
import sql from 'better-sqlite3';

const db = sql('houses.db');

export async function getHouses() {
    await new Promise((resolve) => setTimeout(resolve, 2000));  // Just to show the spinner
    return db.prepare('SELECT * FROM houses').all();

} */


/* Fetching data from a node backend */
export async function getHouses() {
    await new Promise((resolve) => setTimeout(resolve, 2000));  // Just to show the spinner
    const data=[];
        await fetch('http://localhost:3300/houses/')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return data;
        })    
}