<template>
    <div class="container">
        <h1>Editar Departamento</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Datos del Departamento
            </div>
            <div class="card-body">
                <form @submit.prevent="updateDepartamento">
                    <div class="mb-3">
                        <label for="depa_nomb" class="form-label">Nombre del Departamento:</label>
                        <div class="input-group">
                            <div class="input-group-text">
                                <font-awesome-icon icon="building" />
                            </div>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="depa_nomb" 
                                placeholder="Nombre del Departamento" 
                                v-model="departamento.depa_nomb" 
                                required 
                            />
                        </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Actualizar</button>
                    <button class="btn btn-secondary mx-2" @click="cancelar">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'EditarDepartamento',
    data() {
        return {
            departamento: {
                depa_codi: null,
                depa_nomb: '',
            },
        };
    },
    methods: {
        cancelar() {
            this.$router.push({ name: 'Departamentos' });
        },
        async updateDepartamento() {
            try {
                const res = await axios.put(`http://127.0.0.1:8000/api/departamentos/${this.departamento.depa_codi}`, this.departamento);

                if (res.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Departamento actualizado con éxito',
                        showConfirmButton: false,
                        timer: 2000,
                    });
                    this.$router.push({ name: 'Departamentos' });
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un problema al actualizar el departamento.',
                });
            }
        },
    },
    mounted() {
        const id = this.$route.params.id;

        axios.get(`http://127.0.0.1:8000/api/departamentos/${id}`)
            .then((response) => {
                this.departamento = response.data.departamento;
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se pudo cargar el departamento.',
                });
            });
    },
};
</script>

<style scoped>
.container {
    max-width: 600px;
    margin-top: 30px;
}
</style>
