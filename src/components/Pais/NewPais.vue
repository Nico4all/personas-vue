<template>
    <div class="container">
        <h1 class="text-primary">Nuevo País</h1>
        <div class="card mt-4">
            <div class="card-header">
                Crear País
            </div>
            <div class="card-body">
                <form @submit.prevent="crearPais">
                    <div class="mb-3">
                        <label for="pais_nomb" class="form-label">Nombre del País</label>
                        <div class="input-group">
                            <div class="input-group-text">
                                <font-awesome-icon icon="flag" />
                            </div>
                            <input
                                type="text"
                                class="form-control"
                                id="pais_nomb"
                                placeholder="Ingrese el nombre del país"
                                v-model="pais.pais_nomb"
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary">Guardar</button>
                    <button @click="cancelar" type="button" class="btn btn-secondary mx-2">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'NewPais',
    data() {
        return {
            pais: {
                pais_nomb: '', // Nombre del país
            },
        };
    },
    methods: {
        async crearPais() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/paises', this.pais);

                if (response.status === 201) {
                    Swal.fire({
                        icon: 'success',
                        title: 'País creado',
                        text: 'El país se ha registrado correctamente.',
                        timer: 2000,
                        showConfirmButton: false,
                    });

                    this.$router.push({ name: 'Paises' }); // Redirige a la lista de países
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un problema al guardar el país.',
                });
            }
        },
        cancelar() {
            this.$router.push({ name: 'Paises' });
        },
    },
};
</script>

<style scoped>
.container {
    margin-top: 30px;
}
</style>
