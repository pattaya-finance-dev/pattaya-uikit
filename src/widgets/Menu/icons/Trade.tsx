import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <g id="exchange" transform="translate(-0.001 0)">
        <path
          id="Path_2282"
          data-name="Path 2282"
          d="M10.525,9.091v1.15a1.747,1.747,0,0,0,.217.91,1.03,1.03,0,0,0,.895.518,1.535,1.535,0,0,0,1.071-.525l3.8-3.8a2.141,2.141,0,0,0,0-3.025l-3.8-3.8A1.535,1.535,0,0,0,11.637,0c-.553,0-1.111.442-1.111,1.429V2.473A11.281,11.281,0,0,0,.006,12.347a.67.67,0,0,0,1.206.477,9.453,9.453,0,0,1,9.314-3.733Zm0,0"
          transform="translate(0)"
          fill="#e4baf0"
        />
        <path
          id="Path_2283"
          data-name="Path 2283"
          d="M80.959,218.812a.67.67,0,0,0-.787.227,9.453,9.453,0,0,1-9.313,3.733v-1.15c0-.987-.558-1.429-1.111-1.429a1.536,1.536,0,0,0-1.071.525l-3.8,3.8a2.141,2.141,0,0,0,0,3.025l3.8,3.8a1.535,1.535,0,0,0,1.071.525c.553,0,1.111-.442,1.111-1.429v-1.044a11.281,11.281,0,0,0,10.519-9.874A.67.67,0,0,0,80.959,218.812Zm0,0"
          transform="translate(-61.382 -208.993)"
          fill="#e4baf0"
        />
      </g>
    </Svg>
  );
};

export default Icon;
