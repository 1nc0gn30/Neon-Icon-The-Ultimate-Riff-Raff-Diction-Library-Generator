export const ALLITERATIONS: Record<string, { adjectives: string[], nouns1: string[], nouns2: string[] }> = {
  P: {
    adjectives: ["Peach", "Platinum", "Purple", "Prismatic", "Porcelain"],
    nouns1: ["Panther", "Python", "Penguin", "Pirate", "Pharaoh"],
    nouns2: ["Porsche", "Pendant", "Palace", "Pool", "Puffer"]
  },
  T: {
    adjectives: ["Tangerine", "Teal", "Titanium", "Topaz", "Tropical"],
    nouns1: ["Tiger", "T-Rex", "Toucan", "Tornado", "Tycoon"],
    nouns2: ["Turtleneck", "Timepiece", "Trumpet", "Truck", "Telescope"]
  },
  S: {
    adjectives: ["Sapphire", "Silver", "Suede", "Solar", "Silk"],
    nouns1: ["Shark", "Stallion", "Scorpion", "Sultan", "Samurai"],
    nouns2: ["Steering Wheel", "Spaceship", "Sofa", "Statue", "Submarine"]
  },
  B: {
    adjectives: ["Butterscotch", "Bronze", "Burgundy", "Blue", "Billionaire"],
    nouns1: ["Bear", "Boss", "Baboon", "Baron", "Bandit"],
    nouns2: ["Backpack", "Bracelet", "Bungalow", "Helicopter", "Baggage"]
  },
  R: {
    adjectives: ["Ruby", "Red", "Radiant", "Royal", "Retro"],
    nouns1: ["Rhino", "Raptor", "Ranger", "Renegade", "Racer"],
    nouns2: ["Roadster", "Rolex", "Ring", "Robe", "Resort"]
  },
  V: {
    adjectives: ["Versace", "Violet", "Velvet", "Vibrant"],
    nouns1: ["Vampire", "Viper", "Viking", "Villain"],
    nouns2: ["Vest", "Villa", "Van", "Vault"]
  }
};

export const RAP_GAME_ICONS = [
  "James Franco", "Ted Turner", "Bo Jackson", "Larry David", 
  "Marilyn Manson", "Dr. Seuss", "Julius Caesar", "Dawson's Creek", 
  "Bugs Bunny", "Tony Danza", "Chuck Norris", "Martha Stewart"
];

// Seed dictionary for dynamic generation of the wiki to hit 1000 quotes
const STARTERS = [
  "Ice on my neck like", "My gear is on freeze like", "Could've played for the", 
  "Diamonds on my neck resemble", "Pull up in a drop top,", "Versace sheets,", 
  "Tip-toeing in my", "Rap Game", "Jody Highroller,", "Ruby red", "Sapphire suede", 
  "Aquaberry Aquarius,", "I'm looking like", "Swangin in the", "Codeine in my",
  "Ballin out of control like", "Neon Icon shining like", "Peach Panther prowling in a",
  "Tangerine tiger in the", "Got the butterscotch"
];

const MIDDLES = [
  "a polar bear", "it's ten degrees", "Dallas Mavericks", "a refrigerator", "acting like I don't know nobody",
  "sleeping like a pharaoh", "Seattle Mariners", "Jordans", "James Franco", "boss",
  "toaster", "steering wheel", "neon lighter", "hilarious", "hologram", "candy paint",
  "moon landing", "Versace vampire", "Gucci gargoyle", "Lamborghini", "diamond dolphin"
];

const ENDINGS = [
  "but I was too busy breaking barriers.", "shining.", "boss.", "looking like a new weather.",
  "in the neon rain.", "with the ice on my brain.", "doing a freestyle.", "in a holographic dream.",
  "with the neon gleam.", "and the diamonds scream.", "floating on a cosmic stream.",
  "sipping lean.", "on the scene.", "with a pocket full of green.", "but they found crack in my jacket.",
  "holding a tennis racket."
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
  "Could've played for the Green Bay Packers, but I was too busy eating crackers."
];

export const getRandom = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

// Generate 1000 quotes for the wiki
export const generate1000Quotes = () => {
  const quoteSet = new Set(REAL_METAPHORS);
  while (quoteSet.size < 1000) {
    const s = getRandom(STARTERS);
    const m = getRandom(MIDDLES);
    const e = getRandom(ENDINGS);
    // Add logic to not duplicate sentence structures too weirdly
    quoteSet.add(`${s} ${m} ${e}`);
  }
  return Array.from(quoteSet);
};

export const RIFF_SONGS = [
  { title: "Tip Toe Wing In My Jawwdinz", id: "_6U_678-Nsk" },
  { title: "Dolce & Gabbana", id: "JVpZ6zM-vYw" },
  { title: "Aquaberry Dolphin", id: "G8fO-Mvca-Y" },
  { title: "How To Be The Man", id: "KNo8Cof6pBw" },
  { title: "Carlos Slim", id: "m6iUOfT7Dyk" },
  { title: "Neon Icon", id: "lUonA52D5_U" }
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
