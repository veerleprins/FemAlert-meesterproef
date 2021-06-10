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
    font-family: $standard-font;
  }

  :global(body) {
    background-color: $ui-background-color;
    overflow-x: hidden;
    font-size: 14px;
  }

  @include size-xs {
    :global(body) {
      font-size: 16px;
    }
  }

  @include size-xl {
    :global(body) {
      font-size: 18px;
    }
  }

  main {
    width: 100%;
    padding: 1em;
  }
</style>

<header />

<main>
  <slot />
</main>

<footer />
