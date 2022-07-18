'use strict';

function Homepage() {
  return (
    <React.Fragment>
      Welcome, to this page!<br/>
      <a href="/cards">Click here to go to the cards page.</a><br/>
      <img src="/static/img/balloonicorn.jpg"/>
      
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
