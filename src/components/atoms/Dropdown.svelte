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
  select {
    width: 5em;
    background-color: #c4c4c4;
  }
</style>

<label for={name}>{name}:</label>

<select {name} id={name}>
  {#each testValues as option}
    <option value={option}>{option}</option>
  {/each}
</select>
