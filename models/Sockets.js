const Markers = require('./Markers');


class Sockets {

    constructor( io ) {
        this.io = io;

        this.markers = new Markers();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            console.log('Client Connected');

            // active-markers
            socket.emit( 'active-markers', this.markers.actives );

            // new-marker
            socket.on( 'new-marker', marker => { // { id, lng, lat }
                this.markers.addMarker(marker);
                socket.broadcast.emit( 'new-marker', marker );
            });

            // update-marker
            socket.on( 'update-marker', marker => {
                this.markers.updateMarker(marker);
                socket.broadcast.emit( 'update-marker', marker );
            });
        });
    }

}


module.exports = Sockets;