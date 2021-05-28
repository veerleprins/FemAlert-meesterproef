<script>
  // Components
  import Button from '../atoms/Button.svelte'
  import {onMount} from 'svelte'
  import DonutChart from '../atoms/DonutChart.svelte'
  import Image from '../atoms/Image.svelte'

  let data = []

  onMount(async () => {
    const res = await fetch(`https://my.api.mockaroo.com/fem_alert_v5?key=6cbcdbc0`)
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
  <Image
          URL=""
          src="../img/fem-alert.png"
          alt="FemAlert logo"
          width="200px"
          height="200px"
          imageTag
  />
</section>

<section>
  <DonutChart innerRadius="95" />
</section>

