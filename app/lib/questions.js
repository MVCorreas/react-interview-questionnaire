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
    prompt: "What does lift state up mean?",
    options: ["Upgrading state management libraries", "When two or more components share same states, then we move the state to the parent component", "Mechanism to increase the memory campacity of a component to store state"],
    answerIndex: 1,
    feedback: "When several children share the same state, the state is moved to a parent component. Hence, avoiding separate, individual, local states"
  },
  {
    id: 5,
    prompt: "What is Virtual DOM?",
    options: [
      "A physical server that hosts React applications in the cloud",
      "A browser extension that allows developers to inspect React components in real-time",
      "A lightweight JavaScript representation of the real DOM that React uses to optimize rendering",
    ],
    answerIndex: 2,
    feedback: "A lightweight representation of the real DOM used to optimize UI rendering, since it syncs with the real DOM, comparing using a method called diffing, and reconciling by rendering only the mininal changes in an element."
  },
  {
    id: 6,
    prompt: "Can we use index as a key prop when mapping over arrays?",
    options: [
      "Sure, indexes perform faster than ids or other property",
      "No, an index can only be used when mapping over arrays outside JSX",
      "We can, but elements in an array may change their index, hence creating bugs.",
    ],
    answerIndex: 2,
    feedback: "Index is an attribute added to elements when mapping over arrays. It is unique. It helps identify the items that have changed, been added or removed. Use id instead."
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
