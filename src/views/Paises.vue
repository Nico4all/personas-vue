<template>
    <div class="container">
        <h1>Listado de Países |
        <button @click="nuevoPais" class="btn btn-success my-3">
            <font-awesome-icon icon="plus" /> Nuevo País
        </button>
        </h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(pais, index) in paises" :key="pais.pais_codi">
                    <td>{{ index + 1 }}</td>
                    <td>{{ pais.pais_codi }}</td>
                    <td>{{ pais.pais_nomb }}</td>
                    <td>
                        <button @click="editarPais(pais.pais_codi)" class="btn btn-warning mx-1">
                            <font-awesome-icon icon="pencil" /> Editar
                        </button>
                        <button @click="eliminarPais(pais.pais_codi)" class="btn btn-danger mx-1">
                            <font-awesome-icon icon="trash" /> Eliminar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'Paises',
    data() {
        return {
            paises: [],
        };
    },
    methods: {
        async cargarPaises() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/paises');
                this.paises = response.data.paises;
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se pudo cargar el listado de países.',
                });
            }
        },
        nuevoPais() {
            this.$router.push({ name: 'NuevoPais' });
        },
        editarPais(codigo) {
            this.$router.push({ name: 'EditarPais', params: { id: codigo } });
        },
        eliminarPais(codigo) {
            Swal.fire({
                title: `¿Estás seguro de eliminar el país con código ${codigo}?`,
                showCancelButton: true,
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'Cancelar',
                icon: 'warning',
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const response = await axios.delete(`http://127.0.0.1:8000/api/paises/${codigo}`);
                        if (response.data.success) {
                            this.paises = response.data.paises;
                            Swal.fire({
                                icon: 'success',
                                title: 'País eliminado correctamente.',
                                timer: 2000,
                            });
                        }
                    } catch (error) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'No se pudo eliminar el país.',
                        });
                    }
                }
            });
        },
    },
    mounted() {
        this.cargarPaises();
    },
};
</script>

<style scoped>
.container {
    margin-top: 30px;
}
</style>
