let pageId = md5(location.host + location.pathname);
let userData = {
   userType: userType,
   question: 'qGender',
   step: 'step1',
   gender: 'male',
   lookingFor: 'female',
   ageRange: '18 - 45',
   username: '',
   password: '',
   age: '',
   email: '',
   city: '',
   relationShip: '',
   eyesColor: '',
   hairColor: '',
   skinColor: '',
   physiqueLook: '',
   height: '',
   datingApp: '',
   pageId: pageId,
};

function setLS() {
   localStorage.setItem(pageId, JSON.stringify(userData));
}
function readLS(key) {
   let value = localStorage.getItem(key);
   data = JSON.parse(value);
   return data;
}
function updateLS(key, value) {
   localStorage.setItem(key, JSON.stringify(value));
}
let LSdata = readLS(pageId);

let i = 0;
const stepBtns = $('#stepBtns');
const next = $("#nextStep");
const back = $("#stepBack");
const regTitle = $("#regTitle");
const steps = $('.steps');
const stepDots = $('#stepDots');
// const dots = $('.dots');
const dotEl = '<div class="dots"></div>';
const user = $('#username');
const pass = $('#password');
const rangeMin = $('#rangeMin');
const rangeMax = $('#rangeMax');
const age = $('#age');
const email = $('#email');
const allCities = { HR: ["Zagreb", "Split", "Rijeka", "Osijek", "Zadar", "Slavonski Brod", "Pula", "Karlovac", "Sisak", "Dubrovnik", "Varaždin", "Šibenik", "Velika Gorica", "Vinkovci", "Vukovar", "Bjelovar", "Đakovo", "Požega", "Čakovec", "Knin", "Virovitica", "Metković", "Rovinj", "Makarska"], HU: ["Kaposvár", "Miskolc", "Debrecen", "Székesfehérvár", "Szeged", "Kecskemét", "Szekszárd", "Zalaegerszeg", "Nyíregyháza", "Budapest", "Győr", "Pécs", "Gödölló", "Szombathely", "Baja", "Szolnok", "Tatabánya", "Érd", "Veszprém", "Békéscsaba"], CZ: ["Liberec", "Plzeň", "Ostrava", "Praha", "Pardubice", "Olomouc", "Hradec Králové", "Havířov", "Kladno", "Zlín", "Brno", "Most", "Opava", "Frýdek-Místek", "Karviná", "Jihlava", "Děčín", "Teplice", "Karlovy Vary", "Chomutov"], SK: ["Nitra", "Bratislava", "Banská Bystrica", "Prešov", "Michalovce", "Trnava", "Poprad", "Prievidza", "Trenčín", "Žilina", "Košice", "Zvolen", "Považská Bystrica", "Nové Zámky", "Humenné", "Levice", "Komárno", "Bardejov", "Lučenec", "Čadca"], RS: ["Valjevo", "Novi Sad", "Jagodina", "Lajkovac", "Čačak", "Zaječar", "Kragujevac", "Niš", "Subotica", "Beograd", "Kraljevo", "Vranje", "Gornji Milanovac", "Kruševac", "Leskovac", "Loznica", "Novi Pazar", "Pančevo", "Smederevo", "Užice"], RO: ["Brașov", "Timișoara", "Galați", "Cluj-Napoca", "Oradea", "Brăila", "Ploiești", "Bacău", "Iași", "București", "Craiova", "Constanța", "Arad", "Pitești", "Sibiu", "Buzău", "Botoșani", "Satu Mare", "Suceava", "Focșani"], PT: ["Almada", "Serpa", "Braga", "Amadora", "Rio Tinto", "Coimbra", "Ponta Delgada", "Abrantes", "Guimarães", "Maia", "Vila Nova de Gaia", "Mêda", "Porto", "Funchal", "Odivelas", "Setúbal", "Queluz", "Barreiro", "Aveiro", "Viseu"], FI: ["Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu", "Turku", "Jyväskylä", "Lahti", "Kuopio", "Kouvola", "Pori", "Joensuu", "Lappeenranta", "Hämeenlinna", "Vaasa", "Rovaniemi", "Seinäjoki", "Mikkeli", "Kotka", "Salo"], EE: ["Kuressaare", "Tartu", "Maardu", "Haapsalu", "Kisumu", "Kohtla-Järve", "Sillamäe", "Rapla", "Pärnu", "Viljandi", "Narva", "Tallinn", "Võru", "Valga", "Jõhvi", "Keila", "Tapa", "Türi", "Paide", "Põlva"], LT: ["Klaipėda", "Vilnius", "Kaunas", "Panevėžys", "Telšiai", "Šiauliai", "Šilutė", "Alytus", "Marijampolė", "Jonava", "Rokiškis", "Utena", "Kėdainiai", "Tauragė", "Ukmergė", "Visaginas", "Plungė", "Kretinga", "Radviliškis", "Palanga"], LV: ["Valmiera", "Liepāja", "Jelgava", "Jūrmala", "Jēkabpils", "Ventspils", "Daugavpils", "Rēzekne", "Talsi", "Tukums", "Rīga", "Dobele", "Salaspils", "Cēsis", "Ogre", "Kuldīga", "Olaine", "Saldus", "Sigulda", "Talsi"], GR: ["Λάρισα", "Πειραιάς", "Πάτρα", "Ηράκλειο", "Αθήνα", "Βόλος", "Πύργος", "Θεσσαλονίκη", "Κρήτη", "Ιωάννινα", "Καλαμάτα", "Δράμα", "Χανιά", "Τρίκαλα", "Κομοτηνή", "Χαλκίδα", "Αλεξανδρούπολη", "Ξάνθη", "Κατερίνη", "Αγρίνιο"], BG: ["Стара Загора", "София", "Пазарджик", "Пловдив", "Перник", "Добрич", "Русе", "Сливен", "Видин", "Варна", "Плевен", "Бургас", "Шумен", "Хасково", "Ямбол", "Пазарджик", "Благоевград", "Велико Търново", "Враца", "Габрово"], SI: ["Bled", "Maribor", "Koper", "Brežice", "Kranj", "Velenje", "Sežana", "Novo mesto", "Vrhnika", "Ljubljana", "Celje", "Laško", "Ptuj", "Trbovlje", "Kamnik", "Jesenice", "Nova Gorica", "Domžale", "Škofja Loka", "Izola"], EN: ["London", "Los Angeles",] };
const city = $('#city');
const relationShip = $('input[name=relationShip]');
const eyesColor = $('input[name=eyesColor]');
const hairColor = $('input[name=hairColor]');
const skinColor = $('input[name=skinColor]');
const physiqueLook = $('input[name=physiqueLook]');
const height = $('#height');
const thanks = $('#thanks');
const regStep = $('#regStep');
const loader = $('#loader');
const terms = $('#terms');
const regBtn = $('#regBtn');
const okBtn = $('#okBtn');
const agree = $('#agree');

