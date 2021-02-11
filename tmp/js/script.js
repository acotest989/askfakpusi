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

let regRoute = redirection ? '/reg1' : '/register-user-presell';


const generateApiHash = () => {
   const d = new Date();
   const currentDate = [d.getFullYear(), (d.getMonth() + 1), d.getDate()].join('-') + 'UTC';
   const timestamp = Date.parse(currentDate);
   return md5('FUKSTERIX_API_HASH_' + timestamp.toString());
}
const apiHash = generateApiHash();


let params = '';
const datingAppFetch = "https://rdtrak.com/get/1zbU9EAOQrAWMPXeA1FJMHx4fM7DcqIFJAHybmal9ldqVq0=/portal.php";

function fetchingURL(data) {
    let fetchedURL = data;
    fetchedURL = fetchedURL.substring(0, fetchedURL.indexOf('?'));
    datingApp = fetchedURL;
    userData.datingApp = datingApp;
    saveToLS();
    params = data.split('?').pop();
}


document.addEventListener('click', function() {
    if (flow && datingApp === 'https://dev.mojtajnisastanak.com') {
        fetch(datingAppFetch, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache'
            })
            .then(response => response.text())
            .then(data => fetchingURL(data));
    }
});


function showBtns() {
   i === steps.length - 1 ? next.hide() : next.show();
   i === 0 ? back.hide() : back.show();
}


function renderDots() {
   // let dotsCount = steps.length;
   let dotsCount = steps.length - 3;
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
      stepBtns.hide();
      stepDots.hide();
   } else {
      stepBtns.show();
      stepDots.show();
   }
}
showDots();


function showSteps() {
   steps.hide();
   $(steps[i]).show();
   userData.step = 'step' + (i + 1);
   userData.question = $('.steps:visible').attr('id');
}


function hideTitle() {
   if ($('#qGender').is(':visible')) {
      regTitle.show();
   } else {
      regTitle.hide();
   }
} hideTitle();


function progressBar() {
   const progress = $('#progress');
   const percentage = $('#percentage');
   const allSteps = steps.length;
   let currentStep = userData.step.substring(4) - 1;
   let width = (100 / dots.length) * currentStep;
   progress.css('width', width + '%');
   progress.css('transition', '0.5s');
   percentage.text(Math.floor(width) + '%');
   width === 0 ? percentage.css('background', 'transparent') : percentage.css('background', '#62d182');
   if (width > 99) progress.hide();
}
progressBar();


function cookieAgree() {
   const cookieOverlay = $('#cookieOverlay');
   $(document).on('click', '#agree', function () {
      $('#cookieOverlay').fadeOut(200);
      userData.agree = true;
      saveToLS();
   });
   userData.agree ? cookieOverlay.hide() : cookieOverlay.show();
}
cookieAgree();


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
         saveToLS();
         toReg1();
      }
   });
   $(document).on('click', '#stepBack', function () {
      if (i > 0) {
         i--;
         showElems();
         saveToLS();
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
      });
      i = 1;
      return i;
   }
}
pickGender();


