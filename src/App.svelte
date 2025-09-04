<script lang="ts">
  import Counter from "./lib/Counter.svelte";
</script>

<tempate>
  <main>
    <header>
      <h1>News-Jct</h1>
    </header>
    <nav>
      <a href="/">Home</a>
      <a href="http://">News</a>
      <a href="/about">About</a>
    </nav>
    <section>
      <p>
        Welcome to News-Jct, your go-to source for the latest news updates.
      </p>
    </section>
    <section>
      <h2>News</h2>
      <ul>
        <ol>Numero uno</ol>
        <li>
          <a href="http://">News item 1</a>
        </li>
      </ul>
    </section>
    <Counter />
  </main>
</tempate>

<style scoped>
</style>
