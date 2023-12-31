// alert("Vaazgha Vayagam, Vaazgha Valamudan");

// Replace 'YOUR_PUBLISHED_SHEET_LINK' with the link you copied
const sheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQCyNsRhvPH_vzBcIpWjehnLM46qZEBHupoXQH9t-bsKaSFcXPkty4aNqA1t-F0F0PYyKgLkHJg1_RI/pub?gid=283396415&single=true&output=csv';

// Fetch data from the published Google Sheet
function fetchData() {
  $.get(sheetURL, function (data) {
    Papa.parse(data, {
      header: true, // Assuming the first row contains headers
      dynamicTyping: true,
      complete: function (results) {
        // Process the parsed data as needed
        const csvData = results.data

        console.log('Data from Google Sheet:', csvData);
        console.log('Data Type:', typeof csvData);
        createChart(parsedData);
      }
    });
  })
  .fail(function (error) {
    console.error('Error fetching data:', error);
  });
}

function createChart(data) {
  // Your chart creation logic using Chart.js
  // Example: A bar chart showing the count of "2" for each activity

  const activities = ["Kayakalpam", "Eye", "Leg", "Breathing", "Meditation"];
  const dataCounts = activities.map(activity => data.filter(entry => entry[activity] === 2).length);

  const ctx = $('#activityChart')[0].getContext('2d');
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: activities,
      datasets: [{
        label: 'Count of "2"',
        data: dataCounts,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}


$(document).ready(function () {
  fetchData();
  // Select all anchor links in the navbar
  const navLinks = $('nav a');

  // Add click event listener to each link
  navLinks.on('click', function (event) {
      event.preventDefault();

      // Get the target section ID from the href attribute
      const targetSectionId = $(this).attr('href').substring(1);

      // Scroll to the target section
      $('#' + targetSectionId).get(0).scrollIntoView({
          behavior: 'smooth'
      });
  });

  $('#refreshButton').on('click', function () {
    // Reload the entire page
    location.reload(true);
    fetchData();
  });

});
