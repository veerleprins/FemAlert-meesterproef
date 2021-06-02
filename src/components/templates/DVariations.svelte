<script>
  // Components
  // import Button from '../atoms/Button.svelte'
  import {onMount} from 'svelte'
  import DonutChart from '../atoms/DonutChart.svelte'
  // import Image from '../atoms/Image.svelte'

  let data1 = [
    {
      'size': 25,
      'name': 'Agressie',
      'color': '#D5C8F4'
    },
    {
      'size': 8,
      'name': 'Aanranding',
      'color': '#17DBCC'
    },
    {
      'size': 12,
      'name': 'Anders',
      'color': '#FFBB37'
    },
    {
      'size': 2,
      'name': 'Anders',
      'color': '#FF82AC'
    },
    {
      'size': 39,
      'name': 'Anders',
      'color': '#3969FF'
    },
    {
      'size': 11,
      'name': 'Anders',
      'color': '#fff'
    }
  ]
  let data2 = [
    {
      'size': 25,
      'name': 'Agressie',
      'color': '#8C4660'
    },
    {
      'size': 8,
      'name': 'Aanranding',
      'color': '#7988D9'
    },
    {
      'size': 12,
      'name': 'Anders',
      'color': '#252940'
    },
    {
      'size': 2,
      'name': 'Anders',
      'color': '#54628C'
    },
    {
      'size': 39,
      'name': 'Anders',
      'color': '#F2AEAE'
    },
    {
      'size': 11,
      'name': 'Anders',
      'color': '#6D345D'
    }
  ]
  let data3 = [
    {
      'size': 25,
      'name': 'Agressie',
      'color': '#3B3659'
    },
    {
      'size': 8,
      'name': 'Aanranding',
      'color': '#2A2D40'
    },
    {
      'size': 12,
      'name': 'Anders',
      'color': '#497364'
    },
    {
      'size': 2,
      'name': 'Anders',
      'color': '#497385'
    },
    {
      'size': 39,
      'name': 'Anders',
      'color': '#252940'
    },
    {
      'size': 11,
      'name': 'Anders',
      'color': '#568C6D'
    }
  ]
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
  let data5 = [
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
  let data6 = [
    {
      'size': 25,
      'name': 'Agressie',
      'color': '#EEC0A6'
    },
    {
      'size': 8,
      'name': 'Aanranding',
      'color': '#D7AA91'
    },
    {
      'size': 12,
      'name': 'Anders',
      'color': '#C0947C'
    },
    {
      'size': 2,
      'name': 'Anders',
      'color': '#835940'
    },
    {
      'size': 39,
      'name': 'Anders',
      'color': '#4F2A11'
    },
    {
      'size': 11,
      'name': 'Anders',
      'color': '#1C0B01'
    }
  ]
  let data7 = [
    {
      'size': 25,
      'name': 'Agressie',
      'color': '#BF0B3B'
    },
    {
      'size': 8,
      'name': 'Aanranding',
      'color': '#D50DD9'
    },
    {
      'size': 12,
      'name': 'Anders',
      'color': '#1835D9'
    },
    {
      'size': 2,
      'name': 'Anders',
      'color': '#238C2A'
    },
    {
      'size': 39,
      'name': 'Anders',
      'color': '#F2B90C'
    },
    {
      'size': 11,
      'name': 'Anders',
      'color': '#ff4d98'
    }
  ]
  let data8 = [
    {
      'size': 25,
      'name': 'Agressie',
      'color': '#191a21'
    },
    {
      'size': 8,
      'name': 'Aanranding',
      'color': '#021859'
    },
    {
      'size': 12,
      'name': 'Anders',
      'color': '#0468bf'
    },
    {
      'size': 2,
      'name': 'Anders',
      'color': '#0477bf'
    },
    {
      'size': 39,
      'name': 'Anders',
      'color': '#4ab0d9'
    },
    {
      'size': 11,
      'name': 'Anders',
      'color': '#66d8f2'
    }
  ]

  let purple1 = [
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
  let purple2 = [
    {
      'size': 25,
      'name': 'Agressie',
      'color': '#9a77cf'
    },
    {
      'size': 8,
      'name': 'Aanranding',
      'color': '#543884'
    },
    {
      'size': 12,
      'name': 'Anders',
      'color': '#262254'
    },
    {
      'size': 2,
      'name': 'Anders',
      'color': '#a13670'
    },
    {
      'size': 39,
      'name': 'Anders',
      'color': '#ec4176'
    },
    {
      'size': 11,
      'name': 'Anders',
      'color': '#ffa45e'
    }
  ]
  let purple3 = [
    {
      'size': 25,
      'name': 'Agressie',
      'color': '#80e2ff'
    },
    {
      'size': 8,
      'name': 'Aanranding',
      'color': '#9cecff'
    },
    {
      'size': 12,
      'name': 'Anders',
      'color': '#bdf2ff'
    },
    {
      'size': 2,
      'name': 'Anders',
      'color': '#cdbbec'
    },
    {
      'size': 39,
      'name': 'Anders',
      'color': '#BA9fe7'
    },
    {
      'size': 11,
      'name': 'Anders',
      'color': '#9e74d0'
    }
  ]
  let purple4 = [
    {
      'size': 25,
      'name': 'Agressie',
      'color': '#E196D1'
    },
    {
      'size': 8,
      'name': 'Aanranding',
      'color': '#966289'
    },
    {
      'size': 12,
      'name': 'Anders',
      'color': '#663C60'
    },
    {
      'size': 2,
      'name': 'Anders',
      'color': '#5E1D47'
    },
    {
      'size': 39,
      'name': 'Anders',
      'color': '#250218'
    },
    {
      'size': 11,
      'name': 'Anders',
      'color': '#5F525B'
    }
  ]
  let purple5 = [
    {
      'size': 25,
      'name': 'Agressie',
      'color': '#BF74AD'
    },
    {
      'size': 8,
      'name': 'Aanranding',
      'color': '#A093BF'
    },
    {
      'size': 12,
      'name': 'Anders',
      'color': '#9FB0C0'
    },
    {
      'size': 2,
      'name': 'Anders',
      'color': '#B9D8DD'
    },
    {
      'size': 39,
      'name': 'Anders',
      'color': '#F3B5A8'
    },
    {
      'size': 11,
      'name': 'Anders',
      'color': '#695a82'
    }
  ]

  onMount(async () => {
    const res = await fetch(`https://my.api.mockaroo.com/fem_alert_v5?key=6cbcdbc0`)
    data = await res.json()
  })

</script>

<style lang="scss">
  // Importing fonts, vars, etc.
  @import 'src/styles/index.scss';
  * {
    margin: 1.5em;
  }
</style>


<section>
  <DonutChart innerRadius="0" data="{data1}"/>
  <DonutChart innerRadius="20" data="{data2}"/>
  <DonutChart innerRadius="30" data="{data3}"/>
  <DonutChart innerRadius="40" data="{data4}"/>
  <DonutChart innerRadius="50" data="{data5}"/>
  <DonutChart innerRadius="0" data="{data6}"/>
  <DonutChart innerRadius="20" data="{data7}"/>
  <DonutChart innerRadius="30" data="{data5}"/>
  <DonutChart innerRadius="40" data="{data8}"/>
  <DonutChart innerRadius="50" data="{data1}"/>
  <DonutChart innerRadius="0" data="{data8}"/>
  <DonutChart innerRadius="20" data="{data4}"/>
  <DonutChart innerRadius="30" data="{data6}"/>
  <DonutChart innerRadius="40" data="{data2}"/>
  <DonutChart innerRadius="50" data="{data7}"/>
</section>
<hr />
<section>
  <DonutChart innerRadius="50" data="{purple1}"/>
  <DonutChart innerRadius="50" data="{purple2}"/>
  <DonutChart innerRadius="50" data="{purple3}"/>
  <DonutChart innerRadius="50" data="{purple4}"/>
  <DonutChart innerRadius="50" data="{purple5}"/>
  <DonutChart innerRadius="40" data="{purple1}"/>
  <DonutChart innerRadius="40" data="{purple2}"/>
  <DonutChart innerRadius="40" data="{purple3}"/>
  <DonutChart innerRadius="40" data="{purple4}"/>
  <DonutChart innerRadius="40" data="{purple5}"/>
</section>


