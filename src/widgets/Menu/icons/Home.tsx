import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        id="Vector"
        d="M7.2,15.655v-5h4v5a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1v-7h1.7a.5.5,0,0,0,.33-.87L9.868.255a1.008,1.008,0,0,0-1.34,0L.168,7.785a.5.5,0,0,0,.33.87H2.2v7a1,1,0,0,0,1,1h3A1,1,0,0,0,7.2,15.655Z"
        transform="translate(2.802 3.345)"
        fill="#e4baf0"
      />
    </Svg>
  );
};

export default Icon;
