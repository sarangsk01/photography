const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
  this.classList.toggle('active');
});

/*nav-links*/
// script.js
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const tabDesk = document.querySelectorAll(".tab-desk");
  console.log('tabdesk',tabDesk)
  console.log('tabs',tabs)
  const tabContents = document.querySelectorAll(".content");
  console.log('tabcontent',tabContents)
  const dropdown = document.querySelector(".tabs");
  const dropdownDesk = document.querySelector(".desktop");

  // desktop
  function showDesktop(index) {
    tabDesk.forEach((tabd, tabdIndex) => {
      console.log(tabd,index);
      tabd.classList.toggle("active", tabdIndex === index);
    });
    tabContents.forEach((content, contentIndex) => {

      content.classList.toggle("active", contentIndex === index);
    });
  }
/*tab */
  function showTab(index) {
    tabs.forEach((tab, tabIndex) => {
      console.log(tab,Number(index));
      tab.classList.toggle("active", tabIndex === Number(index));
    });
    tabContents.forEach((content, contentIndex) => {

      content.classList.toggle("active", contentIndex === Number(index));
    });
  }

  function handleDropdownChange() {
    console.log("dropdown.value",dropdown.value)
    const selectedOptionIndex = dropdown.value;
    showTab(selectedOptionIndex);
  }
  function handleDropdownChangeDesktop(){
    const selectedOptionIndexDesk = dropdownDesk.value;
    console.log("dropdownDesk value",dropdownDesk.value)
    showDesktop(selectedOptionIndexDesk);

  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => showTab(index));
  });

  tabDesk.forEach((tabd, index) => {
    tabd.addEventListener("click", () => showDesktop(index));
  });

  dropdown.addEventListener("change", handleDropdownChange);
  dropdownDesk.addEventListener("change",handleDropdownChangeDesktop)
  // Show the first tab initially
  showTab(0);

  showDesktop(0);
});

