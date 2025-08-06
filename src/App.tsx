import Dashboard from "./pages/Dashboard";

function App() {
  const transactions = [
    {
      accountId: "68928b8ad8afe2c930d47d95",
      date: "2025-08-05T23:28:18.868Z",
      id: "68929392d8afe2c930d47e5d",
      type: "DEPOSIT",
      value: 100,
    },
    {
      accountId: "68928b8ad8afe2c930d47d95",
      date: "2025-08-06T23:28:18.868Z",
      id: "68929392d8afe2c930d47e5d",
      type: "TRANSFER",
      value: 50,
    },
  ];

  return (
    <>
      <Dashboard transactions={transactions} />
    </>
  );
}

export default App;
