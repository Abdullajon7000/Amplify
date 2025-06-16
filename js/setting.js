document.addEventListener('DOMContentLoaded', () => {
    const settingsIcon = document.querySelector('.settings-icon');
    const settingsMenu = document.getElementById('settingsMenu');
  
    settingsIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      if (settingsMenu.style.display === 'block') {
        settingsMenu.style.display = 'none';
      } else {
        settingsMenu.style.display = 'block';
      }
    });
  
    document.addEventListener('click', () => {
      settingsMenu.style.display = 'none';
    });
  
    // Agar kerak bo‘lsa menyu elementlariga click event qo‘shishingiz mumkin
    settingsMenu.querySelectorAll('li').forEach(item => {
      item.addEventListener('click', () => {
        alert(`Siz tanladingiz: ${item.textContent}`);
        settingsMenu.style.display = 'none';
      });
    });
  });

  function changeTab(element) {
    document.querySelectorAll(".tab").forEach(tab => {
      tab.classList.remove("active");
    });
    element.classList.add("active");
  }
  
