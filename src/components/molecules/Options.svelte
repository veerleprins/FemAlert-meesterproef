<script>
  // Components
  import Icons from '@/components/atoms/Icons.svelte'

  // Props
  export let support
  export let contact
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
  <div>
    {#if support && contact}
      <p class="both icon">
        <Icons iconType="contact" />
        Contact voor meer info
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
        Contact voor meer info
      </p>
    {/if}
  </div>
{/if}
