import PropTypes from 'prop-types';
import { TableRow, TableColomn } from './TransactionItem.styled';

export const TransactionItem = ({ type, amount, currency }) => {
   
   
    return ( 
        <TableRow >
            <TableColomn>{type}</TableColomn>
            <TableColomn>{amount}</TableColomn>
            <TableColomn>{currency}</TableColomn>
        </TableRow>
    );
};

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};



