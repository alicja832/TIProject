<script src="js/jquery.min.js"></script>
   
    <script type="text/javascript">
$(document).ready(function() {
     $('.img').mouseenter(function() {
        var title = $(this).attr('title'); // Pobranie tytułu obszaru
        var alt = $(this).attr('alt');
      
          $('#efekt-najechania').text(title);

    }).mouseleave(function() {
        $('#efekt-najechania').text(''); // Wyczyszczenie tytułu po opuszczeniu obszaru
    });
});
</script>

<div id="container">
<table id= "left">
<tr>
   <td><img title="Heapify" src="../img/heapsort.png" width="100%" height="100%" style="margin: 0px;"><p id="efekt-najechania"></p></td>
</tr>
  
<tr>
    <td><img title="Lista" src="../img/pobrane.jpeg" width="100%" height="100%" style="margin: 0px;"></td>
</tr>
</table>

<div id="right">

   <img title="Sortowanie przez wstawianie" src="../img/sort_wstawianie.gif" width="100%" height="100%" style="margin: 0px;">
    <p id="efekt-najechania">
</div>