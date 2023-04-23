import styled from '@emotion/styled';

export const TransactionTable = styled.table`
    margin-right: auto;
    margin-left: auto;
    margin-top: ${props => props.theme.spacing(4)};
    border-collapse: collapse;   

    width: 340px;
    border: ${props => `1px solid ${props.theme.colors.black}`};
    padding: ${props => props.theme.spacing(1)};
    border-radius: 4px;    
`;

export const TableHead = styled.thead`
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.green};
`;

export const TableRow = styled.tr`
`;

export const TableColomnName = styled.th`
`;

export const TransactionList = styled.tbody`
`;