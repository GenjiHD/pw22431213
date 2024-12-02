<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Agregar Personal</h4>
            </div>
            <div v-if="message == 1" class="alert alert-success" role="alert">
                Datos insertados, nicesu
            </div>
            <div class="card-body">
                <div class="mb-3">
                    Nombre
                    <input type="text" class="form-control" v-model="personal.nombre">
                </div>
                <div class="mb-3">
                    Dirección
                    <input type="text" class="form-control" v-model="personal.direccion">
                </div>
                <div class="mb-3">
                    Teléfono
                    <input type="text" class="form-control" v-model="personal.telefono">
                </div>
                <div class="mb-3">
                    Estatus
                    <input type="text" class="form-control" v-model="personal.estatus">
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary" @click="agregarPersonal(personal)">Agregar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { PersonalAgregar } from '../interfaces/Personal-interface';
import { UsePersonal } from '../controllers/UsePersonal';
const { agregarPersonal, message } = UsePersonal();

    let personal = ref<PersonalAgregar>({
        nombre: '',
        direccion: '',
        telefono: '',
        estatus: 0
    });
</script>

<style scoped>

</style>