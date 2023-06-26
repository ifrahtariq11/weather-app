import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the search input
    if (location.trim() === '') {
      setError('Please enter a valid location');
      return;
    }

    // Clear any previous error
    setError('');

    // Trigger the API request
    onSearch(location);
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city or location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">Search</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default SearchForm;
