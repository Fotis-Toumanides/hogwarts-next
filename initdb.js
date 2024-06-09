const sql = require('better-sqlite3');
const db = sql('houses.db');

const dummyHouses = [{"id":"0367baf3-1cb6-4baf-bede-48e17e1cd005","name":"Gryffindor","houseColours":"Scarlet and gold","founder":"Godric Gryffindor","animal":"Lion","element":"Fire","ghost":"Nearly-Headless Nick","commonRoom":"Gryffindor Tower"},{"id":"805fd37a-65ae-4fe5-b336-d767b8b7c73a","name":"Ravenclaw","houseColours":"Blue and bronze","founder":"Rowena Ravenclaw","animal":"Eagle","element":"Air","ghost":"Grey Lady","commonRoom":"Ravenclaw Tower"},{"id":"85af6295-fd01-4170-a10b-963dd51dce14","name":"Hufflepuff","houseColours":"Yellow and black","founder":"Helga Hufflepuff","animal":"Badger","element":"Earth","ghost":"Fat Friar","commonRoom":"Hufflepuff Basement"},{"id":"a9704c47-f92e-40a4-8771-ed1899c9b9c1","name":"Slytherin","houseColours":"Green and silver","founder":"Salazar Slytherin","animal":"Serpent","element":"Water","ghost":"Bloody Baron","commonRoom":"Slytherin Dungeon"}]
db.prepare(`
    CREATE TABLE IF NOT EXISTS houses (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        houseColours TEXT NOT NULL,
        founder TEXT NOT NULL,
        animal TEXT NOT NULL,
        element TEXT NOT NULL,
        ghost TEXT NOT NULL,
        commonRoom TEXT NOT NULL
    )
`).run();

async function initData() {
    const stmt = db.prepare(`
    INSERT INTO houses VALUES(
        null,
        @id,
        @name,
        @houseColours,
        @founder,
        @animal,
        @element,
        @ghost,
        @commonRoom
        )
    `);

    for (const house of dummyHouses){
        stmt.run(house);
    }
}

initData();