import { FC, FormEvent } from "react";

interface SearchInputProps {
  onSearch: (searchData: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ onSearch }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const searchData = data.get("search");
    if (typeof searchData !== "string") {
      throw new Error("Invalid data type.");
    }
    onSearch(searchData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-[300px_1fr] items-center gap-x-[5px]"
    >
      <input
        className="h-[23px] rounded-lg border border-solid border-accent bg-background px-2 py-[3px] placeholder:text-secondary-txt dark:placeholder:text-on-accent"
        placeholder="search..."
        type="search"
        required
        id="search"
        name="search"
        aria-label="Search"
      />
      <button className="relative grid h-[22px] w-[30px] cursor-pointer place-items-center overflow-hidden rounded-lg border border-solid border-accent bg-background font-extra text-xs uppercase text-accent before:left-px before:top-px before:border-l before:border-t before:border-solid">
        go
      </button>
    </form>
  );
};

export default SearchInput;
