import { useRef, useState } from "react";
import { Parallax, IParallax } from "@react-spring/parallax";
import styles from "./styles.module.css";
import { ABOUT_ME, APPLICATION_SECURITY, BACKEND, FRONTEND } from "./constants";
import { Tooltip } from "react-tooltip";
import { Page } from "./components/Page";
import { Button } from "./components/Button";
import { Contacts } from "./components/Contacts";

export default function App() {
  const parallax = useRef<IParallax>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
      setCurrentPage(to);
    }
  };

  return (
    <div
      style={{ background: "#dfdfdf" }}
      onWheel={(e) => {
        e.preventDefault();
        if (!parallax.current) return;
        if (parallax.current.busy) return;
        if (e.deltaY > 0 && currentPage < 4) scroll(currentPage + 0.1);
        else if (e.deltaY < 0 && currentPage > 0) scroll(currentPage - 0.1);
        else if (e.deltaY > 0) scroll(4);
        else if (e.deltaY < 0) scroll(0);
      }}
    >
      <Parallax
        className={`${styles.container} + ${styles.test}`}
        ref={parallax}
        pages={5}
        horizontal
      >
        <Page
          offset={0}
          gradient="pink"
          onClick={() => scroll(1)}
          header={ABOUT_ME.title}
          text={ABOUT_ME.text}
        />
        <Page
          offset={1}
          gradient="teal"
          onClick={() => scroll(2)}
          header={BACKEND.title}
          text={BACKEND.text}
        />
        <Page
          offset={2}
          gradient="tomato"
          onClick={() => scroll(3)}
          header={FRONTEND.title}
          text={FRONTEND.text}
        />
        <Page
          offset={3}
          gradient="sec"
          onClick={() => scroll(4)}
          header={APPLICATION_SECURITY.title}
          text={APPLICATION_SECURITY.text}
        />
        <Page
          offset={4}
          gradient="teal"
          onClick={() => scroll(0)}
          header={"Have a nice day!"}
          text={"At the bottom right you can find my contact information."}
        />
      </Parallax>
      <div style={{ position: "absolute", left: "3%", bottom: 50 }}>
        <Button
          tooltip="<h3>About Me</h3>"
          text="1"
          onClick={() => scroll(0)}
          selected={currentPage === 0}
        />
        <Button
          tooltip="<h3>Backend Development</h3>"
          text="2"
          onClick={() => scroll(1)}
          selected={currentPage === 1}
        />
        <Button
          tooltip="<h3>Frontend Development</h3>"
          text="3"
          onClick={() => scroll(2)}
          selected={currentPage === 2}
        />
        <Button
          tooltip="<h3>Application Security</h3>"
          text="4"
          onClick={() => scroll(3)}
          selected={currentPage === 3}
        />
        <Button
          tooltip="<h3>:)</h3>"
          text="5"
          onClick={() => scroll(4)}
          selected={currentPage === 4}
        />
      </div>
      <Contacts />
      <Tooltip id="tooltip-data-html" />
    </div>
  );
}
