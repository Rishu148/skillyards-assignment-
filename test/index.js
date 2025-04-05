const url = 'http://localhost:3000/users';
    
function fetchUsers() {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('userList');
      list.innerHTML = '';
      data.forEach(user => {
        list.innerHTML += `
          <div class="user">
            <b>${user.name}</b> (phoneNumber: ${user.phoneNumber}) 
            <button onclick="deleteUser('${user.id}')">Delete</button>
          </div>
        `;
      });
    });
}


function addUser() {
  const name = document.getElementById('name').value;
  const phoneNumber = document.getElementById('phoneNumber').value;

  if (!name || !phoneNumber) {
    alert("Please fill all fields");
    return;
  }

  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, phoneNumber })
  })
  .then(() => {
    document.getElementById('name').value = '';
    document.getElementById('phoneNumber').value = '';
    fetchUsers();
  });
}



function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: 'DELETE'
  })
  .then(() => fetchUsers());
}

fetchUsers()
