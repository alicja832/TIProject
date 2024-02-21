      
<form name="form"> 
<div class="introduction">
Parametrami sortowania przez wstawianie jest tablica A[1..n] zawiera ciąg długości n, który mamy posortować. 
<p id="scroll"> Wpisując liczby i klikając 'Dodaj' dodajesz element do tablicy.Jeśli chcesz zobaczyć jak wygląda algorytm sortowania
przez wstawianie kliknij 'Zobacz algorytm'. Więcej o algorytmie dowiesz się <a href="#opis">tutaj</a>.
Aby posortować tablicę pokazaną na animacji klikaj 'sortuj' dopóki wynikowa tablica nie będzie posortowana.
 Za każdym razem wykonuje się tylko jedno 'wstawienie', aby zaprezentować jak działa algorytm. Kiedy wykona się wstawienie kolejne kliknięcie spowoduje dostawienie
 pozostałych liczb do tablicy.
Na żółto wyświetla się element który został 'wstawiony' w danej iteracji.
</p>
</div>              
      <table>
          <tr><td><label for="liczba">Podaj liczbę do wstawienia do listy:</label></td>
          <td><input value="<?php if(isset($formData)) echo $formData['liczba']; ?>" type="text" id="liczba" name="liczba" /></td></tr>
           <?php
           {
            echo '<tr><td><span id="data"><input type="button" value="Zobacz algorytm" onclick="algorytm()" /></span></td>';
            echo '<td><span id="data"><input type="button" value="Dodaj element" id='.$data.'  onclick="rysuj(event)" /></span></td>';
           if($info)
            echo '<tr><td><span id="data"><input type="button" value="Zapisz animację" id='.$data.' onclick="zapisz_animacje(event)" /></span></td>';
           if($data==1 || $data==3)
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
INSERTION-SORT(A)</br>
for j=2 to length[A]</br>
    &nbsp do key = A[j]</br>
    &nbsp   &nbsp i=j-1</br>
      &nbsp   &nbsp while i>0 i A[i]>key</br>
       &nbsp   &nbsp &nbsp   do A[i+1] = A[i] </br>
         &nbsp   &nbsp &nbsp  &nbsp i = i-1 </br>
 &nbsp   &nbsp  A[i+1]=key</br>
</div>
</div>

</div>
