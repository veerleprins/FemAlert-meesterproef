<script>
  // Imports
  import Input from '../atoms/Input.svelte'
  import Button from '../atoms/Button.svelte'
  export let userData


  let edit = false

  userData = {
    'name': 'Harold Janssen',
    'email': 'H.Janssen@mail.com',
    'rol': 'Eigenaar',
    'clubName': 'De Eendenkooi',
    'clubStreet': 'Het Kattengat 420',
    'clubCity': 'Amsterdam',
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

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 12em;
  }
</style>


  <section>
<!--https://stackoverflow.com/questions/14255631/style-svg-circle-with-css-->
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="50"
  fill="white" stroke="black"/>
  </svg>
  <Button buttonTag>Opslaan</Button>
</section>

<form>
  <Input  type="text"
          name="name"
          lable="Naam: "
          value={userData.name}
  />
  <Input  type="email"
          name="email"
          lable="Email: "
          value={userData.email}
  />
  <Input  type="text"
          name="clubName"
          lable="Club: "
          value={userData.clubName}
  />
  <Input  type="text"
          name="clubStreet"
          lable="Adress: "
          value={userData.clubStreet}
  />
  <Input  type="text"
          name="clubCity"
          lable=""
          value={userData.clubCity}
  />
</form>