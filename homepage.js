let request = require("request");
let fs= require("fs");
let cheerio= require("cheerio");
const pageA = require("./pageA");

// ****Home Page****

let link="https://www.wikipedia.org/";
request(link,cb1);

function cb1(error,response , html){
    if(error == null && response.statusCode == 200)
    {
        parseData1(html);
    }
    else if(response.statusCode == 404){
        console.log("Page not found");
    }
    else{
        console.log(html);
    console.log(error);
    }
}

function parseData1(html){
    let ch= cheerio.load(html);
    // console.log(html);
    let enLink = "https:"+ch("#js-link-box-en").attr("href");
    // fs.writeFileSync("./home.html",aTag);
    // console.log(enLink);
    mainPage(enLink);
}

// ****English Page*****

function mainPage(enLink){
    request(enLink,cb2);
}

function cb2(error,response , html){
    // console.log(html);
    if(error == null && response.statusCode == 200)
    {
        parseData2(html);
    }
    else if(response.statusCode == 404){
        console.log("Page not found");
    }
    else{
        console.log(html);
    console.log(error);
    }
}

function parseData2(html){
    let ch= cheerio.load(html);
    let enLink ="https://www.wikipedia.org" + ch(".portal-hright.portal-vbot a").attr("href");
    // console.log(enLink);
    // fs.writeFileSync("./home.html",html);
    portalPage(enLink);
}

// ****Portal Page*****

function portalPage(Link){
    request(Link,cb3);
}

function cb3(error,response , html){
    // console.log(html);
    if(error == null && response.statusCode == 200)
    {
        parseData3(html);
    }
    else if(response.statusCode == 404){
        console.log("Page not found");
    }
    else{
    console.log(error);
    }
}

function parseData3(html){
    let ch= cheerio.load(html);
    let enLink ="https://www.wikipedia.org" + ch(".hlist.noprint ul li a[title='Wikipedia:Contents/A–Z index']").attr("href");
    // console.log(enLink);
    indexPage(enLink);
    // fs.writeFileSync("./home.html",html);
    // portalPage(enLink);
}

// *****Index Page******


function indexPage(Link){
    request(Link,cb4);
}

function cb4(error,response , html){
    // console.log(html);
    if(error == null && response.statusCode == 200)
    {
        parseData4(html);
    }
    else if(response.statusCode == 404){
        console.log("Page not found");
    }
    else{
    console.log(error);
    }
}

function parseData4(html){
    let ch= cheerio.load(html);
    let enLink ="https://www.wikipedia.org" + ch("#toc tr td b a[title='Special:AllPages/A']").attr("href");
    // console.log(enLink);
    aAllPage(enLink);
    // fs.writeFileSync("./home.html",html);
    // portalPage(enLink);
}


// *****A all page *****

function aAllPage(Link){
    request(Link,cb5);
}

function cb5(error,response , html){
    // console.log(html);
    if(error == null && response.statusCode == 200)
    {
        parseData5(html);
    }
    else if(response.statusCode == 404){
        console.log("Page not found");
    }
    else{
    console.log(error);
    }
}

function parseData5(html){
    let ch= cheerio.load(html);
    let enLink ="https://www.wikipedia.org" + ch(".mw-allpages-chunk li a[title='A']").attr("href");
    pageA(enLink);
    // fs.writeFileSync("./home.html",html);
    // portalPage(enLink);
}
