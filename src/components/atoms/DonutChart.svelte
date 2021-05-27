<script>
    // Props
    export let innerRadius = 60
    export let data


    import { arc } from 'd3'

    let width = 200
    let height = 200

    //call the d3 function arc() to create arcs
    let fn = arc()

    //create a full circle
    let angle = Math.PI * 2

    let total = data.reduce((total, item) => total + item.size, 0)
    let arcs
    let buildDonut = () => {
        let acc = 0
        //map over data and create an arc for each data point
        arcs = data.map(segment => {
            const options = {
                //set up inner and outer radius
                innerRadius: innerRadius,
                outerRadius: 100,
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
    }
    buildDonut()

    //based on an example by Rich-harris
    //https://github.com/Rich-Harris/svelte-d3-arc-demo

</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';


</style>

<svg {width} {height} class='pie'>
    <g transform='translate(100,100)'>
        {#each arcs as arc}
            <!-- single arc -->
            <path d={arc.path} fill={arc.color}/>
        {/each}
    </g>
</svg>
