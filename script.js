alert("Vaazgha Vayagam, Vaazgha Valamudan");

// Replace 'YOUR_PUBLISHED_SHEET_LINK' with the link you copied
const sheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQCyNsRhvPH_vzBcIpWjehnLM46qZEBHupoXQH9t-bsKaSFcXPkty4aNqA1t-F0F0PYyKgLkHJg1_RI/pub?gid=283396415&single=true&output=csv';

// Fetch data from the published Google Sheet
function fetchData() {
  $.get(sheetURL, function (data) {
    // Process the data as needed
    console.log('Data from Google Sheet:', data);
  })
  .fail(function (error) {
    console.error('Error fetching data:', error);
  });
}

// Call the function to fetch data
fetchData();

$(document).ready(function () {
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
  });

});
