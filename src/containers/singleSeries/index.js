import React, { Component } from 'react';
import Loader from '../../components/loader';


class SingleSeries extends Component {
    state = {
        show: null,
    }

    componentDidMount(){

        const { id } = this.props.match.params;
        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then((res) => res.json())
      .then(json => this.setState({
        show: json
      }));
    }

    render() {
        const { show } = this.state;
        console.log(show);
        
        return (
            <div>
                <h3>SINGLE SERIES</h3>
                {show === null && <Loader />}
                {show !== null && 
                <div>
                    <img alt='Show' src={show.image.medium}></img>
                    <p>Title: {show.name}</p>
                    <p>Language: {show.language}</p>
                    <p>Summary: {show.summary}</p>
                    <p>Url: {show.url}</p>
                    <p>Status: {show.status}</p>
                </div>
                }
            </div>
        );
    }


}
export default SingleSeries;