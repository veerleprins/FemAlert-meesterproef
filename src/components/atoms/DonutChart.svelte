<script>
    // Props
    let data = [
        {
            'size': 5,
            'label': 'Agressie',
            'color': 'rgb(100,180,200)'
        },
        {
            'size': 8,
            'label': 'Aanranding',
            'color': 'rgb(150,200,250)'
        },
        {
            'size': 11,
            'label': 'another thing',
            'color': 'rgb(80,100,150)'
        }
    ]
    import { pie, arc, scaleOrdinal } from 'd3'

    let height = 450
    let width = 450
    let radius = 200

    let buildChart = () => {


    }

    buildChart()
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';


</style>

<svg {width} {height} class='pie'>
    <g class="arc"/>
    <g class="arc"/>
</svg>
