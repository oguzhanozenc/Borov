import React from "react";

export default function Income() {
  const transactions = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
  ];
  return (
    <section className="host-income">
      <h1>Income</h1>
      <p>
        Last <span>30 days</span>
      </p>
      <h2>$2,260</h2>
      <img
        className="graph"
        src="/assets/images/income-graph.png"
        alt="Income graph"
      />
      <div className="info-header">
        <h3>Your transactions (3)</h3>
        <p>
          Last <span>30 days</span>
        </p>
      </div>
      <div className="transactions">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="transaction">
            <h3>${transaction.amount}</h3>
            <p>{transaction.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
