<script>
  export let name
  // export let values

  let testValues = [
    '22:00',
    '23:00',
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
  ]
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';
  section {
    display: flex;
    flex-direction: column;
    select {
      width: 100%;
      background-color: $ui-blue;
      color: #FFFFFF;
      border-radius: 15px;
      padding: 0.5em 1em;
      margin-top: 0.5em;
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
    {#each testValues as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
</section>
