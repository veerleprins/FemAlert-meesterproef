<script>
  import Button from '../atoms/Button.svelte'
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  section {
    width: 100%;
    ul {
      display: flex;
      flex-direction: row;
      overflow-x: scroll;
      padding: 1em;
      &::-webkit-scrollbar {
        display: none;
      }
      li {
        list-style-type: none;
        width: 100%;
        margin-right: 1em;
        &:last-of-type {
          padding-right: 1em;
        }
      }
    }
  }
</style>

<section>
  <ul>
    <li>
      <Button buttonTag isClicked>Vandaag</Button>
    </li>
    <li>
      <Button buttonTag>Gister</Button>
    </li>
    <li>
      <Button buttonTag>Deze week</Button>
    </li>
    <li>
      <Button buttonTag>Deze maand</Button>
    </li>
  </ul>
</section>
