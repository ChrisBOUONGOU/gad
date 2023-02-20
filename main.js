// set up text to print, each item in array is new line
var aText = new Array(
"C'est l'histoire d'une amitié", 
"Réellement créée",
"",
"Ce n'est pas le type de relation",
"Qui mène sur le chemin de la perdition",
"Et qui n'a aucune fondation",
"",
"Tu l'as certainement compris",
"Tu as certainement découvert cet amis",
"",
"Il s'agit de l'amitié que nous entretenons avec Dieu",
"",
"Comment entretenir notre amitié avec Dieu ?",
"",
"Sache que la parole de Dieu a un Pouvoir",
"Elle a le pouvoir de t'aider, te relever, te guider, te consoler, t'orienter",
"Et surtout elle est le chemin qui nous mène à Sa Gloire",
"",
"S'il t'arrive de douter",
"Crois en toi",
"Et sache que tu es un miracle de Dieu",
"",
"Si le monde ne le voit pas",
"Le plus important est que Dieu connaît ta valeur"
);
var iSpeed = 90; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();