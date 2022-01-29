import { Table, Thead, Th, Td, Tbody, Tr } from './TransactionHistory.styled.js';
import PropTypes from 'prop-types';
import React from 'react';
// import Transaction from './Transaction';

function TransactionHistory({ items }) {
  return (
    <Table class="transaction-history">
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>

      <Tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Tr key={id}>
            {/* <Transaction type={type} amount={amount} currency={currency} /> */}
            <Td type={type}>{type}</Td>
            <Td amount={amount}>{amount}</Td>
            <Td currency={currency}>{currency}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ),
};
export default TransactionHistory;
