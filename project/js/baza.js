/**
 * funkcja pobierająca dane z formularza rejestracyjnego, wysyła dane do serwera
 */
function rejestruj()
{
    var imie = document.getElementById("imie").value ;
    var nazwisko = document.getElementById("nazwisko").value ;
    var haslo = document.getElementById("haslo").value ;
    document.getElementById("data").style.display = "none" ;
    json_data = "{\"imie\":\"" + imie + "\",\"nazwisko\":\"" + nazwisko + "\",\"haslo\":\"" + haslo +"\"}" ;
    console.log(json_data);
    var msg = "data=" + encodeURIComponent(json_data) ;                                    
    url = "index.php?sub=Baza&action=rejestruj" ;
    resp = function(response) {
        document.getElementById("response").innerHTML = response ; 
    }
     xmlhttpPost (url, msg, resp) ;                          
} 
/**
 * funkcja pobierająca dane z formularza do logowania, wysyła dane do serwera
 */
function log()
{
   var imie = document.getElementById("imie").value ;
   var haslo = document.getElementById("haslo").value ;
   var nazwisko = document.getElementById("nazwisko").value ;
   document.getElementById("data").style.display = "none" ;
   json_data = "{\"imie\":\"" + imie + "\",\"nazwisko\":\"" + nazwisko + "\",\"haslo\":\"" + haslo +"\"}" ;
   var msg = "data=" + encodeURIComponent(json_data) ;                                      
    // alert ( '['+msg+']' ) ; 
   url="index.php?sub=Baza&action=loguj";
   resp = function(response) {
       document.getElementById("response").innerHTML = response ; 
     }
   xmlhttpPost (url, msg, resp) ; 
}
/**
 * 
 * @param {*} event - rozpoczyna animację już utworzonego 
 * przez uzytkownika obrazka - event przekazuje ktora
 * animacje rozpoczynamy 
 */
function zobaczanimacje(event)
{
  
   var zapis_id=event.target.id;
   json_data = "{\"zapis_id\":\"" + zapis_id +"\"}" ;
   var msg = "data=" + encodeURIComponent(json_data) ;                                    
   url = "index.php?sub=Baza&action=w_animacji" ;
   resp = function(response) {
      document.getElementById("response2").innerHTML = response ; 
    }
    xmlhttpPost (url, msg, resp) ;                     
}  
/**
 * @param {*} event - wysyla nr animacji wraz z liczbami 
 * ktora ja tworza do zapisania w koncie zalogowanego uzytkownika  
 */
function zapisz_animacje(event)
{
    var anim_id=event.target.id;
    var dane_animacji = {
        tab: tab,
        anim_id: anim_id
    };

    var json_data=JSON.stringify(dane_animacji);
    document.getElementById("data").style.display = "none";
    var msg = "data=" + encodeURIComponent(json_data) ;                                      
    url="index.php?sub=Baza&action=zapisz";
    resp = function(response) {
       document.getElementById("response").innerHTML = response ; 
     }
    xmlhttpPost (url, msg, resp) ; 
}

/**
 * @param mixed strURL
 * @param mixed mess
 * @param mixed respFunc
 * funkcja umozliwiajaca przesyl danych xmlhttpPost
 * @return [type]
 */
function xmlhttpPost(strURL, mess, respFunc) {
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', strURL);
    xhr.addEventListener("load", e => {
      if ( xhr.status == 200 )  {
         respFunc ( xhr.response ) ;
      }
    })
    xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; ");
    xhr.send(mess);        
 }

 