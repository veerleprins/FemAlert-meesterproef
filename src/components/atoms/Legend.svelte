<script>
  export let circleX = 50
  export let circleY = 50

  let data = [
    {
      id: 1,
      date: '05/04/2021',
      time: '5:28',
      accident: [
        'Agressie',
        'Anders',
        'Gediscrimineerd',
        'Racisme',
        'Uitgescholden',
      ],
      story: 'quis turpis eget elit sodales scelerisque mauris sit amet eros',
      first_name: 'Sandie',
      email: 'sfranzoli0@wikia.com',
      need_help: true,
      make_contact: false,
      club_id: 36,
    },
    {
      id: 2,
      date: '12/02/2021',
      time: '2:07',
      accident: ['Uitgescholden', 'Agressie'],
      story: 'sapien sapien non mi integer ac neque duis bibendum',
      first_name: 'Roger',
      email: 'rtwentyman1@thetimes.co.uk',
      need_help: false,
      make_contact: false,
      club_id: 45,
    },
    {
      id: 3,
      date: '06/04/2021',
      time: '1:05',
      accident: ['Anders', 'Gediscrimineerd', 'Racisme'],
      story:
        'vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu',
      first_name: 'Tracee',
      email: 'tburgess2@gmpg.org',
      need_help: false,
      make_contact: false,
      club_id: 40,
    },
    {
      id: 4,
      date: '01/05/2021',
      time: '3:51',
      accident: ['Uitgescholden', 'Gediscrimineerd', 'Aangerand'],
      story:
        'integer ac neque duis bibendum morbi non quam nec dui luctus rutrum',
      first_name: 'Meggy',
      email: 'mfridd3@over-blog.com',
      need_help: false,
      make_contact: false,
      club_id: 9,
    },
    {
      id: 5,
      date: '17/01/2021',
      time: '3:15',
      accident: ['Racisme', 'Aangerand'],
      story:
        'erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer',
      first_name: 'Scott',
      email: 'skenningham4@huffingtonpost.com',
      need_help: true,
      make_contact: true,
      club_id: 47,
    },
    {
      id: 6,
      date: '22/03/2021',
      time: '1:57',
      accident: ['Anders', 'Gediscrimineerd', 'Aangerand', 'Agressie'],
      story: 'ut mauris eget massa tempor convallis nulla neque',
      first_name: 'Natividad',
      email: 'ndowglass5@yahoo.co.jp',
      need_help: true,
      make_contact: true,
      club_id: 43,
    },
  ]
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  svg {
    width: 200px;
    height: 300px;
    border: 1px solid $ui-black;
  }
  text {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>

<svg>
  {#each data as item}
    <g>
      <circle
        style="fill: #D96690"
        stroke="black"
        cx={circleX}
        cy={circleY}
        r="10"
      />
      <text x="70" y="55">{item.accident}</text>
    </g>
  {/each}
</svg>
