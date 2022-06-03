var fs=require('fs');
var tr_tr=fs.readFileSync('./Localization/tr-tr.json');
var en_en=fs.readFileSync('./Localization/en-en.json');
var tr_tr_elements=JSON.parse(tr_tr);
var en_en_elements=JSON.parse(en_en);
const express = require("express");
const app = express();
const cors=require('cors');

app.listen(process.env.PORT, () => console.log("Server Start at "+process.env.PORT+ " Port"));

app.use(express.static('public'));
app.use(cors());
app.get('/tr_tr_elements',alldata);
function alldata(request,response)
{
    response.send(elements);
}
app.get('/tr_tr_elements/:element/',searchElement);
function searchElement(request,response)
{
	var word=request.params.element;
	word=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
	console.log(word);
	//console.log(elements[word]);
	if(elements[word])
	{
		var reply=elements[word];
		
	}
	else
	{
		var reply={
			status:"Not Found"
		}
	}
    console.log(reply.boil);
	response.send(reply);

}

