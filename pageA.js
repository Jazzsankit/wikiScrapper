let request = require("request");
let fs= require("fs");
let cheerio= require("cheerio");
const { connect } = require("http2");

function pageA(link){
    request(link,cb);
}

function cb(error,response , html){
    // console.log(html);
    if(error == null && response.statusCode == 200)
    {
        parseData(html);
    }
    else if(response.statusCode == 404){
        console.log("Page not found");
    }
    else{
    console.log(error);
    }
}

function parseData(html){
    let ch= cheerio.load(html);
    // let enLink ="https://www.wikipedia.org" + ch(".mw-allpages-chunk li a[title='A']").attr("href");
    // console.log(html);
    // portalPage(enLink);
    
    let content = ch("#content .mw-body-content");
    // fs.writeFileSync("./home.txt",html);
    // console.log(content);

for(let i=0 ; i<content.length ; i++){
    let teamName = ch(content[i]).find("p").text();
    // teamName = teamName.split("");
    fs.writeFileSync("./home.txt",teamName);
        // console.log(teamName);

}

}


module.exports = pageA;