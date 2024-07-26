const API_URL = 'http://localhost:5000/patients';

document.addEventListener('DOMContentLoaded', () => {
    fetchPatients();
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implement login functionality
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    const isValid = validateForm(username, password);
    if (!isValid) return;

    const userData = {
        username,
        password
    };

    registerUser(userData);
    document.getElementById('registerForm').reset();
});

function validateForm(username, password) {
    let isValid = true;

    if (username === '') {
        showError('registerError', 'Username is required');
        isValid = false;
    } else {
        hideError('registerError');
    }

    if (password === '') {
        showError('registerError', 'Password is required');
        isValid = false;
    } else {
        hideError('registerError');
    }

    return isValid;
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = '';
    errorElement.style.display = 'none';
}

function searchContent() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    if (searchInput) {
        fetchPatients(); // Assuming patients list includes diet information
        // Implement search logic based on diet or any other criteria
    }
}

function addPatientToList(patient) {
    const patientList = document.getElementById('patientList');
    const li = document.createElement('li');
    li.textContent = `Name: ${patient.patientName}, Medication: ${patient.medication}, Diet: ${patient.diet}, Initial Pills: ${patient.initialPills}, Pills Per Day: ${patient.pillsPerDay}`;
    patientList.appendChild(li);
}

function registerUser(userData) {
    // Implement registration logic
}

