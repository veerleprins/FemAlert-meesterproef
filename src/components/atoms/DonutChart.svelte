<script>
    // Props
    export let innerRadius
    // export let data

    /**
     * todo
     * give height/width with props
     * calculate transform/outer radius based on width and height
     * give colour array with props?
     */

    let data = [
            {
                'size': 25,
                'name': 'Agressie',
                'color': '#05006E'
            },
            {
                'size': 8,
                'name': 'Aanranding',
                'color': '#492B9E'
            },
            {
                'size': 12,
                'name': 'Anders',
                'color': '#7D43F9'
            },
            {
                'size': 2,
                'name': 'Anders',
                'color': '#8760DB'
            },
            {
                'size': 39,
                'name': 'Anders',
                'color': '#AA83FF'
            },
            {
                'size': 11,
                'name': 'Anders',
                'color': '#D6C8F4'
            }
        ]

    /**
     * based on an example by Rich-harrishttps:
     * github.com/Rich-Harris/svelte-d3-arc-demo
     */
    import { arc } from 'd3'

    let width = 150
    let height = 150

    //call the d3 function arc() to create arcs
    let fn = arc()

    //create a full circle
    let angle = Math.PI * 2

    let total = data.reduce((total, item) => total + item.size, 0)
    let arcs
        let acc = 0
        //map over data and create an arc for each data point
        arcs = data.map(segment => {
            const options = {
                //set up inner and outer radius
                innerRadius: innerRadius,
                outerRadius: width / 2,
                //get the starting point of the segment
                startAngle: acc,
                //find the end point of the segment and store this in startAngle
                //this way the next segment will start where the previous one ended
                endAngle: (acc += (angle * segment.size / total))
            }
            return {
                color: segment.color,
                path: fn(options)
            }
        })
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';
</style>

<svg {width} {height} class='pie'>
    <g transform='translate(75,75)'>
        {#each arcs as arc}
            <!-- single arc -->
            <path d={arc.path} fill={arc.color}/>
        {/each}
    </g>
</svg>