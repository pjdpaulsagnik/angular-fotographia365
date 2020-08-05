import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../../shared/user-details.service';
import { ProfileUserDetails } from 'src/shared/tokenserviceauthentication.service';
import { UserAuthentication } from 'src/shared/user-authentication.service';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {

  constructor(public userObj: UserDetails, public userAuthObj: UserAuthentication, private setData : ProfileUserDetails) {
    console.log(this.userObj);
   }

  ngOnInit(): void {
    this.setData.getCurrentLoggedUserDetails(this.setData.username).subscribe( response => {
      console.log(response);
      this.setData.setidToSession(response['userID']);
    }, err => {
      console.log(err);
    })

    this.userObj.fetchAllUsersPost().subscribe( res => {
      console.log(res);
      this.userObj.allUserPosts = res;
    }, err => {
      console.log(err);
    }
    )
  }
}
