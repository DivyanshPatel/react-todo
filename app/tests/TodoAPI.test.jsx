var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localstorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(null);
    });

    it('should return todo if valid array in localstorage', () => {
      var todos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filterTodos', () => {
    var todos = [{
      id: 1,
      text: 'Some text here',
      completed: true
    },{
      id: 2,
      text: 'Other text here',
      completed: false
    },{
      id: 3,
      text: 'Some text here',
      completed: true
    }];

    it('should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filteredTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return non-completed todos when showCompleted is false', () => {
      var filteredTodos = TodoAPI.filteredTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort todos based on completed', () => {
      var filteredTodos = TodoAPI.filteredTodos(todos, true , "");

      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should return all items if search is empty', () => {
      var filteredTodos = TodoAPI.filteredTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return all items if search has some value', () => {
      var filteredTodos = TodoAPI.filteredTodos(todos, true, 'some');
      expect(filteredTodos.length).toBe(2);
    });
  });
});
