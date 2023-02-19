import * as React from "react";
import { SVGProps } from "react";

export const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
    <g>
      <path
        d="m14.347 2.522-6.8 5.716L.752 2.522"
        style={{
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          fill: "none",
        }}
        transform="translate(.451 3.078)"
      />
    </g>
  </svg>
);
