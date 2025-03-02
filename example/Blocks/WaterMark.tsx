import React, { useState } from "react";
import { Title, Card, TCard, WaterMark, Handle, Status } from "../../src";

export default () => {
  return (
    <div>
      <WaterMark content={["我是水印啊", "17682304324"]}>
        <div style={{ height: "250px" }}></div>
      </WaterMark>
    </div>
  );
};
