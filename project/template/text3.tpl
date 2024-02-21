<section class="text">
HEAPIFY jest ważną procedurą służącą do manipulowania kopcami. Jej danymi wejściowymi są: tablica A i indeks i tej tablicy. Przy wywołaniu HEAPIFY zakłada się, że drzewa 
binarne zaczepione w LEFT(i) i RIGHT(i) są kopcami, ale że A[i] może być mniejszy od swoich synów, przez co narusza własność kopca. Zadaniem HEAPIFY jest spowodowanie, żeby wartość 
A[i] "spłynęła" w dół kopca tak, żeby poddrzewo zaczepione w węźle i stało się kopcem.
</section>
<section class="text">
W każdym kroku jest wybierany największy z elementów A[i], A[LEFT(i)], A[RIGHT(i)], a jego indeks jest zachowywany w zmiennej largest. Jeśli największy jest A[i], to poddrzewo zaczepione
w i jest kopcem i procedura się zatrzymuje. W przeciwnym razie jeden z synów jest największym elementem i następuje zamiana A[i] z A[largest], co powoduje, że węzeł i oraz 
jego synowie spełniają własność kopca. Z tego powody HEAPIFY musi zostać wywołana rekurencyjnie na tym poddrzewie. 
</section>
<section class="text">
Czas działania HEAPIFY na poddrzewie rozmiaru n zaczepionym w danym węźle i wynosi O(1).
na poprawienie zależności między A[i],A[LEFT] i A[RIGHT] plus czas potrzebny na rekurencyjne 
wywołanie HEAPIFY na poddrzewie zaczepionym w jednym z synów węzła i. Poddrzewa węzła mają każde rozmiar najwyżej 2n/3-najgorszy przypadek występuje, gdy ostatni rząd w drzewie jest wypełniony
dokładnie do połowy - czas działania HEAPIFY może być zatem opisany rekurencją:<br>
T(n)<=T(2n/3)+O(1)<br>
Rozwiązaniem jest T(n) = O(lg n)
</section>