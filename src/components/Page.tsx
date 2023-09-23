import { ParallaxLayer } from "@react-spring/parallax";
import { Clouds } from "./Clouds";

import styles from "../styles.module.css";

import photo from "./photo.png";
import { CSSProperties } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

interface PageProps {
  offset: number;
  gradient: string;
  header: string;
  text: string;
  onClick: () => void;
}

const photoStyle: CSSProperties = {
  width: "100px",
  borderRadius: "90px",
  marginLeft: "50px",
};

const photoMobileStyle: CSSProperties = {
  position: "absolute",
  width: "90px",
  borderRadius: "90px",
  top: "30%",
  right: 20,
};

export const Page = ({
  offset,
  gradient,
  onClick,
  header,
  text,
}: PageProps) => {
  const { height, width } = useWindowDimensions();
  return (
    <>
      <Clouds />
      <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
        <div className={styles.slopeBegin} />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
        <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.3} onClick={onClick}>
        <div className={width < 1200 ? styles.textboxMobile : styles.textbox}>
          <div className={width < 1200 ? styles.headerMobile : styles.header}>
            {header}
            {offset === 0 && (
              <img
                src={photo}
                style={width < 1000 ? photoMobileStyle : photoStyle}
                alt=""
              />
            )}
          </div>
          <p className={width < 1200 ? styles.textMobile : styles.text}>
            {text}
          </p>
        </div>
      </ParallaxLayer>
    </>
  );
};
