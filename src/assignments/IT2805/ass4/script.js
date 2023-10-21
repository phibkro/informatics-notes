/* Part 2 */
console.log("PART 2");

const startNumber = 1;
const endNumber = 20;

for (let i = startNumber; i <= endNumber; i++) {
  console.log(i);
}

/* Part 3 */
console.log("PART 3");

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  const fizz = "eple";
  const buzz = "kake";
  let output = "";
  if (element % 3 === 0) {
    output += fizz;
  }
  if (element % 5 === 0) {
    output += buzz;
  }
  if (!output) {
    output = element;
  }
  console.log(output);
}

/* Part 4 */
const idTitleEl = document.querySelector("#title");
idTitleEl.textContent = "Hello, JavaScript";
/* Part 5 */
const buttonEls = document.querySelectorAll("button");
const idMagicEl = document.querySelector("#magic");
console.log(idMagicEl);
function changeDisplay() {
  idMagicEl.style.display = "none";
  console.log("change display");
}

function changeVisibility() {
  idMagicEl.style.display = "block";
  idMagicEl.style.visibility = "hidden";
  console.log("change visibility");
}

function reset() {
  idMagicEl.removeAttribute("style");
  console.log("reset");
}
buttonEls[0].addEventListener("click", changeDisplay);
buttonEls[1].addEventListener("click", changeVisibility);
buttonEls[2].addEventListener("click", reset);

/* Part 6 */
const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Python",
  "Java",
  "AJAX",
  "JSON",
  "React",
  "Angular",
  "Bootstrap",
  "Node.js",
];

const idTechEl = document.querySelector("#tech");

technologies.forEach((techName) => {
  const liNode = document.createElement("li");
  liNode.textContent = techName;
  idTechEl.appendChild(liNode);
});
