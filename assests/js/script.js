$(document).ready(function() {
    // Function to check screen width and close offcanvas if it's open
    function closeOffcanvas() {
      if ($(window).width() > 991) {
        $('#offcanvasExample').offcanvas('hide');
      }
    }
  
    // Call closeOffcanvas function on page load
    closeOffcanvas();
  
    // Call closeOffcanvas function on window resize
    $(window).resize(function() {
      closeOffcanvas();
    });
  });
  