import "./styles/style.css";
import js from "./assets/js.svg";
import vite from "/vite.svg";
import { setupCounter } from "./components/counter.js";

document.querySelector("#app").innerHTML = `
      <div id="app"
        class="m-5 p-5 flex flex-col justify-center items-center" >
        <div id="app-container"
          class="m-5 p-5 flex flex-row justify-start items-center" >
          <h1 classe="m-2.5 p-2.5 text-2.5xl font-semibold" >
            Vanilla
          </h1>
          <a href="https://vitejs.dev" target="_blank">
          <img src="${vite}" id="logo-vite" alt="Logo-Vite" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
          <img src="${js}" id="logo-js" class="rounded-2xl" alt="Logo-Js" />
        </a>
        </div>
        <div id="app-card"
          class="m-1 p-1 flex text-[#333] flex-row justify-center items-center" >
          <div class="card">
            <button class="m-2.5 p-2.5 bg-[#c2bc8f]" id="counter" type="button"></button>
          </div>
          <p class="m-2.5 p-2.5 bg-[#ddc583] text-[#333] rounded-xl" >
            Edit <code class="code">./src/main.js</code> and save to test Hmr
          </p>
        </div>
        <p id="read" class="m-2.5 p-2.5 bg-[#d0d455] text-[#333] rounded-lg"  >
          Click on the Vite and React Logos to learn more
        </p>
      </div>
`;

setupCounter(document.querySelector("#counter"));