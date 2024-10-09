const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let result = students.reduce((acc, cur) => {
    return acc + cur.score / students.length;
  }, 0);
  return result 
}

getAverageStudentScore(students); // Output: 87.5
console.log(getAverageStudentScore(students));
console.log(students.length);


// function getAverageStudentScore(students) {
//   // ใช้ reduce เพื่อรวมคะแนนทั้งหมด
//   let totalScore = students.reduce((acc, cur) => {
//     return acc + cur.score; // คืนค่าผลลัพธ์ที่สะสมได้
//   }, 0);

//   // คำนวณค่าเฉลี่ยโดยหารด้วยจำนวนของ students
//   return totalScore / students.length;
// }