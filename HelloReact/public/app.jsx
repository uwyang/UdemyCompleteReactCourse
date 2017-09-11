// user https://babeljs.io/repl/ to see how Babel gets compiledinto actual bael.
//jsx is the prefered way of creating react apps.

var GreeterMessage = React.createClass({
  render: function(){
    //name is already value.
    var name = this.props.name;
    var message = this.props.message;
    return(
    <div>
      <h1>Hello {name}</h1>
      <p>Message: {message}</p>
    </div>);
  },

});

var GreeterForm = React.createClass({
  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <p>input name here: </p>
          <input type="text" ref="name"/>
        </div>

        <div>
          <p>input Message here: </p>
          <textarea ref="message">
          </textarea>
        </div>
        <div>
          <button>Set Stuff</button>
        </div>
      </form>
    );
  },
  onFormSubmit: function(e){
    e.preventDefault();
    //The ref is used to return a reference to the element.
    //Refs should be avoided in most cases, however,
    //they can be useful when we need DOM measurements or
    //to add methods to the components.
    var nameRef = this.refs.name;
    var name = nameRef.value;
    var messageRef = this.refs.message;
    var message = messageRef.value;
    var update = {};

    console.log(this); // it's null?
    console.log(this.props.onNewName);
    console.log("onFormSubmit "+ name);
    if (typeof name === "string" && name.length>0)
    {
      nameRef.value = "";
      update.name = name;
      this.props.onNewName(update);
    }
    messageRef.value = "";
    update.message = message;
    this.props.onNewMessage(update);

  }

});


var Greeter = React.createClass({
  //first: props gets default values,
  //second: state registers a list of vars and their values
  getDefaultProps: function(){
      return {
        name: 'React',
        message: 'default message',
      }
  },
  getInitialState: function(){
    return {
      //maintain a name state you can change yourself.
      //component can not change props. so keep state.
      name: this.props.name,
    };
  },

  handleNewName:  function(update){
    console.log("handel new name ", name);
      this.setState(update);
  },

  handleNewMessage: function(update){
    this.setState(update);
  },

  render: function(){
    //var name = this.props.name;
    var name = this.state.name;
    var message = this.state.message;
    //name is retrieved from state, not props! it is persistent!

    //onSubmit is bulit into react.
    return (
      <div>
          <GreeterMessage name={name} message={message}/>
          <GreeterForm onNewName={this.handleNewName} onNewMessage={this.handleNewMessage}/>
      </div>

    );
  }
});

const e = (<h1>
  hello react from a text.
</h1>);

var tmpName = "Mary Ann";
var message = "you go girl";
var name = "globalvar name should not be used";

ReactDOM.render(
  //<Greeter name = "miaomiao"/>
  <Greeter name = {tmpName} message="You go, girl!"/>, //tmpName is used instead of the global var name.
  document.getElementById("app")
);
