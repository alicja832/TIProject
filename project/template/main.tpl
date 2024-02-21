<!DOCTYPE html>
<html>
  <head>  
    <title>Algorytmy</title>    
    <link rel="shortcut icon" href="icon.png" />
    <link rel="stylesheet" href="css/style.css" type="text/css" /> 
    <script  src="js/baza.js"></script> 
     <script  src="js/anim.js"></script> 
     <script src="js/jquery-3.6.0.min.js"></script>
    <script>
    $(document).ready(function() {
        $("#scroll").click(function() {
          $("html, body").animate({
            scrollTop: $("#opis").offset().top
          }, 1000); // Czas animacji w milisekundach
        });
      });
    </script>
    <?php echo $css;?>
  </head>  
  <body>  
  <main>  
<header>  
  <div class="logo"><img src="icon.png" alt="Logo Strony" /></div>  
  <div class="tytul"><p>Wybrane algorytmy i struktury danych</p>
  </div>
</header>
<div id="container">
      <?php echo $menu;?>
    <?php echo $content1;?>
</div>
<article id="opis">
    <?php echo $content2;?>
</article>
<footer>
Algorytmy@ 2023 Kraków
       
</footer>  
</main>
  </body> 
</html>
