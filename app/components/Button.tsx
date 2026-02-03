interface ButtonProps {
  text: string;
  disabled: boolean;
  onClick: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <>
      <button
        onClick={props.onClick}
        className="mx-auto w-fit px-4 py-2 flex items-center justify-center gap-3 min-h-12 rounded-lg font-medium bg-indigo-600 text-amber-50 focus:outline-none"
        style={props.disabled ? { backgroundColor: "#d1d5db" } : {}}
        disabled={props.disabled}
      >
        {props.text}
      </button>
    </>
  );
}
