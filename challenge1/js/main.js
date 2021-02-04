import LocalStorage from './ls.js';
import Utilites from './utilities.js';
import ToDos from './todos.js';

const ls = new LocalStorage();
const utils = new Utilites();
const td = new ToDos(ls);


window.addEventListener("load", () => {
   td.showToDos();
});

$('#btnAdd').click(function() {
   td.addToDo($('#txtNewTask').val());
   $('#txtNewTask').val('');
});

$('body').on('click','.btnDelete',function() {
   let id = $(this).data('id');
   td.deleteTodo(id);
});

$('body').on('change','.chkTodo',function() {
   let id = $(this).data('id');
   td.setCompleted(id,$(this).is(':checked'));
});

$('.menuButton').click(function() {
   utils.clearActive();
   $(this).addClass('active');
   td.type = $(this).data('type');
   td.showToDos();
});
