const boton = document.querySelector(".boton");
const xd = document.querySelector(".xd");
const creador = document.querySelector(".creador");
const by = document.querySelector(".by");
const img2 = document.querySelector(".img2");
const audio = document.getElementsByTagName("audio");
const texto = document.querySelector(".texto");

boton.addEventListener("click",(e)=>{
    boton.setAttribute("style","opacity:0;transition:opacity 0.6s;");//boton
    creador.setAttribute("style","opacity:0;transition:opacity 1.2s;");//by
    xd.classList.add("bottom"); //baja abajo en 1.6 segundos
    by.setAttribute("style","opacity:1; transition:opacity 13.2s");
    
 
    setTimeout(()=>{
        src = `<source src="master.mp3"  type="audio/mp3">`;
        audio[0].innerHTML = src;     
    },1000); 
    


    setTimeout(()=>{
      let hi = texto.children;
      function maquina(num,str){
        const len = str.length;
        let voz= 1200 / len;
        let i=0;
      
        let tiempo = setInterval(()=>{
          hi[num].innerHTML += str[i];
            if(i == len-1){
              clearInterval(tiempo);
            }
            i++;
          },voz); 
       }
       maquina(0,"Ah bueno, adiós master");
       maquina(1,"Ah bueno, adiós master");
      },1600);


    setTimeout(()=>{
      img2.setAttribute("style","opacity:0;transition:opacity 5s");
    },3500);
    
});