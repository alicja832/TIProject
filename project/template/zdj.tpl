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
<table>
<tr>
   <td><img title="Heapify" src="../img/heapsort.png" width="100%" height="100%" style="margin: 0px;"></td>
</tr>
    <tr> <td><p id="efekt-najechania"></p><td></tr>
<tr>
    <td><img title="Lista" src="../img/pobrane.jpeg" width="100%" height="100%" style="margin: 0px;"></td>
</tr>
</table>
</div>
<section class="text">
Jak mówi Wikipedia "Algorytm to skończony ciąg jasno zdefiniowanych czynności koniecznych do wykonania pewnego rodzaju zadań, 
sposób postępowania prowadzący do rozwiązania problemu." Algorytmy operują na strukturach danych, warto je znać, 
ponieważ struktury danych są w programie rzeczą szczególnie istotną.
Jeśli chciałbyś poznać podstawowe algorytmy i struktury danych i je zrozumieć 
to ta platforma jest właśnie dla Ciebie.
Mamy nadzieję, że aplikacja ta łagodnie wprowadzi Cię w problemy dotyczące algorytmiki. Staraliśmy się, aby każdy
algorytm był dla Ciebie zrozumiały i interesujący. Każdy krok algorytmu jest opisany tak, abyś nie miał kłopotów
ze zgłębieniem skomplikowanej struktury całego algorytmu.
Oprócz animacji poszczególnych algorytmów możesz zobaczyć kod w pseudokodzie. 
Wszystkie treści zamieszczone na stronie pochodzą z książki "Wprowadzenie do algorytmów", autorzy: Thomas H.Cormen, Charles E.Leiserson, Ronald L.Rivest.
</section>