import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {
  static defultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',

  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,

  }
  capitaliseFirstLetter =(string)=>{ 
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title=`${this.capitaliseFirstLetter(this.props.category)}-WorldNews `
  }

  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cb478271397e498f9cce4f6f816f144f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false}
      );
 }

 async componentDidMount(){
  this.updateNews();
 }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: '20px' }}>WorldNews - Top {this.capitaliseFirstLetter(this.props.category)} headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-center">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={() =>{ this.setState({page: this.state.page-1}); this.updateNews(); }}>{" "}
            &larr; Previous{" "}
          </button>

          <button
            type="button"
            className="btn btn-dark mx-5"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            } //disable when it is last page           
            onClick={() =>{ this.setState({page: this.state.page+1}); this.updateNews(); }}>{" "}
            Next &rarr;{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default News;
