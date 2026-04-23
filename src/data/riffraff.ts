/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const ALLITERATIONS: Record<string, { adjectives: string[], nouns1: string[], nouns2: string[] }> = {
  P: {
    adjectives: ["Peach", "Platinum", "Purple", "Prismatic", "Porcelain", "Palatial", "Pistachio", "Polished"],
    nouns1: ["Panther", "Python", "Penguin", "Pirate", "Pharaoh", "Panda", "Prince", "Pilot"],
    nouns2: ["Porsche", "Pendant", "Palace", "Pool", "Puffer", "Pontoon", "Playground", "Penthouse"]
  },
  T: {
    adjectives: ["Tangerine", "Teal", "Titanium", "Topaz", "Tropical", "Turquoise", "Transparent", "Tidal"],
    nouns1: ["Tiger", "T-Rex", "Toucan", "Tornado", "Tycoon", "Trojan", "Titan", "Thunderbird"],
    nouns2: ["Turtleneck", "Timepiece", "Trumpet", "Truck", "Telescope", "Townhouse", "Trailer", "Trophy"]
  },
  S: {
    adjectives: ["Sapphire", "Silver", "Suede", "Solar", "Silk", "Scarlet", "Stellar", "Synthetic"],
    nouns1: ["Shark", "Stallion", "Scorpion", "Sultan", "Samurai", "Sniper", "Surfer", "Sphinx"],
    nouns2: ["Steering Wheel", "Spaceship", "Sofa", "Statue", "Submarine", "Suitcase", "Stadium", "Skyscraper"]
  },
  B: {
    adjectives: ["Butterscotch", "Bronze", "Burgundy", "Blue", "Billionaire", "Balmain", "Berry", "Beaming"],
    nouns1: ["Bear", "Boss", "Baboon", "Baron", "Bandit", "Bulldog", "Beast", "Baker"],
    nouns2: ["Backpack", "Bracelet", "Bungalow", "Helicopter", "Baggage", "Bentley", "Boulevard", "Barbecue"]
  },
  R: {
    adjectives: ["Ruby", "Red", "Radiant", "Royal", "Retro", "Rainbow", "Reflective", "Rare"],
    nouns1: ["Rhino", "Raptor", "Ranger", "Renegade", "Racer", "Raven", "Robot", "Rockstar"],
    nouns2: ["Roadster", "Rolex", "Ring", "Robe", "Resort", "Rocket", "Ranch", "Raceway"]
  },
  V: {
    adjectives: ["Versace", "Violet", "Velvet", "Vibrant", "Vintage", "Vogue", "Voodoo", "Valiant"],
    nouns1: ["Vampire", "Viper", "Viking", "Villain", "Vulture", "Voyager", "Vandal", "Vector"],
    nouns2: ["Vest", "Villa", "Van", "Vault", "Vessel", "Vineyard", "Velodrome", "Vortex"]
  },
  G: {
    adjectives: ["Gucci", "Golden", "Glacier", "Glistening", "Granite"],
    nouns1: ["Gargoyle", "Gladiator", "Gorilla", "Ghost", "Giant"],
    nouns2: ["Galleria", "Glove", "Gondola", "Garage", "Garden"]
  }
};

export const RAP_GAME_ICONS = [
  "James Franco", "Ted Turner", "Bo Jackson", "Larry David", 
  "Marilyn Manson", "Dr. Seuss", "Julius Caesar", "Dawson's Creek", 
  "Bugs Bunny", "Tony Danza", "Chuck Norris", "Martha Stewart",
  "Fred Rogers", "Bill Nye", "Steve Irwin", "Bob Ross", "George Clooney"
];

const STARTERS = [
  "Ice on my neck like", "My gear is on freeze like", "Could've played for the", 
  "Diamonds on my neck resemble", "Pull up in a drop top,", "Versace sheets,", 
  "Tip-toeing in my", "Rap Game", "Jody Highroller,", "Ruby red", "Sapphire suede", 
  "Aquaberry Aquarius,", "I'm looking like", "Swangin in the", "Codeine in my",
  "Ballin out of control like", "Neon Icon shining like", "Peach Panther prowling in a",
  "Tangerine tiger in the", "Got the butterscotch", "Holographic harness on the",
  "Butterscotch Bentley on the", "Electric emeralds in the"
];

