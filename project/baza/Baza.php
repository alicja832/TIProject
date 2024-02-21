<?php
 
namespace baza   ;
 
use appl\ { View, Controller } ;
// use appl\Controller ;
 
class Baza extends Controller 
{
 
    protected $layout ;
    protected $model ;
 
    function __construct() {
	session_start();   
       parent::__construct();
       $this->layout = new View('main') ;
       $this->layout->css = $this->css ;
       $this->layout->color=$this->color;
       $this->layout->title="";
       $this->layout->content1="";
       $this->layout->content2="";
     	if(isset($_SESSION['id']))
      	{
            $this->layout->menu = file_get_contents ('template/menullog.tpl') ;
	      }
      else{
            $this->layout->menu = file_get_contents ('template/menu.tpl') ;
         }
       
      $this->model  = new Model() ;
    }
    /**
     * wywoluje formularz logowania
     * @return [type]
     */
    function formLoguj() {
         $this->layout->title = 'Rejestracja/Logowanie' ;
         $this->view = new View('formlog') ;
         $this->layout->content1 = $this->view ;
         return $this->layout ;
     }
     /**
      * wywoluje formularz rejestracji
      * @return [type]
      */
     function formRejestruj() {
         $this->layout->title = 'Rejestracja/Logowanie' ;
         $this->view = new View('formrej') ;
         $this->layout->content1 = $this->view ;
         return $this->layout ;
    }
      //funkcje wywołujące odpowiednie rysunki- zmienna info-informacja czy uzytkownik jest zalogowany czy nie
      //zmienna data-ktory to nr animacji
     function lista() {

         $this->view = new View('list') ;
         $this->view->data=2;
         if(isset($_SESSION['id']))
         {
            $this->view->info=1;
         }
         else
            $this->view->info=0;
            $this->layout->content1 = $this->view;
            $this->view = new View('text2');
            $this->layout->content2 = $this->view;
            return $this->layout;
     
      }
    function sortsc() {

         $this->view = new View('sortsc') ;
         $this->view->data=4;
         
         if(isset($_SESSION['id']))
         {
            $this->view->info=1;
         }
         else
            $this->view->info=0;
         
         $this->layout->content1 = $this->view;
         $this->view = new View('text4');
         $this->layout->content2 = $this->view;
         return $this->layout;
    }
    function heapify() {
         
      $this->view = new View('heapify') ;
      $this->view->data=3;
      
      if(isset($_SESSION['id']))
      {
         $this->view->info=1;
      }
      else
         $this->view->info=0;

      $this->layout->content1 = $this->view;
      $this->view = new View('text3');
      $this->layout->content2 = $this->view;
      return $this->layout;
    }
    function sortwst() {
      
      $this->view = new View('sort') ;
      $this->view->data=1;
      if(isset($_SESSION['id']))
      {
         $this->view->info=1;
      }
      else
         $this->view->info=0;
      $this->layout->content1 = $this->view;
      $this->view = new View('text1');
      $this->layout->content2 = $this->view;

      return $this->layout;
   }
    /**
     * rejestracja uzytkownika
     * @return [type]
     */
    function rejestruj() {
      
      $data = $_POST['data'] ;
      $obj  = json_decode($data) ;
      $response ='false';

      if ( isset($obj->imie) and isset($obj->nazwisko) and isset($obj->haslo)) {     
           $response = $this->model->rejestruj($obj) ;
        }
      
      if($response!='false')
        {
         if($response=='istnieje')
            return "Użytkownik o podanym loginie i haśle już istnieje.";

         $resp = $this->model->loguj($obj) ;
         $id=$resp['uzytkownik_id'];
         $_SESSION['id'] = $id;
      
        }
        return ( $response ? "Zarejestrowano" : "Blad " ) ;
     }
     /**
      * logowanie uzytkownika
      * @return [type]
      */
     function loguj() {
            
         $data = $_POST['data'];
         $obj  = json_decode($data) ;
         if ( isset($obj->imie) and isset($obj->nazwisko) and isset($obj->haslo)) {
            $response = $this->model->loguj($obj);
         }
         if(!empty($response))
         {       
            $id=$response['uzytkownik_id'];
            $_SESSION['id'] = $id;
         }
         return ( !empty($response) ? "Zalogowano" : "Blad logowania" ) ;
      }
     /**
      * lista animacji zalogowanego wlasnie uzytkownika
      * @return [type]
      */
     function mojeAnimacje()
     {
         $this->view = new View('moje');
         $resp=$this->model->mojeAnimacje($_SESSION['id']);
         $this->view->data = $resp;
         $this->view->tabele = array();
         $this->layout->content1 = $this->view; 
         
         return $this->layout;
     }   
     /**
      * lista parametrow zapisanych w danej animacji
      * @return [type]
      */
     function w_animacji()
     {
         $layout = new View('main2');
         $data = $_POST['data'];
         $obj = json_decode($data);
         $this->view = new View('kolejne');
         $this->view->data=$this->model->w_animacji($obj->zapis_id);
         $layout->content2 = $this->view; 
         return $layout;
     }
     /**
      * zapisanie animacji
      * @return [type]
      */
     function zapisz() 
     {
         $data = $_POST['data'];
         $obj  =  json_decode($data,true);
         $id = $_SESSION['id'];
         $anim_id=$obj['anim_id'];
         $response = $this->model->zapisz($id,$anim_id);

         if($response='true')
         {
            foreach($obj['tab'] as $i)
            {
               $el=intval($i);
               $response = $this->model->zapis2($el);
               
            }
         }
      return ( $response ? "Zapisano" : "Blad " );
     }
    /**
     * lista animacji wraz z opisem
     * @return [type]
     */
    function anim()
    {
      $this->view=new View('listaopis');
		$this->layout->content1= $this->view;
      $this->view=new View('zdj2');
      $this->layout->content2= $this->view;
      return $this->layout ;
    }
    /**
     * strona glowna
     * @return [type]
     */
    function index ()  
    {
      $this->view=new View('zdj');
      $this->layout->content1= $this->view;
      $this->view=new View('lista');
      $this->layout->content2= $this->view;
      return $this->layout ; 
   }
	/**
    * wylogowanie
	 * @return [type]
	 */
	function logout()
	{
		unset($_SESSION);
		session_destroy();
		return $this->index();
	}	
   /**
    * funkcja z dokumentacja
    * @return [type]
    */
   function documentation()
   {
      $this->view=new View('documentation');
      $this->layout->content1= $this->view;
     
      return $this->layout ;
   }
}   
?>
