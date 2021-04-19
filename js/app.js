// ========== Global Variables ========== //

// Global Modal Window
const globalModalWindow = document.querySelector('.global-modalWindow');
const closeWindowIcon = document.querySelector('.close-window__icon');
const inputProjectName = document.querySelector('#input-project__name');
const inputProjectLines = document.querySelector('#input-project__lines');
const inputProjectHours = document.querySelector('#input-project__hours');
const inputProjectMoney = document.querySelector('#input-project__money');
const inputPreviewName = document.querySelector('#input-preview__name');
const inputPreviewDescr = document.querySelector('#input-preview__descr');
const inputPreviewTime = document.querySelector('#input-preview__time');
const inputImageFile = document.querySelector('#input-image__file');
const imageData = document.querySelector('#image-data');
const btnSaveNewProject = document.querySelector('.btn-global-windowData__save');


// Header
const headerModalWindow = document.querySelector('.header-modalWindow');
let headerModalLogin = document.querySelector('#header-modal-login');
let headerModalPassword = document.querySelector('#header-modal-password');
const btnEnter = document.querySelector('.btn-enter');

// Content
let contentPreview = document.querySelector('.content-preview');

let cardProjects = document.querySelector('#card-projects');
let cardLines = document.querySelector('#card-lines');
let cardHours = document.querySelector('#card-hours');
let cardMoney = document.querySelector('#card-money');

let previewName = document.querySelector('.content-preview__header');
let previewImage = document.querySelector('.content-preview__image');
let previewImageInner = document.querySelector('.content-preview__image--inner');
let previewDescr = document.querySelector('.content-preview__descr');
let previewInfo = document.querySelector('.content-preview__info');

// Projects
let listProjectsContent = document.querySelector('.list-projects__content');
let projectName = document.querySelector('#project-name');
let projectLines = document.querySelector('#project-lines');
let projectTimes = document.querySelector('#project-times');
let projectCost = document.querySelector('#project-cost');
let projectExtra = document.querySelector('#project-extra');
let projectEdit = document.querySelector('#project-edit');
let projectDelete = document.querySelector('#project-delete');
const btnNewProject = document.querySelector('.list-projects__button');



// ========== Functions ========== //
// Открытие и закрытие окна авторизации
const showModalWindow = (e) => {
   e.preventDefault();
   headerModalWindow.classList.toggle('modalWindowShow');

   if (headerModalLogin.value === "login"
      || headerModalLogin.value === "Login"
      || headerModalLogin.value === "LOGIN")
      if (headerModalPassword.value === "password"
         || headerModalPassword.value === "Password"
         || headerModalPassword.value === "PASSWORD") {
         btnEnter.textContent = "Вы авторизированы";
      }
}

// Открытие модального окна создания нового проекта
const addNewProject = () => {
   globalModalWindow.classList.add('globalModalWindowShow');
}

// Закрытие модального окна создания нового проекта
const closeGlobalModalWindow = () => {
   globalModalWindow.classList.remove('globalModalWindowShow');
}


// Создание нового проекта
const saveNewProject = (e) => {
   e.preventDefault();

   let inputProjectName = document.querySelector('#input-project__name');
   let inputProjectLines = document.querySelector('#input-project__lines');
   let inputProjectHours = document.querySelector('#input-project__hours');
   let inputProjectMoney = document.querySelector('#input-project__money');

   let newTableLine = document.createElement('li');
   newTableLine.classList.add('list-projects__item');
   newTableLine.innerHTML = `
         <div class="list-projects__item--col" id="project-name"> ${inputProjectName.value} </div>
         <div class="list-projects__item--col" id="project-lines"> ${inputProjectLines.value} </div>
         <div class="list-projects__item--col" id="project-times"> ${inputProjectHours.value} </div>
         <div class="list-projects__item--col" id="project-cost"> ${inputProjectMoney.value} </div>
         <div class="list-projects__item--col" id="project-extra">
            <div class="list-projects__item--col" id="project-edit">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                     fill="currentColor" class="bi bi-pen"
                     viewBox="0 0 16 16">
                  <path
                     d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
               </svg>
            </div>
            <div class="list-projects__item--col" id="project-delete">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                     fill="currentColor" class="bi bi-x-circle"
                     viewBox="0 0 16 16">
                  <path
                     d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path
                     d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
               </svg>
            </div>
         </div>
   `;

   listProjectsContent.appendChild(newTableLine);

   inputProjectName.value = '';
   inputProjectLines.value = '';
   inputProjectHours.value = '';
   inputProjectMoney.value = '';

   // Вывод данных в блок "Content"
   const contentDataSave = () => {

      let newArray = [];

      let sumLine = 0;
      let sumTime = 0;
      let sumMoney = 0;

      newArray.push(newTableLine);

      newArray.forEach(item => {

         let itemLines = item.querySelector('#project-lines').textContent;
         itemLines = parseInt(itemLines);

         let itemHours = item.querySelector('#project-times').textContent;
         itemHours = parseInt(itemHours);

         let itemMoney = item.querySelector('#project-cost').textContent;
         itemMoney = parseInt(itemMoney);

         sumLine += itemLines;
         sumTime += itemHours;
         sumMoney += itemMoney;

         cardLines.innerHTML += sumLine;
         cardHours.innerHTML += sumTime;
         cardMoney.innerHTML += sumMoney;

      });
   }

   contentDataSave();


   // ===================================== // 

   let inputPreviewName = document.querySelector('#input-preview__name');
   let inputPreviewDescr = document.querySelector('#input-preview__descr');
   let inputPreviewTime = document.querySelector('#input-preview__time');
   let inputImageFile = document.querySelector('#input-image__file').files[0];

   let inputPreviewNameDate = inputPreviewName.value;
   let inputPreviewDescrDate = inputPreviewDescr.value;
   let inputPreviewTimeDate = inputPreviewTime.value;

   previewName.innerHTML = inputPreviewNameDate;
   previewDescr.innerHTML = inputPreviewDescrDate;
   previewInfo.innerHTML = inputPreviewTimeDate;

   let reader = new FileReader();
   reader.readAsDataURL(inputImageFile);

   reader.onload = function (e) {
      let img = document.createElement('img');
      img.classList.add('content-preview__image--inner');
      previewImage.innerHTML = `<img src="${e.target.result}" alt="photo">`;
   }

   inputPreviewName.value = '';
   inputPreviewDescr.value = '';
   inputPreviewTime.value = '';
   imageData.reset();

   globalModalWindow.classList.remove('globalModalWindowShow');
}

// Local Storage

// ========== AddEventListeners ========== //
btnEnter.addEventListener('click', showModalWindow);
btnNewProject.addEventListener('click', addNewProject);
closeWindowIcon.addEventListener('click', closeGlobalModalWindow);
btnSaveNewProject.addEventListener('click', saveNewProject);