const rangeError = $('#qAgeRange .errorMsg');
const relShipError = $('#qRelationShip .errorMsg');
const eyesColorError = $('#qEyesColor .errorMsg');
const hairColorError = $('#qHairColor .errorMsg');
const skinColorError = $('#qSkinColor .errorMsg');
const physiqueLookError = $('#qPhysiqueLook .errorMsg');


function generateApiHash() {
   const d = new Date();
   const currentDate = [d.getFullYear(), (d.getMonth() + 1), d.getDate()].join('-') + 'UTC';
   const timestamp = Date.parse(currentDate);
   return md5('FUKSTERIX_API_HASH_' + timestamp.toString());
}
const apiHash = generateApiHash();


function getParams(key, url) {
   let params = location.search.substring(1);
   if (url !== undefined) {
      params = url.split('?').pop();
   }
   if (!params) return;
   let json = '{"' + params.replace(/&/g, '","').replace(/=/g, '":"') + '"}';
   let decodedJson = decodeURIComponent(json);
   let obj = JSON.parse(decodedJson);
   return key !== undefined ? obj[key] : obj;
}


function getSource() {
   const sources = {
      mstorm: 'mailstorm',
      yamads: 'yamads',
      kukuriku: 'rapidtrack',
      rdtrk: 'rapidtrack',
      adwords: 'adwords',
   }
   let key = getParams('utm_source') || getParams('traffic_source');
   let source = sources[key];
   return source;
}

