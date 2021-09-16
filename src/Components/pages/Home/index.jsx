import React from "react";

import Button from "../../Button";

import "./styles.css";

function Home() {
  function handleBonus(e) {
    e.preventDefault();
  }

  return (
    <section className="container">
      <section className="content">
        <div className="form">
          <form onSubmit={handleBonus}>
            <h1>Bonificação por vendas</h1>

            <input type="text" placeholder="Nome do funcionário" required />
            <input
              type="number"
              placeholder="Salário fixo"
              required
            />
            <input
              type="number"
              placeholder="Vendas do mês"
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
