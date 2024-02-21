<form name="form">
<div class="introduction">
Kopiec binarny jest to tablicowa struktura danych, którą można rozpatrywać jako pełne drzewo binarne. Każdy węzeł drzewa odpowiada elementowi tablicy, 
w którym jest podana wartość węzła. Własność kopca typu max - dla każdego węzła i, który nie jest korzeniem zachodzi: A[PARENT(i)]>=A[i].
<p id="scroll">Jeśli chcesz zobaczyć pseudokod algorytmu kliknij 'Zobacz algorytm',weź pod uwagę, że tutaj numerujemy tablicę od 1.
Więcej o algorytmie dowiesz się <a href="#opis">tutaj</a>.
Gdy podajesz kolejne liczby tworzy się kopiec nie zachowując jego właśności. Jeśli chcesz zobaczyć jak działa 
procedura Heapify kliknij 'Animuj' a procedura przywróci własność kopca typu max. 
Numerem i węzła od którego rozpoczynamy domyślnie jest 2. 
Możesz także wybierać węzeł, na którym chcesz wykonać procedurę.</p>
</div>            
      <table>
          <tr><td><label for="liczba">Podaj liczbę do wstawienia do kopca:</label></td>
          <td><input value="<?php if(isset($formData)) echo $formData['liczba']; ?>" type="text" id="liczba" name="liczba" /></td></tr>
          <?php
           {
            echo '<tr><td><span id="data"><input type="button" value="Zobacz algorytm" onclick="algorytm()" /></span></td>';
            echo '<td><span id="data"><input type="button" value="Dodaj" id='.$data.'  onclick="rysuj(event)" /></span></td>';
            echo '<td><span id="data"><input type="button" value="Animuj" id='.$data.' onclick="start(event)" /></span></td></tr>';
             if($info)
            echo '<tr><td><span id="data"><input type="button" value="Zapisz animację" id='.$data.' onclick="zapisz_animacje(event)" /></span></td>';
             }   
           ?>
            <tr><td><label for="param">Wykonaj:</label></td>
          <td><input value="<?php if(isset($formData)) echo $formData['param']; ?>" type="text" id="param" name="param" /></td></tr>
           <?php
           {
            echo '<tr><td></td><td><span id="data"><input type="button" value="Wykonaj dla węzła" id='.$data.' onclick=" animparamHeapify(event)" /></span></td></tr>';
          
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
HEAPIFY(A,i)</br>
l=2i</br>
r=2i+1</br>
if l <= size[A] i A[l] > A[i] </br>
    &nbsp  then largest = l</br>
   &nbsp   else largest = i</br>
if r<= size[A] i A[r]>A[largest]</br>
   &nbsp   then largest = r</br>
if largest != i</br>
 &nbsp  then zamień A[i] i A[largest]</br>
   &nbsp HEAPIFY(A,largest)</br>
</div>
</div>