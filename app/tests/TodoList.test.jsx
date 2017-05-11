var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist' , () =>{
    expect(TodoList).toExist();
  });

  it('shoudl render one component for each Todo component', () =>{
    var todos = [
      {
        id: 1,
        text: 'Check Email'
      },{
        id: 2,
        text: 'Play Football'
      }
    ]
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });
});
