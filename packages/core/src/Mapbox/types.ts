import { FeatureCollection } from 'geojson';

export interface MapSource {
  collection?: FeatureCollection;
  layers?: any[];
}

export interface MapPosition {
  latitude: number;
  longitude: number;
  zoom?: number;
  bearing?: number;
  pitch?: number;
}

export interface MapInteractions {
  onHover?: () => void;
  onClick?: () => void;
  scrollZoom?: boolean;
  dragPan?: boolean;
  dragRotate?: boolean;
  doubleClickZoom?: boolean;
  touchZoom?: boolean;
  touchRotate?: boolean;
}

export interface Props {
  mapboxApiAccessToken: string;
  mapStyle: string;
  mapPosition: MapPosition;
  mapSource?: MapSource;
  mapInteractions?: MapInteractions;
  children?: any;
}
