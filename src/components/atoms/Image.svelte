<script>
  export let src
  export let alt
  export let width
  export let height
  export let imageTag
</script>

<style>
</style>

{#if !imageTag}
    <img {src} {alt} {width} {height}>
{:else}
    <a href='/'>
        <img {src} {alt} {width} {height} {imageTag}>
    </a>
{/if}
