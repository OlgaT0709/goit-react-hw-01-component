import styled from '@emotion/styled';

export const FriendCard = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding: ${props => props.theme.spacing(2)};
    background-color: ${props => props.theme.colors.white};
    border: ${props => `1px solid ${props.theme.colors.secondaryText}`};
    border-radius: 4px;  
    box-shadow:
        0px 1px 3px rgba(0, 0, 0, 0.12),
        0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);

    :not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(2)};
}
    
`;

export const Status = styled.span`
    display: block;
    margin-left: ${props => props.theme.spacing(2)};
    margin-right: ${props => props.theme.spacing(2)};
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${({ status, theme }) => (
    status ? theme.colors.green : theme.colors.red
    // switch (status) {
    //   case true:
    //     return theme.colors.green;
    //   case false:
    //     return theme.colors.red;
    //   default:
    //     return theme.colors.black;
    // }
  )};
`;  

export const AvatarImg = styled.img`
    display: block;
    margin-left: ${props => props.theme.spacing(4)};
    margin-right: ${props => props.theme.spacing(4)};
    width: 48px;
`; 

export const FriendName = styled.p`
    margin-right: auto;
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.theme.colors.primaryText};


`;