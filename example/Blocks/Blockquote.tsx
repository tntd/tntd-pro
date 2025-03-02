import React, { useState } from "react";
import cn from "classnames";
import {
  Title,
  Float,
  Card,
  TCard,
  Blockquote,
  Handle,
  Status,
} from "../../src";
import "./tntCard.less";

export default () => {
  return (
    <div>
      <Title
        title="Blockquote"
        style={{
          marginBottom: 20,
        }}
      />
      <Blockquote color="green" justify="start" variant="subtle">
        If anyone thinks he is something when he is nothing, he deceives
        himself. Each one should test his own actions. Then he can take pride in
        himself, without comparing himself to anyone else.
        <Float placement="bottom-end" offsetX={32} offsetY={32}>
          <Blockquote.Icon size={32} opacity={0.2} rotate="180deg" />
        </Float>
      </Blockquote>

      <Blockquote>
        If anyone thinks he is something when he is nothing, he deceives
      </Blockquote>
    </div>
  );
};
