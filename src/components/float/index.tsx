// @ts-nocheck
"use client";

import { forwardRef, useMemo } from "react";
import { mapObject } from "../../utils";

export interface FloatProps extends React.HTMLAttributes<HTMLDivElement> {
  placement?:
    | "bottom-end"
    | "bottom-start"
    | "top-end"
    | "top-start"
    | "bottom-center"
    | "top-center"
    | "middle-center"
    | "middle-end"
    | "middle-start";
  offsetX?: string | number;
  offsetY?: string | number;
  offset?: string | number;
}

const Float = forwardRef<HTMLDivElement, FloatProps>(
  (
    { placement = "top-end", offsetX, offsetY, offset = "0", style, ...rest },
    ref
  ) => {
    const computedStyle = useMemo(() => {
      return {
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: mapObject(placement, (v) => {
          const [side] = v.split("-");
          return {
            top: offsetY ?? offset,
            middle: "50%",
            bottom: "auto",
          }[side];
        }),
        bottom: mapObject(placement, (v) => {
          const [side] = v.split("-");
          return {
            top: "auto",
            middle: "50%",
            bottom: offsetY ?? offset,
          }[side];
        }),
        left: mapObject(placement, (v) => {
          const [, align] = v.split("-");
          return {
            start: offsetX ?? offset,
            center: "50%",
            end: "auto",
          }[align];
        }),
        right: mapObject(placement, (v) => {
          const [, align] = v.split("-");
          return {
            start: "auto",
            center: "50%",
            end: offsetX ?? offset,
          }[align];
        }),
        transform: mapObject(placement, (v) => {
          const [side, align] = v.split("-");
          return `translate(${
            {
              start: "-50%",
              center: "-50%",
              end: "50%",
            }[align] || "0"
          }, ${
            {
              top: "-50%",
              middle: "-50%",
              bottom: "50%",
            }[side] || "0"
          })`;
        }),
        ...style,
      };
    }, [placement, offsetX, offsetY, offset, style]);

    return <div ref={ref} style={computedStyle} {...rest} />;
  }
);

export default Float;
