

function paragram(){

     //length


     const paralengths = document.getElementById('paralength');

     const paratext = paralengths.value

     const parabase = parseFloat(paratext);

     console.log(parabase);



     //width

      const parawidths = document.getElementById('parawidth');

      const paraWtext = parawidths.value

      const paraWbase = parseFloat(paraWtext);

      console.log(paraWbase);


      //calculate formula

      const area = parabase * paraWbase;

      console.log(area);

      //area

      const paraareas = document.getElementById('paraarea');

      paraareas.innerText = area;




}