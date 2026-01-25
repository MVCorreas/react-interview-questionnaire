"use client";
import { useState } from "react";
import { reactQuestions } from "../lib/questions";
import Card from "./Card";
import Timer from "./Timer";
import Button from "./Button";
import ScoreBoard from "./ScoreBoard";

export default function QuizGame({ onClose }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);

  const question = reactQuestions[current];

  const handleSelect = (idx) => {
    setSelected(idx);
    // TODO: validate answer, calculate points based on timer, advance to next
    if (idx === question.answerIndex) {
      setScore(10);
    }
  };
  const handleNext = () => {
    if (current < reactQuestions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
    }
  };

  return (
    <section className="rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70">
      <div className="flex justify-end mb-4">
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          ✕
        </button>
      </div>
      <div className="space-y-6">
        <Card question={question} selected={selected} onSelect={handleSelect} />
        <Button
          className="mb-2"
          onClick={handleNext}
          disabled={current === 2 ? true : false}
          text={"NEXT"}
        />
        <div className="flex justify-center">
          <Timer key={current} />
        </div>
        <ScoreBoard score={score} setScore={setScore} />
      </div>
    </section>
  );
}
