const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log("01 - Quarto insegnante:", fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers.splice(4, 1, "Patrick");
console.log("02 - Insegnante che sostituisce il quinto nell'elenco", teachers);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log("03 - Ultimo insegnante:", lastTeacher);
console.log(
  "03b - Insegnanti rimasti dopo l'eliminazione dell'ultimo insegnante",
  teachers
);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log("04 - Primo insegnante:", firstTeacher);
console.log(
  "04b - Insegnanti rimasti dopo l'eliminazione del primo insegnante",
  teachers
);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa");
console.log(
  "05- Insegnanti dopo l'aggiunta di Vanessa alla fine dell'array",
  teachers
);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah");
console.log(
  "06 - Insegnanti dopo l'aggiunta di Sarah all'inizio dell'array",
  teachers
);

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes("Fabio");
console.log("07 - Fabio è presente nell'array?", isFabioPresent);

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf("Lewis");
console.log("08 - Index di Lewis:", lewisIndex);

// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(", ");
console.log("09 - Stringa degli insegnanti:", teachersString);

// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length === 0;
console.log("10 - L'array degli insegnanti è vuoto?:", isTeachersEmpty);
