import styled from 'styled-components';

const CommitCard = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid #333333;
    padding: 1rem;
    margin: 0.5rem;
`;

const CommitSha = styled.a`
    color: #003366;
    font-size: 0.8rem;
    font-weight: 700;
    text-decoration: none;
`;

const CommitMessage = styled.span`
    color: #333333;
    font-size: 1rem;
`;

const CommitInfo = styled.span`
    color: #333333;
    font-size: 0.9rem;
`;

CommitCard.Sha = CommitSha;
CommitCard.Message = CommitMessage;
CommitCard.Info = CommitInfo;

export default CommitCard;
