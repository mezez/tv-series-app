import React, { Component } from 'react';
import SeriesList from '../../components/seriesList';
import Loader from '../../components/loader';
import Intro from '../../components/intro';
class Series extends Component {

  state = {
    series: [],
    seriesName: '',
    isFetching: false
  }

  componentDidMount() {
    // const series = ['Vikings', 'Game of thrones', 'The Blacklist'];

    // setTimeout(() => {
    //   //this.setState({ series: series});
    //   this.setState({ series });
    // }, 2000);

    //send a fetch request to the server whenever the component does mount

  }

  onSeriesInputChange = e => {
    this.setState({ seriesName: e.target.value, isFetching: true });

    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then((res) => res.json())
      .then(json => this.setState({
        series: json, isFetching: false
      }));

    //console.log(e);
    //console.log(e.target.value);
  }

  render() {
    const { series, seriesName, isFetching } = this.state;

    let inputStyle = {

    };
    return (
      <div>
        <Intro message="You will find your most loved series on this platform" />
        <div>
          <input value={seriesName} type="text" onChange={this.onSeriesInputChange}></input>
        </div>
        {
          series.length === 0 && seriesName.trim() === ''
          && <p>Please enter the series name into the input</p>
        }
        {
          !isFetching && series.length === 0 && seriesName.trim() !== ''
          && <p>No tv series with this name has been found</p>
        }
        {
          isFetching
          && <Loader />
        }
        {
          !isFetching
          && <SeriesList list={this.state.series} />
        }

      </div>
    )
  }
}

export default Series;