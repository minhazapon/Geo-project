

   function rectangle(){
        

      // length

      const recLength = document.getElementById('rectanglelen');

      const lengthtext = recLength.value;

      const length = parseFloat(lengthtext);

      console.log(length);

      // width

      const width = document.getElementById('recwidth');

      const widthtext = width.value;

      const widthvalue = parseFloat(widthtext);

      console.log(widthvalue);

      // calculate formula

      const area = length * widthvalue ;

      console.log('area is a :', area);


      //area

      const rectangleareas = document.getElementById('rectanglearea');
  
      rectangleareas.innerText = area;






   }