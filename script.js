const ageValue = document.getElementById("ageValue");

let maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear());
ageValue.setAttribute("max", maxDate.toISOString().split("T")[0]);

ageValue.addEventListener("input", calculateAge);

function calculateAge() {
    if (ageValue.valueAsDate > new Date()) {
        document.getElementById("CurrentAge").textContent = 0;
        document.getElementById("InMonths").textContent = 0;
        document.getElementById("InDays").textContent = 0;
    } else {
        const today = new Date();

        const birthDate = new Date(ageValue.value);

        const timeDiff = today.getTime() - birthDate.getTime();

        const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));

        const months = Math.floor(
            (timeDiff % (1000 * 60 * 60 * 24 * 365)) /
            (1000 * 60 * 60 * 24 * 30)
        );

        const days = Math.floor(
            (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );

        document.getElementById("CurrentAge").textContent = years;
        document.getElementById("InMonths").textContent = months;
        document.getElementById("InDays").textContent = days;
    }
}