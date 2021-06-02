<script context="module">
  // import { fetchData } from '@/utils/collect.js'
  export async function preload() {
    // const data = await fetchData(
    //   `https://my.api.mockaroo.com/fem_alert_v5?key=6cbcdbc0`
    // )
    const response = await this.fetch(
      `https://my.api.mockaroo.com/fem_alert_v5?key=6cbcdbc0`
    )
    const data = await response.json()
    return { data }
  }
</script>

<script>
  // Components
  import Home from '../components/templates/Home.svelte'

  // Internals
  import { onMount } from 'svelte'
  import { reportData } from '@/stores/dataStore.js'

  // Props
  export let data
  onMount(data)

  // Storing the data
  reportData.set(data)
</script>

<style>
</style>

<svelte:head>
  <title>FemAlert | Home</title>
</svelte:head>

<Home />
