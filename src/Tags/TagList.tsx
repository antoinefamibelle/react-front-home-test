import { Tag } from "./index";
import { TagType } from "./types/Tag";

export const Tags = ({ tags }: { tags: TagType[] }) => {
  return (
    <div
      style={{
        margin: "10px",
        padding: "5px",
        borderRadius: "3px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {tags.map((obj) => (
        <Tag key={obj.id} tag={obj} />
      ))}
    </div>
  );
};
