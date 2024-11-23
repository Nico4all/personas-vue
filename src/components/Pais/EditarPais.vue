<template>
    <div class="container">
        <h1 class="text-primary">Editar País</h1>
        <div class="card mt-4">
            <div class="card-header">
                Editar País
            </div>
            <div class="card-body">
                <form @submit.prevent="actualizarPais">
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

                    <button type="submit" class="btn btn-primary">Actualizar</button>
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
    name: 'EditarPais',
    data() {
        return {
            pais: {
                pais_codi: null, // Código del país (ID)
                pais_nomb: '',   // Nombre del país
            },
        };
    },
    methods: {
        async cargarPais() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/paises/${this.$route.params.id}`);
                this.pais = response.data.pais;
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se pudieron cargar los datos del país.',
                });
                this.$router.push({ name: 'Paises' });
            }
        },
        async actualizarPais() {
            try {
                const response = await axios.put(`http://127.0.0.1:8000/api/paises/${this.pais.pais_codi}`, this.pais);

                if (response.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'País actualizado',
                        text: 'El país se ha actualizado correctamente.',
                        timer: 2000,
                        showConfirmButton: false,
                    });

                    this.$router.push({ name: 'Paises' }); // Redirige al listado de países
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un problema al actualizar el país.',
                });
            }
        },
        cancelar() {
            this.$router.push({ name: 'Paises' });
        },
    },
    mounted() {
        this.cargarPais();
    },
};
</script>

<style scoped>
.container {
    margin-top: 30px;
}
</style>
