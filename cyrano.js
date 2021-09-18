exports.action = function(data){
var phrase = JarvisIA.reco.trim().split(" ")
var def=phrase[phrase.length-1] 
console.log(phrase,def)
var url0 = "https://www.dictionnaire-synonyme.com/synonyme-"+def
var request = require('request')

var mot = def
console.log(mot)
var cyrano=data.cyrano

if (cyrano=="0"){
  request({ url : url0}, function (err,response, body){// on appel cette url et on le stoque dans body

var $ = require('cheerio').load(body, {xmlMode: true, ignorewhitespace: true, lowerCaseTags: true});
 var synonymes="" //mode sélection multiple ;) simple
      for(var z=1;z<11;z++){synonymes= synonymes+ $('li.twelve:nth-child('+z+')').text().trim()+"  ,  ";} 

JarvisIASpeech("Comme synonyme pour le mot : "+mot+" , il y a : "+synonymes) //permet de vocaliser 
})
 return false
}

}
