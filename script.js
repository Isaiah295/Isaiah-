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
