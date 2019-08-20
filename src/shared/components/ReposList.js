import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Repo from './Repo';
import OrderRepo from './OrderRepo';

const ReposListContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
`;

const ReposFilterListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
`;

const ReposList = ({ repos }) => (
    <ReposFilterListContainer>
        <OrderRepo />
        <ReposListContainer>
            {repos.map((item, index) => (
                <Repo repo={item} key={index} />
            ))}
        </ReposListContainer>
    </ReposFilterListContainer>
);

ReposList.propTypes = {
    repos: propTypes.array.isRequired
}

export default ReposList;
