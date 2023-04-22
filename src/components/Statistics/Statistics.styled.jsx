import styled from '@emotion/styled';

export const StatSection= styled.section`
    margin-right: auto;
    margin-left: auto;
    margin-top: ${props => props.theme.spacing(4)};   

    width: 240px;
    border: ${props => `1px solid ${props.theme.colors.black}`};
    padding: ${props => props.theme.spacing(1)};
    border-radius: 4px;
`; 
export const Title= styled.h2`
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${props => props.theme.colors.primaryText};
    background-color: ${props => props.theme.colors.white};
    border-bottom: ${props => `1px solid ${props.theme.colors.secondaryText}`};

`; 

export const StatList= styled.ul`
    display: flex;
    justify-content: center;
    width: 100%;
     
    
`;

export const  StatCard= styled.li`
    width: 100%;
    padding: ${props => props.theme.spacing(2)};
    background-color: ${props => props.theme.colors.lightGrey};
    :not(:last-child) {
    border-right: ${props => `1px solid ${props.theme.colors.secondaryText}`};
    }
    
`;

export const Label= styled.span`
    display: block;
    text-align: center;
    color: ${props => props.theme.colors.white};
`;

export const Percentage= styled.span`
    display: block;
    text-align: center;
    font-weight: bold;
    color: ${props => props.theme.colors.primaryText};
`;

