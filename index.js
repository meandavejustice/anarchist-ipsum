var endings = ['.', '?', '?', '!', '!', '‽', '...', '.', '.', '.', '.', '.', '.', '.', '.'];
var texts = ['emma goldman', 'anarcho', 'capitalists', 'pigs', 'noam chomsky', 'revolution',
 'paris', 'pussy riot', 'capitalista', 'cuba', 'balaclava', 'red', 'black', 'flag', 'violence',
 'commune', 'marx', 'karl', 'bourgeois', 'syndicalism', 'syndicalist', 'communism', 'socialist',
 'oppress', 'direct action', 'action', 'autonomy', 'equality', 'intentional communities', 'pacifism',
 'aggresion', 'propaganda of the deed', 'anarchism', 'coercive', 'pamphlet', 'zine', 'newspaper',
 'collectivist', 'authoritarian', '1848', 'Commune', 'ruling class', 'Bakunin', 'ideas', 'labour',
 'spain', 'general strike', 'haymarket', 'riot', 'police', 'state', 'McKinley', '1917', 'Bolsheviks',
 'Berkman', 'solidarity', 'critical', 'anti-fascist', 'organisation', 'Spanish Civil War', ' Fédération',
 'Anarchiste', 'Campaign for Nuclear Disarmament', 'AFB', 'anarcha', 'rights', 'activism', 'indigenous',
 'savage', 'rights', 'workers', 'youth', 'industrial', 'World Trade Organization', 'WTO', 'control',
 'philosophy', 'post', 'insurrection', 'propaganda', 'faction', 'struggle', 'the coming insurrection',
 'When the revolution comes'];

(function init() {
  var submission = document.querySelector('.submit');
  submission.addEventListener('click', submit, false);

  startRevolution({paragraphs: 3, firstBrick: true})
}())

function startRevolution(opts) {
  var ipsum;
  if (opts.firstBrick) {
    ipsum = genPamphlet(getSentenceLength(), 5, opts.firstBrick);
  } else {
    ipsum = genPamphlet(getSentenceLength(), 5);
  }

  document.querySelector('.bloc').innerHTML = ipsum;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substring(1)
}

function randomUnitFromArray(arr) {
  var ogIndex = arr.length -1,
      tempValue,
      randomIndex;

  for(var i = 0; i < arr.length; i++) {
    randomIndex = Math.floor(Math.random() * i);

    tempValue = arr[ogIndex];
    arr[ogIndex] = arr[randomIndex];
    arr[randomIndex] = tempValue;
  }
  if (arr[0] === undefined) debugger;

  return arr[0];
}

function getSentenceLength() {
  return Math.floor(Math.random()*(11-6+1)+6);
}

function getSentence(numWords) {
  var rant = [capitalize(randomUnitFromArray(texts))];
  for (var i = 0; i < numWords; i++) {
    rant.push(randomUnitFromArray(texts));
  }

  return rant.join(' ') + randomUnitFromArray(endings);
}

function getParagraph(length) {
  var paragraph;
  for(var i = 0; i < length; i++) {
    paragraph += getSentence(getSentenceLength());
  }
  return paragraph;
}

function genPamphlet(length, paragraphs, firstBrick) {
  var pamphlet = '';

  if (i === 0 && firstBrick) {
    pamphlet = '<p>Anarcho ipsum dolor sit amet. ' + randomRant(length) + '</p>';
  } else {
    pamphlet = '<p>' + getParagraph(length) + '</p>';
  }

  for(var i = 0; i < paragraphs; i++) {
    pamphlet += getParagraph(length) + '<br/>'
  }
  return pamphlet;
}

function submit(ev) {
  var options = {
    paragraphs: parseInt(document.querySelector('.paragraphs'), 0),
    firstBrick: document.querySelector('.start')
  };

  startRevolution(options);
}

