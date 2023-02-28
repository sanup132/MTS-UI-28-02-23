import { Component } from '@angular/core';
import { UserAccountService } from 'src/app/services/user-account.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

  allUserAccounts: any;

  constructor(private userAccountService: UserAccountService) {}

  ngOnInit(): void {
    this.getAllUserAccounts()
  }


  getAllUserAccounts() {
    this.userAccountService.getAllUserAccounts().subscribe(res => {
      this.allUserAccounts = res;
    })
  }
}
