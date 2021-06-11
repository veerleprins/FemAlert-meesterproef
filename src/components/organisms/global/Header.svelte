<script>
  // Components
  import Nav from '@/components/molecules/Nav.svelte'
  import Sidebar from '../../atoms/Sidebar.svelte'
  let open = false
</script>

<style lang="scss">
</style>

<header>
  <Sidebar bind:open />
  <Nav bind:sidebar={open} />
</header>
