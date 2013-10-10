Handlebars.registerHelper('pluralize', function(n, thing) {
  // fairly stupid pluralizer
  if (n === 1) {
    return '1 ' + thing;
  } else {
    return n + ' ' + thing + 's';
  }
});

Handlebars.registerHelper('arrayify',function(obj){
    result = [];
    if (typeof obj == 'string') {
    	obj = JSON.parse(obj)
    }
    for (var key in obj) result.push({name:key,value:obj[key]});
    return result;
});