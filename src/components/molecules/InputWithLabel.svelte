<script>
  // Components
  import Label from '../atoms/Label.svelte'
  import Input from '../atoms/Input.svelte'

  // Props
  export let type
  export let name
  export let value
  export let label
  export let placeholder
</script>

<style lang="scss">
  // Importing fonts, vars, etc.
  @import 'src/styles/index.scss';

</style>

<Label {name} {label}>
  <Input {type} {name} {value}  {placeholder}/>
</Label>
