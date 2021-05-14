cCode = ''; // if '' => reads cCode from folder name or query string, if 'IP' => reads cCode from IP address, or set manually
userType = 'soi';
contentType = 'adult'; // adult || familySafe
apiKey = 'AB930-9CA333-74474C7-CCED20-4DEC-E13A';
datingApp = 'https://dev.mojtajnisastanak.com';
regRoute = ''; // set custom reg route, default is /register-user-terminal
emailOnly = 1; // 1 to activate email only mode, default null
googleBtnText = ''; // set custom text or default text if empty
redirection = true; // choose redirection to reg1 to finish registration 
flow = false; // set auto picking dating app
cookieBar = false; // show/hide cookie bar 
storeData = true; // choose to store data in local storage or not
giftCredits = null; // in this moment it will be null on frontend, maybe in the future we will give user some value to credit after register
accId = ''; // familySafe only
accHash = ''; // familySafe only
domain = 'domain.test'; // set custom domain name in tos or leave empty for deafault 
documentTitle = 'random'; // random for random title, set custom title or leave empty for default title
customTextUrl = ''; // define custom text file path

// company data - if string is empty, company will be NPG as default
companyName = '';
companyAddress = '';
companyRegNumber = '';
complianceEmail = '';


// choose which questions to render and reorder them at your will
questions = {
    genderQ: true,
    partnerForQ: true,
    ageRangeQ: true,
    cityQ: true,
    relationShipQ: true,
    eyesColorQ: true,
    hairColorQ: true,
    skinColorQ: true,
    physiqueLookQ: true,
    heightQ: true,
    weightQ: true,
    aboutQ: true,
    phoneQ: true,
    userPassQ: true,
    ageQ: true,
    birthdateQ: true,
    redirectStep: true,
    emailQ: true,
    // thanksQ:            true,          
    finalQ: true,
}

