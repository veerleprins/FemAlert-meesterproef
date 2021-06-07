<script>
  // Props
  let data = [
    {
      report: 'Agressie',
      color: '#05006E',
    },
    {
      report: 'Racisme',
      color: '#492B9E',
    },
    {
      report: 'Aanranding',
      color: '#7D43F9',
    },
    {
      report: 'Discriminatie',
      color: '#8760DB',
    },
    {
      report: 'Uitgescholden',
      color: '#AA83FF',
    },
    {
      report: 'Anders...',
      color: '#D6C8F4',
    },
  ]
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  ul {
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

  @media (max-width: 350px) {
    ul {
      display: block;
    }
  }
  @include size-m {
    ul {
      grid-template-columns: auto;
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
