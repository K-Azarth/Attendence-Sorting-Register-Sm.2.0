var students = [];

function submit() {
    var repeat;
    for (repeat = 1; repeat <= 4; repeat = repeat + 1) {
        console.log(repeat);
        var Name = document.getElementById("name_of_the_student_" + repeat).value
        students.push(Name);
    }
    document.getElementById("display_name_with_commas").innerHTML = students;
    var Essien = students.join(", ");
    document.getElementById("display_name_without_commas").innerHTML = Essien;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting() {
    students.sort();
    document.getElementById("display_name_with_commas").innerHTML = students;
    var Essien = students.join(", ");
    document.getElementById("display_name_without_commas").innerHTML = Essien;
    document.getElementById("submit_button").style.display = "inline-block";
    document.getElementById("sort_button").style.display = "none";
}