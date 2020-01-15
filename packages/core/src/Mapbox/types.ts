import { FeatureCollection } from 'geojson';

export interface Layers {
  id: string;
}

export interface MapSource {
  collection: FeatureCollection;
  layers: any[];
}

export interface Props {
  mapboxApiAccessToken: string;
  mapStyle: string;
  mapSource?: MapSource;
  mapPosition: Object;
  mapInteractions?: Object;
  children?: any;
}
