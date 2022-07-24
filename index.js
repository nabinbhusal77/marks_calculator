let mark = document.getElementById("mark")
let showMask = document.getElementById("showMask")
let resetBtn = document.getElementById("reset")
let undoBtn = document.getElementById("undo")
let recentMask = ''
let totalMarks = 0
let prevMark = 0

resetBtn.addEventListener('click', () => {
    totalMarks = 0
    showMask.innerText = totalMarks
})


mark.addEventListener('keyup', () => {
    prevMark = parseInt(mark.value)
    recentMask = mark.value
    
    if (recentMask == 0) {
        prevMark = 0.5
        totalMarks += 0.5
    } else {
        totalMarks += parseInt(recentMask)
    }
    showMask.innerText = totalMarks;
    mark.value = ''
})


undoBtn.addEventListener('click', () => {
    totalMarks -= prevMark
    showMask.innerText = totalMarks
})