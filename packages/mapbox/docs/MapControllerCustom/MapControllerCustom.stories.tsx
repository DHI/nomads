import React, { useState, useEffect } from 'react';
import Mapbox from '../../src/Mapbox';
import DeckGL, { ColumnLayer } from 'deck.gl';
import { ViewportProps } from 'react-map-gl';
import MyMapController from './MyMapController';
import { data } from './MapSource';
import Typography from '@material-ui/core/Typography';



const Map = (props: any) => {
  const control = new MyMapController();
  return (

    <div style={{ width: props.w, height: props.w }}>
      <Mapbox
        mapPosition={props.viewPort}
        mapController={control}
        onViewPortChange={props.onViewPortChange}
        mapStyle="mapbox://styles/mzdk/ck34cntqj05z91cmjvsjyfw4s"
        mapboxApiAccessToken="pk.eyJ1IjoibXpkayIsImEiOiJjazJuZTlobWkwcGc5M21sbml2cWd0Njl5In0.BasnEPdX95SqEnvv2AOjoQ"
      >
        {({ viewport }: { viewport: ViewportProps }) => (
          <DeckGL
            viewState={viewport}
            height={viewport.height}
            width={viewport.width}
            layers={[new ColumnLayer({
              data: props.data,
              extruded: true,
              radius: 10000,
              elevationScale: 10000,
              getLineColor: [0, 0, 0],
              getFillColor: (d: any) => [48, 128, d.value * 255],
              getElevation: (d: any) => d.value,
              getPosition: (d: any) => d.geometry.coordinates

            })]} />
        )}
      </Mapbox>
    </div>
  );
}



export const MapControllerCustom = () => {
  const [viewport, setViewport] = useState({});

  useEffect(() => {
    setViewport({
      latitude: 20.219889960046146,
      longitude: 96.250295337448279,
      pitch: 45,
      zoom: 5
    });
  }, [])


  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ width: '48%', height: '48vh' }}>
        <Typography>Scenario 1</Typography>
        <Map w='98%' onViewPortChange={setViewport} viewPort={viewport} data={data.features.map((x: any) => { x.value = Math.floor(Math.random() * 10); return x })}></Map>
      </div>
      <div style={{ width: '48%', height: '48vh' }}>
        <Typography>Scenario 2</Typography>
        <Map w='98%' viewPort={viewport} onViewPortChange={setViewport} data={data.features.map((x: any) => { x.value = Math.floor(Math.random() * 10); return x })}></Map>
      </div>
      <div style={{ width: '48%', height: '50vh' }}>
        <Typography>Scenario 3</Typography>
        <Map w='98%' viewPort={viewport} onViewPortChange={setViewport} data={data.features.map((x: any) => { x.value = Math.floor(Math.random() * 10); return x })}></Map>
      </div>
      <div style={{ width: '48%', height: '50vh' }}>
        <Typography>Scenario 4</Typography>
        <Map w='98%' viewPort={viewport} onViewPortChange={setViewport} data={data.features.map((x: any) => { x.value = Math.floor(Math.random() * 10); return x })}></Map>
      </div>

    </div>
  );
};
