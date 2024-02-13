



   function pentagon(){

    const penlength = document.getElementById('Pentagonlength');

    const pentext = penlength.value

    const penLbase = parseFloat(pentext);

    console.log(penLbase);


    //width

    const penwidth = document.getElementById('Pentagonwidth')

    const penWtext = penwidth.value

    const penWbase = parseFloat(penWtext);

    console.log(penWbase);


    //calculate formula

    const area = 0.5 * penLbase * penWbase;

    console.log(area);

    //area 

    const penareas = document.getElementById('Pentagonarea')

    penareas.innerText = area;


   }