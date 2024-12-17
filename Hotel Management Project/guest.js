function requestAccess(feature) {
    const password = prompt('Please enter your password:');
    const correctPassword = 'hotel123';

    if (password === correctPassword) {
        document.getElementById('feedbackForm').style.display = 'none';
        document.getElementById('billForm').style.display = 'none';
        document.getElementById('serviceForm').style.display = 'none';

        if (feature === 'feedback') {
            document.getElementById('feedbackForm').style.display = 'block';
        } else if (feature === 'bill') {
            document.getElementById('billForm').style.display = 'block';
        } else if (feature === 'service') {
            document.getElementById('serviceForm').style.display = 'block';
        }
    } else {
        alert('Incorrect password. Access denied.');
    }
}


function payment() {
    alert("Payments are handled manually.");
}

function cancel() {
    alert("Your booking has been cancelled.");
    document.getElementById('bookingSuccess').style.display = 'none';
}

function submitBooking() {
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const roomType = document.getElementById('roomType').value;
    const guests = document.getElementById('guests').value;

    if (checkin && checkout && roomType && guests) {
        document.getElementById('bookingSuccess').style.display = 'block';
    }
}

function displayAlert(event, message) {
    event.preventDefault();
    alert(message);
}
