import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" transform="translate(0, 3)" {...props}>
      <path id="Vector" d="M14.5,9A1.5,1.5,0,1,1,13,7.5,1.5,1.5,0,0,1,14.5,9Z" fill="#d136ff" />
      <path
        id="Vector-2"
        data-name="Vector"
        d="M18,2V4.28A2,2,0,0,1,19,6v6a2,2,0,0,1-1,1.72V16a2.006,2.006,0,0,1-2,2H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H16A2.006,2.006,0,0,1,18,2ZM10,12h7V6H10ZM2,2V16H16V14H10a2.006,2.006,0,0,1-2-2V6a2.006,2.006,0,0,1,2-2h6V2Z"
        fill="#d136ff"
      />
    </Svg>
  );
};

export default Icon;
