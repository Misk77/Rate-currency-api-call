// Simple call to currency rate
function myFunction() {
  //call this api
  var url='http://data.fixer.io/api/latest?access_key=23defb8f1f9936ce65fbfa73b829b606&base=EUR';
  // response sending back callerback
  var response=UrlFetchApp.fetch(url);
  // store info 
  var json=response.getContentText();
  // 
  var data=JSON.parse(json);
  // save the data in log
  // this line for seeing the base search
  Logger.log(data.base);
  // to see base currency
  Logger.log(data.rates.EUR);
  // this line for fetch the SEK currency
  Logger.log(data.rates.SEK);
}
