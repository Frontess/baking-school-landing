document
  .getElementById("registerForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const result = await response.json();
      const messageElement = document.getElementById("message");

      if (response.ok) {
        messageElement.textContent = "Регистрация успешно завершена!";
        messageElement.style.color = "green";
      } else {
        messageElement.textContent = result.message || "Ошибка регистрации.";
        messageElement.style.color = "red";
      }
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      document.getElementById("message").textContent =
        "Не удалось подключиться к серверу.";
      document.getElementById("message").style.color = "red";
    }
  });
