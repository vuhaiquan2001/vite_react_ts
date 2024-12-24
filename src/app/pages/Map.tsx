import { LatLngTuple, LeafletMouseEvent, LeafletEvent } from 'leaflet';
import React, { useState } from 'react';
import { Marker, TileLayer, MapContainer, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Component để xử lý sự kiện click trên bản đồ
function AddMarkerOnClick({ onAddMarker }: { onAddMarker: (e: LeafletMouseEvent) => void }) {
    useMapEvents({
        click: onAddMarker,
    });
    return null;
}

const Map: React.FC = () => {
    const defaultPosition: LatLngTuple = [21.0285, 105.8542];
    const [markers, setMarkers] = useState<Array<{ position: LatLngTuple; id: number }>>([{ position: defaultPosition, id: 1 }]);

    // Thêm marker mới khi click
    const handleAddMarker = (e: LeafletMouseEvent) => {
        const newMarker = {
            position: [e.latlng.lat, e.latlng.lng] as LatLngTuple,
            id: Date.now(), // Tạo id duy nhất
        };
        setMarkers([...markers, newMarker]);
    };

    // Cập nhật vị trí marker khi kéo thả
    const handleMarkerDrag = (id: number, e: LeafletEvent) => {
        const { lat, lng } = e.target.getLatLng();
        setMarkers(markers.map((marker) => (marker.id === id ? { ...marker, position: [lat, lng] as LatLngTuple } : marker)));
    };

    return (
        <div
            className="map-container"
            style={{
                width: '100%',
                height: '50vh',
                position: 'relative',
            }}
        >
            <MapContainer
                center={defaultPosition}
                zoom={13}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                }}
            >
                <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />

                {/* Component để bắt sự kiện click */}
                <AddMarkerOnClick onAddMarker={handleAddMarker} />

                {/* Hiển thị tất cả markers */}
                {markers.map((marker) => (
                    <Marker
                        key={marker.id}
                        position={marker.position}
                        draggable={true}
                        eventHandlers={{
                            dragend: (e) => handleMarkerDrag(marker.id, e),
                        }}
                    >
                        <Popup>
                            Vị trí: {marker.position[0].toFixed(4)}, {marker.position[1].toFixed(4)}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;
