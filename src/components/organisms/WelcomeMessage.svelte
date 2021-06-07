<script>
  // Imports
  import Title from '../atoms/Title.svelte'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    margin: 0.5em 1.5em;
    height: 100%;
  }

  @include size-m {
    section {
      margin: 0;
      background-color: $ui-accent-grey;
      border-radius: 15px;
      padding: 1em;
    }
  }
</style>

<section>
  <Title>Hi Harold!</Title>
  <Title isSubtitle>Welkom terug</Title>
</section>