
fetchJson('http://trentonsouth.com/spanish/api/?verbs')
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

   $.each(mt, function(k,v) {
      $.each(p, function(k2,v2) {
         $(`#${mtn[k]}_${pn[k2]}`).html(v[v2]);
      });
   });
}

function loadVerbs(data) {
 $('#verbs').html('');
$.each(data, function(k,v) {
   $('#verbs').append(`<option value="${v.Id}">${v.Verb} - ${v.English}</option>`);
});
}

$('#btnLoad').click(function() {
fetchJson(`http://trentonsouth.com/spanish/api/?verb_by_id/${$('#verbs').val()}`)
   .then(data => {
      loadVerb(data);
   });
});
