import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" width="24px" transform="translate(12 8)" {...props}>
      <path
        id="Vector"
        d="M1.713,6.292l3.88-3.88,3.88,3.88a1,1,0,1,0,1.41-1.41L6.293.292a1,1,0,0,0-1.41,0L.292,4.882a1,1,0,0,0,0,1.41,1.017,1.017,0,0,0,1.42,0Z"
        fill="#7a6eaa"
      />
    </Svg>
  );
};

export default Icon;
