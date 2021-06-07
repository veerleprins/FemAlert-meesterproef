<script context="module">
  // // import { fetchData } from '@/utils/collect.js'
  // export async function preload() {
  //   // const data = await fetchData(
  //   //   `https://my.api.mockaroo.com/fem_alert_v5?key=6cbcdbc0`
  //   // )
  //   const response = await this.fetch(
  //     `https://my.api.mockaroo.com/fem_alert_v5?key=6cbcdbc0`
  //   )
  //   const data = await response.json()
  //   return { data }
  // }
  // import { db } from '../firebase-config.js'

  // export async function preload(page, session) {
  // let fbList = db.collection('list')
  // return { list: fbList.docs }
  // }
</script>

<script>
  // Components
  import Home from '../components/templates/Home.svelte'
  import { db } from '../firebase-config.js'

  // Internals
  import { onMount } from 'svelte'
  import { reportData } from '@/stores/dataStore.js'

  // Props
  // export let list = []
  // export let data
  // onMount(data)

  // Storing the data
  // reportData.set(data)

  db.collection('reports')
    .onSnapshot(query)
    .once('value')
    .then((snapshot) => {
      console.log(snapshot)
    })
</script>

<style>
</style>

<svelte:head>
  <title>FemAlert | Home</title>
</svelte:head>

<Home />
