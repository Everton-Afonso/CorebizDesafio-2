import React, { useEffect, useState } from "react";

import api from "../../services/api";

import "./styles.css";

const Table = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    api.get("employee").then((response) => {
      setEmployees(response.data);
    });
  }, []);

  return (
    <section className="table">
      <table>
        <thead>
          <tr>
            <th>Funcionário</th>
            <th>Salário</th>
            <th>Banificação</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => {
            const wage = Number.parseFloat(employee.wage).toFixed(2)
            const bonusPlusSalary = (
              Number.parseFloat(employee.wage) +
              Number.parseFloat(employee.bonus * 0.15)
            ).toFixed(2);

            return (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>R$ {wage}</td>
                <td>R$ {bonusPlusSalary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
