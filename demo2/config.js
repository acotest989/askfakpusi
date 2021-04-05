var userType            = 'soi';
var contentType         = 'familySafe'; // adult / familySafe
var apiKey              = 'AB930-9CA333-74474C7-CCED20-4DEC-E13A';
var datingApp           = 'https://dev.mojtajnisastanak.com';
var regRoute            = '/reg1';
var googleBtnText       = ''; // default text if empty
var redirection         = false;
var flow                = true;
var cookieBar           = false;
var storeSteps          = true;
var giftCredits         = null; // in this moment it will be null on frontend, maybe in the future we will give user some value to credit after register


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