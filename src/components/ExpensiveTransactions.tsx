import { Transaction } from "../App";

type ExpensiveTransactionsProps = {
  transactions: Transaction[];
};

// PendingTransactions should only show transactions that have:
// - `amount` equal to or greater than 100
// - `state` of "SETTLED"
const ExpensiveTransactions = ({
  transactions,
}: ExpensiveTransactionsProps) => {
  return (
    <>
      <h2>Expensive</h2>
      <ul>
        {transactions.map((transaction) => (
          <li>{transaction.amount}</li>
        ))}
      </ul>
    </>
  );
};

export { ExpensiveTransactions };
