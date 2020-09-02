import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GoalService } from '../services/goal.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-delete-goal',
	templateUrl: './delete-goal.page.html',
	styleUrls: ['./delete-goal.page.scss'],
})

export class DeleteGoalPage implements OnInit {

	myGoals: FormGroup;
	public errorMessage: string;

	constructor(
		public navCtrl: NavController,
		public fb: FormBuilder,
		public route: Router,
		public goalProvider: GoalService
	) {
		let myGoals: any;
		if (this.route.getCurrentNavigation().extras.state) {
			myGoals = this.route.getCurrentNavigation().extras.state.item;
		}
		this.myGoals = fb.group({
			'name': myGoals.name,
			'amount': myGoals.amount,
			'startDate': myGoals.startDate,
			'endDate': myGoals.endDate,
			'optional': myGoals.optional
		});
	}

	ngOnInit() {
	}

	//delete of budget
	clickDelete() {
		this.goalProvider.deleteGoal(this.myGoals.value.name);
		this.navCtrl.pop();
	}
}
