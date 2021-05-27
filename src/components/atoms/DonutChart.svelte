<script>
    // Props
    let segments = [
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

    let width = 500
    let height = 500
    import { arc } from 'd3'

    const fn = arc()
    let angle = Math.PI * 2
    $: total = segments.reduce((total, s) => total + s.size, 0)
    let arcs
    $: {
        let acc = 0
        arcs = segments.map(segment => {
            const options = {
                innerRadius: 20,
                outerRadius: 100,
                startAngle: acc,
                endAngle: (acc += (angle * segment.size / total))
            }
            return {
                color: segment.color,
                label: segment.label,
                d: fn(options),
                centroid: fn.centroid(options)
            }
        })
    }
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';


</style>

<svg {width} {height} class='pie'>
    <g transform='translate(50,50)'>
        {#each arcs as arc}
            <!-- arc -->
            <path d={arc.d} fill={arc.color}/>
        {/each}
    </g>
</svg>
