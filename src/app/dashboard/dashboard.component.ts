import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  show: boolean = false;
  showList: boolean = false;
  public file: any | File;
  users: any;
  constructor(private service: UserServiceService) {}

  ngOnInit(): void {}

  showUserForm() {
    if (this.show == true) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
  showUserList() {
    if (this.showList == true) {
      this.showList = false;
    } else {
      this.showList = true;
      this.service.getUserList().subscribe((response: any) => {
        console.log(response);
        this.showList = true;
        this.users = response.userList;
      });
    }
  }

  onFileChanged(event: any) {
    this.file = event.target.files[0];
  }

  onSignup(form: NgForm) {
    // if (form.invalid) {
    //   console.log('form.invalid');

    //   return;
    // }
    console.log(form);

    const data = new FormData();
    data.append('image', this.file);
    const authData = {
      name: form.value.name,
      email: form.value.email,
      mobile: form.value.mobile,
      amount: form.value.amount,
      gender: form.value.gender,
      password: form.value.password,
    };
    console.log(authData);
    data.append('body', JSON.stringify(authData));
    this.service.registerUser(data).subscribe(
      (response) => {
        form.reset({});
        // this.router.navigate(['']);
      },
      (error): void => {}
    );
  }
}
