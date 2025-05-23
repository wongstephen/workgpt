import * as React from "react";
import { SVGProps } from "react";

const ThreeDots = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <style>
      {
        "@keyframes spinner_MGfb{93.75%,to{opacity:.2}}.spinner_S1WN{animation:spinner_MGfb .8s linear infinite;animation-delay:-.8s}"
      }
    </style>
    <circle cx={4} cy={12} r={3} className="spinner_S1WN" fill="currentColor" />
    <circle
      cx={12}
      cy={12}
      r={3}
      className="spinner_S1WN"
      style={{
        animationDelay: "-.65s",
      }}
      fill="currentColor"
    />
    <circle
      cx={20}
      cy={12}
      r={3}
      className="spinner_S1WN"
      style={{
        animationDelay: "-.5s",
      }}
      fill="currentColor"
    />
  </svg>
);
export default ThreeDots;
