<script>
  // Imports
  import InputWithLabel from '../molecules/InputWithLabel.svelte'
  import Button from '../atoms/Button.svelte'
  export let userData

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
  <InputWithLabel
      type="text"
      name="name"
      label="Naam: "
      value={userData.name}
  />
  <InputWithLabel
      type="email"
      name="email"
      label="Email: "
      value={userData.email}
  />
  <InputWithLabel
      type="text"
      name="clubName"
      label="Club: "
      value={userData.clubName}
  />
  <InputWithLabel
      type="text"
      name="clubStreet"
      label="Adress: "
      value={userData.clubStreet}
  />
  <InputWithLabel
      type="text"
      name="clubCity"
      label=""
      value={userData.clubCity}
  />
</form>