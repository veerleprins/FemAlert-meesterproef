<script>
  // Components
  import Button from '../atoms/Button.svelte'
  import donutChart from '../atoms/DonutChart.svelte'

  import {onMount} from 'svelte'
  import DonutChart from '../atoms/DonutChart.svelte'

  let data = []

  onMount(async () => {
    const res = await fetch(`https://my.api.mockaroo.com/fem_alert_v5?key=6cbcdbc0`)
    data = await res.json()
    // o
  })

  // let data1 = [
  //   {
  //     'size': 25,
  //     'name': 'Agressie',
  //     'color': '#D5C8F4'
  //   },
  //   {
  //     'size': 8,
  //     'name': 'Aanranding',
  //     'color': '#17DBCC'
  //   },
  //   {
  //     'size': 12,
  //     'name': 'Anders',
  //     'color': '#FFBB37'
  //   },
  //       {
  //     'size': 2,
  //     'name': 'Anders',
  //     'color': '#FF82AC'
  //   },
  //       {
  //     'size': 39,
  //     'name': 'Anders',
  //     'color': '#3969FF'
  //   },
  //       {
  //     'size': 11,
  //     'name': 'Anders',
  //     'color': '#fff'
  //   }
  // ]
  // let data2 = [
  //   {
  //     'size': 25,
  //     'name': 'Agressie',
  //     'color': '#8C4660'
  //   },
  //   {
  //     'size': 8,
  //     'name': 'Aanranding',
  //     'color': '#7988D9'
  //   },
  //   {
  //     'size': 12,
  //     'name': 'Anders',
  //     'color': '#252940'
  //   },
  //   {
  //     'size': 2,
  //     'name': 'Anders',
  //     'color': '#54628C'
  //   },
  //   {
  //     'size': 39,
  //     'name': 'Anders',
  //     'color': '#F2AEAE'
  //   },
  //   {
  //     'size': 11,
  //     'name': 'Anders',
  //     'color': '#6D345D'
  //   }
  // ]
  // let data3 = [
  //   {
  //     'size': 25,
  //     'name': 'Agressie',
  //     'color': '#3B3659'
  //   },
  //   {
  //     'size': 8,
  //     'name': 'Aanranding',
  //     'color': '#2A2D40'
  //   },
  //   {
  //     'size': 12,
  //     'name': 'Anders',
  //     'color': '#497364'
  //   },
  //   {
  //     'size': 2,
  //     'name': 'Anders',
  //     'color': '#497385'
  //   },
  //   {
  //     'size': 39,
  //     'name': 'Anders',
  //     'color': '#252940'
  //   },
  //   {
  //     'size': 11,
  //     'name': 'Anders',
  //     'color': '#568C6D'
  //   }
  // ]
  let data4 = [
    {
      'size': 25,
      'name': 'Agressie',
      'color': '#D96690'
    },
    {
      'size': 8,
      'name': 'Aanranding',
      'color': '#F28DBC'
    },
    {
      'size': 12,
      'name': 'Anders',
      'color': '#F2C9E0'
    },
    {
      'size': 2,
      'name': 'Anders',
      'color': '#89C2D9'
    },
    {
      'size': 39,
      'name': 'Anders',
      'color': '#88E8F2'
    },
    {
      'size': 11,
      'name': 'Anders',
      'color': '#ac9fc2'
    }
  ]
</script>

<style lang="scss">
  // Importing fonts, vars, etc.
  @import 'src/styles/index.scss';
  h1 {
    margin: 10em;
  }
</style>

<section>
  <DonutChart innerRadius="95" data={data4} />
</section>


<section>
  <h1>FemAlert</h1>
  <Button URL="">Send</Button>
</section>
