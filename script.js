// ================= NAVIGATION =================

const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page-section");

navLinks.forEach(function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const pageName = link.getAttribute("data-page");

    pages.forEach(function(page) {
      page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageName);

    if (selectedPage) {
      selectedPage.classList.add("active");
    }

    navLinks.forEach(function(item) {
      item.classList.remove("active");
    });

    link.classList.add("active");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});


// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");

if (menuBtn) {
  menuBtn.addEventListener("click", function() {
    sidebar.classList.toggle("open");
  });
}


// ================= CAMPUSONE ANSWERS =================

function getCampusAnswer(question) {

  const q = question.toLowerCase();

  if (q.includes("scholarship")) {
    return "🎓 Scholarship forms can be submitted at the Student Welfare Office, Room 102. Office timing: 10 AM – 4 PM.";
  }

  if (q.includes("library")) {
    return "📚 The library is located in Block A, Ground Floor. Opening hours: 8 AM – 8 PM.";
  }

  if (q.includes("placement")) {
    return "💼 The Placement Cell is located in the Administrative Block, Room 305. Timing: 10 AM – 5 PM.";
  }

  if (q.includes("exam") || q.includes("examination")) {
    return "📝 Your mid-term examinations start from September 20, 2026. Check the Calendar section for details.";
  }

  if (q.includes("certificate") || q.includes("bonafide")) {
    return "📄 Bonafide certificates can be requested from the Student Administration Office, Room 101.";
  }

  if (q.includes("fee") || q.includes("fees")) {
    return "💳 Fee payment information is available through the Accounts Office. You can also check the student portal.";
  }

  if (q.includes("event") || q.includes("fest")) {
    return "🎉 The Annual Cultural Fest is scheduled for September 20. Registration is available in Clubs & Events.";
  }

  return "🤖 I can help you find information about scholarships, library, placement, exams, certificates, fees and campus events.";
}


// ================= DASHBOARD SEARCH =================

const dashboardSearch = document.getElementById("dashboardSearch");
const dashboardSearchBtn = document.getElementById("dashboardSearchBtn");
const dashboardAnswer = document.getElementById("dashboardAnswer");

if (dashboardSearchBtn) {

  dashboardSearchBtn.addEventListener("click", function() {

    const question = dashboardSearch.value.trim();

    if (question === "") {
      dashboardAnswer.style.display = "block";
      dashboardAnswer.innerHTML = "Please type a question first. 😊";
      return;
    }

    dashboardAnswer.style.display = "block";
    dashboardAnswer.innerHTML = getCampusAnswer(question);

  });

}


// ================= SMART SEARCH PAGE =================

const smartSearchInput = document.getElementById("smartSearchInput");
const smartSearchBtn = document.getElementById("smartSearchBtn");
const smartSearchAnswer = document.getElementById("smartSearchAnswer");

if (smartSearchBtn) {

  smartSearchBtn.addEventListener("click", function() {

    const question = smartSearchInput.value.trim();

    if (question === "") {
      smartSearchAnswer.style.display = "block";
      smartSearchAnswer.innerHTML = "Please enter your question. 😊";
      return;
    }

    smartSearchAnswer.style.display = "block";
    smartSearchAnswer.innerHTML = getCampusAnswer(question);

  });

}


// ================= EXAMPLE QUESTIONS =================

const exampleButtons = document.querySelectorAll(".example-btn");

exampleButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    smartSearchInput.value = button.innerText;

    smartSearchAnswer.style.display = "block";
    smartSearchAnswer.innerHTML = getCampusAnswer(button.innerText);

  });

});


// ================= ASK CAMPUSONE MODAL =================

const askCampusBtn = document.getElementById("askCampusBtn");
const askModal = document.getElementById("askModal");
const closeModal = document.getElementById("closeModal");

if (askCampusBtn) {

  askCampusBtn.addEventListener("click", function() {
    askModal.classList.add("active");
  });

}

if (closeModal) {

  closeModal.addEventListener("click", function() {
    askModal.classList.remove("active");
  });

}


// Close modal when clicking outside

if (askModal) {

  askModal.addEventListener("click", function(e) {

    if (e.target === askModal) {
      askModal.classList.remove("active");
    }

  });

}


