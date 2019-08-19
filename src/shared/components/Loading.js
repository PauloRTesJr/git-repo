import React, { useContext } from 'react';
import styled from 'styled-components';
import CircleLoader from 'react-spinners/CircleLoader';
import { LoadingContext } from '../../contexts/LoadingContext';

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: #FFFFFF;
    opacity: 0.9;
    z-index: 999;
`;

function Loading (props) {
    const loadingContext = useContext(LoadingContext);

    if (!loadingContext.loading)
        return null;

    return (
        <LoadingContainer>
            <CircleLoader size={150} color={'#333'} />
        </LoadingContainer>
    );
};

export default Loading;
