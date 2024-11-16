const API_URL = "/api/legoSets";

// Fetch and display all Lego sets
async function fetchLegoSets() {
  const response = await fetch(API_URL);
  const legoSets = await response.json();
  displayLegoSets(legoSets);
}

// Add or update a Lego set
async function addOrUpdateLegoSet(event) {
  event.preventDefault();

  const legoSet = {
    name: document.getElementById("name").value,
    theme: document.getElementById("theme").value,
    pieces: parseInt(document.getElementById("pieces").value),
    price: parseFloat(document.getElementById("price").value),
    releaseYear: parseInt(document.getElementById("releaseYear").value),
    availability: document.getElementById("availability").value === "true",
  };

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(legoSet),
  });

  if (response.ok) {
    fetchLegoSets();
    document.getElementById("add-update-form").reset();
  } else {
    alert("Failed to add or update Lego set.");
  }
}

// Delete a Lego set
async function deleteLegoSet(setNumber) {
  const response = await fetch(`${API_URL}/${setNumber}`, { method: "DELETE" });
  if (response.ok) {
    fetchLegoSets();
  } else {
    alert("Failed to delete Lego set.");
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
        <button onclick="deleteLegoSet('${set.setNumber}')">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Attach event listeners
document
  .getElementById("add-update-form")
  .addEventListener("submit", addOrUpdateLegoSet);
window.onload = fetchLegoSets;
