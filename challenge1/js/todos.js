export default class ToDos {
   constructor(ls) {
      this.ls = ls;
      this.type = 'all';
   }

   showToDos() {
      let all = this.ls.getArray('todos');
      let filtered;
      switch(this.type) {
         case 'all':
            filtered = all;
         break;
         case 'active':
            filtered = all.filter(t => t.completed === false);
         break;
         case 'completed':
            filtered = all.filter(t => t.completed === true);
         break;
      }
      let active = all.filter(t => t.completed === false);
      let activeCount = active.length;
      let html = "";
      let ct = this; // Make ct = to the class "this" because when in the each function this becomes the item in the array.
      $.each(filtered, function(k,v) {
         html += ct.buildToDo(v);
      });
      // We only want singular if their is one task left.
      let task_s = activeCount === 1 ? 'task' : 'tasks';
      $('#count').html(`${activeCount} ${task_s} left`);
      $('#tasks').html('');
      $('#tasks').append(html);
   }

   addToDo(content) {
      let todo = {
         id: Date.now(),
         content: content,
         completed: false
      }
      let all = this.ls.getArray("todos");
      all.push(todo);
      this.ls.setArray('todos', all);
      this.showToDos();
   }

   buildToDo(t) {
      let checked = t.completed ? ' checked' : '';
      return `
      <div class="todo">
         <input type="checkbox" class="chkTodo" data-id="${t.id}"${checked}>
         <span class="toDoContent completed_${t.completed}">${t.content}</span>
         <button type="button" class="btnDelete" data-id="${t.id}"> X </button>
      </div>
      `;
   }

   deleteTodo(id) {
      let all = this.ls.getArray('todos');
      let updated = all.filter(t => t.id != id);
      this.ls.setArray('todos', updated);
      this.showToDos();
   }

   setCompleted(id, completed) {
      let all = this.ls.getArray('todos');
      $.each(all, function(k,v) {
         if (v.id === id) v.completed = completed;
      });
      this.ls.setArray('todos', all);
      this.showToDos();
   }
}