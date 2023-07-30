const getUsersBtn = document.getElementById('getUsersBtn');
const loader = document.getElementById('loader');
const userGrid = document.getElementById('userGrid');

getUsersBtn.addEventListener('click', fetchUsers);

async function fetchUsers() {
  showLoader();
  try {
    const response = await fetch('https://reqres.in/api/users?page=1');
    const data = await response.json();
    const users = data.data;
    displayUsers(users);
  } catch (error) {
    console.error('Error fetching users:', error);
  } finally {
    hideLoader();
  }
}

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

function displayUsers(users) {
  let html = '';
  users.forEach((user) => {
    html += `
      <div class="user-card">
        <img src="${user.avatar}" alt="${user.first_name}">
        <h3>${user.first_name} ${user.last_name}</h3>
        <p>${user.email}</p>
      </div>
    `;
  });
  userGrid.innerHTML = html;
}
