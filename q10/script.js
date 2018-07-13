

function bhtPrint()
{
   let start=parseInt(document.querySelector('#start').value);   
   let stop=parseInt(document.querySelector('#stop').value);
   let jump=parseInt(document.querySelector('#jump').value);

  
  let body=document.querySelector('body');
  body.innerHTML= "<input id='start' placeholder='Start' type='number'> <input id='stop' placeholder='Stop' type='number'> <input id='jump' placeholder='Jump' type='number'> <button onclick='bhtPrint()'>Print Number</button>"

  for(i=start;i<=stop;i+=jump)
  {

      body.innerHTML= body.innerHTML + "<p>" +  i+ "</P>";
   
     
  }
  
}