
fetchJson('https://trentonsouth.com/spanish/api/?verbs')
.then(data => {
   loadVerbs(data);
 });

function fetchJson(url) {
return fetch(url)
   .then(response => response.json());
}	

function loadVerb(verb) {
   const indicative_present = verb.find(v => v.Tense == 'Present' && v.Mood == 'Indicative');
   const indicative_future = verb.find(v => v.Tense == 'Future' && v.Mood == 'Indicative');
   const indicative_imperfect = verb.find(v => v.Tense == 'Imperfect' && v.Mood == 'Indicative');
   const indicative_preterite = verb.find(v => v.Tense == 'Preterite' && v.Mood == 'Indicative');
   const indicative_conditional = verb.find(v => v.Tense == 'Conditional' && v.Mood == 'Indicative');
   const indicative_present_perfect = verb.find(v => v.Tense == 'Present Perfect' && v.Mood == 'Indicative');
   const indicative_future_perfect = verb.find(v => v.Tense == 'Future Perfect' && v.Mood == 'Indicative');
   const indicative_past_perfect = verb.find(v => v.Tense == 'Past Perfect' && v.Mood == 'Indicative');
   const indicative_preterite_archaic = verb.find(v => v.Tense == 'Preterite (Archaic)' && v.Mood == 'Indicative');
   const indicative_conditional_perfect = verb.find(v => v.Tense == 'Conditional Perfect' && v.Mood == 'Indicative');
   const subjunctive_present = verb.find(v => v.Tense == 'Present' && v.Mood == 'Subjunctive');
   const subjunctive_imperfect = verb.find(v => v.Tense == 'Imperfect' && v.Mood == 'Subjunctive');
   const subjunctive_future = verb.find(v => v.Tense == 'Future' && v.Mood == 'Subjunctive');
   const subjunctive_present_perfect = verb.find(v => v.Tense == 'Present Perfect' && v.Mood == 'Subjunctive');
   const subjunctive_future_perfect = verb.find(v => v.Tense == 'Future Perfect' && v.Mood == 'Subjunctive');
   const subjunctive_past_perfect = verb.find(v => v.Tense == 'Past Perfect' && v.Mood == 'Subjunctive');
   const imperative_affirmative_present = verb.find(v => v.Tense == 'Present' && v.Mood == 'Imperative Affirmative');
   const imperative_negative_present = verb.find(v => v.Tense == 'Present' && v.Mood == 'Imperative Negative');
   /*console.log(indicative_present);
   console.log(indicative_future);
   console.log(indicative_imperfect);
   console.log(indicative_preterite);
   console.log(indicative_conditional);
   console.log(indicative_present_perfect);
   console.log(indicative_future_perfect);
   console.log(indicative_past_perfect);
   console.log(indicative_preterite_archaic);
   console.log(indicative_conditional_perfect);
   console.log(subjunctive_present);
   console.log(subjunctive_imperfect);
   console.log(subjunctive_future);
   console.log(subjunctive_present_perfect);
   console.log(subjunctive_future_perfect);
   console.log(subjunctive_past_perfect);
   console.log(imperative_affirmative_present);
   console.log(imperative_negative_present);*/
   
   const p = ['Form_1p','Form_1s','Form_2p','Form_2s','Form_3p','Form_3s','Gerund','PastParticiple'];
   const pn = ['f1p','f1s','f2p','f2s','f3p','f3s','gerund','past_participle'];
   const mtn = ['indicative_present','indicative_future','indicative_imperfect','indicative_preterite','indicative_conditional','indicative_present_perfect','indicative_future_perfect','indicative_past_perfect','indicative_preterite_archaic','indicative_conditional_perfect','subjunctive_present','subjunctive_imperfect','subjunctive_future','subjunctive_present_perfect','subjunctive_future_perfect','subjunctive_past_perfect','imperative_affirmative_present','imperative_negative_present'];
   const mt = [indicative_present,indicative_future,indicative_imperfect,indicative_preterite,indicative_conditional,indicative_present_perfect,indicative_future_perfect,indicative_past_perfect,indicative_preterite_archaic,indicative_conditional_perfect,subjunctive_present,subjunctive_imperfect,subjunctive_future,subjunctive_present_perfect,subjunctive_future_perfect,subjunctive_past_perfect,imperative_affirmative_present,imperative_negative_present];

	$('#indicative_present').attr('title',indicative_present.English);
	$('#indicative_future').attr('title',indicative_future.English);
	$('#indicative_imperfect').attr('title',indicative_imperfect.English);
	$('#indicative_preterite').attr('title',indicative_preterite.English);
	$('#indicative_conditional').attr('title',indicative_conditional.English);
	$('#indicative_present_perfect').attr('title',indicative_present_perfect.English);
	$('#indicative_future_perfect').attr('title',indicative_future_perfect.English);
	$('#indicative_past_perfect').attr('title',indicative_past_perfect.English);
	$('#indicative_preterite_archaic').attr('title',indicative_preterite_archaic.English);
	$('#indicative_conditional_perfect').attr('title',indicative_conditional_perfect.English);
	$('#subjunctive_present').attr('title',subjunctive_present.English);
	$('#subjunctive_imperfect').attr('title',subjunctive_imperfect.English);
	$('#subjunctive_future').attr('title',subjunctive_future.English);
	$('#subjunctive_present_perfect').attr('title',subjunctive_present_perfect.English);
	$('#subjunctive_future_perfect').attr('title',subjunctive_future_perfect.English);
	$('#subjunctive_past_perfect').attr('title',subjunctive_past_perfect.English);
	$('#imperative_affirmative_present').attr('title',imperative_affirmative_present.English);
	$('#imperative_negative_present').attr('title',imperative_negative_present.English);
	
   $.each(mt, function(k,v) {
      $.each(p, function(k2,v2) {
         $(`#${mtn[k]}_${pn[k2]}`).html(v[v2]);
      });
   });
}

let fuse;
function loadVerbs(data) {
   $('#verbs').html('');
   $.each(data, function(k,v) {
      $('#verbs').append(`<option value="${v.Id}">${v.Verb} - ${v.English}</option>`);
   });
   const fuseOptions = {
      includeScore: true,
      useExtendedSearch: false,
      includeMatches: true,
      findAllMatches: false,
      keys: ['Verb', 'English']
   }
   fuse = new Fuse(data, fuseOptions);
}

$('#btnLoad').click(function() {
fetchJson(`https://trentonsouth.com/spanish/api/?verb_by_id/${$('#verbs').val()}`)
   .then(data => {
      loadVerb(data);
   });
});

$('#search').keyup(function () {
    if ($('#search').val() != '') {
        $('#searchResults').show();
        let term = $('#search').val().substring(0, 3).toLowerCase() == 'to' ? $('#search').val().substring(3) : $('#search').val();

        let results = fuse.search("'to " + term);
        $('#searchResults').html('');
        $.each(results, function (k, v) {
            $('#searchResults').append(`<li><a class="result" href="javascript:setSelect('${v.item.Id}')">
            <span>${v.item.Verb} - ${v.item.English}</span></a></li>`);
        });
    } else {
        $('#searchResults').hide();
    }
});

function setSelect(id) {
   $('#verbs').val(id);
   $('#searchResults').hide();
   $('#btnLoad').click();
}
