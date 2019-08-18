import React from 'react';
import Button from './Button';
import './Repo.scss';

const Repo = ({ repo }) => (
    <div className="card">
        <div className="card-content">
            <div className="branchLanguage">
                <span>{'Branch: ' + repo.default_branch}</span>
                <span>{repo.language}</span>
            </div>
            <a className="name" href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
            <div className="owner">
                <span className="owner-title">Owner</span>
                <img className="owner-photo" src={repo.owner.avatar_url} alt="owner" />
            </div>
            <span className="description">{repo.description}</span>
        </div>
        <Button primary>Ver Commits</Button>
    </div>
);

export default Repo;