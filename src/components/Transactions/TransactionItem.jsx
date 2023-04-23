import PropTypes from 'prop-types';
import { useState } from 'react';
import { TableRow, TableColomn } from './TransactionItem.styled';

export const TransactionItem = ({ type, amount, currency }) => {
    const [isEven, setIsEven]  = useState(false);

    function toggleIsEven()  {
        setIsEven(!isEven);
    }

    return ( 
        <TableRow onClick={toggleIsEven} isEven = {isEven} >
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



