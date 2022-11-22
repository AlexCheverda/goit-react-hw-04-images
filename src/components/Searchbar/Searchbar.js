import PropTypes from 'prop-types';
import { Component } from "react";
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { SearchbarHeader, SearchForm, SearchBtn, FormInput } from './Searchbar.Styled';

class Searchbar extends Component {
    state = {
        inputValue: '',
    };
    handleInputChange = evt => {
        this.setState({ inputValue: evt.currentTarget.value.toLowerCase() });
    };
    handleSubmit = evt => {
        const { inputValue } = this.state;
        evt.preventDefault();
        if (inputValue.trim() === '') {
            return toast.warning('Search field is empty!');
        }
        this.props.onSearch(inputValue);
        this.setState({ inputValue: '' });
    };
    render() {
        const { handleSubmit, handleInputChange } = this;
        const { inputValue } = this.state;
        return (
            <SearchbarHeader>
                <SearchForm onSubmit={handleSubmit}>
                    <SearchBtn type='submit'>
                        <FaSearch size={16} />
                    </SearchBtn>
                    <FormInput
                        type='text'
                        name='searchRequest'
                        value={inputValue}
                        onChange={handleInputChange}
                        autoComplete='off'
                        autoFocus
                        placeholder='Search images and photos'
                    />
                </SearchForm>
            </SearchbarHeader>
        );
    }
}

Searchbar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default Searchbar;