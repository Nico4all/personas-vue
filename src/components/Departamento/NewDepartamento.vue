<template>
    <div class="container">
        <h1>Crear Nuevo Departamento</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Datos del Departamento
            </div>
            <div class="card-body">
                <form @submit.prevent="createDepartamento">
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
                    <button class="btn btn-success" type="submit">Guardar</button>
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
    name: 'NewDepartamento',
    data() {
        return {
            departamento: {
                depa_nomb: '',
            },
        };
    },
    methods: {
        cancelar() {
            this.$router.push({ name: 'Departamentos' });
        },
        async createDepartamento() {
            try {
                const res = await axios.post('http://127.0.0.1:8000/api/departamentos', this.departamento);

                if (res.status === 201) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Departamento creado con éxito',
                        showConfirmButton: false,
                        timer: 2000,
                    });
                    this.$router.push({ name: 'Departamentos' });
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un problema al crear el departamento.',
                });
            }
        },
    },
};
</script>

<style scoped>
.container {
    max-width: 600px;
    margin-top: 30px;
}
</style>
