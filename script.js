let expenses = [];

function addExpense() {
  // let value = document.getElementById(expenseName).value
  // let newValue =
  let name = document.getElementById("expenseInput").value;
  let amount = document.getElementById("amountInput").value;
  let category = document.getElementById("categoryinput").value;

  //validation
  if (!name || !amount || !category) {
    return;
  }

  let newExpense = {
    name: name,
    amount: Number(amount),
    category: category,
  };

  expenses.push(newExpense);

  displayExpenses();
}

function displayExpenses() {
  let table = document.getElementById("table");
  let total = document.getElementById("total");
  table.innerHTML = "";
  let totalAmount = 0;

  let html = `<tr>
                    <th>Expense Name</th>
                    <th>Amount</th>
                    <th>Catagory</th>
                    <th>Action</th>
                </tr>`;

  for (let i = 0; i < expenses.length; i++) {
    totalAmount += expenses[i].amount;
    html += `<tr>
        <td>${expenses[i].name}</td>
        <td>${expenses[i].amount}</td>
        <td>${expenses[i].category}</td>
        <td>
            <button onclick="editExpense(${i})">Edit</button>
            <button onclick="deleteExpense(${i})">Delete</button>
        </td>
        </tr>`;
  }

  html += `</table>`;
  table.innerHTML = html;
  total.innerHTML = `Total: $${totalAmount}`;
}

function editExpense(index) {
  let newName = prompt("Expense Name: ", expenses[index].name);
  let newAmount = prompt("Expense Amount: ", expenses[index].amount);
  let newCategory = prompt("Expense Category: ", expenses[index].category);

  if (!newName || !newAmount || !newCategory) {
    return;
  }

  if (
    newCategory !== "food" ||
    newCategory !== "transport" ||
    newCategory !== "entertainment" ||
    newCategory !== "other"
  ) {
    return;
  }

  expenses[index].name = newName;
  expenses[index].amount = Number(newAmount);
  expenses[index].category = newCategory;
  displayExpenses();
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  displayExpenses();
}