<script>
  // Components
  import Label from '../atoms/Label.svelte'
  import Input from '../atoms/Input.svelte'

  // Props
  export let type
  export let name
  export let value
  export let label
</script>

<style lang="scss">
  // Importing fonts, vars, etc.
  @import 'src/styles/index.scss';

  input {
    &.searchBar {
      width: 100%;
      border: none;
      border-radius: $borderSize;
      height: 40px;
      padding-left: 1rem;
    }
  }

  div {
    position: relative;
    input[type='text'] {
      padding-left: 2.5rem;
    }
  }

  section {
    display: grid;
    grid-template-columns: 1fr 2fr;
    label {
      padding-left: 0.5em;
    }
    input {
      border: 1px solid $ui-accent-grey;
      border-radius: 5px;
      line-height: 1.5em;
      padding-left: 0.5em;
    }
  }

  @include size-m {
    section {
      grid-template-columns: 1fr 3fr;
      input {
        line-height: 2em;
        width: 20em;
      }
    }
  }
</style>

<section>
  <Label {name} {label}/>
  <Input {type} {name} {value}/>
</section>
