
export async function requestData(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`HTTP error, status= ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  export async function main() {
    try {
        const url ="http://api.weatherapi.com/v1/current.json?key=2782b859ed5242d7ad7164855221511&q=London&aqi=no";
      const responseOfRequest = await requestData(url);
      //fetchingNews(responseOfRequest);
      return responseOfRequest;
    } catch (error) {
      const errorInformation = `${error.message} - code: ${error.code} - status: ${error.status}`;
  
      console.error(errorInformation);
    }
  }