// ================= MODAL SEARCH =================

const modalSearchInput = document.getElementById("modalSearchInput");
const modalSearchBtn = document.getElementById("modalSearchBtn");
const modalAnswer = document.getElementById("modalAnswer");

if (modalSearchBtn) {

  modalSearchBtn.addEventListener("click", function() {

    const question = modalSearchInput.value.trim();

    if (question === "") {
      modalAnswer.innerHTML = "Please enter a question. 😊";
      return;
    }

    modalAnswer.innerHTML = getCampusAnswer(question);

  });

}


// ================= GLOBAL SEARCH =================

const globalSearch = document.getElementById("globalSearch");
const globalSearchBtn = document.getElementById("globalSearchBtn");

if (globalSearchBtn) {

  globalSearchBtn.addEventListener("click", function() {

    const question = globalSearch.value.trim();

    if (question === "") {
      alert("Please type something to search.");
      return;
    }

    pages.forEach(function(page) {
      page.classList.remove("active");
    });

    document.getElementById("search").classList.add("active");

    navLinks.forEach(function(link) {
      link.classList.remove("active");

      if (link.getAttribute("data-page") === "search") {
        link.classList.add("active");
      }
    });

    smartSearchInput.value = question;

    smartSearchAnswer.style.display = "block";
    smartSearchAnswer.innerHTML = getCampusAnswer(question);

  });

}


// ================= NOTIFICATIONS =================

const notificationBtn = document.getElementById("notificationBtn");

if (notificationBtn) {

  notificationBtn.addEventListener("click", function() {

    alert(
      "🔔 You have 3 new notifications:\n\n" +
      "1. Semester registration deadline\n" +
      "2. New examination notice\n" +
      "3. Cultural fest registration open"
    );

  });

}


// ================= NOTICE DETAILS =================

const noticeButtons = document.querySelectorAll(".notice-details");

noticeButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    alert(
      "📢 CampusOne Notice\n\n" +
      "For complete details, please contact the respective campus office."
    );

  });

});


// ================= EVENT REGISTRATION =================

const eventButtons = document.querySelectorAll(".event-register");

eventButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    button.innerText = "Registered ✓";
    button.style.background = "#22a06b";

    alert("🎉 You have successfully registered for this event!");

  });

});


// ================= PROBLEM FORM =================

const problemForm = document.getElementById("problemForm");

if (problemForm) {

  problemForm.addEventListener("submit", function(e) {

    e.preventDefault();

    alert(
      "✅ Problem submitted successfully!\n\n" +
      "Thank you for helping us improve the campus."
    );

    problemForm.reset();

  });

}


// ================= SERVICE BUTTONS =================

const serviceButtons = document.querySelectorAll(".service-action");

serviceButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    alert(
      "🏫 CampusOne Service\n\n" +
      "This service will be available in the next version of CampusOne."
    );

  });

});


// ================= QUICK SERVICE BUTTONS =================

const quickServices = document.querySelectorAll(".service-btn");

quickServices.forEach(function(button) {

  button.addEventListener("click", function() {

    alert(
      "⚡ " + button.innerText +
      "\n\nCampusOne is opening this service."
    );

  });

});


// ================= LOGOUT =================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

  logoutBtn.addEventListener("click", function() {

    const confirmLogout = confirm(
      "Are you sure you want to logout?"
    );

    if (confirmLogout) {
      alert("You have been logged out.");
    }

  });

}


// ================= ENTER KEY SEARCH =================

if (dashboardSearch) {

  dashboardSearch.addEventListener("keypress", function(e) {

    if (e.key === "Enter") {
      dashboardSearchBtn.click();
    }

  });

}

if (smartSearchInput) {

  smartSearchInput.addEventListener("keypress", function(e) {

    if (e.key === "Enter") {
      smartSearchBtn.click();
    }

  });

}

if (modalSearchInput) {

  modalSearchInput.addEventListener("keypress", function(e) {

    if (e.key === "Enter") {
      modalSearchBtn.click();
    }

  });

}

console.log("CampusOne loaded successfully! 🚀");
