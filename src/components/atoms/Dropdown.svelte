<script>
  // Props
  export let name
  export let options
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';
  section {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    select {
      width: 100%;
      background-color: $ui-blue;
      border: none;
      color: $ui-white;
      border-radius: 15px;
      padding: 0.5em 1em;
      margin-top: 0.2em;
      font-family: $standard-font;
    }
    label {
      font-family: $standard-font;
    }
  }

  @include size-xs {
    section {
      select {
        width: 8em;
      }
    }
  }

  @include size-s {
    section {
      select {
        width: 13em;
      }
    }
  }
</style>

<section>
  <label for={name}>{name}:</label>

  <select {name} id={name}>
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
</section>
