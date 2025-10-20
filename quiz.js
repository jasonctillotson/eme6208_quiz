document.addEventListener("DOMContentLoaded", function() {
  const quizData = [
    {
      question: "What house at Hogwarts does Harry belong to?",
      choices: ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"],
      answer: "a"
    },
    {
      question: "Who is the Half-Blood Prince?",
      choices: ["Harry Potter", "Severus Snape", "Tom Riddle", "Albus Dumbledore"],
      answer: "b"
    },
    {
      question: "What position does Harry play on his Quidditch team?",
      choices: ["Chaser", "Beater", "Seeker", "Keeper"],
      answer: "c"
    },
    {
      question: "Which magical creature guards the entrance to the Gryffindor common room?",
      choices: ["House Elf", "Gargoyle", "Fat Lady Portrait", "Hippogriff"],
      answer: "c"
    },
    {
      question: "What does the spell 'Expelliarmus' do?",
      choices: ["Conjures a Patronus", "Disarms your opponent", "Levitate objects", "Unlocks doors"],
      answer: "b"
    },
    {
      question: "What is Voldemort's real name?",
      choices: ["Tom Riddle", "Severus Snape", "Lucius Malfoy", "Draco Malfoy"],
      answer: "a"
    },
    {
      question: "Which object is NOT one of the Deathly Hallows?",
      choices: ["Elder Wand", "Resurrection Stone", "Invisibility Cloak", "Time-Turner"],
      answer: "d"
    },
    {
      question: "Who teaches Potions at Hogwarts for most of the series?",
      choices: ["Minerva McGonagall", "Severus Snape", "Horace Slughorn", "Gilderoy Lockhart"],
      answer: "b"
    },
    {
      question: "Which magical creature is Hagrid fond of?",
      choices: ["Dragons", "Unicorns", "Basilisks", "Merpeople"],
      answer: "a"
    },
    {
      question: "What form does Hermione's Patronus take?",
      choices: ["Otter", "Doe", "Cat", "Stag"],
      answer: "a"
    }
  ];

  const container = document.getElementById("quiz-container");

  quizData.forEach((item, i) => {
    const qCard = document.createElement("div");
    qCard.className = "question-card";

    const qText = document.createElement("p");
    qText.innerHTML = `<strong>Q${i+1}.</strong> ${item.question}`;
    qCard.appendChild(qText);

    const feedback = document.createElement("p");
    feedback.className = "feedback";
    qCard.appendChild(feedback);

    item.choices.forEach((choice, j) => {
      const letter = String.fromCharCode(97 + j); // a, b, c, d
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${i}`;
      input.value = letter;

      input.addEventListener("change", () => {
        // Remove previous classes
        item.choices.forEach((_, idx) => {
          const lbl = qCard.querySelectorAll("label")[idx];
          lbl.classList.remove("correct", "incorrect");
        });

        // Mark selected answer
        if (input.value === item.answer) {
          label.classList.add("correct");
          feedback.textContent = "Correct!";
          feedback.style.color = "green";
        } else {
          label.classList.add("incorrect");
          feedback.textContent = `Incorrect. The correct answer is "${item.choices[item.answer.charCodeAt(0)-97]}".`;
          feedback.style.color = "red";
        }

        // Disable all inputs for this question after selecting
        const allInputs = qCard.querySelectorAll("input");
        allInputs.forEach(inp => inp.disabled = true);
      });

      label.appendChild(input);
      label.append(` ${choice}`);
      qCard.appendChild(label);
    });

    container.appendChild(qCard);
  });

  // --- Cheat Mode ---
  const cheatBtn = document.getElementById("cheatBtn");
  cheatBtn.addEventListener("click", () => {
    const allCards = container.querySelectorAll(".question-card");
    allCards.forEach((card, i) => {
      const correctIndex = quizData[i].answer.charCodeAt(0) - 97;
      const labels = card.querySelectorAll("label");
      labels.forEach((lbl, idx) => {
        if (idx === correctIndex) lbl.classList.add("correct");
      });
    });
  });
});
