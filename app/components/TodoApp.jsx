var React = require('React');
var ReactDOM = require('react-dom');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');
var TodoAPi = require('TodoAPi');

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      searchText: '',
      showCompleted: false,
      todos: TodoAPi.getTodos()
    }
  },
  componentDidUpdate: function() {
    TodoAPi.setTodos(this.state.todos);
  },
  handleAddTodo: function(text){
    // alert('new Text ' + newText);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
  },
  handleToggle: function(id){
    var updateTodo = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({todos: updateTodo});

    // alert(id);
  },
  handleSearch: function(searchText, showCompleted){
    this.setState({
      searchText: searchText.toLowerCase(),
      showCompleted: showCompleted
    })
  },
  render: function(){
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPi.filteredTodos(todos, showCompleted, searchText);
    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
