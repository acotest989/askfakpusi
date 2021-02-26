const genderQ = use_genderQ ? `
            <div id="qGender" class="steps animated zoomIn">
                <div class="iAm questionHolder">
                    <label for="gender" class="questionText">${getText[5]}</label>
                    <label id="genderFemale" class="radio">
                        <input type="radio" name="gender" id="sexFemale" value="female">
                        ${getText[7]}
                    </label>
                    <label id="genderMale" class="radio activemale checked">
                        <input type="radio" name="gender" id="sexMale" value="male" checked>
                        ${getText[6]}
                    </label>
                </div>
                <div class="looking questionHolder">
                    <label for="lookingFor" class="questionText">${getText[8]}</label>
                    <label id="lookingFemale" class="radio activefemale checked">
                        <input type="radio" name="lookingFor" id="lookFemale" value="female" checked>
                        ${getText[7]}
                    </label>
                    <label id="lookingMale" class="radio">
                        <input type="radio" name="lookingFor" id="lookMale" value="male">
                        ${getText[6]}
                    </label>
                </div>
            </div>` : '';
const ageRangeQ = use_ageRangeQ ? `
            <div id="qAgeRange" class="steps animated zoomIn">
                <div class="questionHolder">
                    <label class="questionText" for="">${getText[32]}</label>
                    <br>
                    <small class="errorMsg"></small>
                    <div class="field selectRange">
                        <div class="h">
                            <div class="formFields">
                                <label>${getText[33]}</label>
                                <input id="rangeMin" type="number" name="valueMin" value="18">
                                <span>&</span>
                                <input id="rangeMax" type="number" name="valueMax" value="45">
                                <br>
                            </div>
                        </div>
                        <div id="slider-range"></div>
                    </div>
                </div>
            </div>` : '';
const ageRange2Q = use_ageRange2Q ? `
            <div id="qAgeRange" class="steps animated zoomIn">
                <div class="questionHolder">
                    <label class="questionText" for="">${getText[32]}</label>
                    <br>
                    <small class="errorMsg"></small>
                    <label class="questionText">${getText[33]}</label>
                    <div class="selectRange2">
                        <select id="rangeMin" name="valueMin"></select>
                        <span class="questionText">&</span>
                        <select id="rangeMax" name="valueMax">
                            <option value="45" selected>45</option>
                        </select>
                    </div>
                    <br>
                </div>
            </div>` : '';
const userPassQ = use_userPassQ && !redirection ? `
            <div id="qUserPass" class="steps animated zoomIn">
                <div class="questionHolder">
                    <label for="username" class="questionText">${getText[12]}</label>
                    <input type="text" name="username" id="username" placeholder="${getText[13]}">
                </div>
                <div class="questionHolder">
                    <label for="password" class="questionText">${getText[14]}</label>
                    <input type="password" name="password" id="password" placeholder="${getText[15]}">
                </div>
            </div>` : '';
const emailQ = use_emailQ && !redirection ? `          
            <div id="qEmail" class="steps animated zoomIn">
                <h2 id="usersOnline"><span class="onlineUsers"></span> ${getText[92]}</h2>
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
            </div>` : '';
const ageQ = use_ageQ ? `
            <div id="qAge" class="steps animated zoomIn">
                <div id="qAge" class="questionHolder">
                    <label for="age" class="questionText">${getText[16]}</label>
                    <select name="age" id="age">
                        <option value="">${getText[24]}</option>
                    </select>
                </div>
            </div>` : '';
const cityQ = use_cityQ ? `
            <div id="qCity" class="steps animated zoomIn">
                <div class="questionHolder">
                    <label for="city" class="questionText">${getText[36]}</label>
                    <select name="city" id="city">
                        <option value="">${getText[24]}</option>
                    </select>
                </div>
            </div>` : '';
const relationShipQ = use_relationShipQ ? `
            <div id="qRelationShip" class="steps animated zoomIn">
                <div class="questionHolder">
                    <label for="" class="questionText">${getText[38]}</label>
                    <br>
                    <small class="errorMsg"></small>
                    <div class="radioHolder">
                        <label for="single" class="radio">
                            <input type="radio" name="relationShip" value="single" id="single">
                            <span>${getText[39]}</span>
                        </label>
                        <label for="married" class="radio">
                            <input type="radio" name="relationShip" value="married" id="married">
                            <span>${getText[40]}</span>
                        </label>
                        <label for="divorced" class="radio">
                            <input type="radio" name="relationShip" value="divorced" id="divorced">
                            <span>${getText[41]}</span>
                        </label>
                        <label for="related" class="radio">
                            <input type="radio" name="relationShip" value="related" id="related">
                            <span>${getText[42]}</span>
                        </label>
                        <label for="complicated" class="radio">
                            <input type="radio" name="relationShip" value="complicated" id="complicated">
                            <span>${getText[43]}</span>
                        </label>
                        <label for="opened" class="radio">
                            <input type="radio" name="relationShip" value="opened" id="opened">
                            <span>${getText[44]}</span>
                        </label>
                    </div>
                </div>
            </div>` : '';
