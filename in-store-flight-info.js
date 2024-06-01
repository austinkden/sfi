document.addEventListener('DOMContentLoaded', () => {
    // Set the date input to today's date in the local timezone
    const today = new Date();
    const localDate = today.toLocaleDateString('en-CA'); // Format as YYYY-MM-DD
    document.getElementById('date').value = localDate;
});

function storeInfo() {
    const flightNumber = document.getElementById('fln').value.toUpperCase().padStart(7, '△');
    const registration = document.getElementById('reg').value.toUpperCase().padStart(6, '△');
    const aircraftType = document.getElementById('type').value.toUpperCase().padStart(4, '△');
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

    const info = `${flightNumber}/${registration}/${aircraftType}/${formattedDate}/${status}`;

    document.getElementById('result').innerText = info.toUpperCase();
}
