let leadForm = document.getElementById("leadForm");
let name = document.getElementById("name");
let phone = document.getElementById("phone");
let course = document.getElementById("course");
let submitBtn = document.getElementById("submitBtn");
let message = document.getElementById("message");
let status = document.getElementById("status");
let leadCount = document.getElementById("leadCount");
let leadsList = document.getElementById("leadsList");
let searchInput = document.getElementById("searchInput");
let leadsListSearch = document.getElementById("leadsListSearch");
leadForm.addEventListener("submit", getData);

let leads = [];
function getData(event) {
  event.preventDefault();
  let lead = {
    name: name.value,
    phone: phone.value,
    course: course.value,
    status: status.value,
  };
  leads.push(lead);
  console.log(leads);
  message.textContent = ` Lead added successfully. Total leads: ${leads.length}`;
  displayLeads();
  leadForm.reset();
}
function displayLeads() {
  leadCount.textContent = `${leads.length}`;
  leadsList.innerHTML = "";
  leads.forEach((item) => {
    leadsList.innerHTML += `
            <div class="lead-card">
                <p><strong>Name:</strong> ${item.name}</p>
                <p><strong>Phone:</strong> ${item.phone}</p>
                <p><strong>Course:</strong> ${item.course}</p>
                <p><strong>Status:</strong> <span class="status-badge">${item.status}</span></p>
            </div>
        `;
  });
}
searchInput.addEventListener("input", SearchData);

function SearchData() {
    let query=searchInput.value.toLowerCase().trim();
  let data = leads.filter((item) => {
    return item.name.toLowerCase().includes(query);
  });
  leadsList.innerHTML = "";
  data.forEach((item) => {
    leadsList.innerHTML += `
            <div class="lead-card">
                <p><strong>Name:</strong> ${item.name}</p>
                <p><strong>Phone:</strong> ${item.phone}</p>
                <p><strong>Course:</strong> ${item.course}</p>
                <p><strong>Status:</strong> <span class="status-badge">${item.status}</span></p>
            </div>
        `;
  });
}
