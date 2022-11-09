// Touch Detect
function isTouch() {
 try {
  document.createEvent("TouchEvent");
  return true;
 } catch (e) {
  return false;
 }
}

if (isTouch()) $("html").addClass("is-touch");

$(function () {
 // поиск
 $(".searchBtnJs").on("click", function (evSearch) {
  evSearch.preventDefault();
  let searchBlock = $(this).closest(".header-search");
  let thas = $(this);
  if (!thas.hasClass("is-active")) {
   thas.addClass("is-active");
   searchBlock.addClass("is-open");
  } else {
   searchBlock.removeClass("is-open");
   setTimeout(function () {
    thas.removeClass("is-active");
   }, 490);
  }
  evSearch.stopPropagation();
 });
 $(".header-search").on("click", function (evSearch) {
  evSearch.stopPropagation();
 });
 $("body").on("click", function () {
  $(".header-search").removeClass("is-open");
  setTimeout(function () {
   $(".header-search__btn").removeClass("is-active");
  }, 490);
 });

 // accordion
 $(".accordionBtnJs").on("click", function (e) {
  e.preventDefault();
  var parentItem = $(this).closest(".accordionItemJs");
  var accordionContent = parentItem.find(".accordionContentJs");

  if (!parentItem.hasClass("is-active")) {
   parentItem.addClass("is-active");
   accordionContent.slideDown();
  } else {
   parentItem.removeClass("is-active");
   accordionContent.slideUp();
  }
 });

 // mobile menu
 $(".touch-nav").on("click", function (e) {
  e.preventDefault();
  $("html").addClass("htmlFix");
  $("body").addClass("navFix");
  $(".nav__container-js").fadeIn();
  $(".nav__content-js").addClass("menuShow");
 });

 $(".nav-close").on("click", function (e) {
  e.preventDefault();
  closeMobileMenu();
 });

 // role user
 $(".mobileRoleJs").on("click", function (e) {
  e.preventDefault();
  let roleBlock = $(this)
   .closest(".mobile-nav__profile")
   .find(".mobile-role__block");
  if (!$(this).hasClass("is-active")) {
   $(this).addClass("is-active");
   roleBlock.fadeIn();
  } else {
   $(this).removeClass("is-active");
   roleBlock.fadeOut();
  }
 });

 // header-notice
 $(document).on("click", ".headerNoticeJs", function (evNotice) {
  evNotice.preventDefault();
  let noticeBlock = $(this)
   .closest(".header-notice")
   .find(".headerNoticeBlockJs");

  if (!$(this).hasClass("is-open")) {
   $(this).addClass("is-open");

   if ($(".headerProfileJS").hasClass("is-active")) {
    $(".headerProfileJS").removeClass("is-active");
    $(".header-profile__dropdown").fadeOut();
   }

   noticeBlock.fadeIn();
   headerNoticeFixed();
  } else {
   $(this).removeClass("is-open");
   noticeBlock.fadeOut();
   headerNoticeFixed();
  }
  evNotice.stopPropagation();
 });
 $(".header-notice__block").on("click", function (evNotice) {
  evNotice.stopPropagation();
 });

 // закрыть блок уведомлений в хедере в любом месте клик на странице
 $(document).on("click", function () {
  $(".headerNoticeJs").removeClass("is-open");
  $(".headerNoticeBlockJs").fadeOut();
 });

 // закрыть блок уведомлений в хедере по кнопке close
 $(".noticeCloseJs").on("click", function (e) {
  e.preventDefault();
  $(".headerNoticeJs").removeClass("is-open");
  $(".headerNoticeBlockJs").fadeOut();
  $("html").removeClass("htmlFix");
  $("body").removeClass("navFix");
 });

 // открыть блок поиска на мобильном
 $(".searchBtnMobileJs").on("click", function (e) {
  e.preventDefault();
  $(".searchMobileBlockJs").fadeIn();
  $("html").addClass("htmlFix");
  $("body").addClass("navFix");
 });

 // закрыть блок поиска на мобильном
 $(".searchCloseJs").on("click", function (e) {
  e.preventDefault();
  $(".searchMobileBlockJs").fadeOut();
  $("html").removeClass("htmlFix");
  $("body").removeClass("navFix");
 });

 // действия с карточкой сотрудника
 $(".employeesMoreJs").on("click", function (evEmployees) {
  evEmployees.preventDefault();
  let employeesParen = $(this).closest(".employees-more");

  if (!employeesParen.hasClass("is-open")) {
   let employeesMoreOpen = $(document).find(".employees-more.is-open");
   employeesMoreOpen.find(".employees-action__list").fadeOut();
   employeesMoreOpen.removeClass("is-open");

   employeesParen.addClass("is-open");
   employeesParen.find(".employees-action__list").fadeIn();
  } else {
   employeesParen.removeClass("is-open");
   employeesParen.find(".employees-action__list").fadeOut();
  }

  evEmployees.stopPropagation();
 });
//  $(".employeesActionJs").on("click", function (evEmployees) {
//   evEmployees.stopPropagation();
//  });
 $(document).on("click", function () {
  $(".employees-more").removeClass("is-open");
  $(".employees-action__list").fadeOut();
 });

 // выбор статуса ИМС
 $(".employeesActionJs").on("click", function (evEmployees) {
  evEmployees.preventDefault();
  evEmployees.stopPropagation();
  if (!$(this).hasClass("is-active")) {
   $(this).addClass("is-active");
   $(this).closest("li").find(".employees-status__child").slideDown();
  } else {
   $(this).removeClass("is-active");
   $(this).closest("li").find(".employees-status__child").slideUp();
  }
 });

 //  Добавить нового сотрудника шаг в перед
 $(".modalNextJs").on("click", function (e) {
  e.preventDefault();
  let parentContainer = $(this).closest(".modal-content");
  parentContainer.find(".modalBackJs").show();
  let stepId = $(this).data("step");
  let stepOf = $(this).data("of");
  parentContainer.find(".step-of__text span").text(stepOf);
  parentContainer.find(".modal-step__block:not(." + stepId + ")").hide();
  parentContainer.find(".modal-step__block." + stepId).show();
 });

 //  Добавить нового сотрудника шаг назад
 $(".modalBackJs").on("click", function (e) {
  e.preventDefault();
  let parentContainer = $(this).closest(".modal-content");
  $(this).hide();
  let stepId = $(this).data("step");
  let stepOf = $(this).data("of");
  parentContainer.find(".step-of__text span").text(stepOf);
  parentContainer.find(".modal-step__block:not(." + stepId + ")").hide();
  parentContainer.find(".modal-step__block." + stepId).show();
 });

 // при открытии модального окна всегда устанавливать 1й шаг активным
 $(".btnOpenModalAdd").on("click", function () {
  let modalId = $(this).data("src");
  $(modalId).find(".step-of__text span").text("1");
  $(modalId).find(".modal-step__block:not(.is-show)").hide();
  $(modalId).find(".modal-step__block.is-show").show();
  $(modalId).find(".modalBackJs").hide();
 });

 // открыть одно модальное окно закрыв другое
 $(document).on("click", ".btn-open-modal", function () {
  $.fancybox.close();
  var modalId = $(this).attr("href");
  setTimeout(function () {
   $.fancybox.open({
    src: modalId,
   });
  }, 300);
 });

 // субменю в левом сайдбаре
 $(".sidebarLinkJs").on("click", function (e) {
  e.preventDefault();
  let childMenu = $(this).closest("li").find(".sidebar-nav__child");
  if (!$(this).hasClass("is-open")) {
   $(this).addClass("is-open");
   childMenu.slideDown();
  } else {
   $(this).removeClass("is-open");
   childMenu.slideUp();
  }
 });

 // показать поля добавить адрес
 $(".btnAdressAddJs").on("click", function (e) {
  e.preventDefault();
  if (!$(this).hasClass("disabled")) {
   let parentBlockAdd = $(this).closest(".form-block__add");
   parentBlockAdd.find(".block-adress__add").slideDown();
   $(this).addClass("disabled");
  }
 });

 // показать дополнительные действия в карточке События
 $(".eventsActionJs").on("click", function (e) {
  e.preventDefault();
  let parentEventBlock = $(this).closest(".events-block__action");
  if (!$(this).hasClass("is-active")) {
   parentEventBlock.find(".events-block__dropdown").fadeIn();
   $(this).addClass("is-active");
  } else {
   parentEventBlock.find(".events-block__dropdown").fadeOut();
   $(this).removeClass("is-active");
  }
 });

 // показать поля добавить адрес
 $(".headerProfileJS").on("click", function (evDropMenu) {
  evDropMenu.preventDefault();
  let parentBlockAdd = $(this).closest(".dropdown-parent");
  if (!$(this).hasClass("is-open")) {
   if ($(".headerNoticeJs").hasClass("is-open")) {
    $(".headerNoticeJs").removeClass("is-open");
    $(".headerNoticeBlockJs").fadeOut();
   }

   parentBlockAdd.find(".header-profile__dropdown").fadeIn();
   $(this).addClass("is-open");
  } else {
   $(this).removeClass("is-open");
   parentBlockAdd.find(".header-profile__dropdown").fadeOut();
  }
  evDropMenu.stopPropagation();
 });

 $(".header-profile__dropdown").on("click", function (evDropMenu) {
  evDropMenu.stopPropagation();
 });

 $(document).on("click", function () {
  $(".headerProfileJS").removeClass("is-open");
  $(".header-profile__dropdown").fadeOut();
 });

 $(document).on("click", "a[data-fancybox]", function () {
  try {
   selectInit();
  } catch (e) {}
 });

 //- загрузка файлов
 $(".js-inputfile").on("change", function (event) {
  let parentFileBlock = $(this).closest(".form-block");

  let label_text;
  if (event.target.files.length) {
   const file = event.target.files[0];
   label_text = file.name;
  }
  parentFileBlock.find(".inputfile-info").show();
  parentFileBlock.find(".inputfile-info span").text(label_text);
 });

 //- загрузка сертификата
 $(".jsFileCertificate").on("change", function (event) {
  let parentFileBlock = $(this).closest(".certificate-uploaded");
  const status = parentFileBlock.find(".form-text__error");
  let modalId = $(this).data("modal");

  if (event.target.files.length) {
   const file = event.target.files[0];
   const fileName = file.name;
   const fileSize = file.size;

   function openModalCertificate() {
    $('.certificateModalFileName').val(fileName)
    $('.certificateModalName').text(fileName)
    $('.certificateModalSize').text(` (${fileSize} КБ)`);
    modalOpen('#'+modalId);
   }
   
   if (file.type.match("image.*")) {
    status.hide();
    openModalCertificate();
  }

   if (!file.type) {
     status.text("Свойство File.type не поддерживается в этом браузере.");
     status.show();
     return;
    }
    if (file.type !== "application/pdf") {

      if((!file.type.match("image.*"))) {
        status.text("Выбранный файл не является изображением или pdf файлом.");
        status.show();
      }
     return;
    }

    if (file.type === "application/pdf") {
      status.hide();
      openModalCertificate();
    }

  }

 });

 // показать/скрыть в ЛК ИМС
 $(document).on("click", ".js-btn-dropdown", function (e) {
  e.preventDefault();
  let dropDownImc = $(this).closest('.imc-block__step').find('.imc-block__dropdown');
  if (!$(this).hasClass("is-active")) {
    $(this).addClass("is-active");
    dropDownImc.slideDown();
  } else {
    $(this).removeClass("is-active");
    dropDownImc.slideUp();
  }
 });

// показать/скрыть годовую отчетность
 $(document).on("click", ".orgBtnJs", function (e) {
  e.preventDefault();
  let parentImc = $(this).closest('.imc-organization__container');
  let bodyImc = parentImc.find('.imc-organization__body');
  if (!$(this).hasClass("is-active")) {
    $(this).addClass("is-active");
    parentImc.addClass('is-active');
    bodyImc.slideDown();
  } else {
    $(this).removeClass("is-active");
    parentImc.removeClass('is-active');
    bodyImc.slideUp();
  }
 });

// показать/скрыть Заполните годовую отчетность
 $(document).on("click", ".reportBtnJs", function (e) {
  e.preventDefault();
  let parentReport = $(this).closest('.imc-reporting__block');
  let bodyReport = parentReport.find('.imc-reporting__body');
  if (!$(this).hasClass("is-active")) {
    $(this).addClass("is-active");
    parentReport.addClass('is-active');
    bodyReport.slideDown();

    if($(this).hasClass('reportSliderJs')) {
      reportSliderInit(bodyReport.find('.reportingSlider'));
    }
  } else {
    $(this).removeClass("is-active");
    parentReport.removeClass('is-active');
    bodyReport.slideUp();
  }
 });
// показать блок для загрузки документа
 $(document).on("click", ".downloadBtnJs", function (e) {
  e.preventDefault();
  let parentFileList = $(this).closest('.download-files__list');
  let parentFileItem = $(this).closest('.download-file__item');
  let parentFileBlock = parentFileItem.find('.download-file__format');


  if (!$(this).hasClass("is-active")) {
    let activeItem = parentFileList.find('.download-file__item.is-active');
    activeItem.find('.downloadBtnJs').removeClass('is-active');
    activeItem.find('.download-file__format').fadeOut();

    $(this).addClass("is-active");
    parentFileItem.addClass('is-active');
    parentFileBlock.fadeIn();
  } 
  // else {
  //   $(this).removeClass("is-active");
  //   parentFileItem.removeClass('is-active');
  //   parentFileBlock.fadeOut();
  // }
 });

 
 // показать/скрыть блок - Модалка Добавить событие
 $(document).on("change", ".radioEventJs", function () {
  const parentBlock = $(this).closest('.form-block');
  const blockClass = $(this).data('block');
  $(parentBlock).find(".form-block__tab:not(." + blockClass + ")").hide();
  $(parentBlock).find(".form-block__tab." + blockClass).show(); 
 });



// скрыть блок для загрузки документа
 $(document).on("click", ".downloadBtnCloseJs", function (e) {
  e.preventDefault();
  let parentFileItem = $(this).closest('.download-file__item');
  let parentFileBlock = parentFileItem.find('.download-file__format');

  parentFileItem.find('.downloadBtnJs').removeClass("is-active")
  parentFileItem.removeClass('is-active');
  parentFileBlock.fadeOut();
 });

 

 // показать изображение при загрузке файла в ЛК оргранизации
 try {
  const status = document.getElementById("status");
  const output = document.getElementById("output");
  const outputImg = document.getElementById("outputImg");
  if (window.FileList && window.File && window.FileReader) {
   document
    .getElementById("fileUserPhoto")
    .addEventListener("change", (event) => {
     output.style.background = "";
     // output.src = '';
     status.textContent = "";
     status.classList.remove("is-show");
     outputImg.style.display = "block";
     const file = event.target.files[0];
     if (!file.type) {
      status.textContent =
       "Свойство File.type не поддерживается в этом браузере.";
      status.classList.add("is-show");
      outputImg.style.display = "block";
      return;
     }
     if (!file.type.match("image.*")) {
      status.textContent = "Выбранный файл не является изображением.";
      status.classList.add("is-show");
      outputImg.style.display = "block";
      return;
     }
     const reader = new FileReader();
     reader.addEventListener("load", (event) => {
      // output.src = event.target.result;
      output.style.background = "url(" + event.target.result + ")";
      outputImg.style.display = "none";
     });
     reader.readAsDataURL(file);
    });
  }
 } catch (e) {}

 // календарь
 try {
  $(".flatpickr-input").flatpickr({
   dateFormat: "d.m.Y",
   locale: "ru",
   firstDayOfWeek: 1,
  });
 } catch (e) {}

 // сортировка таблицы
 try {
  $("#tableSorting").DataTable({
   searching: false, //- отключения поиска по таблице
   paging: false, //- отключение пагинации у таблицы
  });
 } catch (e) {}

 var selector = ".slick-slide:not(.slick-cloned) a";

 $(document).on("click", ".slick-cloned a", function (e) {
  e.preventDefault();
  $(selector)
   .eq(($(e.currentTarget).attr("data-slick-index") || 0) % $(selector).length)
   .trigger("click.fb-start", {
    $trigger: $(this),
   });

  return false;
 });

 try {
  $().fancybox({
   selector: ".slider-for .slick-slide:not(.slick-cloned) a",
   backFocus: false,
  });
 } catch (e) {}
}); //- end

