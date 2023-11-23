for (let i = 1; i <= 100; i++) {
    let output = "";
    let list = document.getElementById('list')
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    console.log(output || i);
    list.innerHTML += `<li class="list-group-item list-group-item-action">${output || i}</li>`;
}
