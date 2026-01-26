const CheckIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    style={{ margin: "0", width: "64px" }}
    className={className}
  >
    <circle className="path circle" cx="50" cy="50" r="45" fill="transparent" />
    <line className="path line" x1="30" y1="50" x2="45" y2="70" />
    <line className="path check" x1="45" y1="70" x2="70" y2="30" />
  </svg>
);

const CrossIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    style={{ margin: "0", width: "64px" }}
    className={className}
  >
    <circle className="path circle" cx="50" cy="50" r="45" fill="transparent" />
    <line className="path line" x1="30" y1="30" x2="70" y2="70" />
    <line className="path line" x1="70" y1="30" x2="30" y2="70" />
  </svg>
);

export { CheckIcon, CrossIcon };
