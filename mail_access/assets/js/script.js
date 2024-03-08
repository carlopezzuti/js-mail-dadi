// Email accettate
const emailProfiles = ["name1@email.com", "name2@email.com", "name3@email.com", "name4@email.com"]
const inputMail = document.getElementById('mail')
const checkBtn = document.getElementById('check-btn')
const resultCheck = document.getElementById('result')

// 
for (let i = 0; i < emailProfiles.length; i++) {
    console.log(emailProfiles[i])
}

checkBtn.addEventListener('click', checkMail)

// Controllo Email e Risposta
function checkMail() {
    
    let controlVariable = false
    for (let i = 0; i < emailProfiles.length; i++) {

        if (emailProfiles[i] === inputMail.value) {
            controlVariable = true
        }
    }

    if (controlVariable) {
        resultCheck.innerHTML = "Benvenuto/a"
    } else {
        resultCheck.innerHTML = "Mi dispiace, non hai un account."
    }
}