<script>
  import { onMount } from 'svelte'

  var heatmapData = [
    new google.maps.LatLng(37.782, -122.447),
    new google.maps.LatLng(37.782, -122.445),
    new google.maps.LatLng(37.782, -122.443),
    new google.maps.LatLng(37.782, -122.441),
    new google.maps.LatLng(37.782, -122.439),
    new google.maps.LatLng(37.782, -122.437),
    new google.maps.LatLng(37.782, -122.435),
    new google.maps.LatLng(37.785, -122.447),
    new google.maps.LatLng(37.785, -122.445),
    new google.maps.LatLng(37.785, -122.443),
    new google.maps.LatLng(37.785, -122.441),
    new google.maps.LatLng(37.785, -122.439),
    new google.maps.LatLng(37.785, -122.437),
    new google.maps.LatLng(37.785, -122.435),
  ]

  onMount(async () => {
    var sanFrancisco = new google.maps.LatLng(37.774546, -122.433523)

    map = new google.maps.Map(document.getElementById('map'), {
      center: sanFrancisco,
      zoom: 13,
      mapTypeId: 'satellite',
    })

    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatmapData,
    })
    heatmap.setMap(map)
  })
</script>

<style>
</style>

<svelte:head>
  <script
    async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDX95VutUPrdVFIpNUROiRki5km_QAvGYM&libraries=visualization&callback=initMap">
  </script>
</svelte:head>
