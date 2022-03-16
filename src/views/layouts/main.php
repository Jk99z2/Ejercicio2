<?php

    function head(){

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" type="image/x-icon">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Blog X</title>
</head>
<body>
    <div id="app" class="container-fluid p-0 bg-light">
        <header class="row m-0">
            <!--<div class="col-9">
                <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" style="height:7rem" alt="Logo">
            </div>-->
            <!--<div class="col-3">
                <img src="/src/img/youngInformed-nier.png" style="height:150px" alt="Logo">
            </div>-->
        </header>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" alt="" style="height: 4rem;">
          </a>
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Ultimas Publicaciones</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Nueva publicacion</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" id="buscar-palabra" type="search" placeholder="Buscar" aria-label="Search">
                    <button class="btn btn-outline-success" type="button" onclick="app.buscarPalabra()"><i class="bi bi-search"></i></button>
                </form>
                </div>
            </div>
        </nav>

    <?php
    }

    function foot(){

    ?>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    
</body>
</html>

<?php }