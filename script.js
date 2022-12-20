let h2=document.createElement("h2");
let span=document.createElement("span");
span.setAttribute("id","main");

h2.append(span);
document.body.append(h2);

function result(){
    setTimeout(()=>{
        document.getElementById("main").innerHTML="10";
     setTimeout(()=>{
        document.getElementById("main").innerHTML="9";
      setTimeout(()=>{
       document.getElementById("main").innerHTML="8";
      setTimeout(()=>{
      document.getElementById("main").innerHTML="7";
      setTimeout(()=>{
       document.getElementById("main").innerHTML="6";
       setTimeout(()=>{
         document.getElementById("main").innerHTML="5";
       setTimeout(()=>{
       document.getElementById("main").innerHTML="4";
        setTimeout(()=>{
         document.getElementById("main").innerHTML="3";
         setTimeout(()=>{
          document.getElementById("main").innerHTML="2";
           setTimeout(()=>{
            document.getElementById("main").innerHTML="1";
             setTimeout(()=>{
               document.getElementById("main").innerHTML="HAPPY INDEPENDENCE DAY";
                      },1000);
                    },1000);
                  },1000);
                },1000);
              },1000);
            },1000);
          },1000);
        },1000);
      },1000);
     },1000);
  },1000);
}
result()

              