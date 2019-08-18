import React from 'react';
import styled from 'styled-components';
import CircleLoader from 'react-spinners/CircleLoader';

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100vh;
    width: 100vw;
    background: #FFFFFF;
    opacity: 0.9;
    z-index: 999;
`;

const Loading = ({ loading }) => (
    <LoadingContainer>
        <CircleLoader size={150} color={'#333'} />
    </LoadingContainer>
);

export default Loading;
