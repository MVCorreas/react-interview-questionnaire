"use client";
import { useState } from "react";
import { reactQuestions } from "../lib/questions";
import Card from "./Card";
import Timer from "./Timer";
import ScoreBoard from "./ScoreBoard";
import FeedbackMessage from "./FeedbackMessage";

interface QuizGameProps {
  onClose?: () => void;
}

export default function QuizGame({ onClose = () => {} }: QuizGameProps) {
  const [current, setCurrent] = useState<number>(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const question = reactQuestions[current];

  const handleSelect = (idx: number) => {
    if (showFeedback) return;

    setSelected(idx);
    const correct = idx === question.answerIndex;
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 10);
    }

    setShowFeedback(true);
  };

  const handleNext = () => {
    if (current < reactQuestions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
      setShowFeedback(false);
      setIsCorrect(false);
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
        {current < reactQuestions.length ? (
          <>
            <Card
              question={question}
              selected={selected}
              onSelect={handleSelect}
            />

            {showFeedback && (
              <FeedbackMessage
                handleNext={handleNext}
                showFeedback={showFeedback}
                isCorrect={isCorrect}
                question={question}
              />
            )}

            {!showFeedback && (
              <div className="flex justify-center">
                <Timer key={current} />
              </div>
            )}

            <ScoreBoard score={score} />
          </>
        ) : (
          <div className="text-center p-4 bg-green-100 rounded-lg">
            <p className="font-semibold text-green-800">Quiz Complete!</p>
            <p className="text-green-700">Final Score: {score}</p>
          </div>
        )}
      </div>
    </section>
  );
}
