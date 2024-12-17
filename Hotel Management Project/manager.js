// // View Bill Function
// function viewBill() {
//     const billDetails = document.getElementById('billDetails');
//     billDetails.innerHTML = "<p>Bill Details: Room 101 - ₹2000</p>";
//     billDetails.style.display = 'block';
// }

// // View Enquiry & Feedback Function
// function viewEnquiryFeedback() {
//     const enquiryFeedbackDetails = document.getElementById('enquiryFeedbackDetails');
//     enquiryFeedbackDetails.innerHTML = "<p>Guest Enquiries: 2 pending, Feedback: 5 reviews</p>";
//     enquiryFeedbackDetails.style.display = 'block';
// }

// // Contact Function
// function contact() {
//     alert("Contact us at 123-456-7890 or check out our website at www.luxuryhotel.com in the about section.");
// }

// // Update Room Availability and Tariff Function
// function updateRoom() {
//     const roomNumber = document.getElementById('roomNumber').value;
//     const availability = document.getElementById('availability').value;
//     const tariff = document.getElementById('tariff').value;
    
//     const updateStatus = document.getElementById('updateStatus');

//     if (roomNumber && availability && tariff) {
//         updateStatus.innerHTML = `<p>Room ${roomNumber} updated with availability: ${availability} and tariff: ₹{tariff}</p>`;
//     } else {
//         updateStatus.innerHTML = "<p>Please fill all fields to update room information.</p>";
//     }
//     updateStatus.style.display = 'block';
// }

// // Generate Monthly Report Function
// function generateReport() {
//     const reportDetails = document.getElementById('reportDetails');
//     reportDetails.innerHTML = "<p>Monthly Report Generated: Revenue ₹15,000, Occupancy Rate: 85%</p>";
//     reportDetails.style.display = 'block';
// }

// // Manage User Services Function
// function manageUserServices() {
//     const userServiceDetails = document.getElementById('userServiceDetails');
//     userServiceDetails.innerHTML = "<p>User Services Managed: 3 services updated</p>";
//     userServiceDetails.style.display = 'block';
// }

// // ScrollReveal Configuration for Dashboard Sections
// const scrollRevealOption = {
//     origin: "bottom",
//     distance: "50px",
//     duration: 1000,
//     easing: "ease-in-out",
//     reset: true,
// };

// ScrollReveal().reveal('.hero h1', { ...scrollRevealOption, delay: 200 });
// ScrollReveal().reveal('.hero p', { ...scrollRevealOption, delay: 400 });
// ScrollReveal().reveal('.dashboard h2', { ...scrollRevealOption, delay: 200 });
// ScrollReveal().reveal('.dashboard-items .dashboard-item', { ...scrollRevealOption, interval: 200 });

// View Bill Function
function viewBill() {
    const billDetails = document.getElementById('billDetails');
    billDetails.innerHTML = "<p>Bill Details: Room 101 - ₹2000</p>";
    billDetails.style.display = 'block';
}

// View Enquiry & Feedback Function
function viewEnquiryFeedback() {
    const enquiryFeedbackDetails = document.getElementById('enquiryFeedbackDetails');
    enquiryFeedbackDetails.innerHTML = "<p>Guest Enquiries: 2 pending, Feedback: 5 reviews</p>";
    enquiryFeedbackDetails.style.display = 'block';
}

// Contact Function
function contact() {
    alert("Contact us at 123-456-7890 or check out our website at www.luxuryhotel.com in the about section.");
}

// Update Room Availability and Tariff Function
function updateRoom() {
    const roomNumber = document.getElementById('roomNumber').value;
    const availability = document.getElementById('availability').value;
    const tariff = document.getElementById('tariff').value;

    const updateStatus = document.getElementById('updateStatus');

    if (roomNumber && availability && tariff) {
        updateStatus.innerHTML = `<p>Room ${roomNumber} updated with availability: ${availability} and tariff: ₹${tariff}</p>`;
    } else {
        updateStatus.innerHTML = "<p>Please fill all fields to update room information.</p>";
    }
    updateStatus.style.display = 'block';
}

// Generate Monthly Report Function
function generateReport() {
    const reportMonth = document.getElementById('reportMonth').value;
    const reportDetails = document.getElementById('reportDetails');

    if (reportMonth === "November") {
        reportDetails.innerHTML = "<p>Monthly Report Generated: Revenue ₹50,000, Occupancy Rate: 90%.</p>";
    } else if (reportMonth) {
        reportDetails.innerHTML = `<p>Monthly Report Generated: Revenue and occupancy rate for ${reportMonth}.</p>`;
    } else {
        reportDetails.innerHTML = "<p>Please select a month to generate the report.</p>";
    }
    reportDetails.style.display = 'block';
}

// Manage User Services Function
function manageUserServices() {
    const serviceType = document.getElementById('serviceType').value;
    const serviceUpdate = document.getElementById('serviceUpdate').value;
    const userServiceDetails = document.getElementById('userServiceDetails');

    if (!serviceType) {
        userServiceDetails.innerHTML = "<p>Please select a service to manage.</p>";
    } else if (serviceType === "Spa" && serviceUpdate) {
        userServiceDetails.innerHTML = "<p>Spa service updated successfully!</p>";
    } else if (serviceType === "Events" && serviceUpdate) {
        userServiceDetails.innerHTML = "<p>Event updated successfully!</p>";
    } else {
        userServiceDetails.innerHTML = "<p>Please enter details to update the selected service.</p>";
    }
    userServiceDetails.style.display = 'block';
}

// ScrollReveal Configuration for Dashboard Sections
const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
    easing: "ease-in-out",
    reset: true,
};

ScrollReveal().reveal('.hero h1', { ...scrollRevealOption, delay: 200 });
ScrollReveal().reveal('.hero p', { ...scrollRevealOption, delay: 400 });
ScrollReveal().reveal('.dashboard h2', { ...scrollRevealOption, delay: 200 });
ScrollReveal().reveal('.dashboard-items .dashboard-item', { ...scrollRevealOption, interval: 200 });
