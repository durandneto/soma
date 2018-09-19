import React from 'react';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';

const Route4Component = ({ match }) => {
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-3">Rout 4</h1>
            </div>

            <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <ul>
                    <li><Link to={`${match.url}/1`}>1</Link></li>
                    <li><Link to={`${match.url}/2`}>2</Link></li>
                    <li><Link to={`${match.url}/3`}>3</Link></li>
                    <li><Link to={`${match.url}/4`}>Child 4</Link></li>
                    </ul>
                </div>
                <div className="col-md-9">
                    <Switch>
                        <Route path={`${match.path}/1`} render={() => { return <h1>1</h1> }}/>
                        <Route path={`${match.path}/2`} render={() => { return <h1>2</h1> }}/>
                        <Route path={`${match.path}/3`} render={() => { return <h1>3</h1> }}/>
                        <Route path={`${match.path}/:id`} component={Child} />
                    </Switch>
            </div>
            </div>
            </div>
        </div>
    );
}

const Child = ({ match }) => (
    <div>
      <h3>URL ID parameter: {match.params.id}</h3>
    </div>
);


export default Route4Component;




