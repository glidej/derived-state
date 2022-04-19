import { Transaction } from "../App";

type PendingTransactionsProps = {
  transactions: Transaction[];
};

// PendingTransactions should only show transactions that have a `state` of "PENDING"
const PendingTransactions = ({ transactions }: PendingTransactionsProps) => {
  return (
    <>
      <h2>Pending</h2>
      <ul>
        {transactions.map((transaction) => (
          <li>{transaction.amount}</li>
        ))}
      </ul>
    </>
  );
};

export { PendingTransactions };
