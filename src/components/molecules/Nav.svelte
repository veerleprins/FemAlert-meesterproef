<script>
  // Components
  import Image from '@/components/atoms/Image.svelte'
  import Icons from '@/components/atoms/Icons.svelte'

  // Props
  export let open
  export let segment
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  nav {
    background-color: $ui-section;
    position: fixed;
    z-index: 2;
    overflow: hidden;
    padding-top: 6em;
    height: 100%;
    width: 0;
    top: 0;
    right: 0;
    transition: 0.5s;
    &.open {
      padding: 6em 1em;
      width: 100vw;
    }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 60%;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        &:nth-of-type(1) {
          display: none;
        }
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          color: $ui-body-color;
          text-decoration: none;
          font-size: 1rem;
          width: 100%;
          padding-bottom: 1em;
          span {
            display: none;
          }
          &.current {
            font-family: $bold-font;
            &::after {
              content: '';
              position: absolute;
              border-bottom: 2px solid $ui-blue;
              width: 50%;
              bottom: 10px;
            }
          }
        }
        &.map {
          display: none;
        }
      }
    }
  }
  [aria-current] {
    position: relative;
    font-family: $bold-font;
    font-size: 1rem;
    &::after {
      content: '';
      position: absolute;
      display: block;
      background-color: $ui-blue;
      width: 200px;
      height: 3px;
      bottom: 10px;
    }
  }

  @include size-m {
    nav {
      position: inherit;
      padding: 2rem;
      border-radius: 0 75px 75px 0;
      width: 300px;
      height: 100vh;
      left: 0;
      ul {
        height: 100%;
        li {
          a {
            justify-content: flex-start;
            padding: 2em 0em;
            span {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            &.current {
              font-family: $bold-font;
              &::after {
                display: none;
              }
            }
          }
          &.map {
            display: block;
          }
          &:nth-of-type(1) {
            display: flex;
            justify-content: flex-start;
          }
          &:last-of-type {
            margin-top: auto;
          }
        }
      }
      &.open {
        padding: 2rem;
        width: 300px;
      }
    }

    [aria-current] {
      &::after {
        width: 200px;
      }
    }
  }
</style>

<nav class:open>
  <ul>
    <li>
      <Image
        URL="/"
        src="img/Logo-FemAlert.svg"
        alt="Logo Fem Alert"
        width={60}
        height={60}
        imageTag
      />
    </li>
    <li>
      <a
        aria-current={segment === undefined ? 'page' : undefined}
        href="/"
        on:click
      >
        <span class="icon">
          <Icons iconType="dashboard" />
        </span>
        Dashboard
      </a>
    </li>
    <li>
      <a
        aria-current={segment === 'meldingen' ? 'page' : undefined}
        href="/meldingen"
        on:click
      >
        <span class="icon">
          <Icons iconType="reports" />
        </span>
        Slachtoffer meldingen</a>
    </li>
    <li class="map">
      <a
        aria-current={segment === 'kaart' ? 'page' : undefined}
        href="/kaart"
        on:click
      >
        <span class="icon">
          <Icons iconType="map" />
        </span>
        Kaart</a>
    </li>
    <li>
      <a
        aria-current={segment === 'instellingen' ? 'page' : undefined}
        href="/instellingen"
        on:click
      >
        <span class="icon">
          <Icons iconType="settings" />
        </span>
        Instellingen</a>
    </li>
    <li>
      <a
        aria-current={segment === 'undefined' ? 'page' : undefined}
        href="/"
        on:click
      >
        <span class="icon">
          <Icons iconType="logout" />
        </span>
        Uitloggen</a>
    </li>
  </ul>
</nav>
