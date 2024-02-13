   

    function Ellipse(){

       const elllength = document.getElementById('Ellipselength');

       const elltext = elllength.value

       const ellbase = parseFloat(elltext);

       console.log(ellbase);

       //width

       const ellwidth = document.getElementById('Ellipsewidth');

       const ellWtext = ellwidth.value

       const ellWbase = parseFloat(ellWtext);

       console.log(ellWbase);

       //calculate formula

       const area = ellbase * ellWbase;

       console.log(area);

       //area

       const ellareas = document.getElementById('ellarea')

       ellareas.innerText = area;

    }