// 222222222

// сокпировать код на странице Спецпредложения
function copyCod() {
  var btnList = document.querySelectorAll('.btnCopyCod')
  if (!btnList.length) return
  btnList.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      let target = e.currentTarget;
      if(!target.classList.contains('is-active')) {
        target.classList.add('is-active');
        let codValue = target.getAttribute('data-cod'),
            textChange = target.getAttribute('data-change'),
            textFirst = target.getAttribute('data-text');        
        target.innerText = textChange;
        window.navigator.clipboard.writeText(codValue)
        setTimeout( function(){
         target.innerText = textFirst;
        }, 800);
       } else {
       return false;
      }
    })
  })
}


function modalOpen(modalId) {
  $.fancybox.open({src: modalId});
}
// зафиксировать страницу при ресайзе, если блок уведомлений открыт
function headerNoticeFixed() {
 var windowWidth = $(window).outerWidth();
 if ($(".headerNoticeJs").hasClass("is-open")) {
  if (windowWidth <= 1023) {
   $("html").addClass("htmlFix");
   $("body").addClass("navFix");
  } else {
   $("html").removeClass("htmlFix");
   $("body").removeClass("navFix");
  }
 }
}
const reportSlidersParams = {
  infinite: false,
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  touchThreshold: 50,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]  
}
function sliderInit(slider, params) {
  $('.' + slider).slick(params);
 }
