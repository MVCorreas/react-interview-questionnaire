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
    options: [
      "Upgrading state management libraries",
      "When two or more components share same states, then we move the state to the parent component",
      "Mechanism to increase the memory campacity of a component to store state",
    ],
    answerIndex: 1,
    feedback:
      "When several children share the same state, the state is moved to a parent component. Hence, avoiding separate, individual, local states",
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
    feedback:
      "A lightweight representation of the real DOM used to optimize UI rendering, since it syncs with the real DOM, comparing using a method called diffing, and reconciling by rendering only the mininal changes in an element.",
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
    feedback:
      "Index is an attribute added to elements when mapping over arrays. It is unique. It helps identify the items that have changed, been added or removed. Use id instead.",
  },
  {
    id: 7,
    prompt:
      "What is the difference between controlled and uncontrolled components?",
    options: [
      "Controlled components have their form data handled by React state, while uncontrolled components store data in the DOM",
      "Controlled components use class-based syntax, while uncontrolled components use functional syntax",
      "Controlled components can only be used with input elements, while uncontrolled components work with all form elements",
    ],
    answerIndex: 0,
    feedback:
      "Controlled components have their form data managed by React state and update via onChange handlers, keeping UI in sync. Uncontrolled components store data in the DOM and are accessed using refs when needed.",
  },
  {
    id: 8,
    prompt: "What is the difference between useMemo and useCallback?",
    options: [
      "useMemo is for class components, while useCallback is for functional components ",
      "useMemo memoizes computed values, while useCallback memoizes functions",
      "useMemo prevents re-renders, while useCallback creates new component instances",
    ],
    answerIndex: 1,
    feedback:
      "useMemo memoizes the result of expensive calculations and returns the cached value when dependencies haven't changed. useCallback memoizes function references to prevent unnecessary re-creations, which is useful for preventing child re-renders when passing callbacks as props.",
  },
  {
    id: 9,
    prompt: "What are Higher Order components?",
    options: [
      "A Higher-Order Component is a function that takes a component and returns a new component with extra features (e.g. state)",
      "Built-in React components that have higher priority in the rendering queue",
      "Components that can only be used at the top level of the component tree",
    ],
    answerIndex: 0,
    feedback:
      "Higher-Order Components (HOCs) are functions that take a component as an argument and return a new enhanced component. They're used for code reuse, logic sharing, and adding functionality like authentication, logging, or state management to existing components.",
  },
  {
    id: 10,
    prompt: "What are the implications of non proper use of state?",
    options: [
      "State errors only affect development mode, not production builds ",
      "Components will automatically optimize themselves regardless of state usage",
      "Unnecessary re-renders, memory leaks, and poor performance",
    ],
    answerIndex: 2,
    feedback:
      "Improper state management can result in unnecessary re-renders, memory leaks, slow user interfaces, and difficulty in maintaining component logic. Efficient state structuring, minimizing prop drilling, and using appropriate state management techniques are essential to achieving optimal performance and maintainability in React applications.",
  },
];
