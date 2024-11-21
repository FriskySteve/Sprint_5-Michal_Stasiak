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
  table.forEach((person) => {});
}

function createNickname(object) {
  const firstNameChars = object.firstName
    .slice(-3)
    .split("")
    .reverse()
    .join("");
  const lastNameChars = object.lastName
    .slice(0, 3)
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  let nickname = lastNameChars + firstNameChars;
  nickname = nickname.charAt(0).toUpperCase() + nickname.slice(1);
  return nickname;
}

console.log(getChars(entryTable[1]));
