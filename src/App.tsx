import { useState } from "react";
import Recipes from "./Recipes/Recipes";
import { tagList } from "./Tags/data";
import { Tags } from "./Tags/TagList";

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
      <Tags tags={tagList} />;
      <div>
        {tagList.map((item) => {
          return (
            <button
              key={item.id}
              style={{backgroundColor: filters.includes(item.name.en) ? "cyan" : "white"}}
              onClick={() => { manageFilters(item.name.en)}}
            >
              {item.name.en}
            </button>
          );
        }
      )}
      </div>
      <Recipes filters={filters} />
    </div>
  );
}
