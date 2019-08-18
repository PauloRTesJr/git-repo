import styled from 'styled-components';

const Button = styled.button`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0.5rem;
    width: 100%;
    text-align: center;
    cursor: pointer;
    background: ${props => props.primary ? '#111111' : '#FFFFFF'};
    color: ${props => props.primary ? 'white' : 'black'};
    border: 2px solid ${props => props.primary ? 'white' : 'black'};
  
    &:hover {
        background: ${props => props.primary ? '#444444' : '#DDDDDD'};
    }

    &:active {
        opacity: 0.6;
    }
`;

export default Button;
