<script>
  // Components
  import Button from '../atoms/Button.svelte'
  import Image from '../atoms/Image.svelte'

  import {onMount} from 'svelte'
  import Title from '../atoms/Title.svelte'

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
  <Title> Dit is de titel</Title>
</section>

<section>

</section>
