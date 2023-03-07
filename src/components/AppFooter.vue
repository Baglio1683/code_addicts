<script>

export default {
    name: 'AppFooter'
}


</script>


<template>
    <footer class="pt-3 pb-3">

        <div class="container">
            <h3 class="text-center mb-5">Contatti</h3>
            <div class="row justify-content-center align-items-center">
                <div class="col-2 text-center">
                    <a href="">
                        <font-awesome-icon icon="fa-brands fa-youtube"/>
                    </a>
                </div>
                <div class="col-2 text-center">
                    <a href="">
                        <font-awesome-icon icon="fa-brands fa-instagram" />
                    </a>
                </div>
                <div class="col-2 text-center">
                    <a href="mailto:alberto.baglivi@gmail.com" class="email">alberto.baglivi@gmail.com</a>
                </div>
            </div>

        </div>

    </footer>
</template>


<style lang="scss">
    .container {

        a{
            
            font-size: x-large;
            color: rgb(0, 98, 255);
            text-decoration: none;
            
            .fa-instagram{
                color: rgb(191, 42, 245);
            }

            .fa-youtube{
                color: red;
            }

        }

        color: #39ff14;
        ;


    }
</style>