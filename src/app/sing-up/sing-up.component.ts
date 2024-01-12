import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css'],
})
export class SingUpComponent implements OnInit {
  public file: any | File;
  constructor(private service: UserServiceService) {}

  ngOnInit(): void {}

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
