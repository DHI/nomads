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
  onHover?: ({ features: [] }: any) => any;
  onClick?: ({ features: [] }: any) => any;
  scrollZoom?: boolean;
  dragPan?: boolean;
  dragRotate?: boolean;
  doubleClickZoom?: boolean;
  touchZoom?: boolean;
  touchRotate?: boolean;
}
