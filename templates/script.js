document.addEventListener("DOMContentLoaded", function () {
  // Toggle submenu on click for mobile
  document.querySelectorAll('.nav-item').forEach(function(navItem) {
    const submenu = navItem.querySelector('.submenu');
    const link = navItem.querySelector('.nav-link');

    if (submenu && link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelectorAll('.submenu').forEach(function(menu) {
          if (menu !== submenu) menu.style.display = 'none';
        });

        submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
      });
    }
  });

  document.addEventListener('click', function (e) {
    const isClickInsideNav = e.target.closest('.nav-item');
    if (!isClickInsideNav) {
      document.querySelectorAll('.submenu').forEach(function(menu) {
        menu.style.display = 'none';
      });
    }
  });

  // Contact Us Pop up
  const modal = document.getElementById("contactModal");
  const btn = document.getElementById("contactBtn");
  const closeBtn = document.querySelector(".modal-close");

  if (btn && modal && closeBtn) {
    btn.onclick = () => modal.style.display = "block";
    closeBtn.onclick = () => modal.style.display = "none";

    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }
});
