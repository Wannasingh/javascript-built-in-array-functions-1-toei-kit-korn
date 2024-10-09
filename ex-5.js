const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let count = students.length;
  return students
    .map((sumScore) => sumScore.score)
    .reduce((acc, cur) => acc + cur / count, 0);
}

console.log(getAverageStudentScore(students)); // Output: 87.5
