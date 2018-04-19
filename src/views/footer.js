import React, {Component} from 'react';

import { fetchWordOfTheDay } from '../services/funService';

class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            word: {
                word: undefined,
                definitions: []
            }
        }
    }

    componentWillMount() {
        (this.props.isFun) && fetchWordOfTheDay((resp) => {
            this.setState({word: resp});
        });
    }


    render() {

        return (<footer className="footer">
        <div className="container-fluid p-3 p-md-5 mt-4">
                {(this.props.isFun && this.state.word.word) && <p>Word of the day is <b title={(this.state.word.definitions[0]) && this.state.word.definitions[0].text}>{this.state.word.word}</b> </p> }
              <p> <a className="badge badge-light" href="mailto:michaelpaulhoe+willandvillagehall@gmail.com">Website built by Michael Hoe</a></p>
              </div>
        </footer>)
    }

}

export default Footer;