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
// Napisz funkcję przetwarzającą tablicę obiektów osób. Funkcja powinna generować pseudonim na podstawie określonych zasad i dodawać go do każdego obiektu osoby, gdy jest to możliwe. Nie nadpisuj danych wejściowych.
// Pobierz trzy ostatnie trzy litery imienia, odwróć ich kolejność i zapisz wynik
// Weź pierwsze trzy litery nazwiska, odwróć ich kolejność i dodaj to do wyniku z poprzedniego punktu
// Sformatuj połączony wynik tak, aby pseudonim zaczynał się od wielkiej litery, a reszta liter była mała.
// Dodaj ten pseudonim jako nową właściwość do obiektu osoby.
// Jeśli firstName lub lastName ma mniej niż trzy znaki (pomiń znaki białe) lub nie jest typu string, nie dodawaj właściwości pseudonimu dla tej osoby.

function addNickname(table) {
  table.forEach((person) => {
    let firstNameChars = person.firstName;
    let lastNameChars = person.lastName;
    if (typeof firstNameChars !== "string" || typeof lastNameChars !== "string")
      return;
    if (firstNameChars.trim().length < 3 || lastNameChars.trim().length < 3)
      return;
    person.nickname = createNickname(person);
    // console.log(createNickname(person));
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
  let nickname = lastNameChars + firstNameChars;
  nickname = nickname.charAt(0).toUpperCase() + nickname.slice(1);
  return nickname;
}

addNickname(entryTable);
console.log(entryTable);
// console.log(createNickname(entryTable[1]));
// console.log(entryTable[1]);
