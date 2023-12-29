alert("Vaazgha Vayagam, Vaazgha Valamudan");

// Replace 'YOUR_PUBLISHED_SHEET_LINK' with the link you copied
const sheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQCyNsRhvPH_vzBcIpWjehnLM46qZEBHupoXQH9t-bsKaSFcXPkty4aNqA1t-F0F0PYyKgLkHJg1_RI/pub?gid=283396415&single=true&output=csv';

// Fetch data from the published Google Sheet
async function fetchData() {
  try {
    const response = await fetch(sheetURL);
    const data = await response.text();

    // Process the data as needed
    console.log('Data from Google Sheet:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the function to fetch data
fetchData();
