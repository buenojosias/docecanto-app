import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from './auth/authenticated.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthenticatedGuard]
  },
  {
    path: 'eventos/:id',
    loadChildren: () => import('./events/events-show/events-show.module').then( m => m.EventsShowPageModule)
  },
  {
    path: 'musicas/:number',
    loadChildren: () => import('./songs/songs-show/songs-show.module').then( m => m.SongsShowPageModule)
  },
  {
    path: 'auth/login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'aniversariantes',
    loadChildren: () => import('./births/births.module').then( m => m.BirthsPageModule)
  },
  {
    path: 'u/senha',
    loadChildren: () => import('./auth/password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: '**',
    redirectTo: ''
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
