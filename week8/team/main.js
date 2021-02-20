function fetchJson(url) {
   return fetch(url)
      .then(response => response.json());
}

function fetchPeople(url='https://swapi.dev/api/people') {
   $('#people').html('Loading....');
   fetchJson(url)
   .then(data => {
      displayPeople(data);
   });
}

function fetchPerson(url) {
   $('#detail').html('Loading....');
   fetchJson(url)
   .then(data => {
      displayPerson(data);
   });
}

function displayPerson(person) {
   $('#detail').html(`<button id="btnBack" type="button">Back</button><br><h1>${person.name}</h1><div id="person_details">`);
   $('#person_details').append(`<div class="person_detail_row"><div>Birth Year</div><div>${person.birth_year}</div></div>`);
   $('#person_details').append(`<div class="person_detail_row"><div>Eye Color</div><div>${person.eye_color}</div></div>`);
   $('#person_details').append(`<div class="person_detail_row"><div>Gender</div><div>${person.gender}</div></div>`);
   $('#person_details').append(`<div class="person_detail_row"><div>Hair Color</div><div>${person.hair_color}</div></div>`);
   $('#person_details').append(`<div class="person_detail_row"><div>Height</div><div>${person.height}</div></div>`);
   $('#person_details').append(`<div class="person_detail_row"><div>Home World</div><div>${person.home_world}</div></div>`);
   $('#person_details').append(`<div class="person_detail_row"><div>Mass</div><div>${person.mass}</div></div>`);
   $('#person_details').append(`<div class="person_detail_row"><div>Skin Color</div><div>${person.skin_color}</div></div>`); 
   
   $('#detail').append('</div>');
}

function displayPeople(people) {
   console.log(people);
   const headers = '<div class="person"><div>Name</div><div>Gender</div><div>Birth Year</div></div>';
   $('#people').html(headers);
   $.each(people.results, function(k,v) {
      const html = `<div class="person"><div class="name" data-url="${v.url}">${v.name}</div><div>${v.gender}</div><div>${v.birth_year}</div></div>`;
      $('#people').append(html);
   });
   $('#btnPrevious').unbind('click');
   $('#btnNext').unbind('click');

   $('#btnPrevious').attr("disabled", people.previous == null);
   $('#btnNext').attr("disabled", people.next == null);

   if(people.previous != null) {
      $('#btnPrevious').click(function() {
         fetchPeople(people.previous);
      });
   }
   if(people.next != null) {
      $('#btnNext').click(function() {
         fetchPeople(people.next);
      });
   }
   let numButtons = Math.floor(people.count / 10);  // 8
   if ((people.count % 10) > 0) numButtons++;
   let html = "";
   for(let i=0; i < numButtons; i++) {
      console.log(i);
      html += `<button type="button" class="paginatorButton">${i + 1}</button>`
   }
   $('#pagination').html(html);
}

$('body').on('click','#btnBack', function() {
   $('#detail').toggleClass('hidden');
   $('#all').toggleClass('hidden');
});

$('body').on('click','.name', function() {
   const url = $(this).data('url');
   $('#detail').toggleClass('hidden');
   $('#all').toggleClass('hidden');
   fetchPerson(url);
});

$('body').on('click','.paginatorButton', function() {
   const url = 'http://swapi.dev/api/people/?page=' + $(this).html();
   fetchPeople(url);
});

fetchPeople();