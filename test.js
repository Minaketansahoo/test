function bookRide() 

{ 

var btype = document.getElementById("btype").value; 

var noOfPersons = document.getElementById("noOfPersons").value; 

var duration = document.getElementById("duration").value; 

var boatCount = getBoatCount(btype,noOfPersons); 

var boatPrice = getBoatPrice(btype,boatCount); 

var cal = calculateBill(boatPrice,duration); 

document.getElementById("result").innerHTML = "You need to pay Rs. "+cal; 

} 

function calculateBill(boatPrice,duration) 

{ 

return boatPrice*duration; 

} 

function getBoatPrice(btype,boatCount) 

{ 

if(btype == "2 Seater Boat") 

{ 

return (boatCount*240); 

} 

if(btype == "4 Seater Boat") 

{ 

return (boatCount*260); 

} 

if(btype == "8 Seater Boat") 

{ 

return (boatCount*560); 

} 

if(btype == "15 Seater Boat") 

{ 

return (boatCount*990); 

} 

} 

function getBoatCount(btype,noOfPersons) 

{ 

if(btype == "2 Seater Boat") 

{ 

if (noOfPersons%2===0) 

{ 

return (parseInt(noOfPersons/2)); 

} 

else 

{ 

return (parseInt(noOfPersons/2)+1); 

} 

} 

if(btype == "4 Seater Boat") 

{ 

if (noOfPersons%4===0)
{ 

return (parseInt(noOfPersons/4)); 

} 

else 

{ 

return (parseInt(noOfPersons/4)+1); 

} 

} 

if(btype == "8 Seater Boat") 

{ 

if (noOfPersons%8===0) 

{ 

return (parseInt(noOfPersons/8)); 

} 

else 

{ 

return (parseInt(noOfPersons/8)+1); 

} 

} 

if(btype == "15 Seater Motor Boat") 

{ 

if (noOfPersons%15===0) 

{ 

return (parseInt(noOfPersons/15)); 

} 

else 

{ 

return (parseInt(noOfPersons/15)+1);
}
}
}
