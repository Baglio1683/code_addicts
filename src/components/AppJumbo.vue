<script>
import vueMatrixRaindrop from 'vue-matrix-digit-rain';

export default {

    name: 'AppJumbo', 
    components: {
        vueMatrixRaindrop
    }

}

</script>


<template>
    <div class="container-fluid pl-5">
       <vueMatrixRaindrop>
       </vueMatrixRaindrop>
       
            <div class="row d-flex justify-content-between">
                <div class="col-8 text-white text-center">
                    <h1>Esci dalla Matrix e Inizia a far parte della community Code Addicts 
                        e impara tutti gli argomenti riguardanti la programmazione e materie affini</h1>
                </div>
                <div class="col-4 d-flex justify-content-center align-items-center text-center">
                    <a href="" class="rounded-pill p-2">Start</a>
                </div>
            </div>
        </div>
</template>


<style lang="scss">

.container-fluid{

    height: 81vh;

   .row{
    position: absolute;
    top: 45%;
    .col-4{    
       
     a{
        background-color: red;
        text-decoration: none; 
        color: white;
        width: 150px;
        &:hover{
            background-color: white; 
            color: red;

        }
     
     }
          
    }
   }

    #vue-matrix-raindrop{
        width: 100%; 
        height: 100%; 
    }

}

</style>