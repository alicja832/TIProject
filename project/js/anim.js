//tablica przechowujaca elementy wstawiane do poszczegolnej animacji
var tab = [];
const wsk=["0x7ff020","0x7ffd22","x7ffd0d","0x7ffe0c"]
// zmienna dzieki ktorej wiemy ktory wezel jest animowany w danym momencie
var heapify=1;
var old_heapify;
//zmienne do alg sortowania przez wstawianie
var sort=1;
//zmienna do alg sortowania przez wstawianie oraz heapify- ile razy wykonala sie procedura
//informacja czy nalezy zamieniac elementy tablicy czy nie
var wstaw=0;
//tez do sortowania przez wstawianie z ta roznica ze jest tez wykorzystywany w heapify
var przesuniety;
//tablica w ktorej sa kolejne parametry wywolan procedury merge-sort (drzewo wywolan)
var merge_table=[];
//id animacja
var id=0;
const r=35;
const width=600;
const height=400;
/**
  * @param mixed b_context - contekst canvas na ktorym ma byc kolo narysowane
  * @param mixed x - wsp x
  * @param mixed y - wsp y
  * @param mixed r - promien
  * @param mixed color
  * @param mixed liczba
  * 
  * @return [type]
  */
 function rysujKolo(b_context,x,y,r,color,liczba)
 {
    var rozm_czcionki=40;
    var px;
    var py;
    if(liczba>=10)
    {
        px=x-rozm_czcionki/2;//35 rozmiar promienia 
    }
    else
    {
        px=x-rozm_czcionki/4;
    }
    py=y+rozm_czcionki/4;

    b_context.beginPath();
    b_context.arc(x,y,r,0,2*Math.PI);
    b_context.stroke();
    b_context.fillStyle = color;
    b_context.fill(); 
    b_context.font = "40px Arial";
    b_context.fillStyle = "#000";
    b_context.fillText(liczba,px,py); // Tekst, x, y    
 }
 //rysowanie kwadratu o zadanych wspolrzednych, liczbie oraz o zadanych wymiarach
 function rysujKwadrat(b_context,color, x,y,a,liczba)
 {
     b_context.fillStyle = color;
     b_context.fillRect(x, y, a, a);
     b_context.fillStyle = "#000"; 
     if(liczba>=10)   b_context.fillText(liczba, a/4+x, a/2+y); // Tekst, x, y
     else
        b_context.fillText(liczba, a/2+x, a/2+y); // Tekst, x, y
     b_context.strokeRect(x, y, a,a); // Obramowanie prostokąta
 }

 /**Rysowanie strzałki
  * @param mixed context
  * @param mixed x
  * @param mixed y
  * @param mixed length
  * @param mixed angle
  * 
  * @return [type]
  */
 function drawArrow(context, x, y, length, angle) {
    
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x +length*Math.cos(angle - Math.PI / 6), y + length*Math.sin(angle - Math.PI / 6));
    context.moveTo(x , y);
    context.lineTo(x + length*Math.cos(angle + Math.PI / 6), y + length*Math.sin(angle + Math.PI / 6));
    context.stroke();
}
 /**
  * @param mixed p
  * @param mixed r
  * procedura merge sort, zapisujemy drzewo wywolan rekurencyjnych
  * @return [type]
  */
 function merge(p,r)
 {
    var q;
    merge_table.push([p,r]);
    
    if (p<r)
    {
        q=Math.floor((p+r)/2)
        merge(p,q);
        merge(q+1,r);
       
    }
    return;
 }
   
 /**
  * @param mixed b_context
  * @param mixed x1 - wsp x poczatkowa
  * @param mixed y1 - wsp y poczotkowa
  * @param mixed x2 - koncowa
  * @param mixed y2 - koncowa
  * @param mixed i - indeks elementu w tablicy ktory jest animowany
  * przesuwanie wezla ktory ma zmienic sie z jednym ze swoich "dzieci"
  * @return [type]
  */
 function animHeapify(b_context,x1,y1,x2,y2,i)
 {
    //inkrementacja ile razy animHeapify zostalo uzyte
    wstaw++;
    const xp=x1;
    const yp=y1;
    
    var speedx=(x2-x1)/200;
    var speedy=(y2-y1)/200;

   function animate() {
        
        if(y1<(yp+2*r))
        {
            if((x2-xp)>1.5*r)
            {
                b_context.clearRect(xp-0.5*r, yp,2*r-3,1.2*r);
            }
            else{
                b_context.clearRect(xp, yp,14,1.4*r);
            }
            
            b_context.clearRect(x1-r, yp-r,2.1*r,2*r);
        }
        if(x2<xp)
            b_context.clearRect(x2-r, yp-r,xp-x2+1.1*r,4*r);
        else
        {
        
            b_context.clearRect(xp-r, yp-r,x2+2*r-xp,4*r);
            
        }
        rysujKolo(b_context,x1,y1,r,"yellow",tab[i]);
        

            x1+=speedx;
            y1+=speedy;
        
        if(y1<=y2){
                requestAnimationFrame(animate);
        }
        else
        {
            rysujKolo(b_context,x2,y2,r,"orange",tab[i]);
            rysujKolo(b_context,xp,yp,r,"yellow",tab[heapify]);
            if(tab.length>=7)
            {
                if(xp>width/2+2*r){
                    rysujKolo(b_context,xp-r-3,yp+2*r,r,"yellow",tab[i-1]);
                }
                else if(xp<(width/2+2*r) && xp>=(width/2-4)){
                    b_context.beginPath();
                    b_context.moveTo(x2-r,y2);
                    b_context.lineTo(x2-r,y2+r);
                    b_context.stroke();
                }
            }
            b_context.beginPath();
    
            if(x2<xp)
            {
                b_context.moveTo(x2,y2-r);
                b_context.lineTo(xp-r,yp);
                b_context.stroke();

                if((xp<width/2  && (i+3)<tab.length))
                {
                    b_context.moveTo(xp+r,yp);
                    b_context.lineTo(xp+r+2,y2-r);
                    b_context.stroke();
                }
            }
            else{
                b_context.moveTo(x2,y2-r);
                b_context.lineTo(xp+r,yp);
                b_context.stroke();
            }
        }
    }   
    animate();
 }

 /**
  * @param mixed b_context
  * @param mixed i
  * przywracanie wlasnosci kopca 
  * procedura wywoluje animacje jesli w danym wezle - i  wlasnosc kopca nie jest zachowana
  * @return [type]
  */
 function Heapify(b_context,i)
 {
    var left=2*i-1;
    var right=2*i;
   
    var largest=0;
    i--;

    if(parseInt(tab[left])>parseInt(tab[i]) && left<tab.length)
    {
        largest=left;
    }
    else
    {
        largest=i;
    }
    if(parseInt(tab[right])>parseInt(tab[largest]) && right<tab.length)
        largest=right;
    
    //jesli trzeba zamienic wywolujemy animacje
    if(largest!=i)
    {
        var yp=25;
        var srx,sry;
        yp+=r;
        
        const indexes = [i,largest,right];
        const coordinates = [];
        
        for(let iter=0;iter<3;iter++)
        {
           console.log("11:"+indexes[iter]);

           if(indexes[iter]==0)
            {
                sry=yp+r;
                srx=width/2;
            }
            if(indexes[iter]==1 || indexes[iter]==2)
            {
                sry=yp+3*r;
                srx=indexes[iter]*width/3;
            }
            if(indexes[iter]==3 || indexes[iter]==4 || indexes[iter]==5 || indexes[iter]==6)
            {
                srx=(indexes[iter]-2)*width/5;
                sry=yp+5*r;
            }
            if(indexes[iter]>6 && indexes[iter]<15)
            {
                srx=(Math.ceil(indexes[iter]/4)-1)*width/5;
                sry=yp+5*r;
                b_context.beginPath();

                if((indexes[iter]%2)==1)
                {   
                    b_context.moveTo(srx-r,sry);
                }
                if(parseInt(indexes[iter]%2)==0)
                {   
                    b_context.moveTo(srx+r,sry);
                }
                srx=(indexes[iter]-6)*width/9;
                sry=yp+7*r;
            }
            coordinates[iter]=[srx,sry];
        }
        //wywolywanie animacji heapsort z odpowiednimi wspolzednymi
        //te wartosci nalezy zmienic w nastepnym kroku
        old_heapify=heapify;
        przesuniety=largest;

        heapify=largest;
        animHeapify(b_context,coordinates[0][0],coordinates[0][1],coordinates[1][0],coordinates[1][1],i); 
        
    }
}
/**
 * wywolywanie animacji heapify dla okreslonego wezła
 * @param {*} event 
 */
