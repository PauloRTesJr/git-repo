import styled from 'styled-components';

const Search = styled.input`
    width: 300px;
    height: 100%;
    margin: 0.5rem auto;
    border-radius: 3px;
    padding: 0 1rem;

    &:focus {
        outline: none;
        border: 2px solid #333333;
    }
`;

export default Search;
