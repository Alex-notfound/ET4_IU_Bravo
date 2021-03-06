<!--17-01-2019/Bravo/Menú que nos redirige al controlador que deseamos -->

<nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <a class="navbar-brand"><?php echo $strings['Menu'] ?></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <a class="nav-item nav-link active" href="../Controllers/Contratos_Controller.php"><?php echo $strings['Contratos'] ?><span class="sr-only">(current)</span></a>
            <?php if ($_SESSION['rol'] == 'admin') { ?>
                <a class="nav-item nav-link active" href="../Controllers/Empresas_Controller.php"><?php echo $strings['Empresas'] ?></a>
                <a class="nav-item nav-link active" href="../Controllers/Centros_Controller.php"><?php echo $strings['Centros'] ?></a>
                <a class="nav-item nav-link active" href="../Controllers/Usuarios_Controller.php"><?php echo $strings['Usuarios'] ?></a>
            <?php } ?>
        </div>
    </div>
</nav>