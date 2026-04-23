const fs = require('fs');

const starters = [
  "Ice on my neck like", "My gear is on freeze like", "Could've played for the", 
  "Diamonds on my neck resemble", "Pull up in a drop top,", "Versace sheets,", 
  "Tip-toeing in my", "Rap Game", "Jody Highroller,", "Ruby red", "Sapphire suede", 
  "Aquaberry Aquarius,", "I'm looking like a", "Swangin in the", "Codeine in my",
  "Ballin out of control like", "Neon Icon shining like", "Peach Panther prowling in a",
  "Tangerine tiger in the", "Got the butterscotch"
];

const middles = [
  "polar bear", "ten degrees", "Dallas Mavericks", "refrigerator", "acting like I don't know nobody",
  "sleeping like a pharaoh", "Seattle Mariners", "Jordans", "James Franco", "butterscotch boss",
  "toaster", "steering wheel", "neon lighter", "hilarious", "hologram", "candy paint",
  "moon landing", "Versace vampire", "Gucci gargoyle", "Lamborghini", "diamond dolphin"
];

const endings = [
  "but I was too busy breaking barriers.", "shining.", "boss.", "looking like a new weather.",
  "in the neon rain.", "with the ice on my brain.", "doing a freestyle.", "in a holographic dream.",
  "with the neon gleam.", "and the diamonds scream.", "floating on a cosmic stream.",
  "sipping lean.", "on the scene.", "with a pocket full of green."
];

const realQuotes = [
  "Ice on my neck like a polar bear.",
  "My gear is on freeze like it's ten degrees.",
  "Could've played for the Dallas Mavericks, but they found crack in my jacket.",
  "Diamonds on my neck resemble a refrigerator.",
  "Pull up in a drop top, acting like I don't know nobody.",
  "Versace sheets, sleeping like a pharaoh.",
  "I could've played for the Seattle Mariners but I was too busy breaking barriers.",
  "Tip-toeing in my Jordans.",
  "Rap Game James Franco.",
  "Jody Highroller.",
  "My custom leather smells like a new weather.",
  "Ruby red roadster.",
  "Sapphire suede steering wheel.",
  "Tangerine tiger.",
  "Aquaberry Aquarius.",
  "I don't even know how to play basketball.",
  "Could have played for the Lakers but I'm too busy making paper.",
  "Your girlfriend thinks my name is 'Wow'.",
  "My jewelry is like a flashlight.",
  "Tumbling out the neon, I'm colder than a frozen swan.",
  "Marc Jacobs jacket, holding a tennis racket.",
  "I could've played for the Chicago Bulls, but they said I had too many jewels.",
  "Rap game Dawson's Creek.",
  "Ice in my ear like a frozen tear.",
  "Look at my car, it's a candy bar.",
  "Could've played for the Houston Rockets, but I had too much money in my pockets.",
  "I'm on a private jet, trying to find my pet.",
  "I'm the neon icon, looking like a python.",
  "Rap game Julius Caesar.",
  "Could've played for the Green Bay Packers, but I was too busy eating crackers.",
  "I could have played for the Toronto Raptors, but they found lean in my adapters.",
  "I could have played for the Miami Heat, but they found out I couldn't be beat.",
  "Swangin in the rain, got diamonds on my brain.",
  "Aquaberry shark, swimming in the dark.",
  "Versace python, looking like an icon.",
  "Rap game Ted Turner, with the burner.",
  "Sapphire stallion, wearing a medallion."
];

const quotes = new Set(realQuotes);

while (quotes.size < 1000) {
  const s = starters[Math.floor(Math.random() * starters.length)];
  const m = middles[Math.floor(Math.random() * middles.length)];
  const e = endings[Math.floor(Math.random() * endings.length)];
  quotes.add(`${s} ${m} ${e}`);
}

const quotesArray = Array.from(quotes);

fs.writeFileSync('src/data/quotes.ts', `export const THOUSAND_QUOTES = ${JSON.stringify(quotesArray, null, 2)};\n`);

console.log("Generated quotes.ts with 1000 quotes");
