<script context="module">
  import { db } from '@/utils/firebase-config.js'

  export async function preload() {
    try {
      let dataList = []
      const snapshot = await db.collection('reports').get()
      snapshot.forEach((doc) => {
        dataList.push(doc.data())
      })
      return { data: dataList }
    } catch (err) {
      console.log(err)
    }
  }
</script>

<script>
  // Components
  import Home from '../components/templates/Home.svelte'

  // Internals
  import { reportData } from '@/stores/dataStore.js'

  // Props
  export let data

  // Storing the data
  reportData.set(data)
  let count_value
  reportData.subscribe((value) => {
    count_value = value
  })
  console.log(count_value)
</script>

<style>
</style>

<svelte:head>
  <title>FemAlert | Home</title>
</svelte:head>

<Home />
