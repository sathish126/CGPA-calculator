let courseId = 1;

function addCourse() {
    courseId++;
    const courseDiv = document.createElement('div');
    courseDiv.classList.add('course');
    courseDiv.innerHTML = `
        <label for="course${courseId}">Course ${courseId}:</label>
        <input type="number" id="course${courseId}" step="0.01" placeholder="Grade" class="grade-input">
        <input type="number" id="credit${courseId}" step="1" placeholder="Credits" class="credit-input">
    `;
    document.getElementById('courses').appendChild(courseDiv);
}

function calculateCGPA() {
    const grades = document.querySelectorAll('.grade-input');
    const credits = document.querySelectorAll('.credit-input');
    const prevExamAvg = parseFloat(document.getElementById('prevExamAvg').value);

    let totalGradesTimesCredits = 0;
    let totalCredits = 0;

    grades.forEach((gradeInput, index) => {
        const grade = parseFloat(gradeInput.value);
        const credit = parseInt(credits[index].value);
        if (!isNaN(grade) && !isNaN(credit)) {
            totalGradesTimesCredits += grade * credit;
            totalCredits += credit;
        }
    });

    if (totalCredits === 0) {
        alert('Please enter at least one valid grade and credit.');
        return;
    }

    const weightedAvg = totalGradesTimesCredits / totalCredits;
    const finalCGPA = (weightedAvg + prevExamAvg) / 2;
    document.getElementById('result').innerHTML = `<p>Your CGPA is: <strong>${finalCGPA.toFixed(2)}</strong></p>`;
}

document.getElementById('addCourse').addEventListener('click', addCourse);
