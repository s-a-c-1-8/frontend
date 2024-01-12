import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  constructor(private service: UserServiceService) {}

  ngOnInit(): void {}

  onLogin(form: NgForm) {
    // if (form.invalid) {
    //   console.log('form.invalid');

    //   return;
    // }
    console.log(form);
    const authData = {
      email: form.value.email,
      password: form.value.password,
    };
    console.log(authData);
    this.service.login(authData).subscribe(
      (response) => {
        form.reset({});
        // this.router.navigate(['']);
      },
      (error): void => {}
    );
  }
}