const allRdtrak = {
   adult: {
       HR: 'https://rdtrak.com/get/1zbU9EAOQrAWMPXeA1FJMHx4fM7DcqIFJAHybmal9ldqVq0=/portal.php',
       CZ: 'https://rdtrak.com/get/7vi9vrzqiybF27zGHKqAmnx4fLxmAw36fK7pqwi85gSu3e4=/portal.php',
       EE: 'https://rdtrak.com/get/tqbIkD7tgWTalKlj3xPPH3x4fL5STenfsDNRordh6lfcVWU=/portal.php',
       FI: 'https://rdtrak.com/get/CL0O6FJJaqOX3srIUadJzHx4fJ2Uej6tqsVQWH2yd0BfVSI=/portal.php',
       GR: 'https://rdtrak.com/get/jx4BbgvigqpoGnKaBpzUQHx4fAkdEtCcJkOG99qX33edHpI=/portal.php',
       HU: 'https://rdtrak.com/get/yHUKhuDzia3uWAWbHg0wvnx4fJLB41apApTWbRszO7zDzk8=/portal.php',
       LT: 'https://rdtrak.com/get/lUCfWRLEQsKQSdx6fSKwPnx4fDS8tmwECKMpcPPlekuO1tg=/portal.php',
       LV: 'https://rdtrak.com/get/QLuIBP72UMyUdMEpnEVOl3x4fM5XEHPrTQQv0oY6ZJBCrqc=/portal.php',
       PL: 'https://rdtrak.com/get/awxfHdmackgM3rDjIbmgBnx4fLWsFOSKNjxJaL1kPbwmEjk=/portal.php',
       RO: 'https://rdtrak.com/get/9Wj2jHALMl9pjyvxpFxZ7nx4fKGTFNgNBt1szaagTDtMm74=/portal.php',
       SK: 'https://rdtrak.com/get/iokc6aZfNuymEWBBlugAUHx4fDef9xeSfA4Xqu40R2yW2JI=/portal.php',
       RS: 'https://rdtrak.com/get/ZgRgItm2HCVZiDGWLih26Hx4fCMLm2EwZYEIzZjFjXaP818=/portal.php',
       PT: 'https://rdtrak.com/get/q1SvzIyGhWjrnFnokSFecHx4fImzUseuomtAiYvvoIj5SME=/portal.php',
       DK: 'https://rdtrak.com/get/QZF7E0IDSbkDCrUqla35K3x4fDqPdJX2GaSIT4XHeMHWS24=/portal.php',
       NO: 'https://rdtrak.com/get/rt9SuSrhL9tN4E7Kz1IxU3x4fL0kgs22OKXQABuTxt2a6Ag=/portal.php',
       BG: 'https://rdtrak.com/get/1z3mGBcrWWX0tjLfc9WnYHx4fNlQKGaVAmgWB2Sapt56bUM=/portal.php',
       SI: 'https://rdtrak.com/get/TLetIY4IF2kzxJE42xwA33x4fDqoPcsuSD1qoB9USRIaWME=/portal.php',
   },
   familySafe: {
       HR: 'https://rdtrak.com/get/K84M6KSWMy1ro5v5aRMvEXx4fNLnPtZLOrnUavAclZCs8EI=/portal.php',
       EE: 'https://rdtrak.com/get/aCgmO0FAnJEk07zp6ztOunx4fFx0XD2iJ7F6IJwITCQvJEg=/portal.php',
       GR: 'https://rdtrak.com/get/woc8eOklxesfJx5LDCjo0Hx4fMGAFcYyCo8qA4LvAsdtXUk=/portal.php',
       HU: 'https://rdtrak.com/get/mrtpgpdNEa48enljHN8PrHx4fI2IzAu0HRmzqsvsXvad0uY=/portal.php',
       LT: 'https://rdtrak.com/get/FXBf2t80YZhVhRMpuU4M1Xx4fKVvKWLMoeUQwTZJCBsyRIc=/portal.php',
       LV: 'https://rdtrak.com/get/pxPgB0Kf6Jtw30Rcv8o9u3x4fJZHOX4Quju4ACdnKtYi0RU=/portal.php',
       SK: 'https://rdtrak.com/get/rviL5d0Er2cASbAf2MoV0Xx4fNZj3qim7ZQU6Kw0MCxgWzE=/portal.php',
   }
}

const datingAppFetch = allRdtrak[contentType][cCode];

