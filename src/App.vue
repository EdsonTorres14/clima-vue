<script setup>

import Formulario from './components/Formulario.vue'
import Clima from './components/Clima.vue';
import Spiner from './components/Spiner.vue';
import Alerta from './components/Alerta.vue';
import useClima from './composables/useClima';

const { obtenerClima, clima, cargando, mostrarClima, error } = useClima()

</script>

<template>
    <h1 class="titulo">Buscador de Clima</h1>
    <div class="contenedor buscador-clima">
        <Formulario @obtener-clima="obtenerClima" />
        <Spiner v-if="cargando" />
        <Alerta v-if="error">{{ error }}</Alerta>
        <Clima v-if="mostrarClima" :clima="clima" />
    </div>
</template>
