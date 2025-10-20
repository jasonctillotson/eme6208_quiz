document.addEventListener("DOMContentLoaded", function() {
  const quizData = [
    {
      question: "What is the difference between a jungle and a rain forest?",
      choices: [
        "No difference. Simply two different ways in referring to the same thing.",
        "A jungle in general receives less rain than a rain forest.",
        "A jungle refers to the thickest area of a rain forest.",
        "A jungle and a rain forest each contain their own group of distinct plants and animals."
      ],
      answer: "c"
    },
    {
      question: "What is the world's most common religion?",
      choices: ["Christianity", "Buddhism", "Hinduism", "Muslim"],
      answer: "a"
    },
    {
      question: "Which city ranks as the world's most populous city?",
      choices: ["New York (US)", "Mexico City (Mexico)", "Tokyo (Japan)", "Shanghai (China)"],
      answer: "b"
    },
    {
      question: "According to statistics, what kind of sites on the net are the most popular?",
      choices: ["Adult content sites", "Portal sites", "Chat sites", "News sites"],
      answer: "b"
    },
    {
      question: "As of June 1998, how much is Microsoft Chairman Bill Gates's net worth?",
      choices: ["10 million US", "10 billion US", "35 billion US", "50 billion US"],
      answer: "d"
    }
  ];

  const compliments = ["Excellent!", "Wow, you're really rocking!", "You must have studied hard. Good job!", "Right on.", "Correct!", "Great Job!", "Good work!"];

  const container = document.getElementById("quiz-container");
  if (!container) return;

  container.style.cssText = "max-width:600px;margin:40px auto;padding:20px;border-radius:12px;background:#f9f9f9;box-shadow:0 0 10px rgba(0,0,0,0.1);font-family:Arial,sans-serif;";

  const title = document.createElement("h2");
  title.textContent = "Quick Knowledge Quiz";
  title.style.textAlign = "center";
  container.appendChild(title);

  const quizForm = document.createElement("form");
  quizData.forEach((item, i) => {
    const qBlock = document.createElement("div");
    qBlock.style.marginBottom = "20px";

    const qText = document.createElement("p");
    qText.innerHTML = `<strong>Q${i + 1}.</strong> ${item.question}`;
    qBlock.appendChild(qText);

    item.choices.forEach((choice, j) => {
      const letter = String.fromCharCode(97 + j); // a, b, c, d
      const label = document.createElement("label");
      label.style.display = "block";
      label.style.marginLeft = "10px";

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
  submitBtn.style.cssText = "display:block;margin:20px auto;padding:10px 20px;background:#0055ff;color:#fff;border:none;border-radius:6px;cursor:pointer;";
  quizForm.appendChild(submitBtn);

  const result = document.createElement("p");
  result.style.cssText = "text-align:center;font-weight:bold;margin-top:20px;";
  quizForm.appendChild(result);
  container.appendChild(quizForm);

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

solution[2]="a"
solution[3]="b"
