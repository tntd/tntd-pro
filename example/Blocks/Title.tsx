import React, { useState } from "react";
import { Title, Card, TCard, WaterMark, Handle, Status } from "../../src";

export default () => {
  return (
    <div>
      <Title
        title="标题"
        subTitle="副标题"
        extra={<div>extra</div>}
        number={2}
        style={{
          marginBottom: 20,
        }}
      />
    </div>
  );
};
