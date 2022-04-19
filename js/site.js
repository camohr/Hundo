// controller
function getValues() {

    let sv = parseInt (document.getElementById ("startValue").value);
    let ev = parseInt (document.getElementById("endValue").value);

    if (!Number.isInteger(sv) || !Number.isInteger(ev)) {
        alert ("Please enter a number only.")
        return;
    }

    let numbers = generateNumbers (sv, ev);
    displayNumbers (numbers);
}

// logic
function generateNumbers (start, end) {
    if (end < start)  // ensure start less than end
    {
        let m = end;
        end = start;
        start = m;
    }
    let numbers = [];
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }
    return numbers;
}

// display
function displayNumbers(numbers) {

    let trows = "";

    for (let i = 0; i<numbers.length; i++) {
        let n = numbers[i];
        let className = "";
        if (n % 2)
            className = "odd";
        else
            className = "even";
        trows += `<tr><td class="${className}">${n}</td></tr>\n`;
    }
    document.getElementById ("resbody").innerHTML = trows;
}