function animparamHeapify(event)
{
    var b_canvas = document.getElementById("canvas");
    var b_context = b_canvas.getContext("2d");

    heapify = parseInt(document.form.param.value)-1;//wpisana liczba
    var animacja_id=event.target.id;//wybrana animacja
    animacja(b_context,animacja_id);
   
}

/**
 * @param mixed b_context
 * @param mixed yk
 * @param mixed x
 * @param mixed el
 * animacja kolenych kroków procedury merge
 * @return [type]
 */
function anim_merge(b_context,yk,x,el){
   
    const a = 50;
    var speed = 2;
    var yp=height;
       // Funkcja animacji
       function animate() {
         
           b_context.clearRect(x-1, yk, a+2, height-yk);
           rysujKwadrat(b_context,"green",x, yp, a,el); 
           yp-=speed;
         
           if(yp>=yk)
               requestAnimationFrame(animate);
        }
           // Zaktualizuj pozycję (lub inne parametry animacji)
           animate();
}
/**
 * @param mixed b_context
 * @param mixed pi
 * @param mixed pj
 * @param mixed eli
 * animacja sortowania przez wstawianie
 * @return [type]
 */
function anim_sort(b_context,pi,pj,eli){
   
    const a = 70;
    const y =25+sort*a;
    var speed = 2;

       function animate() {
           
           b_context.clearRect(pi, y, width, height-y);
           rysujKwadrat(b_context,"yellow",pj, y, a,eli);
           pj-=speed;
        
           if(pj>=pi)
               requestAnimationFrame(animate);
        }
           animate();
   }
   /**
    * animacja listy
    * @param {*} b_context 
    * @param {*} xp 
    * @param {*} xk 
    */
   function anim2(b_context,xp,xk){
       
        var yp=30+75;
        var speed = 0.5;
        b_context.beginPath();
       
       function animate() {
            b_context.moveTo(xp,yp);
            xp+=speed;
            yp+=3*speed;
            b_context.lineTo(xp,yp);
            b_context.strokeStyle = "#00A";
            b_context.stroke();
           if(xp<=xk)
                 requestAnimationFrame(animate);
            else{
                drawArrow(b_context,xp,yp,20,Math.PI/3+Math.PI);
            }
           
       }
        animate();
   }
   /**
    * animacja listy
    * @param {*} b_context 
    * @param {*} xp 
    * @param {*} xk 
    */
   function anim2_k(b_context,xp,xk){
    
        var yp=25+75+115;
        var speed = 1;
        b_context.beginPath();
       
       // Funkcja animacji
       function animate() {
      
            b_context.moveTo(xp,yp);
            xp+=speed;
            yp-=3*speed;
            b_context.lineTo(xp,yp);
            b_context.strokeStyle = "#00A";
            b_context.stroke();
           if(xp<=xk)
                requestAnimationFrame(animate);
          
           else
           {
                drawArrow(b_context,xp,yp,20,-Math.PI-Math.PI/3);
           }   
        }
        animate();
   }

   /**
    * animacja listy
    * @param {*} b_context 
    * @param {*} xp 
    * @param {*} xk 
    */
   function anim2_p(b_context,xp,xk){
    
        b_context.clearRect(xp, 0, xk-  xp,800);
        var yp=25+75+115;
        var yprev=35+15;
        var speedprevy=(35+150-yprev)/100
        var xprev=xk;
        var speed = (xk-xp)/100;
        b_context.beginPath();
        b_context.strokeStyle = "#00A";
       // Funkcja animacji
       function animate() {

            // Rysuj coś (np. prostokąt)
            b_context.moveTo(xp,yp);
            xp+=speed;
            yp-=speed;
            b_context.lineTo(xp,yp);
            b_context.stroke();
            b_context.moveTo(xprev,yprev);
            yprev+=speedprevy;
            xprev-=speed;
            b_context.lineTo(xprev,yprev);
            b_context.stroke();

            if(xp<=xk)
                 requestAnimationFrame(animate);
            else
            {
                drawArrow(b_context,xp,yp,20,Math.PI/2+Math.PI/4);
                drawArrow(b_context,xprev,yprev,20,-Math.PI/3);
            }   
            }
            
           // Zaktualizuj pozycję (lub inne parametry animacji)
        animate();
   }
   /**
    * funkcja wywolywana wtedy kiedy ktos chcial zobaczyc swoja utworzoną animacje 
    * ale chce dodac nowe elementy
    * @return [type]
    */
   function start3()
   {
          var b_canvas = document.getElementById("canvas");
          var b_context = b_canvas.getContext("2d");
          var liczbaInput = document.getElementById('liczba');  // Pobierz pole liczba dla danego wiersza
          var liczbaValue = liczbaInput.value;  // Pobierz wartość z pola liczba

          // Możesz teraz użyć liczbaValue zgodnie z Twoimi potrzebami
          console.log('Wartość liczba dla wiersza '  + liczbaValue);

          //var y = parseInt(document.form.liczba.value);//wpisana liczba
          drawAnimation(b_canvas,b_context,id,liczbaValue);
   }
   /**
    * @param mixed event
    * funkcja wywolywana gdy uzytkownik chce zobaczyc swoja zapisana animacje
    * @return [type]
    */
   function start2(event)
   {
        var b_canvas = document.getElementById("canvas");
        var b_context = b_canvas.getContext("2d");
        b_context.clearRect(0,0,600,400);
        
        var jsonData=event.target.id;
        var dataArray = JSON.parse(jsonData);
        var form=document.getElementById("formhidden"); 
        
        id=dataArray[0]['animacja_id'];

        b_canvas.style.display = "block";
        form.style.display = "block";

        dataArray.forEach(function(item) {

            drawAnimation(b_canvas,b_context,item['animacja_id'],item['liczba']);
        });

   }

   
   /**
    * @param mixed b_context
    * @param mixed animacja_id
    * funkcja w ktorej wywolywana jest odpowiednia 
    * funkcja animacji z odpowiednimi parametrami
    * @return [type]
    */
   function animacja(b_context,animacja_id)
   {
    if(animacja_id==1)
    {
        var a=70;
        var xp=55;
        var pi;
        var pj;
        var i, j=1,key;
        var stop=0;
        var sort_real;
        var czy_posortowana=true;

        //sprawdzanie czy tablica jest posortowana
        for(let k=1;k<tab.length;k++)
        {
            if(tab[k-1]>tab[k])
                czy_posortowana=false;
        }

        //algorytm sortowania przez wstawianie
        for(j=1 ;j<tab.length;j++)
        {   
            key=tab[j];
            i=j-1;
            while(i>=0 && tab[i]>key)
            {
                pi=xp+a*(i);
                pj=xp+a*(j);
                const el=key;
                anim_sort(b_context,pi,pj,el);    
                tab[i+1]=tab[i];
                i=i-1;
                stop=1;
                przesuniety = el;
                //informacja ze nalezy wstawic pozostale elementy tablicy
                wstaw=0;
            }
            tab[i+1]=key;
            if(stop)
            {
                sort++;
                return;   
            }
            else if(!wstaw)
            {
                pi=xp+a*(i+1);
                if(sort>1)
                {
                    sort_real=sort-1;
                }
                else
                {
                    sort_real=sort;
                    sort++;
                }
                if(key!=przesuniety)
                    rysujKwadrat(b_context,"green",pi,25+(sort_real)*a, a,key);
                for(let it=i;it<tab.length;it++)
                {
                    pi=xp+a*(it);
                    if(tab[it]!=przesuniety)
                        rysujKwadrat(b_context,"green",pi,25+(sort-1)*a, a,tab[it]);
                }
                wstaw=1;
                return;    
            }
            if(((j+1)==tab.length && wstaw==1) || czy_posortowana)
            {
                pj=xp+a*(j);
                if(key!=przesuniety)
                    rysujKwadrat(b_context,"green",pj, 25+(sort-1)*a, a,key);
            }
          
        }
               
    }
    if(animacja_id==3)
    {
       
        if(tab.length<=heapify) return;

        if(wstaw)
        {
            var a=tab[old_heapify];
            tab[old_heapify]=tab[przesuniety];
            tab[przesuniety]=a;
        }
        Heapify(b_context,heapify+1);  
    }  
    if(animacja_id==4)
    {
        console.log(sort);
        if(sort==1)
        {

            merge(0,tab.length-1);
            console.log(merge_table);//ok
        }
        if((merge_table.length-sort)<0)
            return;
        
        var a=50;
        var key;
        var xp=0;
        var yp=25;
        var p = merge_table[merge_table.length-sort][0];
        var q = merge_table[merge_table.length-sort][1];
        //stopien zaglebienia wywolania ktore akurat pokazujemy
        var zagl=q-p+1;
        console.log("p"+p);
        console.log("q"+q);
    
        var j=0;
        var poczatek=p*0.5*a+0.5*a*zagl;
        if(p>tab.length/2 && zagl>1)
        {
            poczatek-a;
        }
        if(zagl>5)
        {
            zagl-=3;
        }
        for(let j=p+1;j<=q;j++)
        {
           
            key=tab[j];
            i=j-1
            while(i>=(p) && tab[i]>key)
            {
                tab[i+1]=tab[i];
                i--;
            }
            tab[i+1]=key;
               
        }   
            for(let i=p;i<=q;i++)
            {
                anim_merge(b_context,yp+zagl*a,a*i+poczatek,tab[i]);
                console.log("tab"+tab);
            }
       
        sort++;
    }
   
}

   /**
    * @param mixed b_canvas
    * @param mixed b_context
    * @param mixed animacja_id
    * @param mixed liczba
    * rysowanie odpowiedniej animacji
    * @return [type]
    */
   function drawAnimation(b_canvas,b_context,animacja_id,y)
   {
        var iloscpunktow=1;
        var xp=55;
        var yp=25;
        b_context.font = "20px Arial"; // Ustaw rozmiar i rodzaj czcionki

        if( b_canvas.style.display == "none")
        {
            tab = [];
            tab.push(y);
        }

        else
        {
            tab.push(y);
            iloscpunktow = tab.length;
        }
        

        //id elementu ktory rysujemy na kanvie
        var actual=iloscpunktow-1;

        //sortowanie przez wstawianie
        if(animacja_id==1)
        {
            var a=70;
            var p=xp+a*(actual);
            rysujKwadrat(b_context,"green",p, yp, a,y);    
        }
        //lista jednokierunkowa
        if(animacja_id==2)
        {    
            b_context.lineWidth = 2;
        //zapisac zmienne high adresu, high napisow itd
            var a=80;
            var b1=150;
            var b2=30;
            var w=100
            var h=200
            var p=yp+b1/2;
            var rozm_czcionki=20;
            yp+=20;
            //jesli jest to pierwszy element
            if(actual==0){
                b_context.fillStyle = 'red';
                b_context.fillRect(0, p, rozm_czcionki, rozm_czcionki*4.5);
            
                p+=10;
                b_context.fillStyle = "#000"
                b_context.font = "20px Arial"; // Ustaw rozmiar i rodzaj czcionki
                const head=new String("HEAD");

                for(i=0;i<head.length;i++)
                    b_context.fillText(head.charAt(i), 0, rozm_czcionki/2+p+i*rozm_czcionki); // Tekst, x, y
                p-=10;
            }
            b_context.fillStyle = 'red';
            b_context.fillRect(xp-10+135*actual+w+25, p, rozm_czcionki, rozm_czcionki*4.5);
            p+=10;
            b_context.fillStyle = "#000"
            
            const end=new String("NULL");
            for(i=0;i<end.length;i++)
                b_context.fillText(end.charAt(i),xp-rozm_czcionki/2+135*actual+w+25,rozm_czcionki/2+ p+i*rozm_czcionki); // Tekst, x, y

            p=xp+135*actual;

            b_context.fillStyle = 'black';
            b_context.fillRect(xp-10+135*actual,yp-10,w,h);
            b_context.fillStyle = 'green';
            b_context.fillRect(p, yp, a, b1);
            b_context.fillStyle = 'gray';
            b_context.fillRect(p, yp+b1, a, b2);
            b_context.fillRect(p, yp, a, b2);
            b_context.fillStyle = 'orange';
            b_context.fillRect(p, yp+b1-b2, a, b2);
            b_context.fillStyle = "#000"
            b_context.font = "30px Arial"; // Ustaw rozmiar i rodzaj czcionki
            b_context.fillText(y, a/2+p-10,yp + b2 +b1/2); // Tekst, x, y
            var next="NEXT";
            var prev="PREV";
            var adres=wsk[actual];
            b_context.font = "20px Arial"; // Ustaw rozmiar i rodzaj czcionki
            b_context.fillText(next, p+a/2-25, yp+b1+b2-5);
            b_context.fillText(adres, p, yp+b1-5); 
            b_context.fillText(prev, p+a/2-25, yp+20); 

            if(actual==0)
            {
                anim2(b_context,rozm_czcionki,xp-10);
                anim2_k(b_context,xp-10+135*actual+w,xp-10+135*actual+w+25);
            }
            else
            {
                anim2_p(b_context,xp-10+135*actual-35,xp-10+135*actual);
                anim2_k(b_context,xp-10+135*actual+w,xp-10+135*actual+w+25);
            }
            
        }
    
        //heapify
        if(animacja_id==3)
        {
            var srx,sry;
            yp+=r;

            if(actual==0)
            {
                sry=yp+r;
                srx=width/2;
            }

            if(actual==1 || actual==2)
            {
                sry=yp+r;
                srx=width/2;
                b_context.beginPath();
                if(actual==1)
                {   
                    b_context.moveTo(srx-r,sry);
                }
                if(actual==2)
                {   
                    b_context.moveTo(srx+r,sry);
                }
                sry=yp+3*r;
                srx=actual*width/3;
            }

            if(actual==3 || actual==4 || actual==5 || actual==6)
            {
                sry=yp+3*r;
                srx=(Math.ceil(actual/2)-1)*width/3;
                b_context.beginPath();
                if((actual%2)==1)
                {   
                    b_context.moveTo(srx-r,sry);
                }
                if(parseInt(actual%2)==0    )
                {   
                    b_context.moveTo(srx+r,sry);
                }
                srx=(actual-2)*width/5;
                sry=yp+5*r;
            }
            if(actual>6 && actual<15)
            {
                
                srx=(Math.ceil(actual/4)-1)*width/5;
                sry=yp+5*r;
                b_context.beginPath();
                
                if((actual%2)==1)
                {   
                    b_context.moveTo(srx-r,sry);
                }
                if(parseInt(actual%2)==0)
                {   
                    b_context.moveTo(srx+r,sry);
                }

                srx=(actual-6)*width/9;
                sry=yp+7*r;
            
            }
            if(actual!=0)
            {   
                b_context.lineTo(srx,sry-r);
                b_context.moveTo(srx+r,sry);
                b_context.stroke();
            }

            rysujKolo(b_context,srx,sry,r,"yellow",y);
        }
        if(animacja_id==4)
        {
            merge_table=[];
            var a=50;
            xp-=20;
            var p=xp+a*(actual);
            rysujKwadrat(b_context,"green",p, yp, a,y);   
        }
    }
 /**
  * @param mixed event
  * funkcja gdy ktos chce wywolac animacje
  * @return [type]
  */
 function start(event) {

    var b_canvas = document.getElementById("canvas");
    var b_context = b_canvas.getContext("2d");
    console.log(id);
    if(id)
        animacja(b_context,id);
  
    var animacja_id=event.target.id;
    console.log(animacja_id);
    animacja(b_context,animacja_id);
   
}
/**
 * gdy uzytkownik chce zobaczyc algorytm
 * @return [type]
 */
function algorytm()
{
    var alg = document.getElementById("alg");
    alg.style.display = "block";
    var alg = document.getElementById("alg2");
    alg.style.display = "none";
}
/**
 * gdy uzytkownik chce zobaczyc drugi algorytm w opcji mergesort
 * @return [type]
 */
function mergesort()
{
    var alg = document.getElementById("alg2");
    alg.style.display = "block";
    var alg = document.getElementById("alg");
    alg.style.display = "none";
}
/*
 * rysuje elementy animacji a pozniej wywoluje odpowiednia funkcje do animacji
 * @param {*} event-informacja ktorą animację mamy narysowac 
 */
function rysuj(event) {
    
    id=0;
    sort=1;
    przesuniety=0;
    wstaw=0;
    var b_canvas = document.getElementById("canvas");
    var b_context = b_canvas.getContext("2d");

    var y = parseInt(document.form.liczba.value);//wpisana liczba
    console.log(y);
    var animacja_id=event.target.id;//wybrana animacja
    drawAnimation(b_canvas,b_context,animacja_id,y);
    b_canvas.style.display = "block";
  
  }