import { Component, OnInit } from '@angular/core';
import { faHome,faCouch,faPhone,faAddressCard, faSortAmountUpAlt, faSignInAlt, faSign,faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  faHome= faHome;
  faCouch = faCouch;
  faPhone =faPhone;
faAddressCard= faAddressCard;
faSortAmountUpAlt = faSortAmountUpAlt;
faSignInAlt = faSignInAlt;
faUsers = faUsers;

  constructor() { }

  ngOnInit(): void {
  }

}
