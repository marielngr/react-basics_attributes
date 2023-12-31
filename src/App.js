import React from "react";
import "./styles.css";

export default function App() {
  return <ArticleComponent />;
}

function ArticleComponent() {
  return (
    <article className="article">
      <h2 className="article__title">Titel</h2>
      <label htmlFor="input">Hier kommt was rein!</label>
      <input id="input" />
      <a className="article__link" href="https://swapi.dev/">
        Supriiiiiiise!
      </a>
      <img src="https://picsum.photos/200"></img>
    </article>
  );
}
