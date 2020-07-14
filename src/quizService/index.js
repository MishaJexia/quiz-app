const qBank = [
  {
    question:
      "What is a CMS in web design?   ",
    answers: ["Content Management System", "Creative Management System", "Content Model System", "Components Management System"],
    correct: "Content Management System",
    questionId: "000001"
  },
  {
    question:
      'To make your website mobile friendly, you can make your website?',
    answers: ["Reactive", "Fast Loading", "Responsive", "Light"],
    correct: "Responsive",
    questionId: "000002"
  },
  {
    question:
      "What is WordPress?",
    answers: ["A text editor", "Text formatting system", "A Content Management System", "None of the previous"],
    correct: "A Content Management System",
    questionId: "000003"
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Current Style Sheets",
      "Components Style Sheets",
      "Cascading Style System",
      "Cascading Style Sheets"
    ],
    correct: "Cascading Style Sheets",
    questionId: "000004"
  },
  {
    question: "Which of the following statements is false?",
    answers: ["You can make a website without using PHP", "You can make a website without using CSS", "You can make a website without using Java", "You can make a website without using HTML"],
    correct: "You can make a website without using HTML",
    questionId: "000005"
  },
   {
    question: "What does SQL stand for?",
    answers: [
      "Statistical Query Language",
      "Structured Questions Lot",
      "Standard Query Language",
      "Structured Query Language"
    ],
    correct: "Structured Query Language",
    questionId: "000006"
  },
   {
    question: "HTML stands for?",
    answers: [
      "Higher Text Markup Language",
      "Hyper Text Modular Language",
      "Hyper Text Markup Language",
      "None of these"
    ],
    correct: "Hyper Text Markup Language",
    questionId: "000007"
  },
   {
    question: "Which of the following tag is used to mark a beginning of paragraph in HTML?",
    answers: [
      "<td>",
      "<p>",
      "<br>",
      "<tr>"
    ],
    correct: "<p>",
    questionId: "000008"
  },
  
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
