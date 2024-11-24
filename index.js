const entryTable = [
  {
    firstName: false,
    lastName: 2,
  },
  {
    firstName: "Roman",
    lastName: "Kowalski",
  },

  {
    firstName: "Halina",
    lastName: "Malina",
  },
  {
    firstName: "B",
    lastName: "22",
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
  },
  {
    firstName: "Kamil",
    lastName: null,
  },
];

function addNickname(people) {
  const peopleWithNicknames = people.map((person) => {
    const firstNameChars = person.firstName;
    const lastNameChars = person.lastName;
    if (typeof firstNameChars !== "string" || typeof lastNameChars !== "string")
      return { ...person };
    if (firstNameChars.trim().length < 3 || lastNameChars.trim().length < 3)
      return { ...person };
    const newPerson = { ...person };
    newPerson.nickname = createNickname(person);
    return newPerson;
  });
  return peopleWithNicknames;
}

function createNickname(person) {
  const firstNameChars = person.firstName
    .slice(-3)
    .split("")
    .reverse()
    .join("")
    .toLowerCase();
  const lastNameChars = person.lastName
    .slice(0, 3)
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

  const nickname = firstNameChars + lastNameChars;
  return nickname.charAt(0).toUpperCase() + nickname.slice(1);
}

function getAge(person, people) {
  let age = 0;
  let index = people.indexOf(person);
  const firstNameAndLastNameSumChar =
    person.firstName.length + person.lastName.length;
  if (firstNameAndLastNameSumChar % 2 === 0) {
    age = firstNameAndLastNameSumChar;
  } else {
    if (index === 0) index = 1;
    age =
      Object.keys(person).reduce((acc, curr) => {
        return acc + curr.length;
      }, 0) / index;
  }
  return age;
}

function addAge(people) {
  const peopleWithNickame = addNickname(people).filter(
    (person) => person.nickname
  );
  peopleWithNickame.map((person) => {
    person.age = getAge(person, peopleWithNickame);
  });
  return peopleWithNickame;
}

function mostCommonChar(string) {
  const counter = {};
  const chars = string.toLowerCase().split("");
  chars.forEach((char) => {
    counter[char] = (counter[char] || 0) + 1;
  });

  let count = 0;
  let mostCommonLetter = "";
  for (const char in counter) {
    if (counter[char] > count) {
      count = counter[char];
      mostCommonLetter = char;
    } else if (counter[char] === count) {
      if (char.charCodeAt() < mostCommonLetter.charCodeAt()) {
        count = counter[char];
        mostCommonLetter = char;
      }
    }
  }
  return { letter: mostCommonLetter, count: count };
}

function addMostCommonLetter(people) {
  const peopleWithMostCommonLetter = addAge(people).map((person) => {
    const allChars = person.firstName + person.lastName + person.nickname;
    const mostCommonLetter = mostCommonChar(allChars);
    person.mostCommonLetter = mostCommonLetter;
    return person;
  });
  return peopleWithMostCommonLetter;
}
