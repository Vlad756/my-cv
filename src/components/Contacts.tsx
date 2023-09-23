import { faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties } from "react";
import { Tooltip } from "react-tooltip";
import useWindowDimensions from "../hooks/useWindowDimensions";

const contactsStyle: CSSProperties = {
  position: "absolute",
  bottom: 30,
  right: 10,
  color: "white",
  display: "flex",
  width: "130px",
  justifyContent: "space-between",
  zIndex: 1100,
};
const mobileContactsStyle: CSSProperties = {
  position: "absolute",
  bottom: 10,
  right: 10,
  color: "white",
  display: "flex",
  width: "130px",
  justifyContent: "space-between",
  zIndex: 1100,
};

export const Contacts = () => {
  const { height, width } = useWindowDimensions();
  const handleLinkedInButtocnClick = () => {
    window.open("https://www.linkedin.com/in/vladislav-cheliadin-65420b204/");
  };
  const handleTelegramButtonClick = () => {
    window.open("https://t.me/FirstName_LastName_305");
  };
  const handlerEmailButtonClick = () => {
    window.location.href = "mailto:v.chelyadin2015@gmail.com?body=Hello!";
  };
  return (
    <div style={width < 1000 ? mobileContactsStyle : contactsStyle}>
      <FontAwesomeIcon
        icon={faTelegram}
        size="2x"
        style={{ cursor: "pointer" }}
        onClick={handleTelegramButtonClick}
        data-tooltip-id="tooltip-contact-html"
        data-tooltip-html={"Telegram"}
      />
      <FontAwesomeIcon
        icon={faLinkedin}
        size="2x"
        style={{ cursor: "pointer" }}
        onClick={handleLinkedInButtocnClick}
        data-tooltip-id="tooltip-contact-html"
        data-tooltip-html={"LinkedIn"}
      />
      <FontAwesomeIcon
        icon={faEnvelope}
        size="2x"
        style={{ cursor: "pointer" }}
        onClick={handlerEmailButtonClick}
        data-tooltip-id="tooltip-contact-html"
        data-tooltip-html={"Email"}
      />
      <Tooltip id="tooltip-contact-html" />
    </div>
  );
};
