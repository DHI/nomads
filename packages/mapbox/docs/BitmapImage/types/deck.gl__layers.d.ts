declare module '@deck.gl/layers/bitmap-layer/bitmap-layer-vertex' {
  const _default: string;
  export default _default;
}
declare module '@deck.gl/layers/bitmap-layer/bitmap-layer-fragment' {
  const _default: string;
  export default _default;
}
declare module '@deck.gl/layers/bitmap-layer/bitmap-layer' {
  import { Layer } from '@deck.gl/core';
  export interface BitmapLayerProps<D> extends LayerProps<D> {
    image: any;
    bounds: [number, number, number, number] | [[number, number], [number, number], [number, number], [number, number]];
    desaturate: number;
    transparentColor: RGBAColor;
    tintColor: [number, number, number];
  }
  import { LayerProps } from '@deck.gl/core/lib/layer';
  import { RGBAColor } from '@deck.gl/aggregation-layers/utils/color-utils';
  export default class BitmapLayer<D> extends Layer<D> {
    constructor(props: BitmapLayerProps<D>);
    getShaders(): any;
    initializeState(): void;
    updateState({ props, oldProps, changeFlags }: { props: any; oldProps: any; changeFlags: any }): void;
    finalizeState(): void;
    calculatePositions(attributes: any): void;
    _getModel(gl: any): any;
    draw(opts: any): void;
    loadTexture(image: any): void;
  }
}
declare module '@deck.gl/layers' {
  export { default as BitmapLayer } from '@deck.gl/layers/bitmap-layer/bitmap-layer';
}

