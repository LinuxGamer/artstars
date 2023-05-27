// Sample resource data
const resources = [
  {
    name: "Art Supply Store 1",
    location: "City A",
    type: "Art Supply Store",
    description: "A store that offers a wide range of art supplies.",
    website: "https://www.example.com/artstore1"
  },
  {
    name: "Workshop 1",
    location: "City B",
    type: "Workshop",
    description: "A workshop on abstract painting techniques.",
    website: "https://www.example.com/workshop1"
  },
  // Add more resource objects as needed
];

// Function to generate HTML for each resource
function generateResourceHTML(resource) {
  return `
    <div class="resource">
      <h2>${resource.name}</h2>
      <p><strong>Location:</strong> ${resource.location}</p>
      <p><strong>Type:</strong> ${resource.type}</p>
      <p>${resource.description}</p>
      <a href="${resource.website}" target="_blank">Visit Website</a>
    </div>
  `;
}

// Function to display resources
function displayResources() {
  const resourceList = document.getElementById('resourceList');
  resourceList.innerHTML = '';

  // Filter resources based on search input
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const filteredResources = resources.filter(resource =>
    resource.name.toLowerCase().includes(searchInput) ||
    resource.location.toLowerCase().includes(searchInput) ||
    resource.type.toLowerCase().includes(searchInput)
  );

  // Generate HTML for each filtered resource
  filteredResources.forEach(resource => {
    const resourceHTML = generateResourceHTML(resource);
    resourceList.insertAdjacentHTML('beforeend', resourceHTML);
  });
}

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', displayResources);

// Display initial list of resources on page load
displayResources();
