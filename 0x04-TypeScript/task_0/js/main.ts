interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student_one: Student = {
    firstName: 'Bukola',
    lastName: 'Olanipekun',
    age: 23,
    location: 'Lagos'
}

const student_two: Student = {
    firstName: 'Tolu',
    lastName: 'Ade',
    age: 24,
    location: 'Lagos'
}

const studentsList: Array<Student> = [student_one, student_two];

const renderTable = (students: Array<Student>) => {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    students.forEach((student) => {
        const row = document.createElement('tr');
        const firstNameC = document.createElement('td');
        const locationC = document.createElement('td');

        firstNameC.textContent = student.firstName;
        locationC.textContent = student.location;

        row.appendChild(firstNameC);
        row.appendChild(locationC);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
}
renderTable(studentsList);
