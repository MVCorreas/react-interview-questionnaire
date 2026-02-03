export default function Card({ question, onSelect, selected }) {
  const { prompt, options } = question;
  return (
    <div className="mx-auto w-full max-w-2xl">
      <h2 className="mb-4 text-xl font-semibold">{prompt}</h2>
      <ul className="space-y-3">
        {options.map((opt, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <input
              type="radio"
              id={`option-${idx}`}
              name="quiz-option"
              value={idx}
              checked={selected === idx}
              onChange={() => onSelect(idx)}
              className="h-4 w-4 cursor-pointer"
            />
            <label htmlFor={`option-${idx}`} className="cursor-pointer flex-1">
              {opt}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
