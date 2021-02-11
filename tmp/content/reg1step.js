const reg1 = `
    <div id="regQuiz">
        <div id="quizBox" style="display: block">
            <div class="wrap">
                <div id="qEmail" class="steps animated zoomIn">
                    <h2 id="usersOnline">
                        <span class="onlineUsers" style="color: rgb(226, 43, 76);"></span>
                        ${getText[92]}
                    </h2>
                    <h2 id="acceptTerms">${getText[91]}</h2>
                    <h2 id="womanWaiting">${getText[94]}</h2>
                    <br>  
                    <div id="qEmail" class="questionHolder">
                        <label for="email" class="questionText">${getText[18]}</label>
                        <input type="email" name="email" id="email" placeholder="${getText[19]}">
                    </div>
                    <br>  
                    <label for="terms" id="termsCheck">
                        <input type="checkbox" name="terms" id="terms">
                        <span class="checkbox"></span>
                    </label>
                    <span>${getText[84]} <span id="termsLink" data-link="#termsOfUse">${getText[85]}</span>${getText[86]}<span id="privacyLink" data-link="#privacy">${getText[87]}</span>. ${getText[88]}</span>
                    <small class="condition">${getText[89]}</small>
                    <br>  
                    <button id="regBtn">${getText[90]}</button>
                </div>
            </div>
        </div>
    </div>

    <!-- <div id="tos" style="display: none;">
        <div id="closeTos">&times;</div>
        <iframe src="/terms" id="termsOfUse" style="display: none;"></iframe>
        <iframe src="/privacy" id="privacy" style="display: none;"></iframe>
    </div> -->

    <div id="loader">
        <div id="spinner"></div>
    </div>
`;

document.write(reg1);
$('#quizBox').fadeIn(200);