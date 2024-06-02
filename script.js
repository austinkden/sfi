document.addEventListener('DOMContentLoaded', () => {
    // Set the date input to today's date in the local timezone
    const today = new Date();
    const localDate = today.toLocaleDateString('en-CA'); // Format as YYYY-MM-DD
    document.getElementById('date').value = localDate;
});

function storeInfo() {
    let flightNumber = document.getElementById('fln').value.toUpperCase();
    const registration = document.getElementById('reg').value.toUpperCase();
    const aircraftType = document.getElementById('type').value.toUpperCase();
    const date = document.getElementById('date').value;
    const status = document.getElementById('status').value;

    if (!date || !status) {
        alert("Please fill out all fields.");
        return;
    }

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    }).replace(/\//g, '');

    // Handle special cases for flight number abbreviation
    const prefixes = {
        'UAL': 'U',
        'SWA': 'S',
        'AAL': 'A',
        'DAL': 'D',
        'FFT': 'F',
        'SKW': 'K'
    };

    for (const prefix in prefixes) {
        if (flightNumber.startsWith(prefix)) {
            flightNumber = prefixes[prefix] + flightNumber.slice(3);
            break;
        }
    }

    const info = `${flightNumber}/${registration}/${aircraftType}/${formattedDate}/${status}`;

    document.getElementById('result').innerText = info;
}

function decodeInfo() {
    const encodedString = document.getElementById('encodedString').value.trim();
    const parts = encodedString.split('/');

    if (parts.length !== 5) {
        alert("Invalid encoded string format.");
        return;
    }

    let flightNumber = parts[0];
    const registration = parts[1];
    const type = parts[2];
    const date = parts[3];
    const status = parts[4] === 'P' ? 'PHOTOGRAPHED' : 'SPOTTED';

    // Handle special cases for flight number abbreviation
    const prefixes = {
        'U': 'UAL',
        'S': 'SWA',
        'A': 'AAL',
        'D': 'DAL',
        'F': 'FFT',
        'K': 'SKW'
    };

    const firstChar = flightNumber.charAt(0);
    if (prefixes[firstChar]) {
        flightNumber = prefixes[firstChar] + flightNumber.slice(1);
    }

    // Format date to MM/DD/YYYY
    const formattedDate = `${date.slice(0, 2)}/${date.slice(2, 4)}/${date.slice(4)}`;

    document.getElementById('decodedFlightNumber').innerText = flightNumber;
    document.getElementById('decodedRegistration').innerText = registration;
    document.getElementById('decodedType').innerText = type;
    document.getElementById('decodedDate').innerText = formattedDate;
    document.getElementById('decodedStatus').innerText = status;
}
