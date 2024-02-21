<form>
<table border="1" class="lista">
 <?php
  echo '<tr class="pierwszy"><td>nazwa animacji</td><td>Zobacz swoje preferencje</td></tr>';
    if ($data) { 
       foreach ( $data as $row ) { 
         echo '<tr><td>'.$row['nazwa'].'</td><td><span id="data"><input type="button" id='.$row['zapis_id'].' value="Zobacz" onclick="zobaczanimacje(event)"/></span></td></tr>';
       }
    }
 ?> 
</table> 
<span id="response2"></span>
  <table id="formhidden">
          <tr><td><label for="liczba">Podaj liczbę do wstawienia do listy:</label></td>

          <td><input value="<?php if(isset($formData)) echo $formData['liczba']; ?>" type="text" id="liczba" name="liczba" /></td></tr>
           <?php
           {
            echo '<tr><td><span id="data"><input type="button" value="Dodaj element" id='.$data.'  onclick="start3(event)" /></span></td>';
            echo '<tr><td><span id="data2"><input type="button" value="Animuj" id='.$data.' onclick="start(event)" /></span></td></tr>';
           }   
           ?>
      <tr><td><span id="response"></span></td></tr>
   </table>
</form>
<div class="anim">
<canvas id="canvas" width="600px" height="400px">
        Canvas not supported
</canvas>
</div>


