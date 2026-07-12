function createListeningForm(){
  var form = FormApp.create('P5T1 Social Listening Listening Quiz');
  form.setIsQuiz(true);
  var data = [
    {
      "label": "Question 1",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["A planet", "A satellite", "A star", "A comet"],
      "answer": "A star"
    },
    {
      "label": "Question 2",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["The Andromeda Galaxy", "The Milky Way Galaxy", "The Solar Galaxy", "The Star Cluster"],
      "answer": "The Milky Way Galaxy"
    },
    {
      "label": "Question 3",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["Galaxies", "Constellations", "Asteroids", "Satellites"],
      "answer": "Constellations"
    },
    {
      "label": "Question 4",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["Revolution", "Orbit", "Rotation", "Gravity"],
      "answer": "Rotation"
    },
    {
      "label": "Question 5",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["Mars", "Saturn", "Neptune", "The Earth"],
      "answer": "The Earth"
    },
    {
      "label": "Question 6",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["Asteroids", "Comets", "Satellites", "Stars"],
      "answer": "Satellites"
    },
    {
      "label": "Question 7",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["An asteroid", "A comet", "A meteoroid", "A planet"],
      "answer": "A comet"
    },
    {
      "label": "Question 8",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["The comet trail", "The satellite belt", "The asteroid belt", "The orbit ring"],
      "answer": "The asteroid belt"
    },
    {
      "label": "Question 9",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["Meteoroids", "Meteors", "Meteorites", "Asteroids"],
      "answer": "Meteors"
    },
    {
      "label": "Question 10",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["Perfect Sphere", "Elliptical", "Geoid", "Cylinder"],
      "answer": "Geoid"
    },
    {
      "label": "Question 11",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["Geography", "Cartography", "Geology", "Topography"],
      "answer": "Cartography"
    },
    {
      "label": "Question 12",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["Paper sheet", "Clay tablet", "Wooden board", "Bronze plate"],
      "answer": "Clay tablet"
    },
    {
      "label": "Question 13",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["Physical map", "Thematic map", "Political map", "Topographic map"],
      "answer": "Political map"
    },
    {
      "label": "Question 14",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["Blue", "Green", "Yellow", "Brown"],
      "answer": "Green"
    },
    {
      "label": "Question 15",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["Thematic maps", "Reference maps", "Paper maps", "Digital maps"],
      "answer": "Digital maps"
    },
    {
      "label": "Question 16",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["Cardinal points", "Intermediate directions", "Latitude lines", "RF scales"],
      "answer": "Intermediate directions"
    },
    {
      "label": "Question 17",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["Verbal Scale", "Graphic Scale", "Linear Scale", "RF Scale"],
      "answer": "Verbal Scale"
    },
    {
      "label": "Question 18",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["Verbal Scale", "Graphic Scale", "Fraction Scale", "Ratio Scale"],
      "answer": "Graphic Scale"
    },
    {
      "label": "Question 19",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["Regional Feature", "Radial Formula", "Representative Fraction", "Relative Format"],
      "answer": "Representative Fraction"
    },
    {
      "label": "Question 20",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["The Title", "The Direction Arrow", "The Key or Legend", "The Scale Bar"],
      "answer": "The Key or Legend"
    },
    {
      "label": "Question 21",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["Thematic maps", "Political maps", "Topographic maps", "Digital road maps"],
      "answer": "Topographic maps"
    },
    {
      "label": "Question 22",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["Green", "Yellow", "White", "Red"],
      "answer": "Yellow"
    },
    {
      "label": "Question 23",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["Green", "Yellow", "White", "Brown"],
      "answer": "White"
    },
    {
      "label": "Question 24",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["Boundary lines", "Grid lines", "Contour lines", "Scale lines"],
      "answer": "Contour lines"
    },
    {
      "label": "Question 25",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["Relatively flat terrain", "A gentle slope", "Hilly or mountainous terrain with steep slopes", "A wide river valley"],
      "answer": "Hilly or mountainous terrain with steep slopes"
    },
    {
      "label": "Question 26",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["PO", "TO", "PTO", "PS"],
      "answer": "PS"
    },
    {
      "label": "Question 27",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["A temple", "An uninhabited hut", "A police station", "A village market"],
      "answer": "An uninhabited hut"
    },
    {
      "label": "Question 28",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["A metalled road", "A broad gauge railway line", "A state boundary", "A stream with water"],
      "answer": "A state boundary"
    },
    {
      "label": "Question 29",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["An open square with a cross", "A blue-colored water body shape", "A speckled grey oval shape", "A black dotted circle"],
      "answer": "A blue-colored water body shape"
    },
    {
      "label": "Question 30",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["Water bodies", "Vegetation zones", "Cultural features", "Desert terrain symbols"],
      "answer": "Desert terrain symbols"
    },
  ];
  for (var i = 0; i < data.length; i++) {
    var itemData = data[i];
    var mcItem = form.addMultipleChoiceItem();
    mcItem.setTitle(itemData.label)
          .setHelpText("🎧 Audio: " + itemData.driveUrl)
          .setRequired(true);
    var formChoices = [];
    for (var j = 0; j < itemData.choices.length; j++) {
      var isCorrect = (itemData.choices[j] === itemData.answer);
      formChoices.push(mcItem.createChoice(itemData.choices[j], isCorrect));
    }
    mcItem.setChoices(formChoices);
  }
  Logger.log('Form Created! Edit URL: ' + form.getEditUrl());
}