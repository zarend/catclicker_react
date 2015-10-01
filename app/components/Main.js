var React = require('react');
var Dispatcher = require('react-dispatcher');
var flux = require('flux-react');

var AppDispatcher = new Dispatcher();


var CatStore = flux.createStore({
   count: 0,
   addCount: function() {
      this.count++;
   }
});

console.log('CatStore', CatStore);

AppDispatcher.register(function(payload) {
   switch(payload.eventName) {
      case 'click-cat':
         CatStore.addCount();
         CatStore.trigger('change');
         break;
   }

   return true;
});

var Main = React.createClass({
   handleClick: function() {
      console.log('found click');
      CatStore.addCount();
   },
   countChanged: function() {
      this.setState({count: CatStore.count});
   },
   getInitialState: function() {
      return { count: CatStore.count };
   },
   componentDidMount: function() {
      CatStore.on('change', this.countChanged);
   },
   render: function() {
      return (
         <div>
            <h1>Welcome to cat clicker</h1>
            <div>
               <div>
                  <img src="img/cat.jpg"
                       alt="cat"
                       height="200"
                       onClick={ this.handleClick }/>
               </div>
               number of clicks: { this.state.count}
            </div>
         </div>
      )
   }
});

React.render(<Main />, document.body);