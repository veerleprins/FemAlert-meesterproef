<script>
  // Components
  import Button from '@/components/atoms/Button.svelte'

  // Props
  export let userData

  // Internals
  userData = {
    name: 'Harold Janssen',
    email: 'H.Janssen@mail.com',
    rol: 'Eigenaar',
    clubName: 'De Eendenkooi',
    clubStreet: 'Het Kattengat 420',
    clubCity: 'Amsterdam',
  }
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';
  section:first-of-type {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5em;
    svg {
      width: 5em;
      height: 5em;
    }
  }

  section:not(:nth-of-type(2)) {
    margin-top: 1em;
  }

  section {
    margin: 0;
    padding: 0;
    height: auto;
    background-color: none;
    border-radius: 0px;
    box-shadow: none;
    p:first-child {
      font-weight: bold;
    }
  }

  @include size-m {
    section {
      margin: 1em;
    }
  }
</style>

<section>
  <!--https://stackoverflow.com/questions/14255631/style-svg-circle-with-css-->
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="white" stroke="black" />
  </svg>
  <Button buttonTag>Bewerk Profiel</Button>
</section>

<section>
  <p>{userData.name}</p>
  <p>{userData.rol} club {userData.clubName}</p>
</section>
<section>
  <p>Email:</p>
  <p>{userData.email}</p>
</section>
<section>
  <p>Adres:</p>
  <p>
    {userData.clubName}
    <br />
    {userData.clubStreet}
    <br />
    {userData.clubCity}
  </p>
</section>
