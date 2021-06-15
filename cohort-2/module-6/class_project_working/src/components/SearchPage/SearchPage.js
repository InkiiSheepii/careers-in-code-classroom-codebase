import axios from "axios"
import { useEffect, useState } from "react"

import { SearchGrid } from "./SearchGrid"
import { SearchInput } from "./SearchInput"

export const SearchPage = (props) => {
  const [items, setItems] = useState(null)
  const [query, setQuery] = useState("")
  useEffect(() => {
    axios
      .get("/api/product-search", {
        params: {
          query,
          filterBy: "",
          sortBy: "",
        },
      })
      .then((response) => {
        setItems(response.data.items)
      })
  }, [query])
  return (
    <div className="SearchPage">
      <div className="row pl-4 pl-md-0 pr-4 pr-md-0">
        <div className="d-none d-md-block col-md-3" />
        <div className="col-md-6">
          <form
            onSubmit={(event) => {
              event.preventDefault()
              const searchInputValue =
                event.target.querySelector("input[name=query]").value
              setQuery(searchInputValue)
            }}
          >
            <SearchInput name="query" />
          </form>
        </div>
      </div>
      <div>Search Options</div>
      <SearchGrid items={items} />
    </div>
  )
}
