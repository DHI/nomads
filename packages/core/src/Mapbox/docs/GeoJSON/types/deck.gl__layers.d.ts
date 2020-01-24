declare module '@deck.gl/layers/geojson-layer/geojson' {
  /**
   * "Normalizes" complete or partial GeoJSON data into iterable list of features
   * Can accept GeoJSON geometry or "Feature", "FeatureCollection" in addition
   * to plain arrays and iterables.
   * Works by extracting the feature array or wrapping single objects in an array,
   * so that subsequent code can simply iterate over features.
   *
   * @param {object} geojson - geojson data
   * @param {Object|Array} data - geojson object (FeatureCollection, Feature or
   *  Geometry) or array of features
   * @return {Array|"iteratable"} - iterable list of features
   */
  export function getGeojsonFeatures(geojson: any): any;
  export function separateGeojsonFeatures(
    features: any,
    wrapFeature: any,
    dataRange?: {},
  ): {
    pointFeatures: any[];
    lineFeatures: any[];
    polygonFeatures: any[];
    polygonOutlineFeatures: any[];
  };
  export function validateGeometry(type: any, coordinates: any): boolean;
}
declare module '@deck.gl/layers/geojson-layer/geojson-layer' {
  import { CompositeLayer } from '@deck.gl/core';
  import { CompositeLayerProps } from '@deck.gl/core/lib/composite-layer';
  import PhongMaterial from '@luma.gl/core/materials/phong-material';
  import { RGBAColor } from '@deck.gl/aggregation-layers/utils/color-utils';
  export interface GeoJsonLayerProps<D> extends CompositeLayerProps<D> {
    data: any;
    opacity?: number;
    pickable?: boolean;
    filled?: boolean;
    stroked?: boolean;
    extruded?: boolean;
    wireframe?: boolean;
    lineWidthUnits?: string;
    lineWidthScale?: number;
    lineWidthMinPixels?: number;
    lineWidthMaxPixels?: number;
    lineJointRounded?: boolean;
    lineMiterLimit?: number;
    elevationScale?: number;
    pointRadiusScale?: number;
    pointRadiusMinPixels?: number;
    pointRadiusMaxPixels?: number;
    lineDashJustified?: boolean;
    material?: PhongMaterial;
    getLineColor?: ((d: D) => RGBAColor) | RGBAColor;
    getFillColor?: ((d: D) => RGBAColor) | RGBAColor;
    getRadius?: ((d: D) => number) | number;
    getLineWidth?: ((d: D) => number) | number;
    getElevation?: ((d: D) => number) | number;
    getLineDashArray?: ((d: D) => [number, number]) | [number, number];
  }
  export default class GeoJsonLayer<D> extends CompositeLayer<D> {
    constructor(props: GeoJsonLayerProps<D>);
    initializeState(): void;
    updateState({ props, changeFlags }: { props: any; changeFlags: any }): void;
    renderLayers(): any[];
  }
}
declare module '@deck.gl/layers' {
  export { default as GeoJsonLayer } from '@deck.gl/layers/geojson-layer/geojson-layer';
}
