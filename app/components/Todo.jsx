var React = require('react');
var ReactDOM = require('react-dom');

var Todo = React.createClass({

  render: function(){
    var {id, text} = this.props;
    return(

      <div>
        {id}. {text}
      </div>
    );
  }
});

module.exports = Todo;
