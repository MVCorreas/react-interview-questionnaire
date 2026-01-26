"use client";

import { CheckIcon, CrossIcon } from "../../public/FeedbackIcons";
import Button from "./Button";

export default function FeedbackMessage({
  handleNext,
  showFeedback,
  isCorrect,
  question,
}) {
  return (
    <div data-test="feedback-message" className="my-8">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex justify-center">
          {isCorrect ? (
            <span className="animated_check_circle">
              <CheckIcon />
            </span>
          ) : (
            <span className="animated_cross_circle">
              <CrossIcon />
            </span>
          )}
        </div>

        <div className="text-center">
          <p
            className={`mt-2 ${isCorrect ? "text-green-600" : "text-red-600"}`}
          >
            {question.id}
          </p>
        </div>

        <Button
          className="mb-2"
          onClick={handleNext}
          disabled={!showFeedback}
          text={"NEXT"}
        />
      </div>
    </div>
  );
}
