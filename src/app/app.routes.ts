import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Blog } from './blog/blog';
import { Portfolio } from './portfolio/portfolio';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'blog',
        component: Blog
    },
    {
        path: 'Portfolio',
        component: Portfolio
    }
];
