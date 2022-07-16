import { useState } from "react";
import "./styles.css";
import { TagList } from "./Tagfilter/ListeDesTags";
import { tagList } from "./Tags/TagData";

export default function App() {
  const [filters, setFilters] = useState<Array<string>>([]);

  const manageFilters = (filter: string) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter((f) => f !== filter));

    }
    else {
      let newFilters: Array<string> = [...filters, filter];
      setFilters(newFilters);
    }

  }
  return (
    <div className="App">
      Liste des recettes
      <TagList tags={tagList} />
      <div>
        {tagList.map((item) => {
          return (
            <button
              key={item.id}
              onClick={() => { manageFilters(item.name.en)}}
            >
              {item.name.en}
            </button>
          );
        }
      )}
      </div>
    </div>
  );
}
