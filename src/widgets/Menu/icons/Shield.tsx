import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <g id="shield" transform="translate(-33.908 0)">
        <g id="Group_3969" data-name="Group 3969" transform="translate(33.908 0)">
          <path
            id="Path_2281"
            data-name="Path 2281"
            d="M51.139,5.277c-.025-.539-.025-1.054-.025-1.569a.722.722,0,0,0-.735-.735A9.85,9.85,0,0,1,43.049.2a.756.756,0,0,0-1.03,0,9.85,9.85,0,0,1-7.33,2.77.722.722,0,0,0-.735.735c0,.515,0,1.03-.025,1.569-.1,5.148-.245,12.208,8.359,15.174l.245.049.245-.049C51.36,17.485,51.237,10.449,51.139,5.277ZM41.946,12.41a.791.791,0,0,1-.515.2h-.025a.69.69,0,0,1-.515-.245l-2.28-2.525,1.1-.981,1.79,1.986,3.971-3.775,1.005,1.079Z"
            transform="translate(-33.908 0)"
            fill="#e4baf0"
          />
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
