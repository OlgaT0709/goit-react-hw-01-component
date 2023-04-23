import styled from '@emotion/styled';

export const TableRow = styled.tr`
    color: ${props => props.theme.colors.secondaryText};
    background-color: ${({ isEven, theme }) => (
    isEven ? theme.colors.lightGrey : theme.colors.white )};
`;

export const TableColomn = styled.th`
    text-align: left;
    padding-left: ${props => props.theme.spacing(4)};
    // :not(:last-child) {
    // border-right: ${props => `2px solid ${props.theme.colors.secondaryText}`};
    // }
    ::first-letter {
        text-transform: capitalize;
    }
`;

