import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

export default class Movie extends Component {

    constructor(props) {
        super(props);

        this.state = {
            body: props.body,
            data: props.data,
            position: 0,
        }
    }

    incrementPosition() {
        console.log(this.state.position);
        if (this.state.position === this.state.data.movies.length - 1) {
            this.setState({
                position: 0,
            });
            console.log('poop');
        }
        else {
            console.log(this.state.position);
            this.setState((prevState) => ({
                position: prevState.position + 1,
            }));
        }
        console.log('nuggets');
    };

    render() {
        return (
            <Fragment>
                <p>{this.state.position}</p>
                <p>{this.state.data.movies.length}</p>
                <div>
                    <button onClick={this.incrementPosition()}>Increment Position</button>
                    <p>{this.state.data.movies[this.state.position].crawl}</p>
                    <img src={this.state.data.movies[this.state.position].img}/>
                </div>
            </Fragment>
        )
    }
};