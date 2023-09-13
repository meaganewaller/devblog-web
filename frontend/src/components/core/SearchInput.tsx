import { FC, FormEvent } from 'react'

interface SearchInputProps {
  onSearch: (searchData: string) => void
}

const SearchInput: FC<SearchInputProps> = ({ onSearch }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const searchData = data.get('search')
    if (typeof searchData !== 'string') {
      throw new Error('Invalid data type.')
    }
    onSearch(searchData)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-[300px_1fr] gap-x-[5px] items-center"
    >
      <input
        className="px-2 py-[3px] border border-solid border-accent bg-background rounded-lg h-[23px] dark:placeholder:text-on-accent placeholder:text-secondary-txt"
        placeholder="search..."
        type="search"
        required
        id="search"
        name="search"
        aria-label="Search"
      />
      <button
        className="w-[30px] h-[22px] text-xs font-extra uppercase border border-accent bg-background relative overflow-hidden cursor-pointer text-accent grid place-items-center rounded-lg border-solid before:border-l before:border-solid before:border-t before:left-px before:top-px"
      >
        go
      </button>
    </form>
  )
}

export default SearchInput
