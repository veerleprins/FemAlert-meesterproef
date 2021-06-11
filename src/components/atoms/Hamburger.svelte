<script>
  // Props
  export let open = false
</script>

<style lang="scss">
  button {
    margin-top: 1em;
    z-index: 20;
    cursor: pointer;
    border: none;
    background-color: transparent;
    width: 40px;
    width: 40px;
    position: absolute;
    z-index: 2;
    right: 1em;

    svg {
      min-height: 24px;
      transition: transform 0.3s ease-in-out;
      line {
        stroke: currentColor;
        stroke-width: 3;
        transition: transform 0.3s ease-in-out;
      }
    }
    &.open {
      svg {
        transform: scale(0.8);
        line {
          &#top {
            transform: translate(6px, 0px) rotate(45deg);
          }
          &#middle {
            opacity: 0;
          }
          &#bottom {
            transform: translate(-12px, 9px) rotate(-45deg);
          }
        }
      }
    }
  }
</style>

<button class:open on:click={() => (open = !open)}>
  <svg width="32" height="24">
    <line id="top" x1="0" y1="2" x2="32" y2="2" />
    <line id="middle" x1="8" y1="12" x2="32" y2="12" />
    <line id="bottom" x1="0" y1="22" x2="32" y2="22" />
  </svg>
  Menu
</button>
