<script>

export default {

    name: 'AppHeader'
}

</script>


<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light align-items-center">
            <nav class="navbar navbar-light align-items-center">
                <a class="navbar-brand" href="#">
                    <img src="../style/img/code_logo.png" width="90" height="90" class="d-inline-block" alt="">
                </a>
                <h2>Code Addicts</h2>
            </nav>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <font-awesome-icon icon="fa-solid fa-bars"></font-awesome-icon>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Corsi</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contatti</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>


<!-- <nav class="navbar navbar-expand-lg navbar-light">   -->

<style lang="scss">
@use "../style/general.scss" as *;



header {
    padding-left: 1rem;
    padding-right: 1rem;
    color: #39ff14;
    border-bottom: 1px solid #39ff14;
    height: 16vh;

    .navbar{
        height: 100%;
    }

    .nav-link {
        color: #39ff14;
    }

}
</style>

