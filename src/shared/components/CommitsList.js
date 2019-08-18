import React, { useContext } from 'react';
import styled from 'styled-components';
import { RepoContext } from '../../contexts/RepoContext';
import Button from './Button';

const CommitListContainer = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: #FFFFFF;
`;

function CommitList (props) {
    const repoContext = useContext(RepoContext);
    if (!repoContext.commits) {
        return null;
    }
    return (
        <CommitListContainer>
            <Button onClick={() => repoContext.updateRepo(null)}>Sair</Button>
        </CommitListContainer>
    );
}

export default CommitList;