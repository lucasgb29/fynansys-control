import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EntriesComponent } from './pages/entries/entries.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { CategoriesComponent } from './pages/categories/categories.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'entries', component: EntriesComponent
  },
  {
    path: 'reports', component: ReportsComponent
  },
  {
    path: 'categories', component: CategoriesComponent
  }


];
