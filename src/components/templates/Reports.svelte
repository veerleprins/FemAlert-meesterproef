<script>
  // Components
  import SingleReport from '@/components/organisms/SingleReport.svelte'
  import Title from '@/components/atoms/Title.svelte'
  import Input from '@/components/atoms/Input.svelte'

  // Internals
  // import { onMount } from 'svelte'
  // let data = []

  // onMount(async () => {
  //   const res = await fetch(`https://my.api.mockaroo.com/fem_alert_v5?key=6cbcdbc0`)
  //   data = await res.json()
  // })

  let data = [
    {
      id: 1,
      date: '29/12/2020',
      time: '19:14',
      accident: [{ type: 'Gediscrimineerd', color: '#8760DB' }],
      story:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor',
      first_name: 'Anestassia',
      email: 'acolwell0@comcast.net',
      need_help: true,
      make_contact: false,
      club_id: 6,
    },
    {
      id: 2,
      date: '23/01/2021',
      time: '5:56',
      accident: [
        { type: 'Agressie', color: '#05006E' },
        { type: 'Aanranding', color: '#7D43F9' },
        { type: 'Gediscrimineerd', color: '#8760DB' },
        { type: 'Racisme', color: '#492B9E' },
      ],
      story:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      first_name: 'Emilia',
      email: 'ebyne1@about.me',
      need_help: true,
      make_contact: true,
      club_id: 40,
    },
    {
      id: 3,
      date: '18/03/2021',
      time: '7:54',
      accident: [{ type: 'Agressie', color: '#05006E' }],
      story:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      first_name: 'Janine',
      email: 'jboggon2@about.me',
      need_help: false,
      make_contact: false,
      club_id: 22,
    },
  ]
</script>

<style lang="scss">
  // Importing fonts, vars, etc.
  @import 'src/styles/index.scss';

  div {
    header {
      width: 100%;
      margin-bottom: 1.5em;
    }

    section {
      ul {
        margin-top: 1.5em;
      }
    }
  }

  @include size-m {
    // Styling for grid
    div {
      max-height: 100vh;
      display: grid;
      grid-template-columns: 1fr 2fr 2fr 0.2em;
      grid-template-rows: 0.2em 1fr 5fr 4fr 0.2em;
      grid-column-gap: 2em;
      grid-row-gap: 2em;
      header {
        grid-column: 2 / 4;
        grid-row: 2;
        align-self: center;
      }
      section {
        // Styling section
      }
    }
  }
</style>

<div>
  <header>
    <Title>Alle meldingen</Title>
  </header>

  <section>
    <Input
      type="text"
      name="search"
      placeholder="Zoek melding...  (Bijv. “Aanranding”)"
      searchBar
    />
    <ul>
      {#each data as report, index}
        <SingleReport {report} {index} />
      {/each}
    </ul>
  </section>

  <section>
    <!-- Insert donut charts here -->
  </section>
</div>
