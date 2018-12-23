import axios from 'axios';

const url = 'http://localhost:8000';

class WeatherService {
  /**
   * Get weathers of  Istanbul, Berlin, London, Helsinki, Dublin, Vancouver
   *
   * @return promise
   */
  static getWeatherOfSixCities() {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.get(`${url}/weather.php`);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Search wetahers of a city by it's woeid
   *
   * @param {*} woeid
   * @return promise
   */
  static searchWeathers(woeid) {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.get(
          `${url}/weather.php?command=location&woeid=${woeid}`
        );
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   *  Search wetahers of a city by keyword
   *
   * @param {*} keyword
   */
  static searchLocation(keyword) {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.get(
          `${url}/weather.php?command=search&keyword=${keyword}`
        );
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default WeatherService;
