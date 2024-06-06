$(document).ready(function() {
    // Load existing students
    loadStudents();

    // Handle form submission
    $('#registration-form').submit(function(event) {
        event.preventDefault();
        const formData = {
            name: $('#name').val(),
            age: $('#age').val(),
            email: $('#email').val()
        };

        $.post('/register', formData, function(data) {
            addStudentToTable(data);
            $('#registration-form')[0].reset();
        });
    });

    // Load students from the server
    function loadStudents() {
        $.get('/students', function(data) {
            data.forEach(addStudentToTable);
        });
    }

    // Add student to the table
    function addStudentToTable(student) {
        const studentRow = `
            <tr data-id="${student.id}">
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.email}</td>
                <td><button class="btn btn-warning btn-edit">Edit</button></td>
                <td><button class="btn btn-danger btn-delete">Delete</button></td>
            </tr>
        `;
        $('#record-list').append(studentRow);
    }

    // Handle delete button click
    $(document).on('click', '.btn-delete', function() {
        const row = $(this).closest('tr');
        const studentId = row.data('id');

        $.ajax({
            url: `/delete/${studentId}`,
            type: 'DELETE',
            success: function(result) {
                row.remove();
            }
        });
    });

    // Handle edit button click
    $(document).on('click', '.btn-edit', function() {
        const row = $(this).closest('tr');
        const studentId = row.data('id');
        const name = row.find('td:eq(0)').text();
        const age = row.find('td:eq(1)').text();
        const email = row.find('td:eq(2)').text();

        $('#name').val(name);
        $('#age').val(age);
        $('#email').val(email);
        $('#registration-form').append(`<input type="hidden" id="student-id" name="id" value="${studentId}">`);
        $('button[type="submit"]').text('Update Record');
    });

    // Handle form update submission
    $('#registration-form').submit(function(event) {
        event.preventDefault();
        const studentId = $('#student-id').val();
        const formData = {
            name: $('#name').val(),
            age: $('#age').val(),
            email: $('#email').val()
        };

        if (studentId) {
            $.post(`/edit/${studentId}`, formData, function(data) {
                const row = $(`tr[data-id="${studentId}"]`);
                row.find('td:eq(0)').text(data.name);
                row.find('td:eq(1)').text(data.age);
                row.find('td:eq(2)').text(data.email);
                $('#registration-form')[0].reset();
                $('#student-id').remove();
                $('button[type="submit"]').text('Add Record');
            });
        } else {
            $.post('/register', formData, function(data) {
                addStudentToTable(data);
                $('#registration-form')[0].reset();
            });
        }
    });
});
