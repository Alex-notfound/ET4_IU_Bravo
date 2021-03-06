<!--17-01-2019/Bravo/Vista que nos permite añadir una visita -->

<?php

class Visitas_ADD_View {

    function __construct($codigoContrato) {

        $this->render($codigoContrato);
    }

    function render($codigoContrato) {
        if (!isset($_SESSION['idioma'])) {
            $_SESSION['idioma'] = 'SPANISH';
        }

        include '../Views/Header.php';
        ?>
        <h2><?php echo $strings['Añadir Visita']; ?></h2>        
        <section>
            <form class="form_add" method="post" action="../Controllers/Visitas_Controller.php" enctype="multipart/form-data" onsubmit="return validarVisitasADD(this);">
                <fieldset id="fieldset_add">
                    <input type="hidden" name=codcontrato value=<?php echo $codigoContrato; ?>>
                    <div class="form-group"><label for="estado"><?php echo $strings['Estado'] ?>  *</label>  
                        <select class="form-control" id="estadoAdd1" name="estado">
                            <option value="realizada"><?php echo $strings['Realizada'] ?></option>
                            <option value="pendiente"><?php echo $strings['Pendiente'] ?></option>
                            <option value="incidencia"><?php echo $strings['Incidencia'] ?></option>
                        </select>
                    </div>&nbsp;&nbsp;<div class="form-group"><label for="tipo"><?php echo $strings['Tipo'] ?>  *</label>  
                        <select class="form-control" id="tipo" name="tipo">
                            <option value="certificador"><?php echo $strings['Certificador'] ?></option>
                            <option value="mantenimiento"><?php echo $strings['Mantenimiento'] ?></option>
                            <option value="reparacion"><?php echo $strings['Reparacion'] ?></option>
                        </select>
                    </div>&nbsp;&nbsp;<div class="form-group">
                        <label for="informe"><?php echo $strings['Informe']; ?>  *</label> <br>
                        <input name="informe" type="file" id="informeAdd1" onblur="comprobarVacio(this);"/>
                    </div>&nbsp;&nbsp;<div class="form-group">
                        <label for="fecha"><?php echo $strings['Fecha']; ?>  *</label> 
                        <input readonly type="text" class="tcal" name="fecha" id="fechaAdd1" onblur="comprobarFechaVisitas(this,$data[0],$data[1]);"> 
                    </div>

                </fieldset>
                <span>* <?php echo $strings['Campos obligatorios']; ?> </span><br>
                <button class="btn btn-outline-primary" name="action" type="submit" value="ADD"><i class="fas fa-check"></i></button>

            </form>
        </section>
        <?php
        include '../Views/Footer.php';
    }

}
?>

