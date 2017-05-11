var React = require('react');
var ReactDOM = require('react-dom');

var Todo = React.createClass({
  handleClick: function(){
    this.props.onToggle(id);
  },
  render: function(){
    var {id, text, completed} = this.props;
    return(

      <div onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type='checkbox' checked={completed}/>
        {text}
      </div>
    );
  }
});

module.exports = Todo;
