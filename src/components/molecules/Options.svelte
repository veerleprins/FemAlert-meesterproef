<script>
  // Components
  import Icons from '@/components/atoms/Icons.svelte'

  // Props
  export let support
  export let contact
  export let text = 'Contact voor meer info'
  export let bottom = false
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
    margin: 1em 0 0 0;
    height: auto;
    &.bottom {
      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 1em;
      width: 80%;
      p {
        margin-top: 1em;
      }
    }
    p {
      &.both {
        margin: 0 2em 1em 0;
      }
      &.icon {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }
  }

  @include size-xs {
    div {
      p {
        &.both {
          margin: 0;
        }
      }
    }
  }
</style>

{#if support || contact}
  <div class:bottom>
    {#if support && contact}
      <p class="both icon">
        <Icons iconType="contact" />
        {text}
      </p>
      <p class="icon">
        <Icons iconType="support" />
        Wil slachtofferhulp
      </p>
    {:else if support}
      <p class="icon">
        <Icons iconType="support" />
        Wil slachtofferhulp
      </p>
    {:else}
      <p class="icon">
        <Icons iconType="contact" />
        {text}
      </p>
    {/if}
  </div>
{/if}
