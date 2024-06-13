let boxes=document.querySelectorAll(".box");
let view= document.getElementById("result");
var answer;
var answe;
view.addEventListener('input',()=>{
  let currentValue= view.value;
  let sani=currentValue.replace(/[^0-9+\-*/.=]/g, '');
  view.value=sani;
  
})
boxes.forEach((i)=>{ 
    i.addEventListener("click",()=>{

      if(i.innerHTML=="clear")
      {
        view.value="";
   
      }
else{
        
        if(i.innerHTML=="Enter")
        {
         let a="Ans";
       
          answe=eval(view.value);
          view.value=answe;
    
        
        }
        else{
          if(i.innerHTML=="del")
          {
            let currentValue = view.value;
            view.value = currentValue.slice(0, -1);
    
          
          }
          else{
            if(i.innerHTML!="del"){
            view.value+=i.innerHTML;
           
          }
          }
        }
    }
  });
  });
 
    view.addEventListener("keypress",(event,)=>{
      if(event.key="Enter")
      {
        answe=eval(view.value);
        view.value=answe;
      }
      })

 
  















