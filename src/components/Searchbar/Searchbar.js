import PropTypes from 'prop-types';
import { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { SearchbarHeader, SearchForm, SearchBtn, FormInput } from './Searchbar.styled';

const Searchbar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const handleInputChange = evt => {
        setQuery(evt.currentTarget.value.toLowerCase());
    };
    const handleSubmit = evt => {
        evt.preventDefault();
        if (query.trim() === '') {
            return toast.warning('Search field is empty!');
        }
        onSearch(query);
        setQuery('');
    };

    return (
        <SearchbarHeader>
            <SearchForm onSubmit={handleSubmit}>
                <SearchBtn type='submit'>
                    <FaSearch size={16} />
                </SearchBtn>
                <FormInput
                    type='text'
                    name='searchRequest'
                    value={query}
                    onChange={handleInputChange}
                    autoComplete='off'
                    autoFocus
                    placeholder='Search images and photos'
                />
            </SearchForm>
        </SearchbarHeader>
    );
};

Searchbar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default Searchbar;