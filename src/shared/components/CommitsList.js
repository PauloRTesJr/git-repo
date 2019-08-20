import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { RepoContext } from '../../contexts/RepoContext';
import Button from './Button';
import CommitCard from './CommitCard';
import Search from './Search';

const CommitListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #FFFFFF;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    width: 100vw;
    padding-top: 1rem;
`;

const Footer = styled.div`
    display: flex;
    height: 7%;
    bottom: 0;
    left: 0;
    width: 100vw;
    background: #FFFFFF;
`;

const Header = styled.div`
    display: flex;
    width: 100vw;
    background: #FFFFFF;
`;

function CommitList (props) {
    const repoContext = useContext(RepoContext);
    const [filter, setFilter] = useState('');

    function getCommits () {
        let commits = repoContext.commits;
        if (filter) {
            commits = commits.filter((commit) => commit.commit.message.toUpperCase().includes(filter.toUpperCase()));
        }
        return commits;
    }

    function handleSearch (event) {
        setFilter(event.target.value);
    }

    if (!repoContext.commits) {
        return null;
    }
    return (
        <CommitListContainer>
            <Header>
                <Search placeholder="Buscar commit..." value={filter} onChange={handleSearch} />
            </Header>
            <ContentContainer>
                {getCommits().map((item, index) => (
                    <CommitCard key={index}>
                        <CommitCard.Sha href={item.html_url} target="_blank" rel="noopener noreferrer">{item.sha}</CommitCard.Sha>
                        <CommitCard.Message>{item.commit.message}</CommitCard.Message>
                        <CommitCard.Info>{item.commit.committer.name}</CommitCard.Info>
                        <CommitCard.Info>{item.commit.committer.email}</CommitCard.Info>
                        <CommitCard.Info>{new Date(item.commit.committer.date).toLocaleDateString()}</CommitCard.Info>
                    </CommitCard>
                ))}
            </ContentContainer>
            <Footer>
                <Button primary onClick={() => repoContext.updateRepo(null)}>Sair</Button>
            </Footer>
        </CommitListContainer>
    );
}

export default CommitList;