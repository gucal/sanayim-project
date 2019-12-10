// ADD USER CLIENT JS //

const form = document.querySelector('#userForm');
const userNameInput = document.querySelector("#adSoyad");

eventListener();

function eventListener() {
    form.addEventListener("submit", addUser);
}

function addUser(e) {
    const newUser = userNameInput.value.trim();
    alert(newUser);

}