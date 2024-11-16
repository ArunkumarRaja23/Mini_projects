var speech = new SpeechSynthesisUtterance();

        function speakText(){
          var textTospeak = document.getElementById('textTospeak').value;
          if(textTospeak.trim() !==""){
            speech.text  = textTospeak;
            speech.rate = 1; //0.1 - 10
            speech.volume = 1 ;
            speech.pitch = 1;
            window.speechSynthesis.speak(speech);
          }
          else{
            alert("Kindly enter the text");
          }
        }

