import React, { useState } from "react";

import api from "../../../services/api";

import Button from "../../Button";

import "./styles.css";

function Home() {
  const [name, setName] = useState("");
  const [wage, setWage] = useState("");
  const [bonus, setBonus] = useState("");

  async function handleEmployeeBonus(e) {
    e.preventDefault();

    const data = {
      name,
      wage,
      bonus,
    };

    try {
      const response = await api.post("employee", data);

      alert(
        `Bonificação aplicada com sucesso para o funcionário ${response.data.name}`
      );
      window.location.reload();
    } catch (err) {
      alert("Erro ao tentar aplicar a bonificação");
    }
  }

  return (
    <section className="container">
      <section className="content">
        <div className="form">
          <form onSubmit={handleEmployeeBonus}>
            <h1>Bonificação por vendas</h1>

            <input
              type="text"
              placeholder="Nome do funcionário"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="number"
              placeholder="Salário fixo"
              value={wage}
              onChange={(e) => setWage(e.target.value)}
              required
            />

            <input
              type="number"
              placeholder="Total de vendas no mês"
              value={bonus}
              onChange={(e) => setBonus(e.target.value)}
              required
            />

            <Button className="button" type="submit">
              Entrar
            </Button>
          </form>
        </div>
      </section>
    </section>
  );
}

export default Home;
