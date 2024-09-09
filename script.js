const studentForm = document.getElementById('studentForm');
const studentList = document.getElementById('studentList');
const error = document.getElementById('error');
const students = [];
studentForm.addEventListener('submit', function(event) {
    const studentId = document.getElementById('studentId').value;
    const studentName = document.getElementById('studentName').value;
    try {
        addStudent(studentId, studentName, studentAge)
        displayStudents();
        error.textContent = ' ';

    } catch (error) {
        error.textContent = error.message;
    }
    studentForm.reset();

});

function addStudent(id, name, age) {
    if (!id || !name || !age) {
        throw new Error("All fields are required.");
    }
    if (isNaN(age) || age <= 0) {
        throw new Error("Age must be a positive number.");
    }
    const StudentExists = stduent.some(Student => student.id == id);
    if (StudentExists) {
        throw new Error("aStudent ID ldready exixts.")
    }
    const student = {
        id,
        name,
        age: parseInt(age, 10)
    };
    students.psug(student);

    function displayStudents() {
        StudentExists.innerHTML = ' ';
        students.forEach(student => {
            const li = documnent.createElement('li');
            li.textContent = 'ID: ${student.id}; Name:${student.name};Age:${student.age}';
            studentList.appendChild(li);
        })
    };
}