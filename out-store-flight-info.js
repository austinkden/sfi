function decodeInfo() {
    const encodedString = document.getElementById('encodedString').value.trim();
    const parts = encodedString.split('/');

    if (parts.length !== 5) {
        alert("Invalid encoded string format.");
        return;
    }

    const flightNumber = parts[0].replace(/△/g, '');
    const registration = parts[1].replace(/△/g, '');
    const type = parts[2].replace(/△/g, '');
    const date = parts[3];
    const status = parts[4] === 'P' ? 'PHOTOGRAPHED' : 'SPOTTED';

    // Format date to MM/DD/YYYY
    const formattedDate = `${date.slice(0, 2)}/${date.slice(2, 4)}/${date.slice(4)}`;

    document.getElementById('decodedFlightNumber').innerText = flightNumber;
    document.getElementById('decodedRegistration').innerText = registration;
    document.getElementById('decodedType').innerText = type;
    document.getElementById('decodedDate').innerText = formattedDate;
    document.getElementById('decodedStatus').innerText = status;
}
