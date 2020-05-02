import Home from 'pages/Home-old'
import Partners from 'pages/Partners'
import Galleries from 'pages/Galleries'
import AboutUS from 'pages/AboutUs'

export default [
    {
        path: '/',
        name: 'Home',
        component: Home,
        exact: true,
    },
    {
        path: '/about-us',
        name: 'About Us',
        component: AboutUS,
        exact: true,
    },
    {
        path: '/benefit',
        name: 'Benefit',
        component: Home,
        exact: true,
    },
    {
        path: '/partners',
        name: 'Partners',
        component: Partners,
        exact: true,
    },
    {
        path: '/galleries',
        name: 'Galleries',
        component: Galleries,
        exact: true,
    },
]
