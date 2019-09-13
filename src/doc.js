export class Docs {
  constructor(issue, name){
    this.issue = issues;
    this.name = name;
  }
  getDocIssue(issue){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.5170, -122.6733, 25&skip=0&limit=10&user_key=${process.env.apiKey}&query=${query}`;
      alert(url);

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
    })
  }
}



export let popDoc = function(array){
  for (var i = 0; i < array.length; i++) {
    return `<p id="doc${i}out">${array[i].join(", ")}</p>`
  }
}
