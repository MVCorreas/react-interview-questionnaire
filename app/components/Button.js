export default function Button({ text, onClick, disabled }) {
  return (
    <>
      <button
        onClick={onClick}
        className="mx-auto w-fit px-4 py-2 flex items-center justify-center gap-3 min-h-12 rounded-lg font-medium bg-indigo-400 text-amber-50 focus:outline-none"
        style={disabled ? { backgroundColor: "#d1d5db" } : {}}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  );
}
