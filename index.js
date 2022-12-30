function timeClock() {
    var Domtime = new Date();
    var hrs = Domtime.getHours();
    var min = Domtime.getMinutes();
    var sec = Domtime.getSeconds();
    var daynight = document.getElementById('DN');
   
    let calltext = document.getElementById('breakfast1');
    let callblog = document.getElementById('blog')
    if (hrs >= 00 && hrs <= 11) {
        calltext.innerHTML = " GOOD MORNING!! WAKE UP !! "
        callblog.innerHTML = " GOOD MORNING!! WAKE UP !!"
    } else if (hrs >= 12 && hrs <= 15) {
        
        calltext.innerHTML = " GOOD AFTERNOON hAVE SOME LUNCH "
        callblog.innerHTML = " GOOD AFTERNOON !! TAKE SOME SLEEP"
    } else if (hrs >= 16 && hrs <= 19) {
        
        calltext.innerHTML = " TIERED ! TAKE SOME NAP "
        callblog.innerHTML = " GOOD EVENING ! !"
    }
    if (hrs >= 20 && hrs <= 22) {
       
        calltext.innerHTML = " STOP YAWNING, GET SOME TEA... <BR> ITS JUST EVENING!"
        callblog.innerHTML = " GOOD EVENING ! !"
    } else if (hrs >= 23) {
        
        calltext.innerHTML = " CLOSE YOUR EYES AND GO TO SLEEP"
        callblog.innerHTML = " GOOD NIGHT ! !"
    }
    if (hrs >= 12) {
        daynight.innerHTML = 'PM'
    } else {
        daynight.innerHTML = 'AM'
    }
    if (hrs >= 12) {
        hrs -= 12;
    }
    if (hrs <= 9) {
        hrs = "0" + hrs;
    }
    if (min <= 9) {
        min = "0" + min;
    }
    if (sec <= 9) {
        sec = "0" + sec;
    }
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(timeClock, 10);



function dropdown() {
    let callimg = document.getElementById('component');
    var wake_value = document.getElementById("wake_time").value;
    var lunch_value = document.getElementById("lunch_time").value;
    var np_value = document.getElementById("nap_time").value;
    var night_value = document.getElementById("night_time").value;
  
    

   document.getElementById("wakeup").innerHTML = wake_value;
   document.getElementById("lunch").innerHTML = lunch_value;
   document.getElementById("nap").innerHTML = np_value;
   document.getElementById("night").innerHTML = night_value;



  let w = document.getElementById("wake_time").value;
  let x = document.getElementById("lunch_time").value;
  let y = document.getElementById("nap_time").value;
  let z = document.getElementById("night_time").value;

  let hour = new Date().getHours();
  if( w == hour){
    document.getElementById("blog").innerText="GOOD MORNING !!  WAKE UP !!";
    document.getElementById("component").src="Component.jpg";
  }


  if(x == hour){
        document.getElementById("blog").innerText="GOOD AFTERNOON!! TAKE SOME SLEEP!!";
        document.getElementById("component").src="naptime@2x.jpg";
  }

  if(y == hour){
      document.getElementById("blog").innerText="GOOD EVENING!!";
      document.getElementById("component").src='lunch_image.jpg';
   }
   
   if(z == hour){
    document.getElementById("blog").innerText="GOOD NIGHT!!";
    document.getElementById("component").src="gn.jpg";

   }
   
function valuetype(){
    var Iwake_value = document.getElementById("wake_time").innerHTML;
    var Ilunch_value = document.getElementById("lunch_time").innerHTML;
    var Inp_value = document.getElementById("nap_time").innerHTML;
    var Inight_value = document.getElementById("night_time").innerHTML;innerHTML
    
}


}
var setalarm = document.getElementById("alarm");
setalarm.addEventListener("click", dropdown);

























// function setonfire() {
//     let addch = document.getElementById('sched1');
//     let wakeup = document.getElementById('SWT');
//     let lunch = document.getElementById('SLT');
//     let nap = document.getElementById('Snt');
//     let sleep = document.getElementById('SNT');
//     let clx = document.getElementById('alarm');
//     btnElement.addEventListener("click", function() {
//         let value = SWTElement.value;
//         let liElement = document.createElement("li");
//     })
// };
// list.appendChild(liElement);


// //
// var newformat = hrs >= 12 ? 'PM' : 'AM';
// document.getElementById("AM").innerHTML = newformat;

// if (hrs >= 1 && hrs <= 3) {
//     document.getElementById("breakfast").innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
//     document.getElementById("breakfast").innerHTML = "LET'S HAVE SOME LUNCH !!";
//     document.getElementById("component").src = "./AFTERNOON.png";
// }