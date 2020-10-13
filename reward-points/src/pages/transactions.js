import React, { useEffect, useState } from "react";
import "./index.module.css";
import styles from "./transactions.module.css";
import Customers from "../components/customers";

function calculateRewards(transactions) {
  return transactions.reduce(
    (total, { price }) => total + calculateReward(price),
    0
  );
}
function calculateReward(price) {
  const doubleRewardPoints = price > 100 ? (price - 100) * 2 + 50 : 0;
  const singleRewardPoints = price > 50 && price < 101 ? price - 50 : 0;

  return singleRewardPoints + doubleRewardPoints;
}

function TransactionRow({ id, price, date, customer }) {
  return (
    <tr id={"id-" + id}>
      <td>{customer.firstName + " " + customer.lastName}</td>
      <td>${price}.00</td>
      <td>{calculateReward(price)}</td>
      <td>{new Date(date).toLocaleString()}</td>
    </tr>
  );
}

export default function Tracker() {
  const [transactions, setTransactions] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [isStillLoadingTransactions, setIsLoadingTransactions] = useState(true);
  const [selectedCustomer, setSelectedCustomer] = useState("all");
  const [isFilteringCustomer, setIsFilteringCustomer] = useState(false);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    if (isStillLoadingTransactions) {
      const loadTransactions = async () => {
        const loadedTransactions = (
          await (await fetch("/data/transactions.json")).json()
        ).transactions;
        setTransactions(loadedTransactions);
        const loadedCustomers = await (
          await fetch("/data/customers.json")
        ).json();
        setCustomers(loadedCustomers);
        setIsLoadingTransactions(false);
      };
      loadTransactions();
    } else {
      setFilteredTransactions(transactions);
    }
  }, [isStillLoadingTransactions, transactions]);

  useEffect(() => {
    if (isFilteringCustomer) {
      setFilteredTransactions(
        selectedCustomer !== "all"
          ? customers[selectedCustomer].transactions
          : [...transactions]
      );
      setIsFilteringCustomer(false);
    }
  }, [isFilteringCustomer, selectedCustomer, transactions, customers]);

  const selectCustomer = (customer) => {
    setFilteredTransactions([]);
    setIsFilteringCustomer(true);
    setSelectedCustomer(customer);
  };

  const rewardPoints = !isStillLoadingTransactions
    ? calculateRewards(filteredTransactions)
    : 0;

  return (
    <main>
      <section className={styles.tracker}>
        <h1>
          <img
            src="../images/logo.png"
            width="300"
            alt="Apex logo"
            title="Apex Systems Rewards"
          />
        </h1>
        {!isStillLoadingTransactions ? (
          <h2>
            <span>
              <Customers
                selectCustomer={selectCustomer}
                customers={Object.values(customers)}
              />
              {selectedCustomer === "all" ? " have " : " has "}
              <span>{!isStillLoadingTransactions ? rewardPoints : 0}</span>{" "}
              reward point{rewardPoints !== 1 ? "s" : ""}.
            </span>
          </h2>
        ) : null}
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Price</th>
              <th>Reward Points</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {!isStillLoadingTransactions
              ? filteredTransactions.map((transaction) => (
                  <TransactionRow
                    {...transaction}
                    key={"id-" + transaction.id}
                    customer={transaction.customer}
                  />
                ))
              : null}

            {isStillLoadingTransactions ? (
              <tr>
                <td colSpan="5">Loading Transactions…</td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </section>
    </main>
  );
}
