let states = [];
let lgas = {};

// Fetch states and LGAs from their respective JSON files
function loadData() {
// Fetch states data
fetch('states.json')
.then(response => response.json())
.then(data => {
states = data;
populateStates();
})
.catch(error => {
console.error('Error loading states:', error);
});

// Fetch LGAs data
fetch('all_lgas.json')
.then(response => response.json())
.then(data => {
lgas = data;
})
.catch(error => {
console.error('Error loading LGAs:', error);
});
}

// Populate state dropdown
function populateStates() {
const stateSelect = document.getElementById("state");

// Clear existing options
stateSelect.innerHTML = '<option value="">- Select State -</option>';

// Add each state to the dropdown
states.forEach(state => {
let option = document.createElement("option");
option.value = state;
option.textContent = state;
stateSelect.appendChild(option);
});
}

// Populate LGA dropdown based on selected state
function populateLGA() {
const state = document.getElementById("state").value;
const lgaSelect = document.getElementById("lga");

// Clear existing LGA options
lgaSelect.innerHTML = '<option value="">- Select LGA -</option>';

if (state && lgas[state]) {
const stateLgas = lgas[state];
stateLgas.forEach(lga => {
let option = document.createElement("option");
option.value = lga;
option.textContent = lga;
lgaSelect.appendChild(option);
});
}
}

// Initialize the state dropdown when the page loads
window.onload = loadData;
