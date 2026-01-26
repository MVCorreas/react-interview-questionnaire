export const reactQuestions = [
  {
    id: 1,
    prompt: "What does JSX stand for?",
    options: ["Javascript Syntax Extension", "JSON Xpress", "Javascript XML"],
    answerIndex: 2,
    feedback:
      "JSX allows developers to write code that looks similar to HTML within JavaScript files.",
  },
  {
    id: 2,
    prompt: "What is the difference between fragment and div?",
    options: [
      "Fragments use less memory",
      "Divs do not create an extra node in the DOM",
      "Nothing, both have same uses",
    ],
    answerIndex: 0,
    feedback:
      "React fragments don't create extra DOM nodes like divs do. While a div becomes a real HTML element in the DOM tree, fragments are just a JSX grouping mechanism that disappears during rendering, leaving only their children in the final DOM.",
  },
  {
    id: 3,
    prompt: "What is the difference between state and props?",
    options: [
      "State is internal to the component, and immutable",
      "Props are passed from parent to child component for component reusability",
      "Props are read-only and always create prop drilling",
    ],
    answerIndex: 1,
    feedback:
      "State is internal and mutable. Props are passed from parent to child for reusability and are read-only. Prop Drilling can be avoided using other types of state management like Context API or Redux.",
  },
  {
    id: 4,
    prompt: "What does JSX stand for?",
    options: ["Javascript Syntax Extension", "JSON Xpress", "Javascript XML"],
    answerIndex: 2,
  },
  {
    id: 5,
    prompt: "What is the difference between fragment and div?",
    options: [
      "Fragments use less memory",
      "Divs do not create an extra node in the DOM",
      "Nothing, both have same uses",
    ],
    answerIndex: 0,
  },
  {
    id: 6,
    prompt: "What is the difference between state and props?",
    options: [
      "State is internal to the component, and immutable",
      "Props are passed from parent to child component for component reusability",
      "Props are read-only and always create prop drilling",
    ],
    answerIndex: 1,
  },
  {
    id: 7,
    prompt: "What does JSX stand for?",
    options: ["Javascript Syntax Extension", "JSON Xpress", "Javascript XML"],
    answerIndex: 2,
  },
  {
    id: 8,
    prompt: "What is the difference between fragment and div?",
    options: [
      "Fragments use less memory",
      "Divs do not create an extra node in the DOM",
      "Nothing, both have same uses",
    ],
    answerIndex: 0,
  },
  {
    id: 9,
    prompt: "What is the difference between state and props?",
    options: [
      "State is internal to the component, and immutable",
      "Props are passed from parent to child component for component reusability",
      "Props are read-only and always create prop drilling",
    ],
    answerIndex: 1,
  },
  {
    id: 10,
    prompt: "What is the difference between state and props?",
    options: [
      "State is internal to the component, and immutable",
      "Props are passed from parent to child component for component reusability",
      "Props are read-only and always create prop drilling",
    ],
    answerIndex: 1,
  },
];
