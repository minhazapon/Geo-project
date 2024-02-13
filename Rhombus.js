

 function Rhombus(){

  //length
  const rholength = document.getElementById('Rhombuslength');

  const rhotext = rholength.value

  const rhobase = parseFloat(rhotext);

  console.log(rhobase);

  //width

  const rhowidth = document.getElementById('Rhombuswidth');

  const rhoWtext = rhowidth.value
  
  const rhoWbase = parseFloat(rhoWtext);

  console.log(rhoWbase)


  //calculate formula

  const area = 0.5 *  rhobase * rhoWbase;

  console.log(area);

  //area

  const rhoareas = document.getElementById('Rhombusarea');

  rhoareas.innerText = area;


 }