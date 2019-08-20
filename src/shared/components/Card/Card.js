import styled from 'styled-components';
import BranchLanguage from './BranchLanguage';
import CardContent from './CardContent';
import Description from './Description';
import BranchLanguageText from './BranchLanguageText';
import Name from './Name';
import Owner from './Owner';
import OwnerTitle from './OwnerTitle';
import OwnerPhoto from './OwnerPhoto';
import Infos from './Infos';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 29%;
    min-height: 20vh;
    margin: 0.8rem 0.5rem;
    padding: 1rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    @media (max-width: 490px) {
        width: 100%;
    }

    @media (min-width: 490px) and (max-width: 1200px) {
        width: 40%;
    }
`;

Card.Content = CardContent;
Card.BranchLanguage = BranchLanguage;
Card.BranchLanguageText = BranchLanguageText;
Card.Name = Name;
Card.Infos = Infos;
Card.Owner = Owner;
Card.OwnerTitle = OwnerTitle;
Card.OwnerPhoto = OwnerPhoto;
Card.Description = Description;

export default Card;