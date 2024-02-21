<table class="ordinary">
<tr><td>Parametry:</td>
 <?php
    if ($data) { 
       foreach ( $data as $row ) { 
       echo '<td>'.$row['liczba'].'</td>';
       }
    }
     $jsonData = json_encode($data);
     echo '<td><span id="data"><input type="button" value="Pokaż animację" id='.$jsonData.'  onclick="start2(event)" /></span></tr>';
 ?> 
   
</table> 
