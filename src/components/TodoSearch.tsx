import { UpdateSearch } from '../types';

interface TodoSearchProps {
  updateSearch: UpdateSearch;
}

export default function TodoSearch({ updateSearch }: TodoSearchProps) {
  const onUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    updateSearch(text);
  };
  return (
    <div>
      <input className='form-control search-input' type='text' placeholder='search' onChange={onUpdate} />
    </div>
  );
}
