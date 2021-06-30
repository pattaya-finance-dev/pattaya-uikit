import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <g id="more_horiz" transform="translate(-4 0)">
        <path
          id="Vector"
          d="M2,0A2,2,0,1,0,4,2,2.006,2.006,0,0,0,2,0ZM14,0a2,2,0,1,0,2,2A2.006,2.006,0,0,0,14,0ZM8,0a2,2,0,1,0,2,2A2.006,2.006,0,0,0,8,0Z"
          transform="translate(4 10)"
          fill="#e4baf0"
        />
      </g>
    </Svg>
  );
};

export default Icon;
