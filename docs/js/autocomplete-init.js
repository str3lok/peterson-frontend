document.addEventListener("DOMContentLoaded", function() {
 if($('.autocomplete-js').length >= 1) {
		$('.autocomplete-js').each(function(){
   $(this).autocomplete({
    lookup: peterson,
    // serviceUrl: '/search/ajax.php',
    // dataType: 'json',
    paramName: 'query',
    // onSelect: function (suggestion) {
    //     document.location.href = suggestion.data;
    //     return true;
    // },
    minChars: 1,
    deferRequestBy: 1000,
    appendTo: ".autocomplete-block"
   }); 
  })
  }
  


});

 
var peterson = [
 { value: '1 МОУ "Средняя общеобразовательная школа №1633108, Новосибирская обл., г. Новосибирск, ул. Фадеевад. 87', data: 'МО' },
 { value: '2 МОУ "Средняя общеобразовательная школа №1633108, Новосибирская обл., г. Новосибирск, ул. Фадеевад. 87', data: 'мо' },
 { value: '3 МОУ "Средняя общеобразовательная школа №1633108, Новосибирская обл., г. Новосибирск, ул. Фадеевад. 87', data: 'мо' },
 { value: '4 МОУ "Средняя общеобразовательная школа №1633108, Новосибирская обл., г. Новосибирск, ул. Фадеевад. 87', data: 'мо' },
 { value: '4 МОУ "Средняя общеобразовательная школа №1633108, Новосибирская обл., г. Новосибирск, ул. Фадеевад. 87', data: 'мо' },
 { value: '5 МОУ "Средняя общеобразовательная школа №1633108, Новосибирская обл., г. Новосибирск, ул. Фадеевад. 87', data: 'мо' },
];
