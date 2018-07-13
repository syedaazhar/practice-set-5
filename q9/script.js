function bhtPrint()
{
  let start=parseInt(document.querySelector('#start').value);   
  let stop=parseInt(document.querySelector('#stop').value);
  let body=document.querySelector('body');
  body.innerHTML= "<input id='start' placeholder='Start' type='number'> <input id='stop' placeholder='Stop' type='number'> <button onclick='bhtPrint()'>Print Number</button>"

  for(i=start;i<=stop;i++)
  {
      body.innerHTML= body.innerHTML + "<p>" + i + "</P>";
  }
  
}