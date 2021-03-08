const support = `
    <div id="supportBar">
        <p>
            <small id="termsLink2" data-link="#termsOfUse">${getText[85]}</small>
            <small id="privacyLink2" data-link="#privacy">${getText[87]}</small>
            <small id="supportLink" data-link="#customer">${getText[107]}</small> 
        </p>
    </div>
`;

const getSupportContent = `
    <div id="supportModal">
        <div id="supportForm">
            <div id="supportModalClose">×</div>
            <h2>${getText[108]}</h2>
            <p>${getText[109]}</p>
            <form>
                <div class="inputHolder">
                    <label>${getText[12]} *</label>
                    <input type="text" placeholder="${getText[13]}" id="supportUser">
                </div>
                <div class="inputHolder">
                    <label>${getText[18]} *</label>
                    <input type="email" placeholder="${getText[19]}" id="supportEmail">
                </div>
                <div class="inputHolder">
                    <label>${getText[110]} *</label>
                    <textarea placeholder="${getText[111]}" id="supportMsg"></textarea>
                </div>
                <div id="submitSupportForm">${getText[112]}</div>
                <p id="errMsg"></p>
            </form>
        </div>
    </div>
`;


$(document).on('click', '#submitSupportForm', function () {

    var supportUser = $('#supportUser').val();
    var supportEmail = $('#supportEmail').val();
    var supportMsg = $('#supportMsg').val();

    if (supportUser === '' || supportEmail === '' || supportMsg === '') {
        $('#errMsg').text(getText[113]).css('color', '#f00').fadeIn(200);
        return;
    }

    $.ajax({
        url: datingApp + '/presell-send-mail-support', //we will define route
        headers: {

        }, //we will add static csrf token on presell domain
        data: {
            'username': supportUser,
            'email': supportEmail,
            'message': supportMsg
        },
        type: 'post',
        success: function (res) {
            switch (res) {
                case "INVALID_EMAIL":
                    $('#errMsg').text(getText[114]).css('color', '#f00').fadeIn(200);
                    break;
                case "SUCCESS":
                    $('#errMsg').text(getText[115]).css('color', 'limegreen').fadeIn(200);
                    break;
            }
        },
        error: function () {
            alert('Error occurred! Try again.');
        }
    });

});
