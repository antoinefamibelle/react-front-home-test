import { Tag } from "./index";
import { TagListContainer } from "./style";
import { TagType } from "./types/Tag";

export const Tags = ({ tags }: { tags: TagType[] }) => {
  return (
    <TagListContainer>
      {tags.map((obj) => (
        <Tag key={obj.id} tag={obj} />
      ))}
    </TagListContainer>
  );
};
