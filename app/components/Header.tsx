export default function Header() {
  return (
    <>
      <header className="text-center space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
          React Quiz
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Test Your Skills
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-300">
          10 slides, one correct answer per question.
        </p>
      </header>
    </>
  );
}
