import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, AngularFireDatabase } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})
export class FormComponent implements OnInit {
  [x: string]: any;

  name: any;
  email :any;
  state: string = '';

  public missions: FirebaseListObservable<any[]>;
 
  constructor(public af: AngularFire, private router: Router, formBuilder: FormBuilder , db: AngularFireDatabase) {
    this.missions = db.list('/missions');
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
        this.email =auth;

      }
    });

 

  }



  myGroup = new FormGroup({
    area: new FormControl(),
    paddy:new FormControl(),
    fertilize:new FormControl(),
    zone:new FormControl(),
    age:new FormControl(),
    // date:this.activationDate.toDate(),
 });

  onSubmit() {
    // const { currentUser } = firebase.auth();
    // console.log(currentUser);
    // firebase.database().ref(`users/${currentUser.uid}`)
    // .push('firstName');
    console.log(this.name)
    this.missions.push({
      UserId:this.name.uid,
      // name :this.myGroup
      // ImgUrl:this.name.email,
      email:this.email.auth.email, 
      name:this.name.auth.displayName,
      // date:this.activationDate.toDate(),
      // firstName: this.
      FieldData:this.myGroup.value,
    
   
      })
  }

  logout() {
    this.af.auth.logout();
    this.router.navigateByUrl('/login');
  }


  ngOnInit() {
  }
}

export interface members {

  email: string
  firstname :string

}