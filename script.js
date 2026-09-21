const studentLoginForm = document.getElementById("studentLoginForm");

if (studentLoginForm) {
    studentLoginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const studentName = document.getElementById("studentName").value.trim();
        const studentId = document.getElementById("studentId").value.trim();
        const examCode = document.getElementById("examCode").value.trim();

        if (!studentName || !studentId || !examCode) {
            alert("Please fill in all fields.");
            return;
        }

        localStorage.setItem("studentName", studentName);
        localStorage.setItem("studentId", studentId);
        localStorage.setItem("examCode", examCode);

        window.location.href = "exam.html";
    });
}

// ===============================
// ADMIN LOGIN
// ===============================

const adminLoginForm = document.getElementById("adminLoginForm");

if (adminLoginForm) {

    adminLoginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const username =
            document.getElementById("adminUsername").value.trim();

        const password =
            document.getElementById("adminPassword").value.trim();


        if (username === "admin" && password === "12345") {

            localStorage.setItem("adminLoggedIn", "true");

            window.location.href = "admin-dashboard.html";

        } else {

            alert("Invalid username or password.");

        }

    });


    // ===============================
// ADMIN DASHBOARD PROTECTION
// ===============================

const adminDashboard =
    document.getElementById("createExamForm");

if (adminDashboard) {

    const adminLoggedIn =
        localStorage.getItem("adminLoggedIn");

    if (adminLoggedIn !== "true") {

        window.location.href = "admin-login.html";

    }

}

// ===============================
// ADMIN LOGOUT
// ===============================

const adminLogout =
    document.getElementById("adminLogout");

if (adminLogout) {

    adminLogout.addEventListener("click", function() {

        localStorage.removeItem("adminLoggedIn");

        window.location.href = "admin-login.html";

    });

}
