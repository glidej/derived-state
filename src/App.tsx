import { ExpensiveTransactions } from "./components/ExpensiveTransactions";
import { PendingTransactions } from "./components/PendingTransactions";

export type Transaction = {
  type: string;
  amount: number;
  state: "PENDING" | "SETTLED";
  date: Date;
};

const data: Transaction[] = [
  {
    date: new Date("01/01/2022"),
    type: "restaurant",
    amount: 0,
    state: "PENDING",
  },
  { date: new Date("01/02/2022"), type: "gas", amount: 10, state: "PENDING" },
  {
    date: new Date("01/03/2022"),
    type: "ecommerce",
    amount: 100,
    state: "SETTLED",
  },
  {
    date: new Date("12/01/2021"),
    type: "mortgage",
    amount: 1000,
    state: "SETTLED",
  },
  {
    date: new Date("12/02/2022"),
    type: "insurance",
    amount: 200,
    state: "PENDING",
  },
];

function App() {
  return (
    <div className="App">
      <PendingTransactions transactions={data} />
      <ExpensiveTransactions transactions={data} />
    </div>
  );
}

export default App;
