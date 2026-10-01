import React from "react";
import { Card, Layout } from "./components";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Card name="Card 1" />
        <Card
          name="Card 2"
          paragraph="Este é um exemplo de paragrafo diferente"
        />
        <Card name="Card 3" paragraph="AAAAAAAAAAAAAAAA" />
      </Layout>
    </React.Fragment>
  );
}

export default App;
