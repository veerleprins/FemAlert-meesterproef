<script>
  // Components
  import Button from '../atoms/Button.svelte'

  import { onMount } from 'svelte'

  let data = []

  onMount(async () => {
    const res = await fetch(
      `https://my.api.mockaroo.com/fem_alert_v5?key=6cbcdbc0`
    )
    data = await res.json()
  })
</script>

<style lang="scss">
  // Importing fonts, vars, etc.
  @import 'src/styles/index.scss';
  h1 {
    margin: 10em;
  }
</style>

<section>
  <h1>FemAlert</h1>
  <Button URL="">Send</Button>
</section>

<section>
  <h1>Data:</h1>
  {#each data as item}
    <p>{item.first_name}</p>
  {/each}
</section>
