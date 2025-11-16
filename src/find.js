const persons = [
  { name: "dmitry", age: 37 },
  { name: "john", age: 17 },
  { name: "rita", age: 18 },
];

const audits = persons.find((person) => person.age === 18);

function predicate(person) {
  return person.age >= 18;
}

function predicate2(person, index) {
  return index > 1;
}

console.log(audits);
