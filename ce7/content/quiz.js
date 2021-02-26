const quiz = `
    <div id="regQuiz">
        <div id="quizBox" style="display: none">

            <h2 id="regTitle">${getText[11]}</h2>

            <div class="wrap">

                ${redirectStep}
                ${genderQ}
                ${ageRangeQ}
                ${cityQ}
                ${relationShipQ}
                ${eyesColorQ}
                ${hairColorQ}
                ${skinColorQ}
                ${physiqueLookQ}
                ${heightQ}
                ${userPassQ}
                ${ageQ}
                ${emailQ}
                ${thanksQ}
                ${finalQ}

                <div id="stepDots"></div>
                <div id="stepBtns">
                    <button id="stepBack" style="display: none;">&#9001; ${getText[9]}</button>
                    <button id="nextStep">${getText[10]} &#9002;</button>
                </div>

            </div>
        </div>
    </div>

    <div id="tos" style="display: none;">
        <div id="closeTos">&times;</div>
        <iframe src="" id="termsOfUse" style="display: none;"></iframe>
        <iframe src="" id="privacy" style="display: none;"></iframe>
    </div>
    
    ${cookieOverlay ? 
        `<div id="cookieOverlay">
            <p>${getText[103]} <br> ${getText[104]}</p>
            <button id="agree">${getText[105]}</button>
        </div>`
    : ''}
    
    <div id="progressBar">
        <div id="progress">
            <p id="percentage"></p>
        </div>
    </div>

    <div id="loader">
        <div id="spinner"></div>
    </div>
`;

document.write(quiz);
$('#quizBox').fadeIn(500);