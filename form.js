var request = require('request');

request('https://api.typeform.com/v0/form/nSqlq4?key=d299b4a61d49fa96262a49c6d2e6c07a9617c87e&completed=true', function (error, response, body) {
  if (!error && response.statusCode == 200) {
  	body = JSON.parse(body);

  	var responses = body.responses;

  	for(i in responses) {
  		var resp = responses[i];

  		console.log(resp.answers);
  	}
  }
})