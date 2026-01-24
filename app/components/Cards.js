import { useState } from "react";
import { reactQuestions } from "../lib/questions";
import Card from "./Card";
import Button from "./Button"

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

      <Button
      className="mb-2" 
      onClick={handleNext}
      disabled={current === 2 ? true : false}
      text={'NEXT'}/>
    </>
  );
}
