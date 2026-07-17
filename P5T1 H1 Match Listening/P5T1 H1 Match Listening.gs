function createListeningForm(){
  var form = FormApp.create('P5T1 H1 Match Listening Listening Quiz');
  form.setIsQuiz(true);
  var data = [
    {
      "label": "Question 1",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["300", "9,000,000", "5,000", "70"],
      "answer": "9,000,000"
    },
    {
      "label": "Question 2",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["42,970 \u2248 43,000", "84,614 \u2248 80,000", "71,563 \u2248 71,600", "52,854 \u2248 52,850"],
      "answer": "71,563 ≈ 71,600"
    },
    {
      "label": "Question 3",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["$450", "$950", "$1,250", "$1,450"],
      "answer": "$1,450"
    },
    {
      "label": "Question 4",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["695", "745", "1,465", "1,645"],
      "answer": "1,465"
    },
    {
      "label": "Question 5",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["200", "300", "400", "500"],
      "answer": "200"
    },
    {
      "label": "Question 6",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["$24", "$30", "$52", "$54"],
      "answer": "$52"
    },
    {
      "label": "Question 7",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["5/200 \u00d7 365", "2/40 \u00d7 30", "1/3 \u00d7 30", "2/5 \u00d7 30"],
      "answer": "2/5 × 30"
    },
    {
      "label": "Question 8",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["1/3 + 2/4", "3/7 \u00d7 1/3", "3/5 - 1/2", "5/10 \u00d7 2/5"],
      "answer": "3/5 - 1/2"
    },
    {
      "label": "Question 9",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["220 kg", "180 kg", "110 kg", "100 kg"],
      "answer": "180 kg"
    },
    {
      "label": "Question 10",
      "driveUrl": "PASTE_INDEX_HTML_LINK_HERE",
      "choices": ["$300", "$600", "$1,500", "$2,100"],
      "answer": "$1,500"
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