const eyesColorQ = use_eyesColorQ ? `
            <div id="qEyesColor" class="steps animated zoomIn">
                <div class="questionHolder">
                    <label for="" class="questionText">${getText[46]}</label>
                    <br>
                    <small class="errorMsg"></small>
                    <div class="radioHolder">
                        <label for="brown" class="radio">
                            <input type="radio" name="eyesColor" value="brown" id="brown">
                            <span>${getText[47]}</span>
                        </label>
                        <label for="blue" class="radio">
                            <input type="radio" name="eyesColor" value="blue" id="blue">
                            <span>${getText[48]}</span>
                        </label>
                        <label for="green" class="radio">
                            <input type="radio" name="eyesColor" value="green" id="green">
                            <span>${getText[49]}</span>
                        </label>
                        <label for="black" class="radio">
                            <input type="radio" name="eyesColor" value="black" id="black">
                            <span>${getText[50]}</span>
                        </label>
                    </div>
                </div>
            </div>` : '';
const hairColorQ = use_hairColorQ ? `
            <div id="qHairColor" class="steps animated zoomIn">
                <div class="questionHolder">
                    <label for="" class="questionText">${getText[52]}</label>
                    <br>
                    <small class="errorMsg"></small>
                    <div class="radioHolder">
                        <label for="black_" class="radio">
                            <input type="radio" name="hairColor" value="black" id="black_">
                            <span>${getText[53]}</span>
                        </label>
                        <label for="brown_" class="radio">
                            <input type="radio" name="hairColor" value="brown" id="brown_">
                            <span>${getText[54]}</span>
                        </label>
                        <label for="blue_" class="radio">
                            <input type="radio" name="hairColor" value="blue" id="blue_">
                            <span>${getText[55]}</span>
                        </label>
                        <label for="reddish" class="radio">
                            <input type="radio" name="hairColor" value="reddish" id="reddish">
                            <span>${getText[56]}</span>
                        </label>
                        <label for="brownish" class="radio">
                            <input type="radio" name="hairColor" value="brownish" id="brownish">
                            <span>${getText[57]}</span>
                        </label>
                        <label for="red" class="radio">
                            <input type="radio" name="hairColor" value="red" id="red">
                            <span>${getText[58]}</span>
                        </label>
                        <label for="gray" class="radio">
                            <input type="radio" name="hairColor" value="gray" id="gray">
                            <span>${getText[59]}</span>
                        </label>
                    </div>
                </div>
            </div>` : '';
const skinColorQ = use_skinColorQ ? `
            <div id="qSkinColor" class="steps animated zoomIn">
                <div class="questionHolder">
                    <label for="" class="questionText">${getText[61]}</label>
                    <br>
                    <small class="errorMsg"></small>
                    <div class="radioHolder">
                        <label for="dark" class="radio">
                            <input type="radio" name="skinColor" value="dark" id="dark">
                            <span>${getText[62]}</span>
                        </label>
                        <label for="bright" class="radio">
                            <input type="radio" name="skinColor" value="bright" id="bright">
                            <span>${getText[63]}</span>
                        </label>
                        <label for="tanned" class="radio">
                            <input type="radio" name="skinColor" value="tanned" id="tanned">
                            <span>${getText[64]}</span>
                        </label>
                        <label for="albino" class="radio">
                            <input type="radio" name="skinColor" value="albino" id="albino">
                            <span>${getText[65]}</span>
                        </label>
                    </div>
                </div>
            </div>` : '';
const physiqueLookQ = use_physiqueLookQ ? `
            <div id="qPhysiqueLook" class="steps animated zoomIn">
                <div class="questionHolder">
                    <label for="" class="questionText">${getText[67]}</label>
                    <br>
                    <small class="errorMsg"></small>
                    <div class="radioHolder">
                        <label for="niceFace" class="radio">
                            <input type="radio" name="physiqueLook" value="niceFace" id="niceFace">
                            <span>${getText[68]}</span>
                        </label>
                        <label for="youngLook" class="radio">
                            <input type="radio" name="physiqueLook" value="youngLook" id="youngLook">
                            <span>${getText[69]}</span>
                        </label>
                        <label for="curvy" class="radio">
                            <input type="radio" name="physiqueLook" value="curvy" id="curvy">
                            <span>${getText[70]}</span>
                        </label>
                        <label for="muscular" class="radio">
                            <input type="radio" name="physiqueLook" value="muscular" id="muscular">
                            <span>${getText[71]}</span>
                        </label>
                        <label for="gifted" class="radio">
                            <input type="radio" name="physiqueLook" value="gifted" id="gifted">
                            <span>${getText[71]}</span>
                        </label>
                    </div>
                </div>
            </div>` : '';
