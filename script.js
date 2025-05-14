function changeBackground() {
  document.body.style.backgroundColor = "#f0f8ff";
}

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    document.getElementById('apiData').innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.body}</p>
    `;
  });

document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  if(name.trim() === "") {
    document.getElementById('formMessage').textContent = "Name is required!";
  } else {
    document.getElementById('formMessage').textContent = "Form submitted!";
  }
});
