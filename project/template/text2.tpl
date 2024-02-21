<section class="text">
W przeciwieństwie do tablicy, w której porządek jest wyznaczony przez jej indeksy, porządek na liście z dowiązaniami określają wskaźniki związane z każdym elementem
listy. Listy z dowiązaniami są prostą i elastyczną strukturą, służącą do reprezentowania zbiorów dynamicznych.
Każdy element listy dwukierunkowej L jest rekordem składającym się z trzech pól: key - wartości(w przypadku animacji jest to liczba), next oraz prev. 
</section>
<section class="text">
Dla danego elementu x na liście next[x] wskazuje na jego poprzednik.
Jeśli prev[x] = NULL to element x nie ma poprzednika, jest więc pierwszym elementem listy. Mówimy wtedy że x jest głową listy. Jeśli next[x] 
jest NULL to x nie ma następnika,
jest więc ostatnim elementem listy lub jej ogonem. Atrybut head[L] wskazuje na pierwszy element listy. Jeśli head[L] = NULL, to lista jest pusta.
Procedura LIST-INSERT(L,x) przyłącza element x(którego pole key zostało wcześniej zainicjowane) na początek listy. 
Procedura LIST-INSERT(L,x) na liście o n elementach działa w czasie O(1).
</section>
<section class="text">
Animacja przedstawia alokacje pamięci dla elementu int-liczba. Strzałki mają pokazać na co wskazują poszczególne wskaźniki(head,prev,next). 
Zauważ, że adresy w pamięci nie są uporządkowane jak w tablicy, gdzie w przypadku tablicy zawierającej typ danych int adresy różniłyby się o wartość 4 (0x7ff020 -> kolejny 0x7ff24).
Na animacji przedstawiono jedynie dodawanie elementu na koniec listy - możliwe jest również dodawanie na początek.
</section>