<form name="form"> 
<div class="introduction">
Z procedury MERGE korzytamy w algorytmie sortowania przez scalanie. MERGE-SORT(A,p,r) sortuje elementy w podtablicy A[p...r].
<p id="scroll"> Wpisując liczby i klikając 'Dodaj' dodajesz element do tablicy.Możesz zobaczyć jak wygląda procedura MERGE(A,p,q,r) w pseudokodzie
oraz procedura MERGE-SORT(A,p,r), w której stosujemy metodę dziel i zwyciężaj. Więcej o tej metodzie i jak została zastosowana dowiesz się <a href="#opis">tutaj</a>.
Aby posortować tablicę pokazaną na animacji klikaj 'sortuj' dopóki wynikowa tablica nie będzie posortowana.
 Za każdym razem wykonuje się tylko jedno 'scalenie', aby zaprezentować jak działa algorytm.  
</p>
</div>              
      <table>
          <tr><td><label for="liczba">Podaj liczbę do wstawienia do tablicy:</label></td></tr>
          <tr><td><input value="<?php if(isset($formData)) echo $formData['liczba']; ?>" type="text" id="liczba" name="liczba" /></td></tr>
           <?php
           {
             echo '<tr><td><span id="data"><input type="button" value="Dodaj element" id='.$data.'  onclick="rysuj(event)" /></span></td></tr>';
            echo '<tr><td><span id="data"><input type="button" value="Zobacz procedurę MERGE" onclick="algorytm()" /></span></td></tr>';
             echo '<tr><td><span id="data"><input type="button" value="Zobacz procedurę MERGE-SORT" onclick="mergesort()" /></span></td></tr>';
           
           if($info)
            echo '<tr><td><span id="data"><input type="button" value="Zapisz animację" id='.$data.' onclick="zapisz_animacje(event)" /></span></td>';
           if($data==1 || $data==4)
            echo '<tr><td><span id="data"><input type="button" value="Sortuj" id='.$data.' onclick="start(event)" /></span></td>';
           }   
           ?>
        <td><span id="response"></span></td></tr>
      </table>
</form>

<div class="anim">

<canvas id="canvas" width="600px" height="400px">
        Canvas not supported
</canvas>

<div id="alg"> 
    MERGE(A,p,q,r)</br>
    a=q-p+1</br>
    b=r-q</br>
    for i=1 to a do </br>
    &nbsp L[i] = A[p+i-1] </br>
    for j=1 to b do </br>
    &nbsp R[j] = A[q+j] </br>
    L[a+1]=inf</br>
    R[b+1]=inf</br>
    i=1</br>
    j=1</br>
    for k=p to r do </br>
    &nbsp if L[i]<=R[j] then</br>
      &nbsp   &nbsp while i>0 i A[i]>key</br>
       &nbsp   &nbsp &nbsp   do A[i+1] = A[i] </br>
         &nbsp   &nbsp &nbsp  &nbsp i = i-1 </br>
    &nbsp   &nbsp  A[k]=L[i]</br>
    &nbsp   &nbsp  i=i+1</br>   
    &nbsp else</br>
    &nbsp &nbsp   A[k]=R[j]</br>
    &nbsp &nbsp   j=j+1</br>
</div>

<div id="alg2"> 
    MERGE-SORT(A,p,r)</br>
    if p<=r </br>
    &nbsp then q = ceil((p+r)/2)</br>
    &nbsp   &nbsp MERGE - SORT (A,p,q)</br>
    &nbsp   &nbsp  MERGE - SORT (A,q+1,r)</br>
    &nbsp   &nbsp MERGE(A,p,q,r) </br>
</div>

</div>

