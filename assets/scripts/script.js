const form = document.forms.car_price;
const renaultMark = form.car_mark;
const carMark = document.querySelectorAll('select[name="car_mark"] > option');
const addModel = document.querySelector('.model');
let engine = document.querySelector('#engine');
const newCar = document.querySelector('#new_car');
const oldCar = document.querySelector('#old_car');
const btn = document.querySelector('.button');
let newModel = form.elements.new;
let oldModel = form.elements.old;
let ownersValue;
let arrResult = [];

//добавление выпадающего списка с моделями нужной марки
renaultMark.addEventListener('change', () => {
  let value = renaultMark.value;
  carMark.forEach(el => {
    if(value === 'renault') {
      addModel.innerHTML = '';
      let renaultModel = document.createElement('select');
      renaultModel.setAttribute('name', 'model');
      renaultModel.innerHTML = `<option>*Выберете модель</option>
      <option id="alaskan" value="800000">Alaskan</option>
      <option id="arkana" value="90000">Arkana</option>
      <option id="dokker" value="100000">Dokker</option>
      <option id="kangoo" value="110000">Kangoo</option>
      <option id="zoe" value="1200000">Zoe</option>`;
      addModel.appendChild(renaultModel);
    } else if(value === 'opel') {
      addModel.innerHTML = '';
      let opelModel = document.createElement('select');
      opelModel.setAttribute('name', 'model');
      opelModel.innerHTML = `<option>*Выберете модель</option>
      <option id="ampera" value="1000000">Ampera</option>
      <option id="cascada" value="1100000">Cascada</option>
      <option id="crossland" value="1200000">Crossland</option>
      <option id="insignia" value="1300000">Insignia</option>
      <option id="vivaro" value="1400000">Vivaro</option>`;
      addModel.appendChild(opelModel);
    }else if(value === 'mazda') {
      addModel.innerHTML = '';
      let mazdaModel = document.createElement('select');
      mazdaModel.setAttribute('name', 'model');
      mazdaModel.innerHTML = `<option>*Выберете модель</option>
      <option id="axela" value="1300000">Axela</option>
      <option id="cx-30" value="1400000">CX-30</option>
      <option id="cx-4" value="1500000">CX-4</option>
      <option id="mx-30" value="1600000">MX-30</option>
      <option id="tribute" value="1700000">Tribute</option>`;
      addModel.appendChild(mazdaModel);
    } else if(value === 'jaguar') {
      addModel.innerHTML = '';
      let jaguarModel = document.createElement('select');
      jaguarModel.setAttribute('name', 'model');
      jaguarModel.innerHTML = `<option>*Выберете модель</option>
      <option id="e-pace" value="1800000">E-pace</option>
      <option id="f-pace" value="1900000">F-pace</option>
      <option id="xe" value="2000000">XE</option>
      <option id="xfr-s" value="2100000">XFR-S</option>
      <option id="xkr-s" value="2200000">XKR-S</option>`;
      addModel.appendChild(jaguarModel);
    }
  });
});

//независимая работа чекбокса
function check(input) {
  const checkboxes = document.querySelectorAll('[type="checkbox"]');
  const owners = document.querySelector('.owners');
  for(let i=0; i<checkboxes.length; i++) {
      if(checkboxes[i].checked == true) {
          checkboxes[i].checked = false;
      }
  }
  if(input.checked) {
      input.checked = false;
  } else {
      input.checked = true;
      if(input.id == 'old_car'){
        console.log('ol');
        owners.style.display = 'block';
    } else {
    console.log('new');
    owners.style.display = 'none';
    }
  }	
}

//добавление в массив значения из сотояния автомобиля
function addCheckedValue() {
  if(newModel.checked) {
    arrResult.push(newModel.value);
    return newModel.value;
  } else {
    arrResult.push(oldModel.value);
    return oldModel.value;
  }
}

//добавление в массив значения из выпадающего списка с моделями
function addArrayModel() {
  const child = form.model.value;
  arrResult.push(child);
  return child;
}

//подсчет итоговой стоимости автомобиля
function calcTotal() {
  arrResult.push(form.toplivo.value);
  if(form.vladelci.value) {
  arrResult.push(form.vladelci.value);
  }
  arrResult.push(form.oplata.value);
  return arrResult.reduce((a,b)=> +a + +b);
}

//добавление в массив значения из объема двигателя
function calcEngCost() {
  let engineValue = +engine.value;
  if(engineValue > 1.1 && engineValue <= 1.8) {
    return arrResult.push(+100000);
  } else if(engineValue > 1.8 && engineValue <= 2.6) {
    return arrResult.push(+150000);
  } else if(engineValue > 2.6 && engineValue <= 3.5) {
    return arrResult.push(+200000);
  }
}

//обработка события клика по кнопке
btn.addEventListener('click', (evt) => {
  evt.preventDefault();

  arrResult.length = 0;
  let total = document.querySelector('#total');
  calcEngCost();
  addArrayModel();
  blaCheckbox();
  total.innerHTML = `Итоговая стоимость: ${calcTotal()}`;
  form.reset();
});


// //задание со звездочкой по регуляркам regex
// const regex = /^(20\d\d|2100)$/;

// console.log(regex.test('1999'));
// console.log(regex.test('2005'));
// console.log(regex.test('2030'));
// console.log(regex.test('2071'));
// console.log(regex.test('2100'));
// console.log(regex.test('2101'));

// const letterRegex = /W*\w*(\w)\1\w*\W*/gi;
// const string = 'bla zzbli bluu aaaid xop bommzzm aaaaakug _kfdfh_ kjhkuaaa bbhhalig';
// console.log(string.replaceAll(letterRegex, ''));


// const wordRegex = /\b(\w+)\s+\1/g;
// const testStrng = 'let new new new day today come come';
// console.log(testStrng.replace(wordRegex, "$1")); 


// const wordsRegex = /\b(\w+)\b(?:\s+\1\b)+/g;
// const testsString = 'let new new new new DaY DAY daY day today come come';
// console.log(testsString.replace(wordsRegex, "$1")); 