import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../shared/components/Header';
import ReposList from '../shared/components/ReposList';
import { RepoContext } from '../contexts/RepoContext';
import { LoadingContext } from '../contexts/LoadingContext';
import CommitList from '../shared/components/CommitsList';

const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

function HomeScreen (props) {
    const loadingContext = useContext(LoadingContext);
    const [userProfile, setUserProfile] = useState({});
    const [userRepos, setUserRepos] = useState([]);
    const [repo, setRepo] = useState(null);
    const [commits, setCommits] = useState(null);

    async function fetchData (url, state) {
        if (!loadingContext.loading) {
            loadingContext.toggle(true);
        }
        const res = await fetch(url);
        res
            .json()
            .then(data => state(data))
            .catch(err => console.log(err))
            .finally(() => loadingContext.toggle(false));
    }

    let handleChangeRepo = (repo) => {
        if (!repo) {
            setRepo(null);
            setCommits(null);
        } else {
            let url = repo.commits_url.replace(/{([^}]*)}/, '');
            setRepo(repo);
            fetchData(url, setCommits);
        }
    };

    useEffect(() => {
        fetchData('https://api.github.com/users/paulortesjr', setUserProfile);
        fetchData('https://api.github.com/users/paulortesjr/repos', setUserRepos);
    }, [])

    return (
        <RepoContext.Provider value={{ selectedRepository: repo, commits: commits, updateRepo: handleChangeRepo }}>
            <HomeContainer>
                <Header
                    profile={userProfile.login}
                    location={userProfile.location}
                    profile_url={userProfile.html_url}
                    image_url={userProfile.avatar_url} />
                <ReposList repos={userRepos} />
                <CommitList />
            </HomeContainer>
        </RepoContext.Provider>
    );
}

export default HomeScreen;