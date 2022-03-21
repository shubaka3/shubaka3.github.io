const backgrounds=document.getElementById("background")
            document.getElementById("btn21").onclick = function () {
                document.getElementById("header").style.display = 'none';
                document.getElementById("mainslider").style.display = 'block';
                document.getElementById("slider2").style.display = 'none';
                backgrounds.style.background="url(img/board.jpg) top center / cover no-repeat" 
            };
 
            document.getElementById("btn1").onclick = function () {
                document.getElementById("header").style.display = 'block';
                document.getElementById("mainslider").style.display = 'none';
                document.getElementById("slider2").style.display = 'none';
                backgrounds.style.background="url(img/5923902.jpg) top center / cover no-repeat" 

            };
            document.getElementById("btn22").onclick = function () {
                document.getElementById("header").style.display = 'none';
                document.getElementById("mainslider").style.display ='none';
                document.getElementById("slider2").style.display = 'block';
                backgrounds.style.background="url(img/backgroundslider2.jpg) top center / cover no-repeat" 

            };
            const backgroundtex=document.getElementById("backgroundlist")
            const text1=document.getElementById("listtex1")
            const text2=document.getElementById("listtex2")
            const text3=document.getElementById("listtex3")
            const text4=document.getElementById("listtex4")
            const text5=document.getElementById("listtex5")
            const alltext=document.getElementById("noidung")

            document.getElementById("alllist1").onclick = function () {
                //backgroundtex.style.background="url(img/background1.jpg) top center / cover no-repeat" 
                text1.style.display="block";
                text2.style.display="none";
                text3.style.display="none";
                text4.style.display="none";
                text5.style.display="none";
                


            };
            document.getElementById("alllist2").onclick = function () {
                //backgroundtex.style.background="url(img/background2.jpg) top center / cover no-repeat" 
                text1.style.display="none";
                text2.style.display="block";
                text3.style.display="none";
                text4.style.display="none";
                text5.style.display="none";

            };
            document.getElementById("alllist3").onclick = function () {
                //backgroundtex.style.background="url(img/bakcground3.jpg) top center / cover no-repeat" 
                text1.style.display="none";
                text2.style.display="none";
                text3.style.display="block";
                text4.style.display="none";
                text5.style.display="none";
                


            };
            document.getElementById("alllist4").onclick = function () {
                //backgroundtex.style.background="url(img/background5.jpg) top center / cover no-repeat" 
                text1.style.display="none";
                text2.style.display="none";
                text3.style.display="none";
                text4.style.display="block";
                text5.style.display="none";

            };
            document.getElementById("alllist5").onclick = function () {
                //backgroundtex.style.background="url(img/background4.jpg) top center / cover no-repeat" 
                text1.style.display="none";
                text2.style.display="none";
                text3.style.display="none";
                text4.style.display="none";
                text5.style.display="block";
            };

            
            ////////////////////////<P>///////////////////////////////////
            
                

           