const heightQ = use_heightQ ? `
            <div id="qHeight" class="steps animated zoomIn">
                <div class="questionHolder">
                    <label for="height" class="questionText">${getText[74]}</label>
                    <select name="height" id="height">
                        <option value="">${getText[24]}</option>
                    </select>
                </div>
            </div>` : '';
const thanksQ = use_thanksQ && !redirection ? `
            <div id="thanks" class="steps animated zoomIn" style="display: none;">
                <h1 id="thanksTitle">${getText[76]}</h1>
                <img src="https://askfakpusi.netlify.app/tmp/img/thanks.png" alt="">
                <h2>${getText[77]}</h2>
                <div class="list">
                    <p><span class="checkMark">✓</span>${getText[78]}</span></p>
                    <p><span class="checkMark">✓</span>${getText[79]}</span></p>
                    <p><span class="checkMark">✓</span>${getText[80]}</span></p>
                    <p><span class="checkMark">✓</span>${getText[81]}</span></p>
                    <p><span class="checkMark">✓</span>${getText[82]}</span></p>
                    <p><span class="checkMark">✓</span>${getText[83]}</span></p>
                </div>
                <br>
                <button id="okBtn">${getText[102]}</button>
            </div>` : '';
const regStepQ = use_regStepQ ? `
            <div id="regStep" class="steps animated zoomIn" style="display: none;">
                <h2 id="usersOnline"><span class="onlineUsers"></span> ${getText[92]}</h2>
                <h2 style="display: none;">${getText[93]}</h2>
                <h2 id="acceptTerms">${getText[91]}</h2>
                <h2 id="womanWaiting">${getText[94]}</h2>
                <br>  
                <label for="terms" id="termsCheck">
                    <input type="checkbox" name="terms" id="terms">
                    <span class="checkbox"></span>
                </label>
                <span>${getText[84]} <span id="termsLink" data-link="#termsOfUse">${getText[85]}</span>${getText[86]}<span id="privacyLink" data-link="#privacy">${getText[87]}</span>. ${getText[88]}</span>
                <small class="condition">${getText[89]}</small>
                <br>  
                <button id="regBtn">${getText[90]}</button>
            </div>` : '';
const finalQ = use_finalQ && !redirection ? `
            <div id="final" class="steps animated zoomIn" style="display: none;">
                <div id="soi" style="display: none;">
                    <h2><span class="onlineUsers"></span> ${getText[92]}</h2>
                    <h2>${getText[94]}</h2>
                    <br>
                    <button id="redirectBtn">${getText[95]}</button>
                </div>
                <div id="doi" style="display: none">
                    <h2>${getText[96]}!</h2>
                    <p>${getText[97]}</p>
                    <p>${getText[98]}</p>
                    <p>${getText[99]}</p>
                    <h3 id="usersMail" class="blue"></h3>
                    <a href="https://mail.google.com/mail/u/0/#search/in%3Aanywhere" target="_blank">
                        <div id="gmailBox" class="providerBox">
                            <img src="https://askfakpusi.netlify.app/tmp/img/gmail.png">
                            <span>${getText[100]}</span>
                            <span class="usersMail"> gmail</span>
                        </div>
                    </a>
                    <a href="https://mail.yahoo.com/" target="_blank">
                        <div id="yahooBox" class="providerBox">
                            <img src="https://askfakpusi.netlify.app/tmp/img/yahoo.png">
                            <span>${getText[100]}</span>
                            <span class="usersMail"> yahoo</span>
                        </div>
                    </a>
                    <a href="https://outlook.live.com/mail/inbox" target="_blank">
                        <div id="hotmailBox" class="providerBox">
                            <img src="https://askfakpusi.netlify.app/tmp/img/hotmail.png">
                            <span>${getText[100]}</span>
                            <span class="usersMail"> hotmail</span>
                        </div>
                    </a>
                    <small class="condition">${getText[101]}</small>
                </div>
                <div id="reg1" style="display: none">
                    <h3>${getText[106]}</h3>
                </div>
            </div>` : '';

const redirectStep = redirection ? `
            <div id="toReg1" class="steps animated zoomIn">
                <div class="questionHolder">
                    <h1>Thank You.<h1>
                    <h3>Now you can see a list and pictures of women near you.</h3>
                    <br>
                    <h3>Click "Next" to complete the registration.</h3>
                </div>
                <br>
                <a href="">
                    <button id="redirectBtn">Next 〉<button>
                </a>
            </div>` : '';


const allQ = [
    redirectStep,
    genderQ,
    ageRangeQ,
    cityQ,
    relationShipQ,
    eyesColorQ,
    hairColorQ,
    skinColorQ,
    physiqueLookQ,
    heightQ,
    userPassQ,
    ageQ,
    emailQ,
    thanksQ,
    regStepQ,
    finalQ,
];