// инициализация слайдера годовая отчетность 
function reportSliderInit(block) {
  if(block.hasClass('slick-initialized')) {
    block.slick('setPosition');
  } else {
    let countSlides = block.find('.imc-report__slide').length;
    var windowWidth = $(window).outerWidth();
    if((countSlides >= 3) && (windowWidth >= 768)) {
      $(block).slick(reportSlidersParams); 
    }
    if((countSlides >= 2) && (windowWidth <= 767)) {  
      $(block).slick(reportSlidersParams);
    }
  }
}

// инициализация select
function selectInit() {
  if ($(".select-js").length >= 1) {
    try {
      $(".select-js").select2({ language: "ru" });
    } catch (e) {}
  }
}
// инициализация select
function selectInitButton() {
  if ($(".selectButtonJs").length >= 1) {
    try {
      $(".selectButtonJs").select2({ language: "ru", dropdownCssClass: 'select-view__buttons' });
    } catch (e) {}
  }
}
// инициализация tooltip
function tooltipsterInit() {
	if($('.tooltip').length >= 1) {
		$('.tooltip').tooltipster({
			trigger: 'click',
			side: ['top', 'bottom', 'right', 'left']		
		});
	}	
}
// инициализация select Должность
function selectInitPosition() {
  if ($(".selectPositionJs").length >= 1) {
    try {
      $(".selectPositionJs").select2({ placeholder: "Выберите подходящее", language: "ru" });
      $('.selectPositionJs').on('select2:select', function (e) {
        var data = e.params.data;
        if(data.id === 'Другое') {
          $('#formPositionOther').show();
         } else {
          $('#formPositionOther').hide();
        }
    });
    $('.selectPositionJs').on('select2:unselect', function (e) {
     var data = e.params.data;
     if(data.id === 'Другое') {
      $('#formPositionOther').hide();
     }
    });
    } catch (e) {}
  }
}
;

function closeMobileMenu() {
 $(".nav__content-js").removeClass("menuShow");
 $("html").removeClass("htmlFix");
 $("body").removeClass("navFix");
 $(".nav__container-js").fadeOut();
}

$(window).on("scroll", headerFixed);

function headerFixed() {
 var top =
  (document.documentElement && document.documentElement.scrollTop) ||
  document.body.scrollTop;
 if (top > 70) {
  $("header").addClass("is-fixed");
 } else {
  $("header").removeClass("is-fixed");
 }
}

function loadPage() {
 var windowWidth = $(window).outerWidth();
 headerFixed();
 selectInit();
 selectInitPosition();
 selectInitButton();
 copyCod();
 tooltipsterInit();
 try {
  Inputmask({ mask: "+7 (999) 999-99-99" }).mask("input[type=tel]");
 } catch (e) {}
} //end loadPage
window.addEventListener("load", loadPage);

function resizePage() {
 var windowWidth = $(window).outerWidth();

 headerNoticeFixed();

 if (windowWidth >= 1024) {
  closeMobileMenu();
  $(".searchMobileBlockJs").fadeOut();
 }
} //end resizePage
window.addEventListener("resize", resizePage);
