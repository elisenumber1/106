function startClassification(){
	navigator.mediaDevices.getUserMedia({audio: true,video:false});
	classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json",{probablityThreshold:0.7},modelready);
}
function modelready(){
	classifier.classify(gotresults);
}
var dog=0;
var cat=0;
function gotresults(error, results){
	if(error){
		console.error(error);
	}
	else{
		console.log(results);
		random_r=Math.floor(Math.random()*255)+1;
		random_g=Math.floor(Math.random()*255)+1;
		random_b=Math.floor(Math.random()*255)+1;
		document.getElementById("result_label").innerHTML="detected voice is of:"+results[0].label;
		document.getElementById("result_count").innerHTML="detected dog-"+dog+" detected cat-"+cat;
		document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
		document.getElementById("result_count").style.color="rgb("+random_r+","+random_g+","+random_b+")";
		img=document.getElementById("animal_image");
		if(results[0].label=="Barking"){
			dog=dog+1;
		}else if(results[0].label=="Meowing"){
			cat=cat+1;
		}
	}
}