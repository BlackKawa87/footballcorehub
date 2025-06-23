import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../pages/Home'
import PaginaCadastro from '../pages/PaginaCadastro'
import DashboardJogador from '../pages/DashboardJogador'
import DashboardClube from '../pages/DashboardClube'
import DashboardEmpresario from '../pages/DashboardEmpresario'
import TransferLab from '../pages/TransferLab'
import ScoutPage from '../pages/ScoutPage'

const routes = [
  { path: '/', element: <Home /> },
  { path: '/cadastro', element: <PaginaCadastro /> },
  { path: '/dashboard-jogador', element: <DashboardJogador /> },
  { path: '/dashboard-clube', element: <DashboardClube /> },
  { path: '/dashboard-empresario', element: <DashboardEmpresario /> },
  { path: '/transferlab', element: <TransferLab /> },
  { path: '/scout', element: <ScoutPage /> },
]

const AppRoutes = () => useRoutes(routes)

export default AppRoutes
