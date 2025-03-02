import React, { useState } from "react";
import { Status } from "../../src";

export default () => {
  return (
    <div>
      <Status color="#f00" text="安全等级" count={98} width={120} />
      <Status status="success" text="风险评估" count={98} />
    </div>
  );
};
