import React, { useState } from "react";
import { Title, Flex, Box } from "../../src";

export default () => {
  return (
    <div>
      <Flex gap={12} justify="space-between" align="center">
        <div>我是div</div>
        <h1>hello</h1>
        <Box type="circle" size={72} bg="#dcdcdc">
          小明
        </Box>
        <Box
          type="square"
          round={12}
          as="section"
          className="muu"
          bg="#dcdcdc"
          padding={12}
          margin={12}
        >
          你好啊
        </Box>
      </Flex>
    </div>
  );
};
