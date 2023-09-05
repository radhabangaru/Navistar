import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading!: Boolean;
  loginForm = this.form.group({
    username: this.form.control('', Validators.required),
    password: this.form.control('', Validators.required)
  })
  sessionStorage: any | '';
  error?: string;
userData:any;

  constructor(
    private form: FormBuilder,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private service: AuthService

  ) {
    // this.sessionStorage.clear();
  }

  ngOnInit() {
  }
  login() {
    // without authentication
    //   if (this.loginForm.valid) {
    //     this.service.getLoginDetails(this.loginForm.value.username,this.loginForm.value.password).subscribe((response => {
    //     // this.service.getAll().subscribe((response => {
    //       this.sessionStorage.setItem('username', this.loginForm.value.username);
    //       this.sessionStorage.setItem('password', this.loginForm.value.password);
    //       this.toastr.success('Login Sucess');
    //     }));
    //   } else {
    //     this.toastr.warning('Login Sucess');
    //   }
    // }
    if (this.loginForm.valid) {
     console.log(this.loginForm.value.username, this.loginForm.value.password)
      this.service.login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe(
          (result:any) => {
            // debugger
            console.log('res',result)
            this.userData=result;
            localStorage.setItem('token',result.JwtToken)
            this.router.navigate(['login']),
            () => this.error = 'Your not Aurized user to acces !!'
          }
         
        );
    }
  }
}

