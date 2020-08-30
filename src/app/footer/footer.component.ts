import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @HostBinding('attr.role') role = 'footer'; // no se me ocurrió nada más interesante
  constructor() { }

  ngOnInit(): void {
  }

}
