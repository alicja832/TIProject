<form name="form"> 
<div class="introduction">
Lista z dowiązaniami jest strukturą danych, w której elementy są ułożone w liniowym porządku.
<p id="scroll"> Gdy podajesz kolejne liczby są one dodawane do listy L - dodajemy na koniec listy. Jeśli chcesz zobaczyć jak wygląda pseudokod procedury dodawania
elementu do listy z dowiązaniami kliknij 'Zobacz algorytm'. Więcej o algorytmie dowiesz się <a href="#opis">tutaj</a>.
Napisy na żółtym tle symbolizują adresy w pamięci dodawanych elementów. Maksymalnie zmieszczą się 4 elementy.</p>
</div>              
      <table>
          <tr><td><label for="liczba">Podaj liczbę do wstawienia do listy:</label></td>
          <td><input value="<?php if(isset($formData)) echo $formData['liczba']; ?>" type="text" id="liczba" name="liczba" /></td></tr>
           <?php
           {
            echo '<tr><td><span id="data"><input type="button" value="Zobacz algorytm" onclick="algorytm()" /></span></td>';
            echo '<td><span id="data"><input type="button" value="Dodaj element" id='.$data.'  onclick="rysuj(event)" /></span></td></tr>';
           if($info)
            echo '<tr><td><span id="data"><input type="button" value="Zapisz animację" id='.$data.' onclick="zapisz_animacje(event)" /></span></td></tr>';
           if($data==1 || $data==3)
            echo '<tr><td><span id="data"><input type="button" value="Sortuj" id='.$data.' onclick="start(event)" /></span></td></tr>';
            if($data==4)
            echo '<tr><td><span id="data"><input type="button" value="Animuj" id='.$data.' onclick="start(event)" /></span></td>';
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
LIST-INISERT(L,x)</br>
next[x]=head[L]</br>
if head[L]!=NULL</br>
    &nbsp  then prev[head[L]]=x</br>
head[L]=x</br>
prev[x]=NULL</br>
</div>
</div>

</div>
