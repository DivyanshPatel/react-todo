var React = require('react');


var AddTodo = React.createClass({

  handleSubmit: function(e){
    e.preventDefault();
    var text = this.refs.todotext.value;
    if (text.length > 0){
      this.refs.todotext.value = "";
      this.props.onAddTodo(text);
    } else {
      this.refs.todotext.focus();
    }
  },
  render: function(){
    return(
      <div className='container__footer'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref='todotext' placeholder='What do you need to do?'/>
          <button className='button expanded'>Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports= AddTodo;
