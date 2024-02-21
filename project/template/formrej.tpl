<div id="container">
<div class="form">
<form name="form">            
      <table>
       <tr><td></td><td><img src="icon.png" alt="Logo Strony" /></td>  </tr>
          <tr><td><label for="imie">imie:</label></td>
          <td><input value="<?php if(isset($formData)) echo $formData['imie']; ?>" type="text" id="imie" name="imie" /></td></tr>
           <tr><td><label for="nazwisko">nazwisko:</label></td>
          <td><input value="<?php if(isset($formData)) echo $formData['nazwisko']; ?>" type="text" id="nazwisko" name="nazwisko" /></td></tr>
          <tr><td><label for="haslo">Hasło:</label></td>
          <td><input value="<?php if(isset($formData)) echo $formData['haslo']; ?>" type="password" id="haslo" name="haslo" /></td></tr>
          <tr><td></td><td><span id="data"><input type="button" value="Zarejestruj" onclick="rejestruj()" /></span></td></tr>
          <td><span id="response"></span></td></tr>
      </table>
</form>
</div>
</div>