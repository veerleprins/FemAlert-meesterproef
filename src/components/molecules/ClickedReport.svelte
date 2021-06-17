<script>
  // Components
  import Title from '@/components/atoms/Title.svelte'
  import Options from '@/components/molecules/Options.svelte'

  // Internals
  import { singleReport } from '@/stores/reportStore.js'

  // Data
  let clickedReport
  singleReport.subscribe((value) => {
    clickedReport = value
  })
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  p {
    &.timestamp {
      margin-bottom: 1rem;
      font-family: $light-font;
    }
  }
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 6px;
    height: 100px;
    width: 100%;
    margin-bottom: 1rem;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      width: 150px;
      height: 30px;
      border-radius: $borderSize;
      margin-bottom: 0em;
    }
  }
</style>

<Title isSubtitle>Melding van: {clickedReport.name}</Title>
<p class="timestamp">{clickedReport.time} | {clickedReport.date}</p>
<ul>
  {#each clickedReport.accident as accident}
    <li style="background-color: {accident.color}">{accident.type}</li>
  {/each}
</ul>
<p class="story">{clickedReport.story}</p>
<Options
  support={clickedReport.support}
  contact={clickedReport.contact}
  text={clickedReport.email}
  bottom
/>
