<script setup>
const paises = [
    { codigo: 'US', nombre: 'Estados Unidos' },
    { codigo: 'MX', nombre: 'México' },
    { codigo: 'AR', nombre: 'Argentina' },
    { codigo: 'CO', nombre: 'Colombia' },
    { codigo: 'CR', nombre: 'Costa Rica' },
    { codigo: 'ES', nombre: 'España' },
    { codigo: 'PE', nombre: 'Perú' }
]
</script>

<template>
    <form action="" class="formulario">
        <div class="campo">
            <label for="ciudad">Ciudad</label>
            <input type="text" name="ciudad" id="ciudad" placeholder="Ciudad">
        </div>

        <div class="campo">
            <label for="pais">Pais</label>
            <select id="pais">
                <option value="">-- Seleccione un país --</option>
                <option v-for="pais in paises" value=":pais.codigo">{{ pais.nombre }}</option>
            </select>
        </div>

        <input type="submit" value="Consultar Clima" />
    </form>
</template>

<style lang="scss" scoped></style>