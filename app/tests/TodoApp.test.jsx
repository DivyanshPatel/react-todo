var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist' , () =>{
    expect(TodoApp).toExist();
  });

  // it('should add todo to todos state on handleAddToDo',() => {
  //   var todo = 'test text';
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
  //
  //   todoApp.setState({todos: []});
  //   todoApp.handleAddTodo(todo);
  //
  //   expect(todoApp.state.todos[0].text).toBe(todo);
  // });
  //
  // it('should toggle completed value when handle toggle called', () =>{
  //   var todos = [{
  //     id: 11,
  //     text: 'Walk and Talk',
  //     completed: false
  //   }];
  //
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
  //
  //   todoApp.setState({todos: todos});
  //   expect(todoApp.state.todos[0].completed).toBe(false);
  //   todoApp.handleToggle(11);
  //   expect(todoApp.state.todos[0].completed).toBe(true);
  //
  // });

});
