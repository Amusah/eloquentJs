/***************DATA STRUCTURES: OBJECTS AND ARRAYS****************/
let myObject = {
  left: 1,
  right: 2,
};
//delete myObject.left;
console.log(Object.keys(myObject));

let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 4, c: 5 });
console.log(objectA);

let obj = { value: 10 };
let obj2 = obj;
let obj3 = { value: 10 };

const score = { visitors: 0, home: 0 };
console.log(score);
score.visitors = 1;
console.log(score);

console.log("*************CORRELATION*************");
console.log("");

// function that calculates the correlation b/n two variables (event/pizza and squirrel occurance)
let phi = (table) => {
  return (
    (table[2] * table[0] - table[3] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        ((table[2] + table[1]) * (table[3] + table[0]))
    )
  );
};
console.log(phi([76, 9, 1, 4]));

const JOURNAL = [
  {
    events: ["carrot", "exercise", "weekend"],
    squirrel: false,
  },
  {
    events: ["bread", "pudding", "brushed teeth", "weekend", "touched tree"],
    squirrel: false,
  },
  {
    events: ["carrot", "nachos", "brushed teeth", "cycling", "weekend"],
    squirrel: false,
  },
  {
    events: [
      "brussel sprouts",
      "ice cream",
      "brushed teeth",
      "computer",
      "weekend",
    ],
    squirrel: false,
  },
  {
    events: [
      "potatoes",
      "candy",
      "brushed teeth",
      "exercise",
      "weekend",
      "dentist",
    ],
    squirrel: false,
  },
  {
    events: [
      "brussel sprouts",
      "pudding",
      "brushed teeth",
      "running",
      "weekend",
    ],
    squirrel: false,
  },
  {
    events: ["pizza", "brushed teeth", "computer", "work", "touched tree"],
    squirrel: false,
  },
  {
    events: ["bread", "beer", "brushed teeth", "cycling", "work"],
    squirrel: false,
  },
  { events: ["lasagna", "brushed teeth", "exercise", "work"], squirrel: false },
  {
    events: ["spaghetti", "brushed teeth", "reading", "work"],
    squirrel: false,
  },
  {
    events: ["carrot", "ice cream", "brushed teeth", "television", "work"],
    squirrel: false,
  },
  { events: ["spaghetti", "nachos", "work"], squirrel: false },
  {
    events: ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"],
    squirrel: false,
  },
  { events: ["spaghetti", "peanuts", "computer", "weekend"], squirrel: true },
  {
    events: ["potatoes", "ice cream", "brushed teeth", "computer", "weekend"],
    squirrel: false,
  },
  {
    events: ["potatoes", "ice cream", "brushed teeth", "work"],
    squirrel: false,
  },
  { events: ["peanuts", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["potatoes", "exercise", "work"], squirrel: false },
  { events: ["pizza", "ice cream", "computer", "work"], squirrel: false },
  { events: ["lasagna", "ice cream", "work"], squirrel: false },
  { events: ["cauliflower", "candy", "reading", "weekend"], squirrel: false },
  {
    events: ["lasagna", "nachos", "brushed teeth", "running", "weekend"],
    squirrel: false,
  },
  { events: ["potatoes", "brushed teeth", "work"], squirrel: false },
  { events: ["carrot", "work"], squirrel: false },
  { events: ["pizza", "beer", "work", "dentist"], squirrel: false },
  { events: ["lasagna", "pudding", "cycling", "work"], squirrel: false },
  {
    events: ["spaghetti", "brushed teeth", "reading", "work"],
    squirrel: false,
  },
  {
    events: ["spaghetti", "pudding", "television", "weekend"],
    squirrel: false,
  },
  {
    events: ["bread", "brushed teeth", "exercise", "weekend"],
    squirrel: false,
  },
  { events: ["lasagna", "peanuts", "work"], squirrel: true },
  { events: ["pizza", "work"], squirrel: false },
  { events: ["potatoes", "exercise", "work"], squirrel: false },
  { events: ["brushed teeth", "exercise", "work"], squirrel: false },
  {
    events: ["spaghetti", "brushed teeth", "television", "work"],
    squirrel: false,
  },
  { events: ["pizza", "cycling", "weekend"], squirrel: false },
  { events: ["carrot", "brushed teeth", "weekend"], squirrel: false },
  { events: ["carrot", "beer", "brushed teeth", "work"], squirrel: false },
  { events: ["pizza", "peanuts", "candy", "work"], squirrel: true },
  {
    events: ["carrot", "peanuts", "brushed teeth", "reading", "work"],
    squirrel: false,
  },
  { events: ["potatoes", "peanuts", "brushed teeth", "work"], squirrel: false },
  {
    events: ["carrot", "nachos", "brushed teeth", "exercise", "work"],
    squirrel: false,
  },
  {
    events: ["pizza", "peanuts", "brushed teeth", "television", "weekend"],
    squirrel: false,
  },
  {
    events: ["lasagna", "brushed teeth", "cycling", "weekend"],
    squirrel: false,
  },
  {
    events: [
      "cauliflower",
      "peanuts",
      "brushed teeth",
      "computer",
      "work",
      "touched tree",
    ],
    squirrel: false,
  },
  {
    events: ["lettuce", "brushed teeth", "television", "work"],
    squirrel: false,
  },
  {
    events: ["potatoes", "brushed teeth", "computer", "work"],
    squirrel: false,
  },
  { events: ["bread", "candy", "work"], squirrel: false },
  { events: ["potatoes", "nachos", "work"], squirrel: false },
  {
    events: ["carrot", "pudding", "brushed teeth", "weekend"],
    squirrel: false,
  },
  {
    events: ["carrot", "brushed teeth", "exercise", "weekend", "touched tree"],
    squirrel: false,
  },
  { events: ["brussel sprouts", "running", "work"], squirrel: false },
  { events: ["brushed teeth", "work"], squirrel: false },
  { events: ["lettuce", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["candy", "brushed teeth", "work"], squirrel: false },
  {
    events: ["brussel sprouts", "brushed teeth", "computer", "work"],
    squirrel: false,
  },
  { events: ["bread", "brushed teeth", "weekend"], squirrel: false },
  { events: ["cauliflower", "brushed teeth", "weekend"], squirrel: false },
  {
    events: ["spaghetti", "candy", "television", "work", "touched tree"],
    squirrel: false,
  },
  { events: ["carrot", "pudding", "brushed teeth", "work"], squirrel: false },
  { events: ["lettuce", "brushed teeth", "work"], squirrel: false },
  {
    events: ["carrot", "ice cream", "brushed teeth", "cycling", "work"],
    squirrel: false,
  },
  { events: ["pizza", "brushed teeth", "work"], squirrel: false },
  { events: ["spaghetti", "peanuts", "exercise", "weekend"], squirrel: true },
  {
    events: ["bread", "beer", "computer", "weekend", "touched tree"],
    squirrel: false,
  },
  { events: ["brushed teeth", "running", "work"], squirrel: false },
  {
    events: ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"],
    squirrel: false,
  },
  {
    events: ["lasagna", "brushed teeth", "television", "work"],
    squirrel: false,
  },
  {
    events: ["cauliflower", "brushed teeth", "running", "work"],
    squirrel: false,
  },
  { events: ["carrot", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["carrot", "reading", "weekend"], squirrel: false },
  { events: ["carrot", "peanuts", "reading", "weekend"], squirrel: true },
  { events: ["potatoes", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["lasagna", "ice cream", "work", "touched tree"], squirrel: false },
  {
    events: ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"],
    squirrel: false,
  },
  { events: ["pizza", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["lettuce", "brushed teeth", "work"], squirrel: false },
  {
    events: ["bread", "brushed teeth", "television", "weekend"],
    squirrel: false,
  },
  { events: ["cauliflower", "brushed teeth", "work"], squirrel: false },
  { events: ["pizza", "brushed teeth", "cycling", "work"], squirrel: false },
  { events: ["lasagna", "nachos", "brushed teeth", "work"], squirrel: false },
  { events: ["brushed teeth", "weekend", "touched tree"], squirrel: false },
  {
    events: ["lettuce", "brushed teeth", "television", "weekend"],
    squirrel: false,
  },
  { events: ["spaghetti", "brushed teeth", "work"], squirrel: false },
  { events: ["brushed teeth", "computer", "work"], squirrel: false },
  { events: ["lettuce", "nachos", "brushed teeth", "work"], squirrel: false },
  { events: ["carrot", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["brushed teeth", "work"], squirrel: false },
  { events: ["cauliflower", "reading", "weekend"], squirrel: false },
  { events: ["bread", "brushed teeth", "weekend"], squirrel: false },
  {
    events: ["cauliflower", "peanuts", "brushed teeth", "weekend"],
    squirrel: false,
  },
];

// function that generates a 2 x 2 array for specific event
function tableFor(event, journal) {
  let chCase = event.toLowerCase();
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i],
      index = 0;
    if (entry.events.includes(chCase)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}
let result = tableFor("Pizza", JOURNAL);
console.log(result);

// Generating every type of event
let journalEvents = (journal) => {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
};
console.log(journalEvents(JOURNAL));

// finding correlation for each event
for (let event of journalEvents(JOURNAL)) {
  console.log(`${event} : ${phi(tableFor(event, JOURNAL))}`);
}

// filtering correlations > 0.1 or < -0.1
for (let event of journalEvents(JOURNAL)) {
  let correlation = phi(tableFor(event, JOURNAL));
  if (correlation > 0.1 || correlation < -0.1)
    console.log(`${event} : ${correlation}`);
}

for (let entry of JOURNAL) {
  if (
    entry.events.includes("peanuts") &&
    !entry.events.includes("brushed teeth")
  ) {
    entry.events.push("peanut teeth");
  }
}
console.log(JOURNAL);
console.log(phi(tableFor("peanut", JOURNAL)));

console.log(" ");
console.log("***************STRINGS AND THEIR PROPERTIES*******************");
console.log(" ");
/*********Strings And Their Properties***********/
let kim = "KIM";
kim.age = 18;
console.log(kim.age); // undefined cos strings are immutable

console.log(String(6).padStart(5, "0"));
console.log(String(7).padEnd(5, "0"));

let sentence = "The quick brown fox jumps over the lazy dog";
let words = sentence.split(" ").join(" ");
console.log(words);

console.log(" ");
console.log("*************REST PARAMETERS****************");
console.log(" ");
/***************Rest Parameters****************/
// function that finds the maximum number

let max = (...numbers) => {
  let result = -Infinity;
  for (let num of numbers) {
    if (num > result) result = num;
  }
  return result;
};
console.log(max(9, 5, 8, 77, 6, 2, 5, 66));

console.log(" ");
console.log("*************Math rounding methods****************");
console.log(" ");

/*************Math*************/
let num = 13.546;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num)); // checks the number after the decimal before
