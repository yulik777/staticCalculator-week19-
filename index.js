class Calculator {

    static plus(a, b) {
        const c = +a + +b;
        return c;
    }
    static minus(a, b) {
        const c = a - b;
        return c;
    }
    static multiply(a, b) {
        const c = a * b;
        return c;
    }

    static devide(a, b) {
        if (b == 0) {
            document.getElementById("result").innerHTML =
                "На ноль делить нельзя!!!";
        } else {
            const c = a / b;
            return c;
        }
    }
}

const sum = document.getElementById('plus');

sum.addEventListener('click', () => {
    document.getElementById("result").innerHTML = Calculator.plus(document.getElementById(
        "first_number").value, document.getElementById("second_number").value);
});

const min = document.getElementById('minus');

min.addEventListener('click', () => {
    document.getElementById("result").innerHTML = Calculator.minus(document.getElementById(
        "first_number").value, document.getElementById("second_number").value);
});

const multy = document.getElementById('multiply');

multy.addEventListener('click', () => {
    document.getElementById("result").innerHTML = Calculator.multiply(document.getElementById(
        "first_number").value, document.getElementById("second_number").value);
});

const dev = document.getElementById('devide');

dev.addEventListener('click', () => {
    document.getElementById("result").innerHTML = Calculator.devide(document.getElementById(
        "first_number").value, document.getElementById("second_number").value);
});