import { useState } from "react";
import { reactQuestions } from "../lib/questions";
import Card from "./Card";

export default function Cards() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);

  const question = reactQuestions[current];

  const handleNext = () => {
    setCurrent(current + 1);
  };

  return (
    <>
      <Card
        question={question}
        selected={selected}
        onSelect={(idx) => setSelected(idx)}
      />
      <button onClick={handleNext} disabled={current === 2 ? true : false}>
        NEXT
      </button>
    </>
  );
}
