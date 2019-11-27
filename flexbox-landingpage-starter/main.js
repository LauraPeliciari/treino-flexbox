function toogleDropdown() {
  let navbarToogle = document.getElementById("navbar-toogle");
  if (navbarToogle.className === 'topnav') {
    navbarToogle.className += ' responsive';
  } else {
    navbarToogle.className = 'topnav';
  }
}