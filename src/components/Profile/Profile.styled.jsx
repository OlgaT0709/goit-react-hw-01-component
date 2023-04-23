import styled from '@emotion/styled';

export const ProfileCard = styled.div`
    margin-right: auto;
    margin-left: auto;  
     margin-top: ${props => props.theme.spacing(4)}; 

    width: 240px;
    border: ${props => `1px solid ${props.theme.colors.black}`};
    padding: ${props => props.theme.spacing(1)};
    border-radius: 4px;
`;

export const Description = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-top: ${props => props.theme.spacing(2)};
    padding-bottom: ${props => props.theme.spacing(2)};

    background-color: ${props => props.theme.colors.white};
`; 

export const AvatarImg = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${props => props.theme.spacing(1)};

    width: 120px;
    border-radius: 50%;
`; 

export const Name= styled.p`
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.theme.colors.primaryText};

    margin-top: 0;
    margin-bottom: ${props => props.theme.spacing(2)};
`;
export const Info = styled.p`
    text-align: center;
    font-size: 16px;
    color: ${props => props.theme.colors.secondaryText};
`;

export const StatsContainer = styled.ul`
    display: flex;
    justify-content: center;
    width: 100%;
    border-top: ${props => `1px solid ${props.theme.colors.secondaryText}`};
    background-color: ${props => props.theme.colors.lightGrey};
`;

export const Stat = styled.li`
    width: 100%;
    padding: ${props => props.theme.spacing(2)};
    :not(:last-child) {
    border-right: ${props => `1px solid ${props.theme.colors.secondaryText}`};
`;
export const Label = styled.span`
    display: block;
    text-align: center;
    color: ${props => props.theme.colors.secondaryText};
`;
export const Quantity = styled.span`
    display: block;
    text-align: center;
    font-weight: bold;
    color: ${props => props.theme.colors.primaryText};
`;