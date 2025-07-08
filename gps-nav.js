document.getElementById("startForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const start = document.getElementById("start").value;
  console.log("Start route from:", start);
  // Placeholder: Add Firebase fetch & Google Maps route logic here
});
document.getElementById("exportPdf").addEventListener("click", function() {
  window.print(); // Simple PDF/Print method for now
});
