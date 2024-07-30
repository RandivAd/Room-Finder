const rooms = [
    { id: '192', building: 'Irving K. Barber', capacity: 8, whiteboard: true, tv: false, outlets: true, url: "https://libcal.library.ubc.ca/space/18998"},
    { id: '193', building: 'Irving K. Barber', capacity: 8, whiteboard: true, tv: false, outlets: true, url: "https://libcal.library.ubc.ca/space/18999"},
    { id: '194', building: 'Irving K. Barber', capacity: 8, whiteboard: true, tv: false, outlets: true, url: "https://libcal.library.ubc.ca/space/19000"},
    { id: '263', building: 'Irving K. Barber', capacity: 8, whiteboard: true, tv: false, outlets: true, url: "https://libcal.library.ubc.ca/space/12032"},
    { id: '264', building: 'Irving K. Barber', capacity: 12, whiteboard: true, tv: false, outlets: true, url: "https://libcal.library.ubc.ca/space/12033"},
    { id: '265', building: 'Irving K. Barber', capacity: 10, whiteboard: true, tv: false, outlets: true, url: "https://libcal.library.ubc.ca/space/12034"},
    { id: '266', building: 'Irving K. Barber', capacity: 8, whiteboard: true, tv: false, outlets: true, url: "https://libcal.library.ubc.ca/space/12035"},
    { id: '315', building: 'Irving K. Barber', capacity: 8, whiteboard: true, tv: false, outlets: true, url: "https://libcal.library.ubc.ca/space/12041"},
    { id: '316', building: 'Irving K. Barber', capacity: 8, whiteboard: true, tv: false, outlets: true, url: "https://libcal.library.ubc.ca/space/12042"},
    { id: '317', building: 'Irving K. Barber', capacity: 8, whiteboard: true, tv: false, outlets: true, url: "https://libcal.library.ubc.ca/space/12043"},
    // not including room 323/324 - can't really be used as a study space
    { id: '325', building: 'Irving K. Barber', capacity: 5, whiteboard: false, tv: true, outlets: true, url: "https://libcal.library.ubc.ca/space/12039"},
    { id: '415', building: 'Irving K. Barber', capacity: 8, whiteboard: true, tv: false, outlets: true, url: "https://libcal.library.ubc.ca/space/12044"},
    { id: '416', building: 'Irving K. Barber', capacity: 8, whiteboard: true, tv: false, outlets: true, url: "https://libcal.library.ubc.ca/space/12045"},
    { id: '151', building: 'Koerner', capacity: 10, whiteboard: true, tv: false, outlets: true, url: "https://libcal.library.ubc.ca/space/20610"},
    { id: '167', building: 'Koerner', capacity: 10, whiteboard: true, tv: false, outlets: true, url: "https://libcal.library.ubc.ca/space/12019"},
    { id: '168', building: 'Koerner', capacity: 10, whiteboard: true, tv: false, outlets: true, url: "https://libcal.library.ubc.ca/space/20611"},
    { id: '169', building: 'Koerner', capacity: 10, whiteboard: true, tv: false, outlets: true, url: "https://libcal.library.ubc.ca/space/12046"},
    { id: '20B', building: 'Woodward', capacity: 6, whiteboard: false, tv: false, outlets: true, url: "https://libcal.library.ubc.ca/space/12048"},
    { id: '20C', building: 'Woodward', capacity: 6, whiteboard: false, tv: false, outlets: true, url: "https://libcal.library.ubc.ca/space/12050"},
    { id: '20D', building: 'Woodward', capacity: 6, whiteboard: false, tv: true, outlets: true, url: "https://libcal.library.ubc.ca/space/12049"},
    { id: '215', building: 'Woodward', capacity: 6, whiteboard: false, tv: false, outlets: true, url: "https://libcal.library.ubc.ca/space/12054"},
    { id: '217', building: 'Woodward', capacity: 6, whiteboard: false, tv: false, outlets: true, url: "https://libcal.library.ubc.ca/space/12055"}
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
        roomElement.onclick = () => showRoomDetails(room);
        resultsContainer.appendChild(roomElement);
    });
}

function showRoomDetails(room) {
    const modal = document.getElementById('roomModal');
    const modalDetails = document.getElementById('modal-details');
    modalDetails.innerHTML = `
        <h2>Room ${room.id} - ${room.building}</h2>
        <p>Capacity: ${room.capacity}</p>
        <p>Whiteboard: ${room.whiteboard ? 'Yes' : 'No'}</p>
        <p>TV: ${room.tv ? 'Yes' : 'No'}</p>
        <p>Outlets: ${room.outlets ? 'Yes' : 'No'}</p>
        <p>${room.details}</p>
        <p><a href="${room.url}" target="_blank">Room Website</a></p>
    `;
    modal.style.display = 'block';
}

// Modal close functionality
const modal = document.getElementById('roomModal');
const span = document.getElementsByClassName('close')[0];

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
