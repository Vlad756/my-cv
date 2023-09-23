import { ParallaxLayer } from "@react-spring/parallax";

import cloud from "./cloud.svg";
import useWindowDimensions from "../hooks/useWindowDimensions";

export const Clouds = () => {
  const { height, width } = useWindowDimensions();
  return (
    <div>
      {/* <ParallaxLayer
      offset={0}
      speed={0}
      factor={3}
      style={{
        backgroundImage: url("IMAGE_NAME", true),
        backgroundSize: "cover",
        opacity: 0.2,
      }}
    /> */}

      <ParallaxLayer offset={0} speed={0} style={{ opacity: 0.2 }}>
        <img
          src={cloud}
          style={{
            display: "block",
            width: "10%",
            marginLeft: "55%",
            opacity: 0.5,
          }}
          alt=""
        />
        <img
          src={cloud}
          style={{ display: "block", width: "7%", marginLeft: "40%" }}
          alt=""
        />
        {width < 1000 && (
          <img
            src={cloud}
            style={{
              display: "block",
              width: "7%",
              marginLeft: "15%",
              opacity: 0.2,
            }}
            alt=""
          />
        )}
      </ParallaxLayer>

      <ParallaxLayer offset={0.6} speed={0} style={{ opacity: 0.4 }}>
        <img
          src={cloud}
          style={{ display: "block", width: "15%", marginLeft: "60%" }}
          alt=""
        />
        <img
          src={cloud}
          style={{ display: "block", width: "15%", marginLeft: "20%" }}
          alt=""
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
        <img
          src={cloud}
          style={{ display: "block", width: "15%", marginLeft: "55%" }}
          alt=""
        />
        {width < 1000 && (
          <img
            src={cloud}
            style={{ display: "block", width: "7%", marginLeft: "15%" }}
            alt=""
          />
        )}
      </ParallaxLayer>

      <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
        <img
          src={cloud}
          style={{ display: "block", width: "15%", marginLeft: "70%" }}
          alt=""
        />
        <img
          src={cloud}
          style={{ display: "block", width: "15%", marginLeft: "40%" }}
          alt=""
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
        <img
          src={cloud}
          style={{ display: "block", width: "7%", marginLeft: "10%" }}
          alt=""
        />
        <img
          src={cloud}
          style={{ display: "block", width: "15%", marginLeft: "75%" }}
          alt=""
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
        <img
          src={cloud}
          style={{ display: "block", width: "15%", marginLeft: "60%" }}
          alt=""
        />
        <img
          src={cloud}
          style={{ display: "block", width: "7%", marginLeft: "80%" }}
          alt=""
        />
      </ParallaxLayer>

      <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
        <img
          src={cloud}
          style={{ display: "block", width: "15%", marginLeft: "5%" }}
          alt=""
        />
        <img
          src={cloud}
          style={{ display: "block", width: "10%", marginLeft: "80%" }}
          alt=""
        />
      </ParallaxLayer>

      <ParallaxLayer offset={3.2} speed={-0.2} style={{ opacity: 0.4 }}>
        <img
          src={cloud}
          style={{ display: "block", width: "15%", marginLeft: "60%" }}
          alt=""
        />
        <img
          src={cloud}
          style={{ display: "block", width: "15%", marginLeft: "20%" }}
          alt=""
        />
      </ParallaxLayer>
    </div>
  );
};
