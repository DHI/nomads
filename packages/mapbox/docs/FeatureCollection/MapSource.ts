import { MapSource as Interface } from '../../src/types';

export const data: Interface = {
  collection: {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          id: 'lolland',
          label: 'Lolland',
          description: 'Compensation',
        },
        geometry: {
          type: 'Point',
          coordinates: [11.351594030857084, 54.65354277730125],
        },
      },
      {
        type: 'Feature',
        properties: {
          id: 'fehmarn',
          label: 'Fehmarn',
          description: 'Monitoring',
        },
        geometry: {
          type: 'Point',
          coordinates: [11.227997839450836, 54.50252689212371],
        },
      },
      {
        type: 'Feature',
        properties: {
          id: 'marine',
          label: 'Marine',
          description: 'Compensation',
        },
        geometry: {
          type: 'Point',
          coordinates: [11.288690865039825, 54.57677248526063],
        },
      },
    ],
  },
  layers: [
    {
      id: 'point',
      type: 'circle',
      paint: {
        'circle-radius': 15,
        'circle-opacity': 1,
        'circle-color': '#0082FF',
        'circle-stroke-width': 1,
        'circle-stroke-color': '#0082FF',
      },
      metadata: {
        isHovering: ['get', 'isHovering'],
        isActive: ['get', 'isActive'],
      },
      filter: ['==', '$type', 'Point'],
    },
    {
      id: 'labels',
      type: 'symbol',
      layout: {
        'text-field': ['get', 'label'],
        'text-anchor': 'left',
        'text-size': 16,
        'text-offset': [1.5, -0.6],
        'text-justify': 'left',
        'symbol-placement': 'point',
        'text-ignore-placement': true,
      },
      paint: {
        'text-color': '#000000',
      },
      filter: ['all', ['==', '$type', 'Point']],
    },
    {
      id: 'descriptions',
      type: 'symbol',
      layout: {
        'text-field': ['get', 'description'],
        'text-anchor': 'left',
        'text-size': 12,
        'text-offset': [2, 0.6],
        'text-justify': 'left',
        'symbol-placement': 'point',
        'text-ignore-placement': true,
      },
      paint: {
        'text-color': '#0082FF',
      },
      filter: ['all', ['==', '$type', 'Point']],
    },
  ],
};

export const MapSource = (props: Interface): Interface => null;

MapSource.defaultProps = data;
