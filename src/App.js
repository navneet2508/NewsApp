import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  // c='Navneet'
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={this.state.progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apiKey}
                key="general"
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apiKey}
                key="business"
                pageSize={this.pageSize}
                country="in"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apiKey}
                key="entertainment"
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apiKey}
                key="general"
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apiKey}
                key="health"
                pageSize={this.pageSize}
                country="in"
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apiKey}
                key="science"
                pageSize={this.pageSize}
                country="in"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apiKey}
                key="sports"
                pageSize={this.pageSize}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apiKey}
                key="technology"
                pageSize={this.pageSize}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </div>
    );
  }
}
