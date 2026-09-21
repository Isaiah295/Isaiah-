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

    // ===============================
// CREATE EXAMINATION
// ===============================

const createExamForm =
    document.getElementById("createExamForm");

if (createExamForm) {

    createExamForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const examName =
            document.getElementById("examName").value.trim();

        const subject =
            document.getElementById("examSubject").value.trim();

        const code =
            document.getElementById("examCode").value.trim();

        const duration =
            document.getElementById("examDuration").value;

        const numberOfQuestions =
            document.getElementById("numberOfQuestions").value;


        const newExam = {

            id: Date.now(),

            name: examName,

            subject: subject,

            code: code,

            duration: Number(duration),

            numberOfQuestions:
                Number(numberOfQuestions),

            questions: []

        };


        let exams =
            JSON.parse(localStorage.getItem("exams")) || [];


        exams.push(newExam);


        localStorage.setItem(
            "exams",
            JSON.stringify(exams)
        );


        alert("Examination created successfully!");


        createExamForm.reset();

    });

}

    // ===============================
// DISPLAY EXAMS
// ===============================

const examList =
    document.getElementById("examList");

if (examList) {

    const exams =
        JSON.parse(localStorage.getItem("exams")) || [];


    if (exams.length > 0) {

        examList.innerHTML = "";


        exams.forEach(function(exam) {

            const examCard =
                document.createElement("div");

            examCard.className = "exam-card";


            examCard.innerHTML = `

                <div>

                    <h3>${exam.name}</h3>

                    <p>${exam.subject}</p>

                    <span>
                        Code: ${exam.code}
                    </span>

                </div>


                <div>

                    <strong>
                        ${exam.numberOfQuestions}
                    </strong>

                    <span> Questions </span>

                    <br>

                    <strong>
                        ${exam.duration}
                    </strong>

                    <span> Minutes </span>

                </div>

            `;


            examList.appendChild(examCard);

        });

    }

}

    // ===============================
// QUESTION BUILDER
// ===============================

const questionBuilderSection =
    document.getElementById("questionBuilderSection");

const questionFields =
    document.getElementById("questionFields");


function generateQuestionFields(numberOfQuestions) {

    questionFields.innerHTML = "";


    for (let i = 1; i <= numberOfQuestions; i++) {

        const questionBox =
            document.createElement("div");

        questionBox.className = "question-builder-card";


        questionBox.innerHTML = `

            <h3>Question ${i}</h3>

            <div class="input-group">

                <label>
                    Question
                </label>

                <input
                    type="text"
                    class="question-input"
                    placeholder="Enter question ${i}"
                    required
                >

            </div>


            <div class="form-row">

                <div class="input-group">

                    <label>Option A</label>

                    <input
                        type="text"
                        class="option-a"
                        required
                    >

                </div>


                <div class="input-group">

                    <label>Option B</label>

                    <input
                        type="text"
                        class="option-b"
                        required
                    >

                </div>

            </div>


            <div class="form-row">

                <div class="input-group">

                    <label>Option C</label>

                    <input
                        type="text"
                        class="option-c"
                        required
                    >

                </div>


                <div class="input-group">

                    <label>Option D</label>

                    <input
                        type="text"
                        class="option-d"
                        required
                    >

                </div>

            </div>


            <div class="input-group">

                <label>
                    Correct Answer
                </label>

                <select class="correct-answer" required>

                    <option value="">
                        Select correct answer
                    </option>

                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>

                </select>

            </div>

        `;


        questionFields.appendChild(questionBox);

    }

}
