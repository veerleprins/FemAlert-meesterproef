<script>
  // Components
  import Hamburger from '@/components/atoms/Hamburger.svelte'
  import Nav from '@/components/molecules/Nav.svelte'

  // Props
  export let segment

  // Internals
  let open = false

  /**
   * This function checks whether a certain key is pressed
   * or that it is clicked to change the toggle value.
   * @param e
   */
  const handleNav = (e) => {
    if (e.code === 'F1' || e.type === 'click') {
      open = !open
    }
  }
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
</style>

<svelte:window on:keydown={handleNav} />

<header>
  <Hamburger {open} on:click={handleNav} />
  <Nav {open} {segment} on:click={handleNav} />
</header>
