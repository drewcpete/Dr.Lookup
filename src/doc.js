export class Docs {
  constructor(symptom, name){
    this.symptom = symptom;
    this.name = name;
  }

  getDocIssue(query){
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.5170, -122.6733, 25&skip=0&limit=10&query=${query}&name=${name}&user_key=${process.env.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
        request.open("GET", url, true);
        request.send();
    });
  }
}
