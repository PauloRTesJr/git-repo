import React, { useState, useEffect } from 'react';
import Header from '../shared/components/Header';
import ReposList from '../shared/components/ReposList';

function HomeScreen (props) {
    const [userProfile, setUserProfile] = useState({});
    const [userRepos, setUserRepos] = useState([]);

    async function fetchUserData () {
        const profile = await fetch("https://api.github.com/users/paulortesjr");
        profile
            .json()
            .then(profile => setUserProfile(profile))
            .catch(err => console.log(err));
    }

    async function fetchRepoData () {
        const repo = await fetch("https://api.github.com/users/paulortesjr/repos");
        repo
            .json()
            .then(repo => setUserRepos(repo))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchUserData();
        fetchRepoData();
    }, []);

    return (
        <div className="home-container">
            <Header
                profile={userProfile.login}
                location={userProfile.location}
                profile_url={userProfile.html_url}
                image_url={userProfile.avatar_url} />
            <ReposList repos={userRepos} />
        </div>
    );
}

export default HomeScreen;