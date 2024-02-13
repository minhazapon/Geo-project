

function triangelCal(){

   const triangelbases = document.getElementById('triangelbase');

   const triangelbasetext = triangelbases.value

   const base = parseFloat(triangelbasetext)

   console.log(typeof base);

   const triangelheights = document.getElementById('triangelheight');

  const triangelheighttext = triangelheights.value
   
  const height = parseFloat(triangelheighttext);

  console.log(height);


  const area = 0.5 * base * height;

  console.log(area);

  const triangleareaspan = document.getElementById('triangelarea');

  triangleareaspan.innerText = area;



}

