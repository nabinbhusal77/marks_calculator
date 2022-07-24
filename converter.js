let totalInput = document.getElementById("mark");
let btnDiv = document.getElementById("calc_btn");
let sevenFive = document.getElementById("seven_five");
let fiveZero = document.getElementById("five_zer");
let twoFive = document.getElementById("two_five");
let showMask = document.getElementById("showMark");

let totalMarks = 0
let convertTo = 0
let finalMark = 0

Array.from(btnDiv.children).forEach((btn, index) => {
    btn.addEventListener('click', () => {
        let obtainedMark = parseInt(totalInput.value)
        switch (index) {
            case 0:
                totalMarks = 100;
                convertTo = 75;
                break;
        
            case 1:
                totalMarks = 75;
                convertTo = 50;
                break;

            case 2:
                totalMarks = 50;
                convertTo = 25;
                break;
        }

        finalMark = (obtainedMark/totalMarks) * convertTo;
        showMask.innerText = finalMark;
        totalInput.value = ''

        
    })
});

