var React = require('React');
var ReactDOM = require('react-dom');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      searchText: '',
      showCompleted: false,
      todos: [
        {
          id:1,
          text: 'Walk the Dog'
        },{
          id: 2,
          text: 'Clean the yard'
        },{
          id: 3,
          text: 'Leave Mail on cauch'
        } , {
          id: 4,
          text: 'Play Vedio games'
        }
      ]
    }
  },
  handleAddTodo: function(newText){
    alert('new Text ' + newText);
  },
  handleSearch: function(searchText, showCompleted){
    this.setState({
      searchText: searchText.toLowerCase(),
      showCompleted: showCompleted
    })
  },
  render: function(){
    var {todos} = this.state;
    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
