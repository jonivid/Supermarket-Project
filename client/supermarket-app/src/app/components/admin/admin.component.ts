import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(public usersService: UsersService,public stateService: StateService) {}

  ngOnInit(): void {
    
    
  }
  
}
