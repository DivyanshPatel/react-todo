var React = require('React');
var ReactDOM = require('react-dom');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
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
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  handleToggle: function(id){
    var updateTodo = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
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
    var filteredTodos = TodoAPi.filterTodos(todos, showCompleted, searchText);
    return(
      <div>
      <h1 className='page-title'>Todo App</h1>
      <div className='row'>
        <div className='column small-centered small-11 medium-6 large-5'>
          <div className='container'>
            <TodoSearch onSearch={this.handleSearch}/>
            <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
            <AddTodo onAddTodo={this.handleAddTodo}/>
          </div>

        </div>

      </div>
      </div>
    );
  }
});

module.exports = TodoApp;
