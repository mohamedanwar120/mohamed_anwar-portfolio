import { Routes } from '@angular/router';



export const routes: Routes = [
    {
        path:'home',
        loadComponent:()=>import('./features/home/pages/home-page/home-page.component').then(m=>m.HomePageComponent),
          
    },


   
    {
        path:'projects',
        loadComponent:()=>import('./features/projects/pages/projects-page/projects-page.component').then(m=>m.ProjectsPageComponent)
    },
    {
        path:'education',
        loadComponent:()=>import('./features/education/pages/education-page/education-page.component').then(m=>m.EducationPageComponent)
    },
   
    {
        path:'experience',
        loadComponent:()=>import('./features/experience/pages/experience-page/experience-page.component').then(m=>m.ExperiencePageComponent)
    },
    {
        path: '**',
        redirectTo: 'home'
    },
];
