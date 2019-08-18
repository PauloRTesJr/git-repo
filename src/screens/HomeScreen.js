import React, { useState, useEffect, useContext } from 'react';
import Header from '../shared/components/Header';
import ReposList from '../shared/components/ReposList';
import { RepoContext } from '../contexts/RepoContext';
import { LoadingContext } from '../contexts/LoadingContext';

function HomeScreen (props) {
    const loadingContext = useContext(LoadingContext);
    const [userProfile, setUserProfile] = useState({});
    const [userRepos, setUserRepos] = useState([]);
    const [repo, setRepo] = useState(null);
    const [commits, setCommits] = useState(null);

    async function fetchData (url, state) {
        loadingContext.toggleLoading();
        const res = await fetch(url);
        res
            .json()
            .then(data => state(data))
            .catch(err => console.log(err))
            .finally(() => loadingContext.toggleLoading());
    }

    let handleChangeRepo = (repo) => {
        console.log(repo);
        let url = repo.commits_url.replace(/{([^}]*)}/, '');
        setRepo(repo);
        fetchData(url, setCommits);
    };

    useEffect(() => {
        fetchData('https://api.github.com/users/paulortesjr', setUserProfile);
        fetchData('https://api.github.com/users/paulortesjr/repos', setUserRepos);
    }, []);

    return (
        <RepoContext.Provider value={{ dataRepository: repo, dataCommits: commits, handleChange: handleChangeRepo }}>
            <div className="home-container">
                <Header
                    profile={userProfile.login}
                    location={userProfile.location}
                    profile_url={userProfile.html_url}
                    image_url={userProfile.avatar_url} />
                <ReposList repos={userRepos} />
            </div>
        </RepoContext.Provider>
    );
}

export default HomeScreen;