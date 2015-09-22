var React = require('react');

var numClicks = 0;

var Main = React.createClass({
   handleClick: function() {
      console.log('found click');
      numClicks++;
      this.forceUpdate();
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
               number of clicks: {numClicks}
            </div>
         </div>
      )
   }
});

React.render(<Main />, document.getElementById('app'));