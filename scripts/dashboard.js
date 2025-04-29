document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    alert("Please log in to access your dashboard");
    window.location.href = "login.html";
  }

  const courseList = document.getElementById("course-list");
  const courses = ["Cake Decorating", "Chocolate Mastery", "Pastry Basics"];
  courses.forEach((course) => {
    const li = document.createElement("li");
    li.textContent = course;
    courseList.appendChild(li);
  });

  document.getElementById("logout").addEventListener("click", function () {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
  });
});
