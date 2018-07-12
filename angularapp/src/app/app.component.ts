import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';

	lugares:any = [
		{cercania: 3, distancia: 1, active: true, nombre: 'floreria'},
		{cercania: 2, distancia: 1, active: false, nombre: 'veterinaria'},
		{cercania: 1, distancia: 1, active: true, nombre: 'hospital'}
	];
	lat:number = -33.4080968;
	lng:number = -70.6075464;
	listo = false
	
  constructor() {
  	setTimeout(() => {
  		this.listo = true;
  	}, 3000 )
  }

  hacerAlgo() {
  	alert('haciendo algo')
  }
}
