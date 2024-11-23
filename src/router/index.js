import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import Comunas from '../views/Comunas.vue'
import NewComuna from '../components/Comuna/NewComuna.vue'
import EditarComuna from '../components/Comuna/EditarComuna.vue'
import Municipios from '../views/Municipios.vue'
import EditarMunicipio from '../components/Municipio/EditarMunicipio.vue'
import NewMunicipio from '../components/Municipio/NewMunicipio.vue'
import Departamentos from '../views/Departamentos.vue'
import NewDepartamento from '../components/Departamento/NewDepartamento.vue'
import EditarDepartamento from '../components/Departamento/EditarDepartamento.vue'
import Paises from '../views/Paises.vue'
import NewPais from '../components/Pais/NewPais.vue'
import EditarPais from '../components/Pais/EditarPais.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/comunas',
    name: 'Comunas',
    component: Comunas
  },
  {
    path: '/editar-comuna/:id',
    name: 'EditarComuna',
    component: EditarComuna
  },
  {
    path: '/add-comuna/',
    name: 'NewComuna',
    component: NewComuna
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/municipios',
    name: 'Municipios',
    component: Municipios
  },
  {
    path: '/municipios/nuevo',
    name: 'NuevoMunicipio',
    component: NewMunicipio,
  },
  {
    path: '/municipios/editar/:id',
    name: 'EditarMunicipio',
    component: EditarMunicipio,
  },
  {
    path: '/departamentos',
    name: 'Departamentos',
    component: Departamentos
  },
  {
    path: '/departamentos/nuevo',
    name: 'NuevoDepartamento',
    component: NewDepartamento,
  },
  {
    path: '/departamentos/editar/:id',
    name: 'EditarDepartamento',
    component: EditarDepartamento,
  },
  {
    path: '/paises',
    name: 'Paises',
    component: Paises
  },
  {
    path: '/paises/nuevo',
    name: 'NuevoPais',
    component: NewPais,
  },
  {
    path: '/paises/editar/:id',
    name: 'EditarPais',
    component: EditarPais,
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