function fetchingURL(data) {
   let fetchedURL = data;
   fetchedURL = fetchedURL.substring(0, fetchedURL.indexOf('?'));
   datingApp = fetchedURL;
   userData.datingApp = datingApp;
   userData.source = getSource();
   userData.email = getParams('eml');
   LSdata = userData;
   updateLS(pageId, LSdata);
}


document.addEventListener('click', function() {
   if (flow && datingApp === 'https://dev.mojtajnisastanak.com' && LSdata === null) {
      if(datingAppFetch === undefined) {
         alert('Rdtrack url not exist for this country! Redirection will be default!');
         userData.datingApp = datingApp;
         userData.source = getSource();
         userData.email = getParams('eml');
         LSdata = userData;
         updateLS(pageId, LSdata);
         return;
      }
      $.get(datingAppFetch, function (data) {
         fetchingURL(data);
      });
   }
});


function showBtns() {
   i === steps.length - 1 ? next.hide() : next.show();
   i === 0 ? back.hide() : back.show();
}


function renderDots() {
   // let dotsCount = steps.length;
   let dotsCount = redirection ? steps.length - 1 : steps.length - 3;
   for (let count = 0; count < dotsCount; count++) {
      stepDots.append(dotEl);
   }
}
renderDots();


let dots = $('.dots');
function showDots() {
   dots.removeClass('activeDot');
   $(dots[i]).addClass('activeDot');
   if (i >= steps.length - 3) {
      if (!redirection) {
         stepBtns.hide();
         stepDots.hide();
      }
   } else {
      stepBtns.show();
      stepDots.show();
   }
}
showDots();


function hideTitle() {
   if ($('#qGender').is(':visible')) {
      regTitle.show();
   } else {
      regTitle.hide();
   }
} hideTitle();


function showSteps() {
   steps.hide();
   $(steps[i]).show();
   hideTitle();
   // userData.step = 'step' + (i + 1);
   // userData.question = $('.steps:visible').attr('id');
   LSdata.step = 'step' + (i + 1);
   LSdata.question = $('.steps:visible').attr('id');
}


function progressBar() {
   const progress = $('#progress');
   const percentage = $('#percentage');
   let currentStep = LSdata === null ? userData.step.substring(4) - 1 : LSdata.step.substring(4) - 1;
   let width = (100 / dots.length) * currentStep;
   progress.css('width', width + '%');
   progress.css('transition', '0.5s');
   percentage.text(Math.floor(width) + '%');
   width === 0 ? percentage.css('background', 'transparent') : percentage.css('background', '#62d182');
   if (width > 99) progress.hide();
}
progressBar();


function cookieAgree() {
   if (LSdata === null) {
      userData.agree = true;
      setLS();
      $('#cookieOverlay').fadeOut(200);
   }
   if (LSdata !== null && LSdata.agree === undefined) {
      LSdata.agree = true;
      updateLS(pageId, LSdata);
      $('#cookieOverlay').fadeOut(200);
   }
}
if (LSdata !== null && LSdata.agree === true) {
   $('#cookieOverlay').hide();
}
$(document).on('click', '#agree', function () {
   cookieAgree();
});


function showElems() {
   showBtns();
   showDots();
   showSteps();
   hideTitle();
   progressBar();
}


function moveSteps() {
   $(document).on('click', '#nextStep', function () {
      if (i < steps.length - 1) {
         pickGender();
         pickAgeRange();
         validateUser();
         validatePass();
         validateAge();
         // validateEmail();
         validateCity();
         validateRelationShip();
         validateEyesColor();
         validateHairColor();
         validateSkinColor();
         validatePhysiqueLook();
         validateHeight();
         moveCustomSteps();

         showElems();
         // setLS();
         updateLS(pageId, LSdata);
         toReg1();
         updateEmail();
      }
   });
   $(document).on('click', '#stepBack', function () {
      if (i > 0) {
         i--;
         showElems();
         // setLS();
         updateLS(pageId, LSdata);
      }
   });
}
moveSteps();


