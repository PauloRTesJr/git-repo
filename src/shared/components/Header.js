import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 21vh;
    width: 100%;
    background: url(/img/cover.jpg);
    background-size: cover;
`;

const Avatar = styled.img`
    object-fit: cover;
    border-radius:50%;
    width: 150px;
    height: 150px;
    margin-left: 1vw;
`;

const Infos = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2vw;
    text-shadow: -1px 0 #333333, 0 1px #333333, 1px 0 #333333, 0 -1px #333333;
    color: #FFFFFF;
`;

const InfoUser = styled.a`
    color: #FFFFFF;
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: 700;
`;

const InfoText = styled.span`
    font-size: 1.5rem;
`;

const Header = ({ profile, location, profile_url, image_url }) => (
    <HeaderContainer>
        <Avatar src={image_url} alt="avatar" />
        <Infos>
            <InfoUser href={profile_url} target="_blank" rel="noopener noreferrer">
                {'@' + profile}
            </InfoUser>
            <InfoText className="infos-location">{location}</InfoText>
        </Infos>
    </HeaderContainer>
);

export default Header;
