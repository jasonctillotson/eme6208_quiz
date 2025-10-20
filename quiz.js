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
    }
  ];

  const compliments = [
    "Brilliant!",
    "You're a wizarding genius!",
    "Accio correct answers!",
    "Fantastic!",
    "Correct!",
    "Great Job!",
    "You nailed it!"
  ];

  const quizForm = document.getElementById("quiz-form");
  const result = document.getElementById("result");

  quizData.forEach((item, i) => {
    const qBlock = document.createElement("div");

    const qText = document.createElement("p");
    qText.innerHTML = `<strong>Q${i + 1}.</strong> ${item.question}`;
    qBlock.appendChild(qText);

    item.choices.forEach((choice, j) => {
      const letter = String.fromCharCode(97 + j); // a, b, c, d
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${i}`;
      input.value = letter;
      label.appendChild(input);
      label.append(` ${choice}`);
      qBlock.appendChild(label);
    });

    quizForm.appendChild(qBlock);
  });

  const submitBtn = document.createElement("button");
  submitBtn.type = "button";
  submitBtn.textContent = "Submit Answers";
  quizForm.appendChild(submitBtn);

  submitBtn.addEventListener("click", () => {
    let score = 0;
    quizData.forEach((item, i) => {
      const selected = quizForm.querySelector(`input[name="q${i}"]:checked`);
      if (selected && selected.value === item.answer) score++;
    });
    if (score === quizData.length) {
      result.textContent = compliments[Math.floor(Math.random() * compliments.length)];
    } else {
      result.textContent = `You got ${score} out of ${quizData.length} correct.`;
    }
  });
});
