import PropTypes from 'prop-types';
import {TransactionTable, TableHead, TableRow, TableColomnName, TransactionList } from './TransactionList.styled';
import {TransactionItem} from './TransactionItem';

export const TransactionsList = ({transactions }) => {
    return ( 
        <TransactionTable>
            <TableHead>
                <TableRow>
                    <TableColomnName>Type</TableColomnName>
                    <TableColomnName>Amount</TableColomnName>
                    <TableColomnName>Currency</TableColomnName>
                </TableRow>
            </TableHead>
            <TransactionList>
                {transactions.map(({ id, type, amount, currency }) => (
                    <TransactionItem
                        key={id}
                        type={type}
                        amount={amount}
                        currency={currency}
                        
                    />
                    ))}
            </TransactionList>
        </TransactionTable>

        );
};

TransactionList.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })),
};