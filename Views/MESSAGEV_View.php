<!--17-01-2019/Bravo/Nos muestra determinados mensajes cuando una acción se lleva acabo -->

<?php

class MESSAGEV {

    private $string;
    private $volver;
    public $codigocon;
    function __construct($string, $volver,$codigocon) {
        $this->string = $string;
        $this->volver = $volver;
        $this->codigocon = $codigocon;
        $this->render();
    }

    function render() {

        include '../Locales/Strings_' . $_SESSION['idioma'] . '.php';
        include '../Views/Header.php';
        ?>
        <br>
        <br>
        <br>
        <p>
        <H3>
            <?php
            echo $strings[$this->string];
            ?>
        </H3>
        </p>
        <br>
        <br>
        <br>
         <form class="form-inline my-2 my-lg-0" name='formulario' action=<?php echo $this->volver ?> method="">
                          <input type="hidden" name=codcontrato value=<?php echo $this->codigocon ?>>
                           <button name="action" value="SHOWALL" type="submit" class="btn btn-outline-primary">
                           <i class="fa fa-arrow-left"></i></button>&nbsp  
         </form>
        <?php
        
        include '../Views/Footer.php';
    }

//fin metodo render
}
