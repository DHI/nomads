declare module 'deck.gl' {
  export { experimental } from '@deck.gl/core';

  export {
    COORDINATE_SYSTEM,
    Deck,
    Layer,
    CompositeLayer,
    View,
    MapView,
    FirstPersonView,
    ThirdPersonView,
    OrbitView,
    PerspectiveView,
    OrthographicView,
    Viewport,
    WebMercatorViewport,
    Controller,
    MapController,
    AttributeManager,
    project,
    project64,
    LayerManager,
    DeckRenderer,
    log,
    _OrbitController,
    _FirstPersonController,
    TRANSITION_EVENTS,
    LinearInterpolator,
    FlyToInterpolator,
    Effect,
    LightingEffect,
    PostProcessEffect,
    AmbientLight,
    PointLight,
    DirectionalLight,
    LayerExtension,
    fp64LowPart,
    createIterable,
    DeckProps,
  } from '@deck.gl/core';
  export {
    ArcLayer,
    BitmapLayer,
    IconLayer,
    LineLayer,
    PointCloudLayer,
    ScatterplotLayer,
    GridCellLayer,
    ColumnLayer,
    PathLayer,
    PolygonLayer,
    SolidPolygonLayer,
    GeoJsonLayer,
    TextLayer,
  } from '@deck.gl/layers';
  export {
    ScreenGridLayer,
    CPUGridLayer,
    HexagonLayer,
    ContourLayer,
    GridLayer,
    GPUGridLayer,
    AGGREGATION_OPERATION,
    HeatmapLayer,
    RGBAColor,
    ColorDomain,
    ColorRange,
  } from '@deck.gl/aggregation-layers';
  export {
    GreatCircleLayer,
    S2Layer,
    H3ClusterLayer,
    H3HexagonLayer,
    TileLayer,
    TripsLayer,
    Tile3DLayer,
  } from '@deck.gl/geo-layers';
  export { SimpleMeshLayer, ScenegraphLayer } from '@deck.gl/mesh-layers';
  export { default, DeckGL } from '@deck.gl/react';
}
