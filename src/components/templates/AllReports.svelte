<script>
  // Components
  import {onMount} from 'svelte'
  import Image from '../atoms/Image.svelte'
  import Title from '../atoms/Title.svelte'
  import SearchBar from '../atoms/SearchBar.svelte'
  import SingleReport from '../organisms/SingleReport.svelte'


  let data = []

  onMount(async () => {
    const res = await fetch(`https://my.api.mockaroo.com/fem_alert_v5?key=6cbcdbc0`)
    data = await res.json()
  })

</script>

<style lang="scss">
  // Importing fonts, vars, etc.
  @import 'src/styles/index.scss';
  * {
    font-family: $standard-font;
  }

  section:first-of-type {
    margin-left: 1.5em;
    margin-top: 3em;
  }

  section:not(:first-of-type) {
    margin: 2em 1.5em;
    background-color: $ui-section;
    border-radius: 10px;
    box-shadow: 1px 1px 6px #9a9a9a;
    width: 90%;
  }
</style>

<section>
  <Title>Alle meldingen</Title>
</section>

<SearchBar placeholder="Zoek melding..." />

<SingleReport/>
