<script>
  import 'leaflet/dist/leaflet.css'
  import { onMount } from 'svelte'

  export let map
  let L

  import { reportData } from '@/stores/dataStore.js'
  // Select only the accidents from each report
  let rawData
  reportData.subscribe((value) => {
    rawData = value
  })

  onMount(async () => {
    const l = await import('leaflet')
    L = l.default

    var mymap = L.map('mapid').setView([52.379189, 4.899431], 13)

    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          'pk.eyJ1Ijoiam9waWVqb3BpZSIsImEiOiJja290dThjc3cwMGVoMnFxanZxcjc3Yms2In0.QFYSy0vq1gYhoSh4XtRPMQ',
      }
    ).addTo(mymap)

    let styling = {
      color: 'gray',
      weight: 2,
      opacity: 1,
    }

    fetch(
      'https://maps.amsterdam.nl/open_geodata/geojson_lnglat.php?KAARTLAAG=GEBIED_BUURTEN&THEMA=gebiedsindeling'
    )
      .then((response) => response.json())
      .then((data) => {
        L.geoJson(data, {
          style: styling,
        }).addTo(mymap)

        function highlightFeature(e) {
          var layer = e.target

          layer.setStyle({
            weight: 3,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7,
          })

          if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront()
          }
        }

        var geojson
        // ... our listeners
        geojson = L.geoJson(data)

        function resetHighlight(e) {
          geojson.resetStyle(e.target)
        }

        function onEachFeature(feature, layer) {
          layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
          })
        }

        geojson = L.geoJson(data, {
          style: styling,
          onEachFeature: onEachFeature,
        }).addTo(mymap)
      })

    function getColor(d) {
      return d > 1000
        ? '#800026'
        : d > 500
        ? '#BD0026'
        : d > 200
        ? '#E31A1C'
        : d > 100
        ? '#FC4E2A'
        : d > 50
        ? '#FD8D3C'
        : d > 20
        ? '#FEB24C'
        : d > 10
        ? '#FED976'
        : '#FFEDA0'
    }

    function style(feature) {
      return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7,
      }
    }

    let test = [{}]

    L.geoJson(test, { style: style }).addTo(map)
  })
</script>

<style>
  #mapid {
    height: 100%;
    width: 100%;
  }
</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
    crossorigin=""
  />
  <!-- Make sure you put this AFTER Leaflet's CSS -->
  <script
    defer
    src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
    integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
    crossorigin="">
  </script>
</svelte:head>

<div id="mapid" />