const MIDDLES = [
  "a polar bear", "it's ten degrees", "Dallas Mavericks", "a refrigerator", "acting like I don't know nobody",
  "sleeping like a pharaoh", "Seattle Mariners", "Jordans", "James Franco", "boss",
  "toaster", "steering wheel", "neon lighter", "hilarious", "hologram", "candy paint",
  "moon landing", "Versace vampire", "Gucci gargoyle", "Lamborghini", "diamond dolphin",
  "liquid lightning", "Aquaberry fist fight", "butterscotch blizzard"
];

const ENDINGS = [
  "but I was too busy breaking barriers.", "shining.", "boss.", "looking like a new weather.",
  "in the neon rain.", "with the ice on my brain.", "doing a freestyle.", "in a holographic dream.",
  "with the neon gleam.", "and the diamonds scream.", "floating on a cosmic stream.",
  "sipping lean.", "on the scene.", "with a pocket full of green.", "but they found crack in my jacket.",
  "holding a tennis racket.", "smelling like a fresh blueberry muffin.", "pacing like a panther."
];

export const REAL_METAPHORS = [
  "Ice on my neck like a polar bear.",
  "My gear is on freeze like it's ten degrees.",
  "Could've played for the Dallas Mavericks, but they found crack in my jacket.",
  "Diamonds on my neck resemble a refrigerator.",
  "Pull up in a drop top, acting like I don't know nobody.",
  "Versace sheets, sleeping like a pharaoh.",
  "I could've played for the Seattle Mariners but I was too busy breaking barriers.",
  "Tip-toeing in my Jordans.",
  "Rap Game James Franco, neon icon shining.",
  "Jody Highroller, the butterscotch boss.",
  "My custom leather smells like a new weather.",
  "Ruby red roadster, looking like a toaster.",
  "Sapphire suede steering wheel.",
  "Tangerine tiger, I'm a neon lighter.",
  "Aquaberry Aquarius, my jewels are hilarious.",
  "Your girlfriend thinks my name is 'Wow'.",
  "My jewelry is like a flashlight.",
  "Tumbling out the neon, I'm colder than a frozen swan.",
  "Marc Jacobs jacket, holding a tennis racket.",
  "I could've played for the Chicago Bulls, but they said I had too many jewels.",
  "Ice in my ear like a frozen tear.",
  "Look at my car, it's a candy bar.",
  "Could've played for the Houston Rockets, but I had too much money in my pockets.",
  "I'm the neon icon, looking like a python.",
  "Could've played for the Green Bay Packers, but I was too busy eating crackers.",
  "Working wheels, popping pill, showcasing my skill.",
  "Diamonds on handkerchief, inside my pancreas.",
  "First you get your money up and then you find love."
];

export const getRandom = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

export const generate1000Quotes = () => {
  const quoteSet = new Set(REAL_METAPHORS);
  while (quoteSet.size < 1000) {
    const s = getRandom(STARTERS);
    const m = getRandom(MIDDLES);
    const e = getRandom(ENDINGS);
    quoteSet.add(`${s} ${m} ${e}`);
  }
  return Array.from(quoteSet);
};

export const RIFF_SONGS = [
  { title: "Biggest Hits Compilation 2024", id: "cnfb9WDkf3M" } // Primary Video Fix
  
];

export const THOUSAND_QUOTES = generate1000Quotes();

export const generateTrueAlliteration = () => {
  const letters = Object.keys(ALLITERATIONS);
  const letter = getRandom(letters);
  const dict = ALLITERATIONS[letter];
  return `${getRandom(dict.adjectives)} ${getRandom(dict.nouns1)} ${getRandom(dict.nouns2)}`;
};

export const generateRapGame = () => {
  return `Rap Game ${getRandom(RAP_GAME_ICONS)}`;
};
