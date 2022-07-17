import { useState } from "react";
import { TagType } from "./types/Tag";
import { Container } from "./style";

export const Tag = ({ tag }: { tag: TagType }) => {
  return (
    <Container color={tag.color}>
      {tag.name.fr}
    </Container>
  );
};
