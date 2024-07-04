import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event, value) => {
    setSearchTerm(value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Autocomplete
      freeSolo
      options={[]} // Populate with search suggestions
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search for a city"
          variant="outlined"
          onChange={handleInputChange}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              handleSearch();
            }
          }}
        />
      )}
    />
  );
};

export default SearchBar;
