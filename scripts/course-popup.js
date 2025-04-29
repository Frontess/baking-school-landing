function openPopup(courseId) {
  const popup = document.getElementById(`popup-${courseId}`);
  if (popup) {
    popup.style.display = "flex";
  }
}

function closePopup(courseId) {
  const popup = document.getElementById(`popup-${courseId}`);
  if (popup) {
    popup.style.display = "none";
  }
}
