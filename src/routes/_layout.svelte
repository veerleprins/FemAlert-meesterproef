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
  // Components
  import Header from '@/components/organisms/global/Header.svelte'
  import Footer from '@/components/organisms/global/Footer.svelte'

  // Internals
  import { reportData } from '@/stores/dataStore.js'

  // Props
  export let data
  export let segment

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
    color: $ui-body-color;
    overflow-x: hidden;
    font-size: 14px;
    position: relative;
    &.noscroll {
      overflow: hidden;
    }
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
    height: 100%;
    padding: 1em;
  }
  @include size-m {
    :global(body) {
      display: flex;
      flex-direction: row;
      height: 100vh;
      div {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        main {
          padding-left: 0;
        }
      }
    }
  }
</style>

<Header {segment} />
<div>
  <main>
    <slot />
  </main>
  <Footer />
</div>
