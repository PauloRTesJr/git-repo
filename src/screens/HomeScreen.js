import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../shared/components/Header';
import ReposList from '../shared/components/ReposList';
import { RepoContext } from '../contexts/RepoContext';
import { LoadingContext } from '../contexts/LoadingContext';
import CommitList from '../shared/components/CommitsList';
import { OrderType } from '../shared/enum/OrderType';

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

    let changeOrder = (order) => {
        let sortedRepos = Object.assign([], userRepos);
        switch (order) {
            case OrderType.Name:
                sortedRepos.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
                setUserRepos(sortedRepos);
                break;
            case OrderType.Watchers:
                sortedRepos.sort((a, b) => b.watchers_count - a.watchers_count);
                setUserRepos(sortedRepos);
                break;
            case OrderType.Issues:
                sortedRepos.sort((a, b) => b.open_issues - a.open_issues);
                setUserRepos(sortedRepos);
                break;
            case OrderType.Stars:
                sortedRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
                setUserRepos(sortedRepos);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        fetchData('https://api.github.com/users/paulortesjr', setUserProfile);
        fetchData('https://api.github.com/users/paulortesjr/repos', setUserRepos);
    }, [])

    return (
        <RepoContext.Provider value={{ selectedRepository: repo, commits: commits, updateRepo: handleChangeRepo, changeOrder: changeOrder }}>
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