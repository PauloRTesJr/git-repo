import React from 'react';
import Button from './Button';
import { RepoContext } from '../../contexts/RepoContext';
import Card from './Card/Card';


const Repo = ({ repo }) => (
    <RepoContext.Consumer>
        {({ selectedRepository, commits, updateRepo }) => (
            <Card>
                <Card.Content>
                    <Card.BranchLanguage>
                        <Card.BranchLanguageText>{'Branch: ' + repo.default_branch}</Card.BranchLanguageText>
                        <Card.BranchLanguageText>{repo.language}</Card.BranchLanguageText>
                    </Card.BranchLanguage>
                    <Card.Name href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</Card.Name>
                    <Card.Owner>
                        <Card.OwnerTitle>Owner</Card.OwnerTitle>
                        <Card.OwnerPhoto src={repo.owner.avatar_url} alt="owner" />
                    </Card.Owner>
                    <Card.Infos>Issues abertas: {repo.open_issues}</Card.Infos>
                    <Card.Infos>Watchers: {repo.watchers_count}</Card.Infos>
                    <Card.Infos>Stars: {repo.stargazers_count}</Card.Infos>
                    <Card.Description>{repo.description}</Card.Description>
                </Card.Content>
                <Button primary onClick={() => updateRepo(repo)}>Ver Commits</Button>
            </Card>
        )}
    </RepoContext.Consumer>
);

export default Repo;