function pickGender() {
   let qGender = $('#qGender').is(':visible');
   if (qGender) {
      $(document).on('click', '#qGender .radio', function () {
         $(this).siblings().removeClass('checked activemale activefemale');
         if ($(this).children('input').val() === 'male') {
            $(this).addClass('checked activemale')
         } else {
            $(this).addClass('checked activefemale')
         }
         userData.gender = $('input[name=gender]:checked').val();
         userData.lookingFor = $('input[name=lookingFor]:checked').val();
         if (LSdata !== null) {
            LSdata.gender = $('input[name=gender]:checked').val();
            LSdata.lookingFor = $('input[name=lookingFor]:checked').val();
         }
      });
      i = 1;
      return i;
   }
}
pickGender();


function pickAgeRange() {
   let qAgeRange = $('#qAgeRange').is(':visible');
   if (qAgeRange) {
      if (rangeMin.val() === '' && rangeMax.val() === '') {
         rangeMin.addClass('error');
         rangeMax.addClass('error');
         rangeError.show().text(chooseRange);
      } else if (Number(rangeMin.value) < 18 || Number(rangeMax.value) > 99) {
         rangeMin.addClass('error');
         rangeMax.addClass('error');
         rangeError.show().text(rangeMinMax);
      } else {
         rangeMin.removeClass('error');
         rangeMax.removeClass('error');
         rangeError.hide().text('');
         userData.ageRange = rangeMin.val() + ' - ' + rangeMax.val();
         LSdata.ageRange = rangeMin.val() + ' - ' + rangeMax.val();
         return i++;
      }
   }
}


function delay(callback, ms) {
   let timer = 0;
   return function () {
      let context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
         callback.apply(context, args);
      }, ms || 0);
   }
}


function validateUser() {
   let qUserPass = $('#qUserPass').is(':visible');
   if (qUserPass) {
      let userVal = user.val();
      if (userVal === '') {
         user.attr('placeholder', enterName)
            .addClass('error');
      } else if (userVal.length < 5) {
         user.val('')
            .attr('placeholder', minChar)
            .addClass('error');
      } else if (userVal.length > 15) {
         user.val('')
            .attr('placeholder', maxChar)
            .addClass('error');
      } else {
         checkUser();
      }
   }
}


function checkUser() {
   loader.fadeIn(200);
   let userName = user.val();
   $.ajax({
      async: false,
      type: 'post',
      url: datingApp + '/check-username',
      headers: {},
      data: {
         'apikey': apiKey,
         'apihash': apiHash,
         'username': userName,
      },
      success: function (res) {
         if (res) {
            user.removeClass('error');``
            userData.username = user.val();
            LSdata.username = user.val();
            loader.fadeOut(200);
            i++
         } else {
            user.val('')
               .attr('placeholder', userExists)
               .addClass('error');
            loader.fadeOut(200);
         }
      },
      error: function (err) {
         console.log('An error:' + err + ' occurred, please try again!');
      }
   });
}


// user.keyup(delay(function(e) {
//    checkUser();
//    // delay for AJAX call 
// }, 600));


function validatePass() {
   let qUserPass = $('#qUserPass').is(':visible');
   if (qUserPass) {
      if (pass.val() === '') {
         pass.attr('placeholder', enterPass)
            .addClass('error');
      } else if (pass.val().length < 5) {
         pass.val('')
            .attr('placeholder', minChar)
            .addClass('error');
      } else if (pass.val().length > 15) {
         pass.val('')
            .attr('placeholder', maxChar)
            .addClass('error');
      } else {
         pass.removeClass('error');
         userData.password = pass.val();
         LSdata.password = pass.val();
      }
   }
}


function addAge() {
   for (let i = 18; i < 100; i++) {
      const el = '<option value="' + i + '">' + i + '</option>';
      age.append(el);
      rangeMin.append(el);
      rangeMax.append(el);
   }
}
addAge();


function validateAge() {
   let qAgeEmail = $('#qAge').is(':visible');
   if (qAgeEmail) {
      if (age.val() === '') {
         age.addClass('error');
         $('select.error').css('color', 'red');
         $('#age > option:nth-child(1)').text(minAge);
      } else {
         userData.age = age.val();
         $(this).removeClass('error');
         return i++;
      };
   }
}


function getCities() {
   let cities = allCities[cCode];
   $.each(cities, function (i, city) {
      $('#city').append('<option value="' + city + '">' + city + " </option>");
   });
}
getCities();


