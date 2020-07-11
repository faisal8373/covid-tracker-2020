import React from "react";

import { Cards, CountryPicker } from "./components";
import { fetchData } from "./api/";
import styles from "./App.module.css";

// import image from "./images/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <h1>COVID Tracker App by Faisal</h1>
        <h3 classname={styles.date}>
          {new Date(data.lastUpdate).toDateString()}
        </h3>

        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
      </div>
    );
  }
}
// new file
export default App;
