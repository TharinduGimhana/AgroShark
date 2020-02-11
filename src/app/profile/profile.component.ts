import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, AngularFireDatabase } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name: any;
  email :any;
  state: string = '';

  public members: FirebaseListObservable<any[]>;
 
  constructor(public af: AngularFire, private router: Router, formBuilder: FormBuilder , db: AngularFireDatabase) {
    this.members = db.list('/members');
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
        this.email =auth;

      }
    });

 

  }

//   form = new FormGroup({
//     firstName : new FormControl ('')
//   })

//   myGroup = new FormGroup({
//     fullName: new FormControl(),
//     mobileNo:new FormControl()
//  });

  // onSubmit() {
 
  //   console.log(this.name)
  //   this.members.push({
  //     UserId:this.name.uid,
    
  //     email:this.email.auth.email, 
  //     name:this.name.auth.displayName,

  //     ProfileDetails:this.myGroup.value
   
  //     })
  // }

  // logout() {
  //   this.af.auth.logout();
  //   this.router.navigateByUrl('/login');
  // }


  ngOnInit() {
  }
}

export interface members {

  email: string
  firstname :string

}