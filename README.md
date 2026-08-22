SmartLead AI

Project

SmartLead AI — Lead Capture & Automation System

A JavaScript-focused lead management project. The goal is to build one continuous, portfolio-ready application where every new topic is added to the same project.

Today's Progress

Completed Features

Basic SmartLead AI project setup

Lead form

Name input

Phone input

Course input

Status selection

Form submit handling

preventDefault()

Lead object creation

Leads array

.push() to add new leads

.length to count total leads

Dynamic success message

Form reset

Lead count update

Lead cards rendered on screen

forEach() for displaying leads

Search input setup

Case-insensitive search logic

.filter()

.toLowerCase()

.trim()

.includes()

Current Project Flow

Lead Form
   ↓
Submit Event
   ↓
preventDefault()
   ↓
Lead Object Created
   ↓
leads.push(lead)
   ↓
leads Array
   ↓
displayLeads()
   ↓
Lead Cards on Screen

Current JavaScript Concepts Used

DOM Selection

document.getElementById()

Event Listener

leadForm.addEventListener("submit", getData);

Lead Object

let lead = {
  name: name.value,
  phone: phone.value,
  course: course.value,
  status: status.value
};

Leads Array

let leads = [];

New leads:

leads.push(lead);

Total leads:

leads.length;

Display Leads

leadsList.innerHTML = "";

leads.forEach((item) => {
  // Render lead card
});

Search Feature

The search logic uses:

.toLowerCase()
.trim()
.filter()
.includes()

Current logic:

let query = searchInput.value.toLowerCase().trim();

let data = leads.filter((item) => {
  return item.name.toLowerCase().includes(query);
});

Flow:

User Types Name
      ↓
input Event
      ↓
Search Query
      ↓
Filter Matching Leads
      ↓
Display Matching Results

Current Functions

getData()

Responsible for:

Handling form submission

Preventing page refresh

Creating the lead object

Adding the lead to the leads array

Showing the success message

Calling the display function

Resetting the form

displayLeads()

Responsible for:

Updating lead count

Clearing previous UI

Looping through leads

Rendering lead cards

Search Function

Responsible for:

Reading search input

Filtering leads

Displaying matching results

Parameter Concept Learned

We started learning how to make displayLeads() reusable with a parameter:

function displayLeads(data) {
  // display data
}

Normal leads:

displayLeads(leads);

Search results:

displayLeads(filteredData);

This allows the same function to display different arrays.

Next Task

Refactor the project so displayLeads() accepts an array parameter.

Target:

Normal Leads
   ↓
displayLeads(leads)

Search Results
   ↓
displayLeads(filteredData)

Also add:

No leads found

when no matching lead exists.

Learning Workflow

Direct Task
   ↓
Student Attempts Solution
   ↓
If Stuck → Hint
   ↓
If Still Stuck → Solution

The main focus is JavaScript. HTML and CSS are used only when necessary for the project UI.

Project Rule

SmartLead AI is one continuous project.

New Concept
   ↓
New Feature
   ↓
Integrate with Existing Code
   ↓
Test
   ↓
Continue Project

No disconnected exercises.

Future Roadmap

Reusable displayLeads(data)

No-results state

Search improvement

Status filtering

Lead status update

Delete lead

Edit lead

LocalStorage

JSON

Data persistence

Dashboard statistics

API integration

Fetch

Async/Await

Error handling

Webhooks

n8n automation

Google Sheets integration

Email automation

WhatsApp automation

Tech Stack

HTML

CSS

JavaScript

LocalStorage (future)

APIs (future)

Webhooks (future)

n8n (future)

Project: SmartLead AI
Focus: JavaScript + AI Automation
Status: In Progress 🚀
