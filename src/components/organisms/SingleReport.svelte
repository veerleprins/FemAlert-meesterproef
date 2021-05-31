<script>
  import MultibleReportTypes from '../molecules/MultibleReportTypes.svelte'
  import ReportExtraOptions from '../molecules/ReportExtraOptions.svelte'

  let reports = [
    'agressie',
    'mishandeling',
    'discriminatie',
    'aanranding',
    'uitschelden',
    'anders'
  ]

</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2em 1.5em;
    padding: 1em 1em;
    background-color: $ui-section;
    border-radius: 10px;
    box-shadow: 1px 1px 6px #9a9a9a;

    section {
      box-shadow: none;
      display: flex;
      margin: 0 0 1em 0;
      padding: 0;
    }

    a {
      display: inline;
      text-decoration: none;
    }

    .extraInfo {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 1.5em 0 0 0;
    }
  }
</style>

<section>
  <section>
    <MultibleReportTypes numberOfReports={reports}/>
  </section>

  <p>
    Was iemand die mij aanrandde tijdens het dansen. Hij bleef maar doorgaan ondanks dat ik al
    een aantal keer zei dat hij moest stoppen. <a href="www.google.com"> Lees meer...</a>
  </p>

  <section class="extraInfo">
    <ReportExtraOptions/>
    <section>
      <p>23:00 | 21/5/2021</p>
    </section>
  </section>

</section>