<script>
  // Components
  import Title from '@/components/atoms/Title.svelte'
  import Options from '@/components/molecules/Options.svelte'

  // Internals
  import { countWords, shortenWords } from '@/utils/checkWords.js'
  import { singleReport } from '@/stores/reportStore.js'

  // Props
  export let report
  export let index
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  li {
    background-color: $ui-section;
    height: auto;
    margin-bottom: 1.5em;
    list-style-type: none;
    border-radius: $borderSize;
    padding: 1em;
    p {
      &.timestamp {
        margin-bottom: 1rem;
        font-family: $light-font;
      }
      button {
        border: none;
        color: $ui-blue;
        background-color: transparent;
        font-family: $bold-font;
        text-decoration: underline;
        cursor: pointer;
      }
    }
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 6px;
      height: 100%;
      width: 100%;
      margin-bottom: 1rem;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        width: 150px;
        height: 15px;
        margin-bottom: 0em;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
    .readMore {
      display: inline-block;
    }
  }
</style>

<li>
  <Title isSubtitle>Slachtoffer melding {index + 1}</Title>
  <p class="timestamp">{report.time} | {report.date}</p>
  <ul>
    {#each report.accident as accident}
      <li style="background-color: {accident.color}">{accident.type}</li>
    {/each}
  </ul>
  {#if countWords(report.story) <= 40}
    <p class="story">{report.story}</p>
  {:else}
    <div class="readMore">
      <p class="story">
        {shortenWords(report.story, 200)}...
        <button on:click={singleReport.set(report)}> Lees meer </button>
      </p>
    </div>
  {/if}
  <Options support={report.support} contact={report.contact} />
</li>
