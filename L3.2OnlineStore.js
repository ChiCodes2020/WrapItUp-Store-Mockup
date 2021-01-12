  //reference the value of items 1,2 & 3
  //reference the quantity of 1,2,3
  //times the values indivudially
  //add all the values & display when button is hit

var Nubianinput= document.getElementsById('NubianInput1').value;
var Kenteinput= document.getElementsById('KenteInput2').value;
var Goddessinput=document.getElementsById('GoddessInput3').value;

var NubianTotal= parseInt(Nubianinput)*18.00;
var KenteTotal= parseInt (Kenteinput)*20.00;
var GoddessTotal= parseInt(Goddessinput)*15.00;

function DisplaySubtotal(){
  var finalAmount= NubianTotal+KenteTotal+GoddessTotal;
  document.getElementsById('subtotal').innerHTML= finalAmount;
}
