import React from "react";
import { SearchIcon } from "lucide-react";
import Form from "next/form";

import SearchFormReset from "@/components/SearchFormReset";

function SearchForm({ query }: { query?: string }) {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue=""
        className="search-input"
        placeholder="Search Startups"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button type="submit" className="search-btn text-white">
          <SearchIcon className="size-5" />
        </button>
      </div>
    </Form>
  );
}

export default SearchForm;
