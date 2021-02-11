function saveToLS() {
    localStorage.setItem(pageId, JSON.stringify(userData));
}


function readLS(name) {
    let data = localStorage.getItem(name);
    data = JSON.parse(data);
    return data;
}
let localStr = readLS(pageId);

if (localStr !== null) {

    if (localStr.pageId === pageId) {

        function loadGenders() {
            let checkedGender = localStr.gender;
            let checkedLookingFor = localStr.lookingFor;
            $('#qGender .radio').removeClass('checked activemale activefemale');
            $('.iAm input[value="' + checkedGender + '"]').prop('checked', true)
                .parent().addClass('checked active' + checkedGender);
            $('.looking input[value="' + checkedLookingFor + '"]').prop('checked', true)
                .parent().addClass('checked active' + checkedLookingFor);
        }

        function loadUserAndPass() {
            user.val(localStr.username);
            pass.val(localStr.password);
        }

        function loadAgeAndEmail() {
            age.val(localStr.age);
            email.val(localStr.email);
        }

        function loadAgeRange() {
            let loadedMin = Number(localStr.ageRange.slice(0, 2));
            let loadedMax = Number(localStr.ageRange.slice(-2));
            rangeMin.val(loadedMin);
            rangeMax.val(loadedMax);
            $("#slider-range").slider({
                values: [loadedMin, loadedMax]
            })
            $('#slider-range > span:nth-child(2)').text(loadedMin);
            $('#slider-range > span:nth-child(3)').text(loadedMax);
        }

        function loadCity() {
            city.val(localStr.city);
        }

        function loadReladtionShip() {
            let checkedVal = localStr.relationShip;
            $('input[value="' + checkedVal + '"]').prop('checked', true)
                .parent().addClass('checked');
        }

        function loadEyesColor() {
            let checkedVal = localStr.eyesColor;
            $('#qEyesColor input[value="' + checkedVal + '"]').prop('checked', true)
                .parent().addClass('checked');
        }

        function loadHairColor() {
            let checkedVal = localStr.hairColor;
            $('#qHairColor input[value="' + checkedVal + '"]').prop('checked', true)
                .parent().addClass('checked');
        }

        function loadSkinColor() {
            let checkedVal = localStr.skinColor;
            $('#qSkinColor input[value="' + checkedVal + '"]').prop('checked', true)
                .parent().addClass('checked');
        }

        function loadPhysiqueLook() {
            let checkedVal = localStr.physiqueLook;
            $('#qPhysiqueLook input[value="' + checkedVal + '"]').prop('checked', true)
                .parent().addClass('checked');
        }

        function loadHeight() {
            height.val(localStr.height);
        }

        function loadThanks() {
            if (i >= steps.length - 3) {
                stepBtns.hide();
                stepDots.hide();
            } else {
                stepBtns.show();
                stepDots.show();
            }
        }

        function loadSteps() {
            let currentStep = localStr.step;
            i = currentStep.substring(4) - 1;

            showBtns(i);
            showDots(i);
            showSteps(i);
            progressBar();
            cookieAgree();

            loadGenders();
            loadUserAndPass();
            loadAgeAndEmail();
            loadAgeRange();
            loadCity();
            loadReladtionShip();
            loadEyesColor();
            loadHairColor();
            loadSkinColor();
            loadPhysiqueLook();
            loadHeight();
            loadThanks();
            finalStep();

            hideTitle();
            toReg1();
        }
        loadSteps();
    }
}