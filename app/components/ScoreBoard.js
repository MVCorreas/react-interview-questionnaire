export default function ScoreBoard({ score }) {
  return (
    <div className=" w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-indigo-600 h-4 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${score}%` }}
      />
      <h3 className="flex flex-col text-center text-lg font-semibold text-gray-600 dark:text-gray-200">
        {score} %
      </h3>
    </div>
  );
}
