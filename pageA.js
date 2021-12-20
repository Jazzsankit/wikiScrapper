let request = require("request");
let fs= require("fs");
let cheerio= require("cheerio");

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
    let headingTag = ch(content[i]).find("h2 .mw-headline").text()+"";
    let para = ch(content[i]).find("p, h2").text();
    // teamName = teamName.split("history");
    const result =headingTag.split(/(?=[A-Z])/);
    console.log(result);
    fs.writeFileSync("./home.txt",para);
}

}



module.exports = pageA;