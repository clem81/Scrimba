const searchInput = document.getElementById("searchInput");

usernameInput.addEventListener("keyup", function (event) {
  let searchQuery = event.target.value.toLowerCase();
  const allNamesDomCollection = document.getElementsByClassName("name");
  console.log(allNamesDomCollection[0].textContent);
  for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
    const currentName =
      allNamesDOMCollection[counter].textContent.toLowerCase();
    if (currentName.includes(searchQuery)) {
      allNamesDOMCollection[counter].style.display = "block";
    } else {
      allNamesDOMCollection[counter].style.display = "none";
    }
  }
});
