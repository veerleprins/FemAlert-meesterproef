<script>
  // Components
  import Button from '../atoms/Button.svelte'
  import Image from '../atoms/Image.svelte'

  import {onMount} from 'svelte'
  import Title from '../atoms/Title.svelte'
  import SubTitle from '../atoms/SubTitle.svelte'

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
  * {
    font-family: Open Sans;
  }
  section:first-of-type{
    margin-top: 2em;
  }
</style>

<section>
  <Title>Hi Harold!</Title>
  <SubTitle>Welkom terug</SubTitle>
</section>

<section>

</section>
