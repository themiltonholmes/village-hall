import React, { Component } from 'react';

class Body extends Component {
    render() {
      return (
        <div id="main-body" className="container-fluid">
            <h2>Home</h2>

            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">About Us</h2>
                    <p className="card-text">
                        Willand Village Hall, one of the largest in Devon, is situated just off the B3181, in Gables Road, Willand with easy access from all local areas and from junctions 27 and 28 of the M5. 
                        The Hall has a Public Entertainment and Theatre Licence under the Licensing Act 2003. The hall also benefits from having central heating throughout.
                    </p>
                </div>
            </div>
        </div>
      );
    }
  }
  
export default Body;