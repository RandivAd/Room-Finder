// Initialize the map
const map = L.map('map').setView([49.2606, -123.2460], 15); // UBC coordinates

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Define rooms and their coordinates
const buildings = [
    { building: 'Irving K. Barber', coordinates: [49.267583221844326, -123.25265292744709]},
    { building: 'Koerner', coordinates: [49.266896897558034, -123.2551561036548]},
    { building: 'Woodward', coordinates: [49.26466620349277, -123.24719473044618]},
    { building: 'Arts Student Centre', coordinates: [49.269435281039385, -123.25306144578848]},
    { building: 'Engineering Student Centre', coordinates: [49.26231460694829, -123.24930974763845]},
    

    // Add more rooms with appropriate coordinates
];

// Add markers for each room
buildings.forEach(building => {
    L.marker(building.coordinates).addTo(map)
        .bindPopup(`<b>${building.building}</b><br><a href="index.html?building=${encodeURIComponent(building.building)}">See Rooms</a>`);
});
