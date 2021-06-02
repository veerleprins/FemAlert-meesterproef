<script>
  // Components
  import { onMount } from 'svelte'
  import Image from '../atoms/Image.svelte'
  import Title from '../atoms/Title.svelte'
  import DateSlider from '../organisms/DateSlider.svelte'
  import NewReportCounter from '../organisms/NewReportCounter.svelte'
  import DonutSection from '../organisms/DonutSection.svelte'
  import Legend from '../atoms/Legend.svelte'

  let data = []
  let donutData = [
    {
      'size': 25,
      'name': 'Agressie',
      'color': '#D6C8F4'
    },
    {
      'size': 8,
      'name': 'Aanranding',
      'color': '#8760DB'
    },
    {
      'size': 12,
      'name': 'Anders',
      'color': '#AA83FF'
    },
    {
      'size': 2,
      'name': 'Anders',
      'color': '#7D43F9'
    },
    {
      'size': 39,
      'name': 'Anders',
      'color': '#492B9E'
    },
    {
      'size': 11,
      'name': 'Anders',
      'color': '#05006E'
    }
  ]


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
  <Title>Hi Harold!</Title>
  <Title isSubtitle>Welkom terug</Title>
</section>

<DateSlider />

<section>
  <NewReportCounter />
</section>

<section>
  <DonutSection />
</section>

<!--<section>-->
<!--  <Image-->
<!--      URL=""-->
<!--      src="../img/fem-alert.png"-->
<!--      alt="FemAlert logo"-->
<!--      width="200px"-->
<!--      height="200px"-->
<!--      imageTag-->
<!--  />-->
<!--</section>-->
