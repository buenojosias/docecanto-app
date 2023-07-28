import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'musicas',
        loadChildren: () => import('../songs/songs-index/songs-index.module').then(m => m.SongsIndexPageModule)
      },
      {
        path: 'musicas/categorias/:id',
        loadChildren: () => import('../songs/songs-list/songs-list.module').then(m => m.SongsListPageModule)
      },
      {
        path: 'musicas/favoritas',
        loadChildren: () => import('../songs/songs-favorite/songs-favorite.module').then(m => m.SongsFavoritePageModule)
      },
      {
        path: 'musicas/busca',
        loadChildren: () => import('../songs/songs-search/songs-search.module').then(m => m.SongsSearchPageModule)
      },
      {
        path: 'eventos',
        loadChildren: () => import('../events/events-list/events-list.module').then(m => m.EventsListPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
