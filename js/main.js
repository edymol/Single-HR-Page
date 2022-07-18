var employeeListHolder = document.querySelector(".employee-list");
var interviewListHolder = document.querySelector(".interviews");
var addEmployeeModal = document.querySelector("#employeeModal");
var addInterviewModal = document.querySelector("#interviewModal");

// Hiding the two forms from UI
addEmployeeModal.style.display = "none";
addInterviewModal.style.display = "none";

function addEmployee() {
  var name = document.querySelector("#name").value;
  var surname = document.querySelector("#surname").value;
  var position = document.querySelector("#position").value;
  var department = document.querySelector("#department").value;
  var email = document.querySelector("#email").value;
  var salary = document.querySelector("#salary").value;

  var newItem =
    `
    <li>
        <div class="employee-card" id="employee1">
            <img id="users" class="user-img" src="img/default.jpg" alt="" />
            <span>
                <div class="employee-details" id="employee1-details">
                    <span class="name-format">` +
    name +
    `</span>
                    <span class="name-format">` +
    surname +
    `</span>
                    <br>
                    <span> ` +
    position +
    `</span>
                    <br>
                    <span> ` +
    department +
    `</span>
                    <br>
                    <span> ` +
    email +
    `</span>
                    <br>
                    <span>$` +
    salary +
    `</span>

                </div>
            </span>
        </div>
    </li>
    `;

  employeeListHolder.insertAdjacentHTML("beforeend", newItem);
  addEmployeeModal.style.display = "none";
}

function showAddEmpModal() {
  addEmployeeModal.style.display = "block";
}

function addInterview() {
  var departmentInterview = document.querySelector("#int-department").value;
  var positionInterview = document.querySelector("#int-position").value;

  // check if any value was in the input, then add, else do nothing
  if (!departmentInterview || !positionInterview) {
    return;
  }

  var newInterview =
    `
    <li>
    <div class="list-item">
        <h3>` +
    departmentInterview +
    `</h3>
        <p>` +
    positionInterview +
    `</p>
        <button class="accept-btn" type="button" name="button">Accept</button>
        <button class="reject-btn" type="button" name="button">Reject</button>
    </div>
</li>`;

  interviewListHolder.insertAdjacentHTML("beforeend", newInterview);
  addInterviewModal.style.display = "none";
}

function showAddIntModal() {
  addInterviewModal.style.display = "block";
}
