import { MapSource, MapInteractions, MapPosition } from './types';

interface Props {
  setMapInteractions?: (mapInteractions: MapInteractions) => void;
  setMapPosition?: (mapInteractions: MapPosition) => void;
  setMapSource?: (mapInteractions: MapSource) => void;
}

export const Actions = (props: Props): Props => null;
