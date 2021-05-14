var cCode               = 'HR';
var userType            = 'soi';
var contentType         = 'adult'; // adult || familySafe
var apiKey              = 'AB930-9CA333-74474C7-CCED20-4DEC-E13A';
var datingApp           = 'https://dev.mojtajnisastanak.com';
var regRoute            = ''; // set custom reg route, default is /register-user-terminal
var emailOnly           = null; // 1 to activate email only mode, default null
var googleBtnText       = ''; // set custom text or default text if empty
var redirection         = false; // choose redirection to reg1 to finish registration 
var flow                = false; // set auto picking dating app
var cookieBar           = false; // show/hide cookie bar 
var storeData           = true; // choose to store data in local storage or not
var giftCredits         = null; // in this moment it will be null on frontend, maybe in the future we will give user some value to credit after register
var accId               = ''; // familySafe only
var accHash             = ''; // familySafe only
var domain              = 'domain.test'; // set custom domain name in tos or leave empty for deafault 
var documentTitle       = 'random'; // random for random title, set custom title or leave empty for default title


// company data - if string is empty, company will be NPG as default
var companyName         = '';
var companyAddress      = '';
var companyRegNumber    = '';
var complianceEmail     = '';


// choose which questions to render and reorder them at your will
var questions = {
    genderQ:            true,
    partnerForQ:        true,
    ageRangeQ:          true,        
    cityQ:              true,            
    relationShipQ:      true,    
    eyesColorQ:         true,       
    hairColorQ:         true,       
    skinColorQ:         true,       
    physiqueLookQ:      true,    
    heightQ:            true,          
    weightQ:            true,
    aboutQ:             true,
    phoneQ:             true,
    userPassQ:          true,        
    ageQ:               true,             
    redirectStep:       true,             
    emailQ:             true,           
    thanksQ:            true,          
    finalQ:             true,           
}