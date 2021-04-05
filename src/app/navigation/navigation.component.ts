import { Component, OnInit } from '@angular/core';
import { faHome,faCouch,faPhone,faAddressCard, faSortAmountUpAlt } from '@fortawesome/free-solid-svg-icons';

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

  constructor() { }

  ngOnInit(): void {
  }

}
