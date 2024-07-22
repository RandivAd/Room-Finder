const rooms = [
    { id: 1, building: 'Irving K. Barber', capacity: 4, whiteboard: true, tv: false, outlets: true },
    { id: 2, building: 'Koerner', capacity: 8, whiteboard: true, tv: true, outlets: true },
    { id: 3, building: 'Woodward', capacity: 2, whiteboard: false, tv: false, outlets: true }
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
