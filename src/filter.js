const persons = [
  { name: 'dmitry', age: 37 },
  { name: 'john', age: 17, },
  { name: 'rita', age: 18 }
];

const audits = persons.filter(cens(18));

function cens(cens = 18) {
  const c = cens;
  return  function predicate(person) {
    return  person.age >= c;
  }
}


function predicate2(person, index) {
  return  index > 1;
}


console.log(audits);
