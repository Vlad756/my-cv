import { faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "react-tooltip";

export const Contacts = () => {
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
    <div
      style={{
        position: "absolute",
        bottom: "50px",
        right: "20px",
        color: "white",
        display: "flex",
        width: "130px",
        justifyContent: "space-between",
      }}
    >
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