function validateCity() {
   let qCity = $('#qCity').is(':visible');
   if (qCity) {
      if (city.val() === '') {
         city.addClass('error');
         $('select.error').css('color', 'red');
         $('#city > option:nth-child(1)').text(pickCity);
      } else {
         userData.city = city.val();
         LSdata.city = city.val();
         $(this).removeClass('error');
         return i++;
      }
   }
}


function relationShipStatus() {
   let rlsRadio = $('#qRelationShip .radio');
   $(document).on('click', '#qRelationShip .radio', function () {
      $(this).addClass('checked')
         .siblings().removeClass('checked');

      let rlsStatus = $('input[name=relationShip]:checked').val();
      userData.relationShip = rlsStatus;
      LSdata.relationShip = rlsStatus;
      $('#qRelationShip .radio').removeClass('error');
      relShipError.hide();
   });
}
relationShipStatus();


function validateRelationShip() {
   let qRelationShip = $('#qRelationShip').is(':visible');
   if (qRelationShip) {
      if (!relationShip.is(':checked')) {
         $('#qRelationShip .radio').addClass('error');
         relShipError.show().text(pickRelShip);
      } else {
         $('#qRelationShip .radio').removeClass('error');
         relShipError.hide();
         return i++;
      }
   }
}


function eyesColors() {
   let eyesRadio = $('#qEyesColor .radio');
   $(document).on('click', '#qEyesColor .radio', function () {
      $(this).addClass('checked')
         .siblings().removeClass('checked');

      let eyesColor = $('input[name=eyesColor]:checked').val();
      userData.eyesColor = eyesColor;
      LSdata.eyesColor = eyesColor;
      $('#qEyesColor .radio').removeClass('error');
      eyesColorError.hide();
   });
}
eyesColors();


function validateEyesColor() {
   let qEyesColor = $('#qEyesColor').is(':visible');
   if (qEyesColor) {
      if (!eyesColor.is(':checked')) {
         $('#qEyesColor .radio').addClass('error');
         eyesColorError.show().text(pickEyesColor);
      } else {
         $('#qEyesColor .radio').removeClass('error');
         eyesColorError.hide();
         return i++;
      }
   }
}


function hairColors() {
   let hairRadio = $('#qHairColor .radio');
   $(document).on('click', '#qHairColor .radio', function () {
      $(this).addClass('checked')
         .siblings().removeClass('checked');

      let hairColor = $('input[name="hairColor"]:checked').val();
      userData.hairColor = hairColor;
      LSdata.hairColor = hairColor;
      $('#qHairColor .radio').removeClass('error');
      hairColorError.hide();
   });
}
hairColors();


function validateHairColor() {
   let qHairColor = $('#qHairColor').is(':visible');
   if (qHairColor) {
      if (!hairColor.is(':checked')) {
         $('#qHairColor .radio').addClass('error');
         hairColorError.show().text(pickHairColor);
      } else {
         $('#qHairColor .radio').removeClass('error');
         hairColorError.hide();
         return i++;
      }
   }
}


function skinColors() {
   let skinRadio = $('#qSkinColor .radio');
   $(document).on('click', '#qSkinColor .radio', function () {
      $(this).addClass('checked')
         .siblings().removeClass('checked');

      let skinColor = $('input[name=skinColor]:checked').val();
      userData.skinColor = skinColor;
      LSdata.skinColor = skinColor;
      $('#qSkinColor .radio').removeClass('error');
      skinColorError.hide();
   });
}
skinColors()


function validateSkinColor() {
   let qSkinColor = $('#qSkinColor').is(':visible');
   if (qSkinColor) {
      if (!skinColor.is(':checked')) {
         $('#qSkinColor .radio').addClass('error');
         skinColorError.show().text(pickSkinColor);
      } else {
         $('#qSkinColor .radio').removeClass('error');
         skinColorError.hide();
         return i++;
      }
   }
}


function physique() {
   let physiqueRadio = $('#qPhysiqueLook .radio');
   $(document).on('click', '#qPhysiqueLook .radio', function () {
      $(this).addClass('checked')
         .siblings().removeClass('checked');

      let physiqueLook = $('input[name=physiqueLook]:checked').val();
      userData.physiqueLook = physiqueLook;
      LSdata.physiqueLook = physiqueLook;
      $('#qPhysiqueLook .radio').removeClass('error');
      physiqueLookError.hide();
   });
}
physique();


