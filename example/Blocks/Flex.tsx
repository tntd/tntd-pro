import React, { useState } from "react";
import { Title, Flex, Box, Float } from "../../src";

export default () => {
  return (
    <div>
      <Flex gap={12} justify="space-between" align="center">
        <div>我是div</div>
        <h1>hello</h1>
        <Box round={8} position="relative" size={72} bg="#dcdcdc">
          小明
          <Float placement="bottom-end">
            <Box circle size={32} bg="red" color="white">
              3
            </Box>
          </Float>
        </Box>
        <Box
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
