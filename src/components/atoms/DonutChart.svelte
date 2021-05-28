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
    let data = [
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

    /**
     * based on an example by Rich-harrishttps:
     * github.com/Rich-Harris/svelte-d3-arc-demo
     */
    import { arc } from 'd3'

    let width = 200
    let height = 200

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
    <g transform='translate(100,100)'>
        {#each arcs as arc}
            <!-- single arc -->
            <path d={arc.path} fill={arc.color}/>
        {/each}
    </g>
</svg>