function validatePhysiqueLook() {
   let qPhysiqueLook = $('#qPhysiqueLook').is(':visible');
   if (qPhysiqueLook) {
      if (!physiqueLook.is(':checked')) {
         $('#qPhysiqueLook .radio').addClass('error');
         physiqueLookError.show().text(pickPhysiqueLook);
      } else {
         $('#qPhysiqueLook .radio').removeClass('error');
         physiqueLookError.hide();
         return i++;
      }
   }
}


function addHeights() {
   for (let i = 140; i <= 220; i+=5) {
      const i2 = i + 5;
      const el = '<option value="' + i + '-' +  i2 + ' cm">' + i + '-' +  i2 + ' cm</option>';
      height.append(el);
   }
}
addHeights();


function validateHeight() {
   let qHeight = $('#qHeight').is(':visible');
   if (qHeight) {
      if (height.val() === '') {
         height.addClass('error');
         $('select.error').css('color', 'red');
         $('#height > option:nth-child(1)').text(pickHeight);
      } else {
         userData.height = height.val();
         LSdata.height = height.val();
         $(this).removeClass('error');
         return i++;
      };
   }
}


function thanksStep() {
   if (thanks.is(':visible')) {
      i++;
      showSteps();
      // setLS();
      updateLS(pageId, LSdata);
   }
}
okBtn.click(thanksStep);


const usersOnline = $('.onlineUsers');
function randNum(min, max) {
   return Math.floor(Math.random() * (max - min)) + min;
}
usersOnline.text(randNum(150000, 200000)).css('color', '#e22b4c');
const onlineUsersNum = randNum(150000, 200000);

function checkTerms() {
   let termsChecked = terms.is(':checked');
   if (termsChecked) {
      regBtn.css('background', '#3bc563')
      $('.checkbox').removeClass('error');
   } else {
      regBtn.css('background', '#62d182')
   }
   return termsChecked;
}
terms.change(checkTerms);


function finalStep() {
   $('#' + userData.userType).show();
   $('#usersMail').text(userData.email);
   $('.providerBox').hide();
   if (userData.email.includes("@gmail.com")) {
      $("#gmailBox").show();
   } else if (userData.email.includes("@yahoo")) {
      $("#yahooBox").show();
   } else if (userData.email.includes("@hotmail.com") || userData.email.includes("@outlook.com")) {
      $("#hotmailBox").show();
   }
}


function resetInputs() {
   $(".steps input").keydown(function () {
      $(this).removeClass('error');
   });
   $(".steps select").change(function () {
      $(this).removeClass('error').css('color', 'initial');
   });
}
resetInputs();


const array = [city, relationShip, eyesColor, hairColor, skinColor, physiqueLook, height, age];
for (let i = 0; i < array.length; i++) {
   const q = array[i];
   q.change(function () {
      next.click();
   });
}


// TOS show/hide
$(document).on('click', '#termsLink, #privacyLink', function (e) {
   if (e.target.id === 'termsLink') {
      $('body').append(getTermsContent);
      $('#terms_container').css('display', 'flex').hide().fadeIn(300);
   }
   if (e.target.id === 'privacyLink') {
      $('body').append(getPrivacyContent);
      $('#privacy_container').css('display', 'flex').hide().fadeIn(300);
   }
   $('.domain').text(datingApp.substring(8));
});

$(document).on('click', '.popup-terms-close-button, .popup-privacy-close-button', function (e) {
   if (e.target.className === 'popup-terms-close-button') {
      $('#terms_container').fadeOut(300);
      setTimeout(() => {
         $('#terms_container').remove();
      }, 500);
   }
   if (e.target.className === 'popup-privacy-close-button') {
      $('#privacy_container').fadeOut(300);
      setTimeout(() => {
         $('#privacy_container').remove();
      }, 500);
   }
});


// if redirection step is visible
function toReg1() {
   if($('#toReg1').is(':visible')) {
      $('#stepDots, #stepBtns').remove();
   }
}
toReg1();

$('#toReg1Btn').click(function(){
   let pageId2 = md5(location.host + location.pathname.replace('index', 'reg1'));
   updateLS(pageId2, LSdata);
   location.href = location.href.replace('index', 'reg1');
});


// custom steps moving
function moveCustomSteps() {
   if ($('.customSteps').is(':visible')) {
      return i++;
   }
}



