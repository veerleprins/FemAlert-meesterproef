<script>
  // Props
  let data = [
    {
      report: 'Agressie',
      color: '#0070A2',
    },
    {
      report: 'Racisme',
      color: '#0074C2',
    },
    {
      report: 'Aanranding',
      color: '#7972C5',
    },
    {
      report: 'Discriminatie',
      color: '#BE70B0',
    },
    {
      report: 'Uitgescholden',
      color: '#E17B94',
    },
    {
      report: 'Anders...',
      color: '#EA947E',
    },
  ]
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  ul {
    margin: 0 0.5em 0.5em 0.5em;
    display: grid;
    grid-template-columns: auto auto;
    li {
      margin: 10px 0;
      display: flex;
      align-items: center;
      svg {
        margin-right: 10px;
      }
    }
  }
</style>

<ul>
  {#each data as item}
    <li>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="0.282715"
          width="17.3434"
          height="17.3434"
          rx="8.67172"
          fill={item.color}
        />
      </svg>
      {item.report}
    </li>
  {/each}
</ul>
