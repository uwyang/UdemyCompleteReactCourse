// user https://babeljs.io/repl/ to see how Babel gets compiledinto actual bael.
//jsx is the prefered way of creating react apps.
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
  onButtonClick: function(e){
    e.preventDefault();
    var nameRef = this.refs.name;
    var name = nameRef.value;
    this.state.name = name;
    console.log("onButtonClick "+ name);
    nameRef.value = "";

    if (typeof name === "string" && name.length>0
    {
      this.setState({
        name: name
      });
    }


  },
  render: function(){
    //var name = this.props.name;
    var name = this.state.name;
    var message = this.props.message;
    //name is retrieved from state, not props! it is persistent!
    return (

      <div>Greeting from a react class
          <h2>TO: {name}</h2>
          <p>{message}</p>
          //onSubmit is bulit into react.
          <form onSubmit={this.onButtonClick}>
            //you use ref to passon values.
            <input type="text" ref="name"/>
            <button>Set name</button>
          </form>
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
