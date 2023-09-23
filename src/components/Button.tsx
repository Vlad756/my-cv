import useWindowDimensions from "../hooks/useWindowDimensions";
import styles from "../styles.module.css";

interface ButtonProps {
  tooltip: string;
  text: string;
  onClick: () => void;
  selected: boolean;
}

export const Button = ({ tooltip, text, onClick, selected }: ButtonProps) => {
  const { height, width } = useWindowDimensions();
  return (
    <button
      onClick={onClick}
      data-tooltip-id="tooltip-data-html"
      data-tooltip-html={tooltip}
      className={width < 1000 ? styles.navbuttonMobile : styles.navbutton}
      style={selected ? { color: "White", opacity: 0.9 } : {}}
    >
      {text}
    </button>
  );
};
