var speech_recognition= window.webkitSpeechRecognition;
var recognition= new speech_recognition();

function start()
{
    document.getElementById("area").innerHTML="";
    recognition.start();
}
    
    recognition.onresult= function (events)
    {
var content= events.results[0][0].transcript;

document.getElementById("area").innerHTML=content;
if(content =="take my selfie")
{
    speak();
}


    }

    function speak()
    {
        var synth = window.speechSynthesis;
        speak_data = "Taking your selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

        Webcam.attach(camera);


setTimeout(function()
{
    img_id="selfie_1";
    speak_data = "Taking your selfie in 5 seconds";
    take_snapshot();
    save();
}, 5000);


    setTimeout(function()
{
    img_id="selfie_2";
    speak_data = "Taking your selfie in 10 seconds";
    take_snapshot();
    save();
}, 10000);

}   

Webcam.set({
    height:360,
    width:250,
    image_format:'png',
    png_quality:'90'

});
camera=document.getElementById("camera");


function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
    if(img_id=="selfie_1")
        {
        document.getElementById("collage_div1").innerHTML='<img id="selfie_2" src=" '+data_uri+' "/>';
        }

        if(img_id=="selfie_2")
        {
        document.getElementById("collage_div1").innerHTML='<img id="selfie_2" src=" '+data_uri+' "/>';
        }

    });
}




