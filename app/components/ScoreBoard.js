export default function ScoreBoard({ score, setScore }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-indigo-600 h-4 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${score}%` }}
      />
    </div>
  );
}
