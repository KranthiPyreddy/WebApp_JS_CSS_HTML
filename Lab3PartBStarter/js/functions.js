/* add in your functions here */
function outputCountryBox(name, continent, cities, photos) {
    document.write("<div class='item'>" + 
    "<h2>" + name + "</h2>" + 
    "<p>" + continent + "</p>");
    outputCities(cities);
    outputPhotos(photos);
    function outputCities(data) {
        console.log(data);
        document.write("<div class='inner-box'>" + ("<h3>" + "Cities" + "</h3>") + "<ul>");
        for (var i = 0; i < data.length; i++) {
            //console.log(data[i]);
            document.write("<li>" + data[i] + "</li>");
        }
        document.write("</ul>" + "</div>");
    }
    function outputPhotos(picData) {
        document.write('<div class="inner-box"><h3>Popular Photos</h3>');
        for (var i = 0; i < picData.length; i++) {
            document.write("<img src =" + picData[i] + "> </img>");
        }
        document.write("</div>");
    } 
    document.write("<button>Visit</button></div>"); 
}
function logic() {
    for (var i = 0; i < countries.length; i++) {
        outputCountryBox(countries[i].Name, countries[i].Continent, countries[i].Cities, countries[i].Photos);
    }
};
