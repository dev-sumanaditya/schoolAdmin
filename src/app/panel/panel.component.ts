import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  public user = {
    image: '/assets/dummy/avatar.jpg',
    name: 'Jack Dorsey'
  };

  public navbar = [
    {
      name: 'Dashboard',
      icon: 'fa-th-large',
      url: '/'
    },
    {
      name: 'Admins',
      icon: 'fa-user-secret',
      url: 'admins'
    },
    {
      name: 'Users',
      icon: 'fa-user',
      url: 'users'
    },
    {
      name: 'Organisations',
      icon: 'fa-building',
      url: 'organisation'
    },
  ];


  // options
  public shrink = false;
  public hideAvatarPopover = true;

  @ViewChild('avatar') avatar: ElementRef;

  // angular
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.avatar.nativeElement.contains(event.target)) {
      this.hideAvatarPopover = true;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  public toggleNav() {
    this.shrink = !this.shrink;
  }
  toggleAvatarPopover() {
    this.hideAvatarPopover = !this.hideAvatarPopover;
  }

}