function ageRangeInit() {
   $("#slider-range").slider({
      range: true,
      min: 18,
      max: 99,
      values: [18, 45],
      slide: function (event, ui) {
         rangeMin.val(ui.values[0]);
         rangeMax.val(ui.values[1]);
         minBaloon.text(ui.values[0]);
         maxBaloon.text(ui.values[1]);
      }
   });

   const minBaloon = $('#slider-range > span:nth-child(2)');
   const maxBaloon = $('#slider-range > span:nth-child(3)');
   let minVal = $("#slider-range").slider("values", 0);
   let maxVal = $("#slider-range").slider("values", 1);

   rangeMin.val(minVal);
   rangeMax.val(maxVal);
   minBaloon.text(minVal);
   maxBaloon.text(maxVal);

   $('#rangeMin, #rangeMax').on('input', function () {
      let fieldLength = $(this).val().length;
      if (fieldLength <= 2) {
         return true;
      } else {
         let str = $(this).val();
         str = str.substring(0, str.length - 1);
         $(this).val(str);
      }
   });

   $('#rangeMin, #rangeMax').on('keyup', function () {
      let currentMin = $('#rangeMin').val();
      let currentMax = $('#rangeMax').val();
      minBaloon.text(currentMin);
      maxBaloon.text(currentMax);

      $("#slider-range").slider({
         values: [currentMin, currentMax],
         slide: function (event, ui) {
            rangeMin.val(ui.values[0]);
            rangeMax.val(ui.values[1]);
            minBaloon.text(ui.values[0]);
            maxBaloon.text(ui.values[1]);
         }
      });
   });

   $('#rangeMin, #rangeMax').change(function () {
      let changedMin = $('#rangeMin').val();
      let changedMax = $('#rangeMax').val();
      minBaloon.text(changedMin);
      maxBaloon.text(changedMax);
      if (changedMin < 18) {
         $('#rangeMin').val(18);
         $("#slider-range").slider({
            values: [18, changedMax],
            slide: function (event, ui) {
               rangeMin.val(ui.values[0]);
            }
         });
      } else if (changedMin > 84) {
         $('#rangeMin').val(84);
         $("#slider-range").slider({
            values: [84, changedMax],
            slide: function (event, ui) {
               rangeMin.val(ui.values[0]);
            }
         });
      }
      if (changedMax < 33) {
         $('#rangeMax').val(33);
         $("#slider-range").slider({
            values: [changedMin, 33],
            slide: function (event, ui) {
               rangeMax.val(ui.values[1]);
            }
         });
      }
   });
}
ageRangeInit();


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
      if (user.val() === '') {
         user.attr('placeholder', enterName)
            .addClass('error');
      } else if (user.val().length < 5) {
         user.val('')
            .attr('placeholder', minChar)
            .addClass('error');
      } else if (user.val().length > 15) {
         user.val('')
            .attr('placeholder', maxChar)
            .addClass('error');
      } else {
         return true;
      }
   }
}


function checkUser() {
   loader.fadeIn(200);
   let userName = user.val();
   let bool = false;
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
            user.removeClass('error');
            userData.username = user.val();
            loader.fadeOut(200);
            bool = true;
         } else {
            user.val('')
               .attr('placeholder', userExists)
               .addClass('error');
            loader.fadeOut(200);
            bool = false;
         }
      },
      error: function () {
         console.log('An error occurred, please try again!');
      }
   });
   return bool;
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
         if (validateUser() && checkUser()) {
            return i++;
         }
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


function checkEmail() {
   loader.fadeIn(200);
   const regx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   let emailVal = email.val();
   let res = regx.test(emailVal);
   if (res) {
      validateMyEmail();
   } else {
      email.val('')
         .attr('placeholder', enterValidEmail)
         .addClass('error');
      loader.fadeOut(200);
   }
   return res;
}


function validateMyEmail() {
   loader.fadeIn(200);
   let bool = false;
   let url = 'https://validatemy.email/validate.php?s=xnMvus2zxvPgSG2YRQmwa3sK&e=' + email.val();
   $.ajaxSetup({
      async: false
   });
   $.getJSON(url, function (data) {
      if (data.email === 'valid' && data.provider === 'valid') {
         checkIfEmailExists();
         bool = true;
      } else {
         email.val('')
            .attr('placeholder', emailNotValid)
            .addClass('error');
         loader.fadeOut(200);
         bool = false;
      }
   });
   return bool;
}


function checkIfEmailExists() {
   loader.fadeIn(200);
   let emailVal = email.val();
   let bool = false;
   $.ajax({
      async: false,
      type: 'post',
      url: datingApp + '/check-email',
      headers: {},
      data: {
         'apikey': apiKey,
         'apihash': apiHash,
         'email': emailVal,
      },
      success: function (res) {
         if (res) {
            userData.email = email.val();
            email.removeClass('error');
            loader.fadeOut(200);
            bool = true;
            // i++;
            register();
         } else {
            email.val('')
               .attr('placeholder', emailExists)
               .addClass('error');
            loader.fadeOut(200);
            bool = false;
         }
      },
      error: function () {
         console.log('An error occurred, please try again!');
      }
   });
   return bool;
}


