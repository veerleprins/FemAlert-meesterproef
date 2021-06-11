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
    const getObject = (DynamischeNaam) => {
        return {
            name: DynamischeNaam,
            count: 0,
            color: ''
        }
    }
    const aanrandingObject = getObject('Aanranding')
    const racismeObject = getObject('Racisme')
    const uitscheldenObject = getObject('Uitschelden')
    const agressieObject = getObject('Agressie')
    const andersObject = getObject('Anders')
    const discriminatieObject = getObject('Discriminatie')

     // For each array of objects containing report types
     // loop through both the outer arrays and the objects
     // and check the type of report, then add to the correct counter
     allReports.forEach((item) => {

        item.forEach((accident) => {
            if (accident.type === 'Aanranding') {
                aanrandingObject.count ++
                aanrandingObject.color = accident.color
            }
            else if (accident.type === 'Agressie') {
                agressieObject.count ++
                agressieObject.color = accident.color
            }
            else if (accident.type === 'Uitschelden') {
                uitscheldenObject.count ++
                uitscheldenObject.color = accident.color
            }
            else if (accident.type === 'Discriminatie') {
                discriminatieObject.count ++
                discriminatieObject.color = accident.color
            }
            else if (accident.type === 'Racisme') {
                racismeObject.count ++
                racismeObject.color = accident.color
            }
            else if (accident.type === 'Anders') {
                andersObject.count ++
                andersObject.color = accident.color
            }
        })
    })

    // Combine all the new objects into an array
    let data = [
        agressieObject,
        aanrandingObject,
        uitscheldenObject,
        discriminatieObject,
        racismeObject,
        andersObject
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

    let total = data.reduce((total, item) => total + item.count, 0)
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
                endAngle: (acc += (angle * segment.count / total))
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