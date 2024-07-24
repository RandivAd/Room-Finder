const rooms = [
    { id: 192, building: 'Irving K. Barber', capacity: 8, whiteboard: true, tv: false, outlets: true },
    { id: 193, building: 'Irving K. Barber', capacity: 8, whiteboard: true, tv: false, outlets: true },
    { id: 194, building: 'Irving K. Barber', capacity: 8, whiteboard: true, tv: false, outlets: true },
    { id: 263, building: 'Irving K. Barber', capacity: 8, whiteboard: true, tv: false, outlets: true },
    { id: 264, building: 'Irving K. Barber', capacity: 12, whiteboard: true, tv: false, outlets: true },
    { id: 265, building: 'Irving K. Barber', capacity: 10, whiteboard: true, tv: false, outlets: true },
    { id: 266, building: 'Irving K. Barber', capacity: 8, whiteboard: true, tv: false, outlets: true },
    { id: 315, building: 'Irving K. Barber', capacity: 8, whiteboard: true, tv: false, outlets: true },
    { id: 316, building: 'Irving K. Barber', capacity: 8, whiteboard: true, tv: false, outlets: true },
    { id: 317, building: 'Irving K. Barber', capacity: 8, whiteboard: true, tv: false, outlets: true },
    { id: 325, building: 'Irving K. Barber', capacity: 5, whiteboard: false, tv: true, outlets: true },
    { id: 415, building: 'Irving K. Barber', capacity: 8, whiteboard: true, tv: false, outlets: true },
    { id: 416, building: 'Irving K. Barber', capacity: 8, whiteboard: true, tv: false, outlets: true },
    { id: 151, building: 'Koerner', capacity: 10, whiteboard: true, tv: false, outlets: true },
    { id: 167, building: 'Koerner', capacity: 10, whiteboard: true, tv: false, outlets: true },
    { id: 168, building: 'Koerner', capacity: 10, whiteboard: true, tv: false, outlets: true },
    { id: 169, building: 'Koerner', capacity: 10, whiteboard: true, tv: false, outlets: true },
    { id: 20, building: 'Woodward', capacity: 6, whiteboard: false, tv: false, outlets: true },
    { id: 215, building: 'Woodward', capacity: 6, whiteboard: false, tv: false, outlets: true },
    { id: 216, building: 'Woodward', capacity: 6, whiteboard: false, tv: false, outlets: true },
];

function filterRooms() {
    const building = document.getElementById('building').value;
    const capacity = document.getElementById('capacity').value;
    const whiteboard = document.getElementById('whiteboard').checked;
    const tv = document.getElementById('tv').checked;
    const outlets = document.getElementById('outlets').checked;

    const filteredRooms = rooms.filter(room => {
        return (!building || room.building === building) &&
               (!capacity || room.capacity >= capacity) &&
               (!whiteboard || room.whiteboard) &&
               (!tv || room.tv) &&
               (!outlets || room.outlets);
    });

    displayRooms(filteredRooms);
}

function displayRooms(rooms) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (rooms.length === 0) {
        resultsContainer.innerHTML = '<p>No rooms found</p>';
        return;
    }

    rooms.forEach(room => {
        const roomElement = document.createElement('div');
        roomElement.classList.add('room');
        roomElement.innerHTML = `
            <h2>Room ${room.id} - ${room.building}</h2>
            <p>Capacity: ${room.capacity}</p>
            <p>Whiteboard: ${room.whiteboard ? 'Yes' : 'No'}</p>
            <p>TV: ${room.tv ? 'Yes' : 'No'}</p>
            <p>Outlets: ${room.outlets ? 'Yes' : 'No'}</p>
        `;
        resultsContainer.appendChild(roomElement);
    });
}
