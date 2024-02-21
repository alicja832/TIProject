<?php
 
namespace baza ;
use PDO ;
 
class Model 
{  
   protected static $db ;
   private $sth ;
 
   function __construct()
   {
    try{
      $db = new PDO("pgsql:host='flora.db.elephantsql.com' port='5432'
          user='aqmelqzr' password='iMLKQnrMYXCK5VP8ZmpxIkeK9Kvg2PfM' dbname='aqmelqzr'"); 
          $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          self::$db = $db;
      }
      catch(PDOException $e)
      {
        echo "An error occurred.\n";
        exit;
      }
   }

   /**
    * @param mixed $obj
    *logowanie uzytkownika
    * @return [type]
    */
   public function loguj($obj)
   {
      $resp=false;
     
      $this->sth = self::$db->prepare('SELECT * FROM alg.uzytkownik WHERE imie= :imie and nazwisko= :nazwisko and haslo=:haslo' ) ;
      $this->sth->bindValue(':imie',$obj->imie,PDO::PARAM_STR) ;
      $this->sth->bindValue(':nazwisko',$obj->nazwisko,PDO::PARAM_STR) ;  
      $this->sth->bindValue(':haslo',md5($obj->haslo),PDO::PARAM_STR) ;
      $this->sth->execute();
      
      $result = $this->sth->fetch();
    
      return $result; 
   
  }

  /**
   * @param mixed $obj
   * rejestracja uzytkownika
   * @return [type]
   */
  public function rejestruj($obj)
  {
    $resp='istnieje';
    $this->sth = self::$db->prepare('SELECT * FROM alg.uzytkownik WHERE imie= :imie and nazwisko= :nazwisko and haslo=:haslo') ;
    $this->sth->bindValue(':imie',$obj->imie,PDO::PARAM_STR) ;
    $this->sth->bindValue(':nazwisko',$obj->nazwisko,PDO::PARAM_STR) ;  
    $this->sth->bindValue(':haslo',md5($obj->haslo),PDO::PARAM_STR) ;
    $this->sth->execute(); 
    
    if(empty($this->sth->fetchAll()))
    {
      $this->sth = self::$db->prepare('INSERT INTO alg.uzytkownik (imie,nazwisko,haslo) VALUES ( :imie, :nazwisko, :haslo)') ;
      $this->sth->bindValue(':imie',$obj->imie,PDO::PARAM_STR) ;
      $this->sth->bindValue(':nazwisko',$obj->nazwisko,PDO::PARAM_STR) ;  
      $this->sth->bindValue(':haslo',md5($obj->haslo),PDO::PARAM_STR) ;
      $resp = ( $this->sth->execute() ? 'true' : 'false' ) ;
    }
    return $resp ;  
  }
  /**
   * @param mixed $id  - id zalogowanego uzytkownika
   * @param mixed $anim - id animacji
   * zapis animacji
   * @return [type]
   */
  public function zapisz($id,$anim) {
  
    $this->sth = self::$db->prepare('INSERT INTO alg.animacja_zapis (animacja_id,uzytkownik_id) VALUES ( :animacja_id, :uzytkownik_id)') ;
    $this->sth->bindValue(':animacja_id',$anim,PDO::PARAM_INT) ;
    $this->sth->bindValue(':uzytkownik_id',$id,PDO::PARAM_INT) ;
    $resp = ( $this->sth->execute() ? 'true' : 'false' ) ;
 
  return $resp ;  
}
/**
 * @param mixed $obj - id uzytkownika
 * 
 * @return [type] - wszyskie zapisane animacje
 */
public function mojeAnimacje($obj)
{
  $this->sth = self::$db->prepare('SELECT zapis_id,nazwa FROM alg.animacja_zapis join alg.animacja using(animacja_id) WHERE uzytkownik_id = :uzytkownik_id') ;
  $this->sth->bindValue(':uzytkownik_id',$obj,PDO::PARAM_STR) ;
  $this->sth->execute(); 
  $resp=$this->sth->fetchAll();
  return $resp;
}
/**
 * @param mixed $obj
 * zapisane liczby w danej animacji
 * @return [type]
 */
public function w_animacji($obj)
{
  $this->sth = self::$db->prepare('SELECT liczba,animacja_id FROM alg.liczba_zapis join alg.animacja_zapis using(zapis_id) WHERE zapis_id = :zapis_id') ;
  $this->sth->bindValue(':zapis_id',$obj,PDO::PARAM_INT) ;
  $this->sth->execute(); 
  $resp=$this->sth->fetchAll();
  return $resp;
}
/**
 * @param mixed $obj-zapis konkretnej liczby do konkretnego zapisu
 * @return [type]
 */
public function zapis2($obj) {
  
    $this->sth = self::$db->prepare('SELECT zapis_id FROM alg.animacja_zapis ORDER BY zapis_id desc limit 1') ;
    $this->sth->execute();
    $res=$this->sth->fetch();
    $this->sth = self::$db->prepare('INSERT INTO alg.liczba_zapis (zapis_id,liczba) VALUES (:zapis_id,:liczba)');
    $this->sth->bindValue(':zapis_id',$res['zapis_id'],PDO::PARAM_INT) ;
    $this->sth->bindValue(':liczba',$obj,PDO::PARAM_INT) ;
    $resp = ( $this->sth->execute() ? 'true' : 'false' ) ;
 
  return $resp ;  
}
}
 
?>
