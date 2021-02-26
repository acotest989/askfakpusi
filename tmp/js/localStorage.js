if (LSdata !== null) {

    if (LSdata.pageId === pageId) {

        function loadGenders() {
            let checkedGender = LSdata.gender;
            let checkedLookingFor = LSdata.lookingFor;
            $('#qGender .radio').removeClass('checked activemale activefemale');
            $('.iAm input[value="' + checkedGender + '"]').prop('checked', true)
                .parent().addClass('checked active' + checkedGender);
            $('.looking input[value="' + checkedLookingFor + '"]').prop('checked', true)
                .parent().addClass('checked active' + checkedLookingFor);
        }

        function loadUserAndPass() {
            user.val(LSdata.username);
            pass.val(LSdata.password);
        }

        function loadAgeAndEmail() {
            age.val(LSdata.age);
            email.val(LSdata.email);
        }

        function loadAgeRange() {
            let loadedMin = Number(LSdata.ageRange.slice(0, 2));
            let loadedMax = Number(LSdata.ageRange.slice(-2));
            rangeMin.val(loadedMin);
            rangeMax.val(loadedMax);
        }

        function loadCity() {
            city.val(LSdata.city);
        }

        function loadReladtionShip() {
            let checkedVal = LSdata.relationShip;
            $('input[value="' + checkedVal + '"]').prop('checked', true)
                .parent().addClass('checked');
        }

        function loadEyesColor() {
            let checkedVal = LSdata.eyesColor;
            $('#qEyesColor input[value="' + checkedVal + '"]').prop('checked', true)
                .parent().addClass('checked');
        }

        function loadHairColor() {
            let checkedVal = LSdata.hairColor;
            $('#qHairColor input[value="' + checkedVal + '"]').prop('checked', true)
                .parent().addClass('checked');
        }

        function loadSkinColor() {
            let checkedVal = LSdata.skinColor;
            $('#qSkinColor input[value="' + checkedVal + '"]').prop('checked', true)
                .parent().addClass('checked');
        }

        function loadPhysiqueLook() {
            let checkedVal = LSdata.physiqueLook;
            $('#qPhysiqueLook input[value="' + checkedVal + '"]').prop('checked', true)
                .parent().addClass('checked');
        }

        function loadHeight() {
            height.val(LSdata.height);
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
            let currentStep = LSdata.step;
            i = currentStep.substring(4) - 1;

            showBtns(i);
            showDots(i);
            showSteps(i);
            progressBar();

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