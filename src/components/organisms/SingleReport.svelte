<script>
  // Components
  // import MultipleReportTypes from '../molecules/MultipleReportTypes.svelte'
  // import ReportExtraOptions from '../molecules/ReportExtraOptions.svelte'
  import Title from '@/components/atoms/Title.svelte'

  // Internals
  import { countWords, shortenWords } from '../../utils/checkWords.js'

  // Props
  export let report
  export let index
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  li {
    background-color: white;
    height: auto;
    margin-bottom: 1.625em;
    list-style-type: none;
    border-radius: $borderSize;
    padding: 1em;
    h2 {
      font-size: 20px;
    }
    h3 {
      font-size: 14px;
      font-weight: lighter;
    }
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 6px;
      height: 100%;
      width: 100%;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: maroon;
        color: white;
        width: 120px;
        height: 15px;
        margin-bottom: 0em;
        font-size: 12px;
      }
    }
    p {
      margin: 1.625em 0em;
    }
    .readMore {
      display: inline-block;
      p {
        margin-bottom: 0;
      }
    }
    div {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
</style>

<li>
  <Title isSubtitle>Slachtoffer melding {index + 1}</Title>
  <h3>{report.time} | {report.date}</h3>
  <ul>
    {#each report.accident as accident}
      <li>{accident}</li>
    {/each}
  </ul>
  {#if countWords(report.story) <= 40}
    <p>{report.story}</p>
  {:else}
    <div class="readMore">
      <p id="storyText">
        {shortenWords(report.story, 200)}...
        <a href="#">Lees meer</a>
      </p>
    </div>
  {/if}
  <div>
    <p>Contact voor meer info</p>
    <p>Wil slachtofferhulp</p>
  </div>
</li>
