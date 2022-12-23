const sidenav = document.querySelector(`#sidenav-open`);

sidenav.addEventListener(`keyup`, e => {
  if (e.code === `Escape`) document.location.hash = ``;
});

sidenav.addEventListener(`transitioned`, e => {
  const isOpen = document.location.hash === `#sidenav-open`;

  isOpen
    ? document.querySelector(`#sidenav-close`).focus()
    : document.querySelector(`#sidenav-button`).focus();
});
