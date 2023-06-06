let admission2022Btn = document.getElementById('2022Statics');
let admission2021Btn = document.getElementById('2021Statics');
let admission2020Btn = document.getElementById('2020Statics');
let admission2019Btn = document.getElementById('2019Statics');
let admission2018Btn = document.getElementById('2018Statics');

let view2022 = document.getElementById('2022View');
let view2021 = document.getElementById('2021View');
let view2020 = document.getElementById('2020View');
let view2019 = document.getElementById('2019View');
let view2018 = document.getElementById('2018View');
let option = document.getElementById('selectedOption');

view2021.classList.add('display');
view2020.classList.add('display');
view2019.classList.add('display');
view2018.classList.add('display');

function admissionProcess() {
    let getValue = option.value;
    console.log(getValue);
    if (getValue === admission2021Btn.value) {
        view2021.classList.remove('display');
        view2022.classList.add('display');
        view2020.classList.add('display');
        view2019.classList.add('display');
        view2018.classList.add('display');
    }

    else if (getValue === admission2022Btn.value) {
        view2022.classList.remove('display');
        view2021.classList.add('display');
        view2020.classList.add('display');
        view2019.classList.add('display');
        view2018.classList.add('display');
        view2017.classList.add('display');
    }

    else if (getValue === admission2020Btn.value) {
        view2020.classList.remove('display');
        view2019.classList.add('display');
        view2018.classList.add('display');
        view2021.classList.add('display');
        view2022.classList.add('display');
    }


    else if (getValue === admission2019Btn.value) {
        view2019.classList.remove('display');
        view2020.classList.add('display');
        view2018.classList.add('display');
        view2021.classList.add('display');
        view2022.classList.add('display');
    }

    else if (getValue === admission2018Btn.value) {
        view2018.classList.remove('display');
        view2020.classList.add('display');
        view2019.classList.add('display');
        view2021.classList.add('display');
        view2022.classList.add('display');
    };


};

