<section class="text">
Rozpoczynamy od sortowania przez wstawianie, które jest efektywnym algorytmem sortowania dla niewielkiej liczby elementów. 
Algorytm ten działa w taki sposób, w jaki często ludzie porządkują talię kart.
Zaczynamy od "pustej" lewej ręki, po czym bierzemy ze stołu kolejne karty i wstawiamy je we właściwe miejsca w talii kart, trzymanej w lewej ręce. 
Aby znaleźć właściwe miejsce dla danej karty, porównujemy 
ją z kartami, które mamy w ręce, przesuwając się od strony prawej do lewej.
</section>
<section class="text">
Indeks j wskazuje " kartę bieżącą ", która jest właśnie wstawiana do talii kart w ręce. Elementy tablicy A[1...j-1] reprezentują karty trzymane w ręce, a elementy A[j+1...n]
odpowiadają stosowi kart na stole. Indeks j przesuwa się od strony lewej do prawej. W każdej iteracji zewnętrznej pętli for element A[j] jest pobierany z tablicy. Następnie,
począwszy od pozycji j-1, elementy są sukcesywnie przesuwane o jedną pozycję w prawo, 
aż zostanie znaleziona właściwa pozycja dla A[j] i wtedy ten element zostaje tam wstawiony(co przedstawia animacja).
</section>
<section class="text">
<p>
Czas działania procedury INSERTION-SORT zależy do rozmiaru danych wejściowych, stopnia posortowania danych wejściowych.
Elementy wejściowej tablicy są sortowane w miejscu, to znaczy, że są one przechowywane cały czas w tej samej tablicy, z wyjątkiem stałej liczby elementów.
</section>