function sendData() {	
   loader.fadeIn(200);	
   !redirection ? data = {	
      about: "",	
      age: Number(userData.age),	
      aged: (3)[3, 4, 5],	
      apihash: apiHash,	
      apikey: apiKey,	
      city: userData.city,	
      credits: null,	
      email: userData.email,	
      eyes: 5202,	
      forwhat: null,	
      hair: 5401,	
      height: 5503,	
      lookingfor: userData.lookingFor,	
      mobilephone: "",	
      physic: 5902,	
      presell_value: 0,	
      relationship: 6751,	
      sex: userData.gender,	
      skintone: 6302,	
      user_type: userType,	
      username: userData.username,	
      userpass: userData.password,	
      validmail: 1,	
      weigh: null,	
   }:
   data = {
      apikey: apiKey,
      apihash: apiHash,
      action: 'REGISTER',
      regtype: 1,
      email: userData.email,
      password: null,
      userRegType: 0,
      validmail: 1,
      l_hash_ccp1004: null,
      _tid: null,
      _uid: null,
      _params: null,
      fixEmail: 1,
   }
   userData.gender === 'male' ? data.sex = 1 : data.sex = 2;	
   userData.lookingFor === 'male' ? data.lookingfor = 1 : data.lookingfor = 2;	
   $.ajax({	
      type: 'post',	
      url: datingApp + regRoute,	
      headers: {},	
      data: data,	
      success: function (res) {	
         if (redirection) {
            window.location.href = datingApp + '?loginid=' + res;
            return;
         }
         if (res[0] === "SUCCESS") {	
            i++;	
            finalStep();	
            showSteps();	
            saveToLS();	
            loader.fadeOut(200);	
            // rapid conversion
            // if(window._cI) $('body').append(_cI(1, '', true));
            window.location.href = datingApp + '/?loginid=' + res[1] + '&_&nmr=1';	
         } else if (res[0] === "SUCCESSES") {	
            i++;	
            finalStep();	
            showSteps();	
            saveToLS();	
            loader.fadeOut(200);	
         } else if (res[0] === "INVALID EMAIL") {	
            console.log('Email već postoji!');	
         }	
      },	
      error: function () {	
         console.log('An error occurred, please try again!');	
      }	
   });
} 


function validateEmail() {
   loader.fadeIn(200);
   let qAgeEmail = $('#qEmail').is(':visible');
   if (qAgeEmail) {
      stepDots.hide();
      stepBtns.hide();
      if (email.val() === '') {
         email.attr('placeholder', enterEmail)
            .addClass('error');
            loader.fadeOut(200);
      } else {
         loader.fadeIn(200);
         checkEmail();
      }
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
   for (let i = 140; i <= 220; i++) {
      const el = '<option value="' + i + ' cm">' + i + ' cm</option>';
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
         $(this).removeClass('error');
         return i++;
      };
   }
}


function thanksStep() {
   if (thanks.is(':visible')) {
      i++;
      showSteps();
      saveToLS();
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


function register() {
   if (checkTerms()) {
      loader.fadeIn(200);
      sendData();
   } else {
      $('#termsCheck .checkbox').addClass('error');
      $('.condition').css('font-weight', 'bold');
   }
}
// regBtn.click(register);
regBtn.click(validateEmail);


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


const array = [city, relationShip, eyesColor, hairColor, skinColor, physiqueLook, height];
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
      $('#stepDots, #stepBtns').remove()
   }
}
toReg1();

// custom steps moving
function moveCustomSteps() {
   if ($('.customSteps').is(':visible')) {
      return i++;
   }
}

