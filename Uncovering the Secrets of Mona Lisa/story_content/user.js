function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5svFyxQPUX0":
        Script1();
        break;
      case "6rE9dkOKrSg":
        Script2();
        break;
      case "5uV9Hketbsl":
        Script3();
        break;
      case "5c1Umwz9aiT":
        Script4();
        break;
      case "6fiJde47xG4":
        Script5();
        break;
      case "5ZSA4G3xpzm":
        Script6();
        break;
      case "6NZ1TT3XKEO":
        Script7();
        break;
      case "5ZUmpsqZm9b":
        Script8();
        break;
      case "5sAyhhmQxMX":
        Script9();
        break;
      case "6VGkaJ7CQW0":
        Script10();
        break;
      case "6fWueIHpnMd":
        Script11();
        break;
      case "6N4kbnmpTwo":
        Script12();
        break;
      case "6XHnEtySiUo":
        Script13();
        break;
      case "6TAZlkCsdi6":
        Script14();
        break;
      case "6hHXNibRgUU":
        Script15();
        break;
      case "6jHVklnAN6a":
        Script16();
        break;
      case "6Ahi4yo6XBc":
        Script17();
        break;
      case "6kC8Z4LuwUZ":
        Script18();
        break;
      case "6d6bgDHfeYc":
        Script19();
        break;
      case "6RC3w6Vl4z6":
        Script20();
        break;
  }
}

function Script1()
{
  document.body.style.backgroundImage = "url('1.png')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
}

function Script2()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;
audio.load();


}

function Script3()
{
  var player = GetPlayer();


function add_line() {
	var line = document.createElement("audio");
	var head=document.getElementsByTagName('body')[0];
	line.type = "audio/mp3";
	line.src="";
	line.id="bgSong" ;
	line.autoplay = true;
	line.loop = false;
	head.appendChild(line);
}

//We only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
	var audio = document.getElementById('bgSong');
	audio.volume = 0.1;
	player.SetVar("javascriptsLoaded",true)
}
}

function Script4()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;
audio.load();
audio.play();

}

function Script5()
{
  var player = GetPlayer();

this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;

audio.pause();
audio.currentTime = 0;
}

function Script6()
{
  document.body.style.backgroundImage = "url('7.png')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
}

function Script7()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;
audio.load();
audio.play();

}

function Script8()
{
  var player = GetPlayer();

this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;

audio.pause();
audio.currentTime = 0;
}

function Script9()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;
audio.load();
audio.play();

}

function Script10()
{
  var player = GetPlayer();

this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;

audio.pause();
audio.currentTime = 0;
}

function Script11()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;
audio.load();
audio.play();

}

function Script12()
{
  var player = GetPlayer();

this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;

audio.pause();
audio.currentTime = 0;
}

function Script13()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;
audio.load();
audio.play();

}

function Script14()
{
  var player = GetPlayer();

this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;

audio.pause();
audio.currentTime = 0;
}

function Script15()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;
audio.load();
audio.play();

}

function Script16()
{
  var player = GetPlayer();

this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;

audio.pause();
audio.currentTime = 0;
}

function Script17()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;
audio.load();
audio.play();

}

function Script18()
{
  var player = GetPlayer();

this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;

audio.pause();
audio.currentTime = 0;
}

function Script19()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;
audio.load();
audio.play();

}

function Script20()
{
  var player = GetPlayer();

this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;

audio.pause();
audio.currentTime = 0;
}

