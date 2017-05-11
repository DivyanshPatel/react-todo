var React = require('React');
var ReactDOM = require('react-dom');
var TodoList = require('TodoList');


var TodoApp = React.createClass({
  getInitialState: function(){
    return{
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

  render: function(){
    var {todos} = this.state;
    return(
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
});

module.exports = TodoApp;
