
class Markers {

    constructor() {
        this.actives = {};
    }

    addMarker( marker ) {
        this.actives[ marker.id ] = marker;
    }

    removeMarker( idMarker ) {
        delete this.actives[ idMarker ];
    }

    updateMarker( marker ) {
        this.actives[ marker.id ] = marker;
    }

}


module.exports = Markers;
