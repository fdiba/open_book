window.onload = test;

var mainPointer = 0;
var pointerImg = 0;

var texte = new Array();
var images = new Array();

texte[0] = "Le vieil homme pêchait seul dans le Gulf Stream sur son canot depuis quatre-vingt-quatre jours sans avoir pris un poisson.";
images[0] = ["0/AA_0_MER.gif", "0/FSfondmarin1giphy.gif", "0/FSfondmarin2giphy.gif", "0/FSfondmarin3giphy.gif", "0/FSfondmarin4giphy.gif", "0/FSfondmarin5giphy.gif", "0/NSD_0_barquefun.gif", "0/NSD_0_BarquePeche.gif", "0/NSD_0_Oldman.gif", "0/NSD_0_Oldman2.gif", "0/NSD_0_pecheur.gif", "0/NSD_0_poisson.gif", "0/NSD_0_poisson2.gif", "0/NSD_0_poisson3.gif", "0/NSD_0_poisson4.gif","0/AA_0_JOURS.gif"];texte[1] = "Les quarante premiers jours, le garçon était venu avec lui.";
images[1] = ["1/AA_1_garcon_giphy.gif", "1/FSfishing1giphy.gif", "1/FSfishing3giphy.gif", "1/FSfishing5giphy.gif", "1/FSfondmarin1giphy.gif", "1/FSfondmarin2giphy.gif", "1/FSoeuilgiphy.gif", "1/FS-vieuxcartoon1-giphy.gif", "1/FS-vieuxFeu-giphy.gif", "1/MG_1_garcon1.gif", "1/MG_1_garcon2.gif", "1/MG_1_garcon3.gif", "1/NSD_1_BoyAnime.gif", "1/NSD_1_BoyBeatles.gif", "1/NSD_1_Boy_Chauve.gif", "1/NSD_1_BoyDeformation.gif", "1/NSD_1_BoyIncoruptibles.gif", "1/NSD_1_Boy_marche.gif", "1/NSD_1_BoyMetro.gif", "1/NSD_1_BoyOhboy.gif", "1/NSD_1_Boyvolant.gif"];
texte[2] = "Mais après ces quarante jours, les parents du garçon lui avaient dit que le vieil homme était finalement et définitivement salao, ce qui est la pire forme pour dire pas de chance";
images[2] = [ "2/FSfondmarin4giphy.gif", "2/FS-ocean1-giphy-copie.gif", "2/FS-vieuxlubric2-giphy.gif", "2/MG_2_chance1.gif", "2/AA_2_noluck_giphy.gif", "2/AA_2_ADVICE_BIS_giphy.gif", "2/AA_2_ADVICE_giphy.gif", "2/AA_2_PARENTS_giphy.gif", "2/MG_2_chance2.gif", "2/MG_2_chance3.gif", "2/MG_2_chance4.gif", "2/MG_2_chance5.gif"];
texte[3] = "et selon leurs ordres, le garçon était parti sur un autre bateau, lequel avait pris trois gros poissons la première semaine.";
images[3] = ["3/AA_3_3POISSONS_giphy.gif", "3/AA_3_parents_giphy.gif", "3/FSfishing1giphy.gif", "3/FSfishing2giphy.gif", "3/FSfishing3giphy.gif", "3/FSfishing4giphy.gif", "3/FSfishing5giphy.gif", "3/MG_3_garconparti.gif", "3/MG_3_poisson.gif", "3/MG_3_poisson2.gif", "3/MG_3_poisson3.gif"];
texte[4] = "Cela le rendait triste, le garçon, de voir le vieil homme revenir chaque soir le canot vide,";
images[4] = ["4/MG_4_triste1.gif",  "4/MG_4_triste2.gif", "4/MG_4_triste3.gif", "4/MG_4_triste4.gif",  "4/MG_4_triste5.gif", "4/MG_4_triste6.gif", "4/MG_4_triste7.gif",  "4/MG_4_triste8.gif", "4/NSD_4_bateau.gif", "4/NSD_4_bateauvide.gif",  "4/NSD_4_bateauvoile.gif", "4/NSD_4_sadboy.gif", "4/NSD_4_sadboy2.gif",  "4/NSD_4_sadboy3.gif", "4/NSD_4_sadboy4.gif", "4/NSD_4_sadboy5.gif"];
texte[5] = "et toujours il le rejoignait pour l’aider à porter les lignes enroulées, la gaffe, le harpon et la voile ferlée autour du mât.";
images[5] = ["5/AA_5_friend_giphy.gif",  "5/AA_5_friendship_giphy.gif", "5/AA_5_PORT_giphy.gif",  "5/AA_5_weight_BIS_giphy.gif", "5/AA_5_weight_giphy.gif",  "5/FSfishing5giphy.gif", "5/FSlezardgiphy.gif", "5/FSoeuilgiphy.gif", "5/FS-vieuxcartoon1-giphy.gif",  "5/MG_5_triste8.gif"];
texte[6] = "Une voile rapiécée avec des sacs de farine qui pendait ainsi comme le drapeau d’une permanente défaite.";
images[6] = ["6/MG_6_defaite1.gif", "6/MG_6_defaite2.gif", "/MG_6_defaite3.gif", "6/MG_6_defaite4.gif", "6/MG_6_defaite5.gif", "6/MG_6_defaite6.gif6/MG_6_defaite7.gif", "6/MG_6_defaite8.gif"];


function test(){
	//alert("woot");
	//GameOn();
	window.setInterval(GameOn, 5000);
	
	document.getElementById("monGif").addEventListener("click", newImage, false); 
	
}
function newImage(){
	//alert("test");
	pointerImg++;
	if(pointerImg > images[mainPointer].length-1)pointerImg = 0;
	document.getElementById("monGif").src = "assets/" + images[mainPointer][pointerImg];	
}
function GameOn(){
	editPicture(mainPointer);
	editText(mainPointer);
	
	mainPointer++;
	if(mainPointer > images.length-1) {
	
	  mainPointer = 0;
	  //window.location="end.html";
	
	}
}

function editText(_pointer){
	
	
	 
	 $( "#sentence" ).fadeOut( "fast", function() {});
	 $( "#text" ).fadeOut( "fast", function() {
		 var _str = texte[_pointer];
		 document.getElementById("sentence").innerHTML = _str;
		  
		 $( "#text" ).fadeIn( 1000, function() {});
		 $( "#sentence" ).fadeIn( 2000, function() {});

	 });	
		 
		 
	 
}
function editPicture(_pointer){
	document.getElementById("monGif").src = "assets/" + images[_pointer][0];		
}