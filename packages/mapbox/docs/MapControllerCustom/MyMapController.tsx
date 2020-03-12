import { MapController } from 'react-map-gl';

export default class MyMapController extends MapController {
    _onPanEnd(event: any) {
        this.updateViewport(this.getMapState(), { parentUpdate: true }, undefined);
    }
    _onPinchEnd(event: any) {
        this.updateViewport(this.getMapState(), { parentUpdate: true }, undefined);
    }

}
