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
    const getObject = (dynamicName) => {
        return {
            name: dynamicName,
            count: 0,
            color: ''
        }
    }
    const gropingObject = getObject('Aanranding')
    const racismObject = getObject('Racisme')
    const swearingObject = getObject('Uitgescholden')
    const agressionObject = getObject('Agressie')
    const andersObject = getObject('Anders')
    const discriminationObject = getObject('Discriminatie')

     // For each array of objects containing report types
     // loop through both the outer arrays and the objects
     // and check the type of report, then add to the correct counter
     allReports.forEach((item) => {
        item.forEach((accident) => {
            if (accident.type === 'Aanranding') {
                gropingObject.count ++
                gropingObject.color = accident.color
            }
            else if (accident.type === 'Agressie') {
                agressionObject.count ++
                agressionObject.color = accident.color
            }
            else if (accident.type === 'Uitgescholden') {
                swearingObject.count ++
                swearingObject.color = accident.color
            }
            else if (accident.type === 'Discriminatie') {
                discriminationObject.count ++
                discriminationObject.color = accident.color
            }
            else if (accident.type === 'Racisme') {
                racismObject.count ++
                racismObject.color = accident.color
            }
            else if (accident.type === 'Anders') {
                andersObject.count ++
                andersObject.color = accident.color
            }
        })
    })

    // Combine all the new objects into an array
    let data = [
        agressionObject,
        gropingObject,
        swearingObject,
        discriminationObject,
        racismObject,
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
    arcs = data.map((segment, id) => {
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
          label: segment.name,
          value: segment.count,
          d: fn(options),
          centroid: fn.centroid(options),
          id: id
        }
    })

    let shownTooltip = 1
    let tooltipColor = gropingObject.color
    let tooltipName = gropingObject.name
    let tooltipValue = gropingObject.count
    let  content = tooltipValue > 1
      ? 'meldingen'
      : 'melding'


    const showTooltip = (id, color, name, value) => {
      shownTooltip = id,
      tooltipColor = color
      tooltipName = name
      tooltipValue = value
      content = tooltipValue > 1
        ? 'meldingen'
        : 'melding'
    }
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    g path {
      stroke: #FFFFFF;
      stroke-width: 3px;
    }

    #tooltip {
      margin: 0.5em;
      color: #FFFFFF;
      text-align: center;
      padding: 0.5em;
      width: 100%;
    }
  }

  @include size-m {
    #tooltip {

    }
  }

</style>

<div>
  <svg {width} {height} class='pie'>
    <g transform='translate(75,75)'>
      {#each arcs as arc}
        <!-- single arc -->
        <path d={arc.d} fill={arc.color} on:mouseenter={showTooltip(arc.id, arc.color, arc.label, arc.value)}/>
      {/each}
    </g>
  </svg>
  <div id="tooltip" style="background-color: {tooltipColor}">
    {tooltipName} : {tooltipValue} {content}
  </div>
</div>
