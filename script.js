var subtitles=["Violinist","Amazon SDE Intern","Linux Cultist","Hilary Hahn Fanatic","FOSS Advocate","Will Work for Coffee","CS Student @ UMich"];var index=0;var subtitle=document.getElementById("subtitle");var sidebar=document.getElementById("sidebar");var openBtn=document.getElementById("openbtn");var oldColor;openBtn.addEventListener("mouseover",function(){oldColor=openBtn.style.color;openBtn.style.color="#fff";});openBtn.addEventListener("mouseout",function(){openBtn.style.color=oldColor;});window.onscroll=function(){if(window.pageYOffset>=window.innerHeight){openBtn.style.color="hsla(0,0%,100%,.2)";}else{openBtn.style.color="#dad9d4";}}; setInterval(change,3000);function change(){++index;subtitle.style.opacity=0;if(index>=subtitles.length){index=0;} setTimeout(()=>{subtitle.innerHTML=subtitles[index];},250);setTimeout(()=>{subtitle.style.opacity=1;},250);} function openNav(){if(window.innerWidth<1200){sidebar.style.textAlign="center";sidebar.style.width="100%";}else{sidebar.style.textAlign="right";sidebar.style.width="20vw";}} function closeNav(){sidebar.style.width=0;}
