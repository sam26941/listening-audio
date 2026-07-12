function createListeningForm(){
var form=FormApp.create('P5T1 Social Listening');
form.setIsQuiz(true);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 1").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=1").setRequired(true);
item.setChoices([
item.createChoice("A planet", false),
item.createChoice("A satellite", false),
item.createChoice("A star", true),
item.createChoice("A comet", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 2").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=2").setRequired(true);
item.setChoices([
item.createChoice("The Andromeda Galaxy", false),
item.createChoice("The Milky Way Galaxy", true),
item.createChoice("The Solar Galaxy", false),
item.createChoice("The Star Cluster", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 3").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=3").setRequired(true);
item.setChoices([
item.createChoice("Galaxies", false),
item.createChoice("Constellations", true),
item.createChoice("Asteroids", false),
item.createChoice("Satellites", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 4").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=4").setRequired(true);
item.setChoices([
item.createChoice("Revolution", false),
item.createChoice("Orbit", false),
item.createChoice("Rotation", true),
item.createChoice("Gravity", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 5").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=5").setRequired(true);
item.setChoices([
item.createChoice("Mars", false),
item.createChoice("Saturn", false),
item.createChoice("Neptune", false),
item.createChoice("The Earth", true),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 6").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=6").setRequired(true);
item.setChoices([
item.createChoice("Asteroids", false),
item.createChoice("Comets", false),
item.createChoice("Satellites", true),
item.createChoice("Stars", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 7").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=7").setRequired(true);
item.setChoices([
item.createChoice("An asteroid", false),
item.createChoice("A comet", true),
item.createChoice("A meteoroid", false),
item.createChoice("A planet", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 8").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=8").setRequired(true);
item.setChoices([
item.createChoice("The comet trail", false),
item.createChoice("The satellite belt", false),
item.createChoice("The asteroid belt", true),
item.createChoice("The orbit ring", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 9").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=9").setRequired(true);
item.setChoices([
item.createChoice("Meteoroids", false),
item.createChoice("Meteors", true),
item.createChoice("Meteorites", false),
item.createChoice("Asteroids", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 10").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=10").setRequired(true);
item.setChoices([
item.createChoice("Perfect Sphere", false),
item.createChoice("Elliptical", false),
item.createChoice("Geoid", true),
item.createChoice("Cylinder", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 11").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=11").setRequired(true);
item.setChoices([
item.createChoice("Geography", false),
item.createChoice("Cartography", true),
item.createChoice("Geology", false),
item.createChoice("Topography", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 12").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=12").setRequired(true);
item.setChoices([
item.createChoice("Paper sheet", false),
item.createChoice("Clay tablet", true),
item.createChoice("Wooden board", false),
item.createChoice("Bronze plate", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 13").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=13").setRequired(true);
item.setChoices([
item.createChoice("Physical map", false),
item.createChoice("Thematic map", false),
item.createChoice("Political map", true),
item.createChoice("Topographic map", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 14").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=14").setRequired(true);
item.setChoices([
item.createChoice("Blue", false),
item.createChoice("Green", true),
item.createChoice("Yellow", false),
item.createChoice("Brown", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 15").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=15").setRequired(true);
item.setChoices([
item.createChoice("Thematic maps", false),
item.createChoice("Reference maps", false),
item.createChoice("Paper maps", false),
item.createChoice("Digital maps", true),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 16").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=16").setRequired(true);
item.setChoices([
item.createChoice("Cardinal points", false),
item.createChoice("Intermediate directions", true),
item.createChoice("Latitude lines", false),
item.createChoice("RF scales", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 17").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=17").setRequired(true);
item.setChoices([
item.createChoice("Verbal Scale", true),
item.createChoice("Graphic Scale", false),
item.createChoice("Linear Scale", false),
item.createChoice("RF Scale", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 18").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=18").setRequired(true);
item.setChoices([
item.createChoice("Verbal Scale", false),
item.createChoice("Graphic Scale", true),
item.createChoice("Fraction Scale", false),
item.createChoice("Ratio Scale", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 19").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=19").setRequired(true);
item.setChoices([
item.createChoice("Regional Feature", false),
item.createChoice("Radial Formula", false),
item.createChoice("Representative Fraction", true),
item.createChoice("Relative Format", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 20").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=20").setRequired(true);
item.setChoices([
item.createChoice("The Title", false),
item.createChoice("The Direction Arrow", false),
item.createChoice("The Key or Legend", true),
item.createChoice("The Scale Bar", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 21").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=21").setRequired(true);
item.setChoices([
item.createChoice("Thematic maps", false),
item.createChoice("Political maps", false),
item.createChoice("Topographic maps", true),
item.createChoice("Digital road maps", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 22").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=22").setRequired(true);
item.setChoices([
item.createChoice("Green", false),
item.createChoice("Yellow", true),
item.createChoice("White", false),
item.createChoice("Red", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 23").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=23").setRequired(true);
item.setChoices([
item.createChoice("Green", false),
item.createChoice("Yellow", false),
item.createChoice("White", true),
item.createChoice("Brown", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 24").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=24").setRequired(true);
item.setChoices([
item.createChoice("Boundary lines", false),
item.createChoice("Grid lines", false),
item.createChoice("Contour lines", true),
item.createChoice("Scale lines", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 25").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=25").setRequired(true);
item.setChoices([
item.createChoice("Relatively flat terrain", false),
item.createChoice("A gentle slope", false),
item.createChoice("Hilly or mountainous terrain with steep slopes", true),
item.createChoice("A wide river valley", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 26").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=26").setRequired(true);
item.setChoices([
item.createChoice("PO", false),
item.createChoice("TO", false),
item.createChoice("PTO", false),
item.createChoice("PS", true),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 27").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=27").setRequired(true);
item.setChoices([
item.createChoice("A temple", false),
item.createChoice("An uninhabited hut", true),
item.createChoice("A police station", false),
item.createChoice("A village market", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 28").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=28").setRequired(true);
item.setChoices([
item.createChoice("A metalled road", false),
item.createChoice("A broad gauge railway line", false),
item.createChoice("A state boundary", true),
item.createChoice("A stream with water", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 29").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=29").setRequired(true);
item.setChoices([
item.createChoice("An open square with a cross", false),
item.createChoice("A blue-colored water body shape", true),
item.createChoice("A speckled grey oval shape", false),
item.createChoice("A black dotted circle", false),
]);
var item=form.addMultipleChoiceItem();
item.setTitle("Question 30").setHelpText("🎧 Audio: https://YOURNAME.github.io/listening-audio/player.html?q=30").setRequired(true);
item.setChoices([
item.createChoice("Water bodies", false),
item.createChoice("Vegetation zones", false),
item.createChoice("Cultural features", false),
item.createChoice("Desert terrain symbols", true),
]);
}