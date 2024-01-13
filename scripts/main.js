import "../styles/style.css";
import js from "../public/assets/js.svg";
import vite from "/public/vite.svg";
import { setupCounter } from "../scripts/counter.js";

document.querySelector("#app").innerHTML = `
<div id="app">
<div id="app-container">
  <h1 id="app-title">Sites</h1>
  <a href="https://vitejs.dev" target="_blank">
    <img src="${vite}" id="img" alt="Vite logo" width={50} />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    <img src="${js}" id"img" alt="Preact logo" width={50} />
  </a>
</div>
<div id="app-card">
<h1>Hello Vite!</h1>
<div class="card">
  <button id="counter" type="button"></button>
</div>
  <p>
    Edit <code>./scripts/main.js</code> and save to test Hmr
  </p>
</div>
<p id="read">
  Click on the Vite and Js logos to learn more
</p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
