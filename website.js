// Navigation logic
const sections = {
    'home-link': 'home-section',
    'about-link': 'about-section',
    'accommodation-link': 'accommodation-section',
    'gallery-link': 'gallery-section',
    'policy-link': 'policy-section'
  };
  
  Object.keys(sections).forEach(linkId => {
    document.getElementById(linkId).addEventListener('click', function(e) {
      e.preventDefault();
      // Hide all sections
      document.querySelectorAll('.page-section').forEach(sec => sec.style.display = 'none');
      // Show the selected section
      document.getElementById(sections[linkId]).style.display = 'block';
    });
  });
  
  // Book Now button
  document.getElementById('book-btn').addEventListener('click', function() {
    alert('Reservation submitted!');
  });
  
  
  // Wave feedback buttons
  document.querySelectorAll('.wave-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      alert('THANKYOU FOR YOUR FEEDBACK!');
    });
  });