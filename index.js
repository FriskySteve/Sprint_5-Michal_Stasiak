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

function addNickname(table) {
  table.forEach((person) => {
    let firstNameChars = person.firstName;
    let lastNameChars = person.lastName;
    if (typeof firstNameChars !== "string" || typeof lastNameChars !== "string")
      return;
    if (firstNameChars.trim().length < 3 || lastNameChars.trim().length < 3)
      return;
    person.nickname = createNickname(person);
  });
}

function createNickname(object) {
  let firstNameChars = object.firstName;
  let lastNameChars = object.lastName;
  if (
    firstNameChars.trim().length < 3 &&
    typeof firstNameChars !== "string" &&
    lastNameChars.trim().length < 3 &&
    typeof lastNameChars !== "string"
  )
    return;
  firstNameChars = firstNameChars
    .slice(-3)
    .split("")
    .reverse()
    .join("")
    .toLowerCase();
  lastNameChars = lastNameChars
    .slice(0, 3)
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  let nickname = firstNameChars + lastNameChars;
  nickname = nickname.charAt(0).toUpperCase() + nickname.slice(1);
  return nickname;
}

function getAge(person, table) {
  let age = 0;
  let index = table.indexOf(person);
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

function addAge() {
  addNickname(entryTable);
  const peopleWithNickame = entryTable.filter((people) => people.nickname);
  peopleWithNickame.forEach((person) => {
    person.age = getAge(person, peopleWithNickame);
  });
  return peopleWithNickame;
}
