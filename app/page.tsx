"use client";
import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import QuizGame from "./components/QuizGame";

export default function Home() {
  const [quizStarted, setQuizStarted] = useState(false);

  if (!quizStarted) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 py-10 dark:bg-black">
        <div className="text-center space-y-6">
          <Header />
          <Button
            text="Start Quiz"
            onClick={() => setQuizStarted(true)}
            disabled={false}
          />
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 py-10 text-gray-900 dark:bg-black dark:text-gray-100">
      <div className="w-full max-w-3xl space-y-8">
        <Header />
        <QuizGame onClose={() => setQuizStarted(false)} />
      </div>
    </main>
  );
}
