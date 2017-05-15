var $ = require('jquery');

module.exports = {
  setTodos: function(todos) {
  if($.isArray(todos))  {
    localStorage.setItem('todos', JSON.stringify(todos));
    return todos;
  }

  },

  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try{
      todos = JSON.parse(stringTodos);

    }catch(e) {

    }

    return $.isArray? todos : [] ;
  },

  filteredTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    //Filter by completed items

    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });
    //serach by text

    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });
    // Sort by completed

    filteredTodos.sort((a,b) => {
      if(!a.completed && b.completed){
        return -1;
      }else if (a.completed && !b.completed){
        return 1;

      }else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
