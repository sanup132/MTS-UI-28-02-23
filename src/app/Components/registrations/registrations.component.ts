import { Component } from '@angular/core';
import { UserAccountService } from 'src/app/services/user-account.service';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.css']
})
export class RegistrationsComponent {
  constructor(private userAccountService:UserAccountService){}


  public user={
    f_name:'',
    l_name:'',
    email:'',
    contact:'',
    password:'',
    bank_account_no:'',
    bank_ifsc:'',
   }
   formSubmit(){
    console.log(this.user);
    if(this.user.f_name=='' || this.user.f_name== null){
       alert('User is required');
    }
   
    this.userAccountService.registerUser(this.user).subscribe(res => {
     // this.data = res;
      //this.router.navigateByUrl('/')
      alert('registered');
    })
  }

}
