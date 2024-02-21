<section class="text">
W metodzie "dziel i zwycieżaj" każdy stopień rekursji składa się z następujących etapów:
<ul>
    <li> Dziel: dzielimy problemy na podproblemy</li>
    <li> Zwyciężaj: rozwiązujemy podproblemy rekurencyjnie, chyba że są one małego rozmiaru i już nie wymagają zastosowania rekursji - używamy wtedy bezpośrednich metod.</li>
    <li> Połącz : Łączymy rozwiązania podproblemów, aby otrzymać rozwiązanie całego problemu.
</ul>
Algorytm sortowania przez scalanie otrzymujemy , stosując metodę "dziel i zwyciężaj". Jego intuicyjny opis jest następujący:
<ul>
    <li> Dziel: dzielimy n elementowy ciąg na dwa podciągi, każdy po n/2 elementów</li>
    <li> Zwyciężaj:Sortujemy otrzymane podciągi, używając rekurencyjnie sortowania przez scalanie</li>
    <li> Połącz : Łączymy powstałe podciągi w jeden posortowany ciąg.
</ul>
</section>
<section class="text">
Podstawową operacją algorytmu sortowania przez scalanie jest jest scalanie dwóch posortowanych ciągów dokonywane w kroku "połącz". W celu wykonania scalania korzystamy
z procedury MERGE(A,p,q,r), gdzie A jest tablicą, a p,q,r są tablicami takimi, że: p<=q<=r. W procedurze zakładamy że tablice A[p...q] oraz A[q+1...r] są posortowane.
Merge działa w czasie O(n). Aby posortować cały ciąg A=A[1,...n] wywołujemy procedurę MERGE-SORT(A,1,length[A]). Patrząc na drzewo wywołań rekurencyjnych od dołu
(gdy n jest potęgą dwójki), widzimy, że algorytm najpierw sortuje pojedyńcze ciągi w ciągi 1-elementowe,2-elementowe,4 itd aż otrzymamy ciąg o długości n.
Ten właśnie proces został przedstawiony na animacji. 
</section>
<section class="text">
Ciekawostka: Algorytm sortowania przez scalanie można zaimplementować korzystając z tak zwanej wielowątkowości (multithreading). Wtedy wszystkie sortowania,które
znajdują się na tym samym poziome zagłębienia w drzewie wywołań rekurencyjnych będą wykonywać się jednocześnie w różnych wątkach. Sortowanie wtedy wykona się szybciej.
</section>
<section class="text">
Sortowanie przez wstawianie może być bardziej efektywne dla małych zbiorów danych lub danych, które są już częściowo posortowane, ze względu na niższe zużycie pamięci i lepszą adaptacyjność.
Mergesort jest natomiast bardziej ogólnym algorytmem, efektywnym dla większych zbiorów danych, ale wymaga dodatkowej pamięci. 
</section>