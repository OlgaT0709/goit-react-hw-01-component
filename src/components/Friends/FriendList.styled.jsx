import styled from '@emotion/styled';

export const FriendList = styled.ul`
    margin-right: auto;
    margin-left: auto;
    margin-top: ${props => props.theme.spacing(4)};   

    width: 240px;
    border: ${props => `1px solid ${props.theme.colors.black}`};
    padding: ${props => props.theme.spacing(1)};
    border-radius: 4px;    
`;