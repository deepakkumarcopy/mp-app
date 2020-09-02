import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
	},
	{
		path: 'budget-expense',
		loadChildren: () => import('./budget-expense/budget-expense.module').then(m => m.BudgetExpensePageModule)
	},
	{
		path: 'delete-goal',
		loadChildren: () => import('./delete-goal/delete-goal.module').then(m => m.DeleteGoalPageModule)
	},
	{
		path: 'edit-expense',
		loadChildren: () => import('./edit-expense/edit-expense.module').then(m => m.EditExpensePageModule)
	},
	{
		path: 'edit-goal',
		loadChildren: () => import('./edit-goal/edit-goal.module').then(m => m.EditGoalPageModule)
	},
	{
		path: 'goals',
		loadChildren: () => import('./goals/goals.module').then(m => m.GoalsPageModule)
	},
	{
		path: 'set-goals',
		loadChildren: () => import('./set-goals/set-goals.module').then(m => m.SetGoalsPageModule)
	},
	{
		path: 'update-goal',
		loadChildren: () => import('./update-goal/update-goal.module').then(m => m.UpdateGoalPageModule)
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})

export class AppRoutingModule { }