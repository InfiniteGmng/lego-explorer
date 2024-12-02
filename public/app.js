const API_URL = "/api/legoSets";

// Fetch and display all Lego sets
async function fetchLegoSets() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    alert("Failed to fetch Lego sets.");
    return;
  }
  const legoSets = await response.json();
  displayLegoSets(legoSets);
}

// Add or update a Lego set
async function addOrUpdateLegoSet(event) {
  event.preventDefault();

  const setNumber = document.getElementById("setNumber").value; // Hidden input for editing
  const legoSet = {
    name: document.getElementById("name").value,
    theme: document.getElementById("theme").value,
    pieces: parseInt(document.getElementById("pieces").value),
    price: parseFloat(document.getElementById("price").value),
    releaseYear: parseInt(document.getElementById("releaseYear").value),
    availability: document.getElementById("availability").value === "true",
  };

  const method = setNumber ? "PUT" : "POST"; // Determine if it's an update or a new record
  const url = setNumber ? `${API_URL}/${setNumber}` : API_URL;

  const response = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(legoSet),
  });

  if (response.ok) {
    fetchLegoSets();
    document.getElementById("add-update-form").reset();
    document.getElementById("setNumber").value = ""; // Clear hidden field for editing
  } else {
    alert("Failed to add or update Lego set.");
  }
}

// Delete a Lego set
async function deleteLegoSet(setNumber) {
  // Confirm before deletion
  if (!confirm("Are you sure you want to delete this Lego set?")) return;

  try {
    // Make the DELETE request to the correct API endpoint
    const response = await fetch(`${API_URL}/${setNumber}`, {
      method: "DELETE",
    });

    if (response.ok) {
      // After successful deletion, fetch all Lego sets again
      fetchLegoSets();
    } else {
      alert("Failed to delete Lego set.");
    }
  } catch (error) {
    console.error("Error deleting Lego set:", error);
    alert("An error occurred while trying to delete the Lego set.");
  }
}

// Display Lego sets in the table
function displayLegoSets(legoSets) {
  const tableBody = document.getElementById("legoTableBody");
  tableBody.innerHTML = "";

  legoSets.forEach((set) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${set.name}</td>
      <td>${set.theme}</td>
      <td>${set.pieces}</td>
      <td>${set.price}</td>
      <td>${set.releaseYear}</td>
      <td>${set.availability ? "Yes" : "No"}</td>
      <td>
        <button onclick="editLegoSet('${set.setNumber}')">Edit</button>
        <button onclick="deleteLegoSet('${set.setNumber}')">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Edit a Lego set
function editLegoSet(setNumber) {
  fetch(`${API_URL}/${setNumber}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch Lego set.");
      }
      return response.json();
    })
    .then((set) => {
      // Populate the form fields with the record's data
      document.getElementById("name").value = set.name;
      document.getElementById("theme").value = set.theme;
      document.getElementById("pieces").value = set.pieces;
      document.getElementById("price").value = set.price;
      document.getElementById("releaseYear").value = set.releaseYear;
      document.getElementById("availability").value = set.availability;
      document.getElementById("setNumber").value = set.setNumber; // Set hidden input for editing
    })
    .catch((error) => alert(error.message));
}

// Attach event listeners
document
  .getElementById("add-update-form")
  .addEventListener("submit", addOrUpdateLegoSet);
window.onload = fetchLegoSets;
