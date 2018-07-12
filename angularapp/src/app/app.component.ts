import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';

	lugares:any = [
		{active: true, nombre: 'floreria'},
		{active: false, nombre: 'veterinaria'},
		{active: true, nombre: 'hospital'}
	];
	lat:number = -33.4080968;
	lng:number = -70.6075464;
  constructor() {
  	setTimeout(() => {
  		this.listo = true;
  	}, 3000 )
  }

  hacerAlgo() {
  	alert('haciendo algo')
  }
}
