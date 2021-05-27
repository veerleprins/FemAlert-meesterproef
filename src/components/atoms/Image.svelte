<script>
  export let src = ''
  export let alt = ''
  export let width = ''
  export let height = ''
  export let imageTag = true
</script>

<style lang="scss">
</style>

{#if imageTag}
    <img src={src} alt={alt} width={width} height={height} imageTag={imageTag}>
{:else}
    <a>
        <img src={src} alt={alt} width={width} height={height} imageTag={imageTag}>
    </a>
{/if}
