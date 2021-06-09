<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';
  section {
    display: flex;
    justify-content: space-between;
    height: 4em;
  }
  /**
dark mode switch from https://www.w3schools.com/howto/howto_css_switch.asp
 */
  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $ui-accent-grey;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: $ui-blue;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px $ui-blue;
  }

  input:checked + .slider:before {
    transform: translateX(22px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>

<section>
  <p>Donkere modus</p>
  <label class="switch">
    <input type="checkbox">
    <span class="slider round"></span>
  </label>
</section>