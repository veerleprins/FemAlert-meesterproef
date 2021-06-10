<script>
    // Props
    export let innerRadius

    // Internals
    import { reportData } from '@/stores/dataStore.js'

    // Select only the accidents from each report
    let rawData
    reportData.subscribe((value) => {
        rawData = value
    })

    // Map over all the reports and return them as arrays with objects
    const allReports = rawData.map((item) => item.accident)

     // Create empty objects which will be used to count the
     // number of reports and to build the donut chart
     let agressie = {
        'size': 0,
         'name': 'Agressie',
         'color': ''
     }
     let aanranding = {
        'size': 0,
         'name': 'Aanranding',
         'color': ''
     }
     let uitschelden = {
        'size': 0,
         'name': 'Uitschelden',
         'color': ''
     }
    let discriminatie = {
        'size': 0,
        'name': 'Discriminatie',
        'color': ''
    }
    let rasicme = {
        'size': 0,
        'name': 'Rasicme',
        'color': ''
    }
    let anders = {
        'size': 0,
        'name': 'Anders',
        'color': ''
    }

     // For each array of objects containing report types
     // loop through both the outer arrays and the objects
     // and check the type of report, then add to the correct counter
     allReports.forEach((item) => {
        item.forEach((accident) => {
            if (accident.type === 'Aanranding') {
                aanranding.size ++
                aanranding.color = accident.color
            }
            else if (accident.type === 'Agressie') {
                agressie.size ++
                agressie.color = accident.color
            }
            else if (accident.type === 'Uitschelden') {
                uitschelden.size ++
                uitschelden.color = accident.color
            }
            else if (accident.type === 'Discriminatie') {
                discriminatie.size ++
                discriminatie.color = accident.color
            }
            else if (accident.type === 'Rasicme') {
                rasicme.size ++
                rasicme.color = accident.color
            }
            else if (accident.type === 'Anders') {
                anders.size ++
                anders.color = accident.color
            }
        })
    })

    // Combine all the new objects into an array
    let data = [
        agressie,
        aanranding,
        uitschelden,
        discriminatie,
        rasicme,
        anders
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