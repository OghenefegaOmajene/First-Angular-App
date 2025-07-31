import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  logo: string = "Artifact X"
  link1: string = "Home"
  link2: string = "About"
  link3: string = "Contact"
  logoPath: string = '../../../assets/images/logo.png'
  // firstName: string = "Angular Tutorial";

  // version: number = 18;

  // isActive : boolean = false;

  // currentDate: Date = new Date();

  // inputType: string = "radio"; 
}
