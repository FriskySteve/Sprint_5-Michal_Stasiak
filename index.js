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

// Stwórz funkcję, która przetworzy tablicę osób z pierwszego zadania (Należy wykorzystać wynik wywołania funkcji z pierwszego zadania), zwracając tylko osoby, które mają przypisany pseudonim oraz dodając nowe pole age do każdej osoby.
// Filtruj tablicę, aby zawierała tylko osoby z pseudonimem.
// Oblicz liczbę liter w imieniu i nazwisku każdej osoby.
// Jeśli suma liter jest parzysta, przypisz ją jako age. Jeśli nieparzysta, age oblicz jako sumę liter w kluczach firstName , lastName i nickname pobieranych dynamicznie podzieloną przez indeks osoby w tablicy ( jeżeli index wynosi 0 zastąp go 1 ). Użyj odpowiedniej metody do wyciagnięcia kluczy z obiektu oraz reduce w notacji łańcuchowej do zliczenia liter w kluczach.
// Dodaj pole age do każdego obiektu osoby.
// Zadbaj o to by wiek był zaokrąglony w górę (odszukaj potrzebnej informacji w internecie).

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

// Stwórz funkcję, która przetworzy tablicę osób z pierwszego zadania (Należy wykorzystać wynik wywołania funkcji z pierwszego zadania), zwracając tylko osoby, które mają przypisany pseudonim oraz dodając nowe pole age do każdej osoby.
// Filtruj tablicę, aby zawierała tylko osoby z pseudonimem.
// Oblicz liczbę liter w imieniu i nazwisku każdej osoby.
// Jeśli suma liter jest parzysta, przypisz ją jako age. Jeśli nieparzysta, age oblicz jako sumę liter w kluczach firstName , lastName i nickname pobieranych dynamicznie podzieloną przez indeks osoby w tablicy ( jeżeli index wynosi 0 zastąp go 1 ). Użyj odpowiedniej metody do wyciagnięcia kluczy z obiektu oraz reduce w notacji łańcuchowej do zliczenia liter w kluczach.
// Dodaj pole age do każdego obiektu osoby.
// Zadbaj o to by wiek był zaokrąglony w górę (odszukaj potrzebnej informacji w internecie).

addNickname(entryTable);
const peopleWithNickame = entryTable.filter((people) => people.nickname);

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

function addAge(table) {
  table.forEach((person) => {
    person.age = getAge(person, table);
  });
  return table;
}

console.log(addAge(peopleWithNickame));
