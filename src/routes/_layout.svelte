<script context="module">
  import { db } from '@/utils/firebase-config.js'

  export async function preload() {
    try {
      let dataList = []
      const snapshot = await db.collection('reports').get()
      snapshot.forEach(async (doc) => {
        const data = doc.data()
        dataList.push(data)
      })
      return { data: dataList }
    } catch (err) {
      console.log(err)
    }
  }
</script>

<script>
  // Internals
  import { reportData } from '@/stores/dataStore.js'

  // Props
  export let data

  // Storing the data
  reportData.set(data)
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body) {
    background-color: #c4c4c4;
    overflow-x: hidden;
  }

  main {
    width: 100%;
  }
</style>

<header />

<main>
  <slot />
</main>

<footer />
