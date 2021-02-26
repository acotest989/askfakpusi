function validateEmail() {
    let qAgeEmail = $('#qEmail').is(':visible');
    if (qAgeEmail) {
        stepDots.hide();
        stepBtns.hide();
        if (email.val() === '') {
            email.attr('placeholder', enterEmail)
                .addClass('error');
            loader.fadeOut(200);
        }
        else {
            checkEmail();
        }
    }
}

function checkEmail() {
    const regx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailVal = email.val();
    let res = regx.test(emailVal);
    if (!res) {
        email.val('')
            .attr('placeholder', enterValidEmail)
            .addClass('error');
        loader.fadeOut(200);
    } else {
        validateMyEmail();
    }
}

function validateMyEmail() {
    let url = 'https://validatemy.email/validate.php?s=xnMvus2zxvPgSG2YRQmwa3sK&e=' + email.val();
    $.post(url, function (res) {
        var data = JSON.parse(res);
        if (data.email === 'valid' && data.provider === 'valid') {
            // checkIfEmailExists();
            register();
        } else {
            email.val('')
                .attr('placeholder', emailNotValid)
                .addClass('error');
            loader.fadeOut(200);
        }
    });
}

function register() {
    if (checkTerms()) {
        sendData();
    } else {
        $('#termsCheck .checkbox').addClass('error');
        $('.condition').css('font-weight', 'bold');
        loader.fadeOut(200);
    }
}

var data = {
    apikey: apiKey,
    apihash: apiHash,
    action: 'REGISTER',
    regtype: 1,
    fixEmail: 1,
}
if (getSource() !== undefined) {
    data.source = getSource();
}
if (detector.init() !== undefined) {
    data.detection = detector.init()
}
function sendData() {
    var url = datingApp + '/reg1';
    data.email = email.val();
    LSdata.email = email.val();
    updateLS(pageId, LSdata);
    $.post(url, data, function (res) {
        if (res === 'ERROR_AJAX_REQUEST') {
            email.val('')
                .attr('placeholder', 'Api key is not valid!')
                .addClass('error');	
            loader.fadeOut(200);
        } else 
        if (res === 'ERROR_EMPTY_REQUEST') {
            email.val('')
                .attr('placeholder', 'Param "regtype" is not defined!')
                .addClass('error');
            loader.fadeOut(200);
        } else 
        if (res === 'ERROR_AUTHENTICATION') { // Wrong Authentication cannot happen when registering new user
            email.val('')
                .attr('placeholder', 'Login is not successful')
                .addClass('error');
            loader.fadeOut(200);
        } else
        if (res === 'ERROR_USER_EXISTS') {
            email.val('')
                .attr('placeholder', 'User allready exists!')
                .addClass('error');
            loader.fadeOut(200);
        } else
        if (res === 'ERROR_SENDING_EMAIL') {
            email.val('')
                .attr('placeholder', 'Email or provider is not valid! User is banned! Email is not sent!')
                .addClass('error');
            loader.fadeOut(200);
        } else 
        if (res === 'LOGIN_USER') {
            i++;
            finalStep();	
            showSteps();	
            updateLS(pageId, LSdata);
            window.location.href = datingApp + '/bcs24entlz91faxi052gh/' + email.val();
        } else {
            i++;
            finalStep();	
            showSteps();	
            updateLS(pageId, LSdata);
            updateLS('l_hash_ccp1004', res);
            window.location.href = datingApp + '?loginid=' + res;
        }   
    });   
}


regBtn.click(function () {
    loader.fadeIn(200);
    validateEmail();
});

$('#redirectBtn').click(function () {
    loader.fadeIn(200);
    // sendData();
    location.href = datingApp;
});