import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSearch }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const inputValue = form.inputValue.value.trim();

    if (!inputValue) {
      toast.error('Введіть значення');
      return;
    }

    onSearch(inputValue);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="inputValue"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
