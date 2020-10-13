import React from "react";

export default function Customers({ customers, selectCustomer }) {
  return (
    <select onChange={({ target: { value } }) => selectCustomer(value)}>
      <option value="all">All Customers Combined</option>
      {customers.map((customer) => (
        <option key={customer.id} value={customer.id}>
          {customer.firstName + " " + customer.lastName}
        </option>
      ))}
    </select>
  );
}
