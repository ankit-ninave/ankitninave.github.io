import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  standalone:true,
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {

    public l_gmail:string = 'ankitninave1@gmail.com'
   lFN_ConfirmDownload() {
    console.warn('fdsff');
    const confirmed = confirm("Do you want to download the resume?");
    if (confirmed) {
      window.open("assets/Ankit_Ninave_AngularDeveloper.pdf", "_blank");
    }
  }

}
