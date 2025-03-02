import React, { useState } from "react";
import { Title, Handle } from "../../src";

export default () => {
  return (
    <div>
      <Handle>
        <a
          onClick={() => {
            console.log("online");
          }}
        >
          上线
        </a>
        <a>查看</a>
        <a>编辑</a>
        <a>测试</a>
        <a>导入</a>
        <a>导出</a>
      </Handle>
    </div>
  );
};
