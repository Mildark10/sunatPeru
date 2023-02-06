import { Component, OnInit } from '@angular/core';
import { SunatService } from 'src/app/services/sunat.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscar-ruc',
  templateUrl: './buscar-ruc.component.html',
  styleUrls: ['./buscar-ruc.component.css']
})
export class BuscarRucComponent implements OnInit {

  public empresa: any;
  // Declaramos una variable del servicio importado
  constructor(
    private sSunat: SunatService
  ) { }
  ngOnInit(): void { }

  // Creamos metodo para ejecutar api
  buscarRuc(ruc: any) {
    this.sSunat.buscarRuc(ruc).subscribe(r => {
      console.log(this.sSunat);

      if (!r.success) {
        Swal.fire({
          title: r.message,
          text: 'Numero RUC no ingresado o es incorrecto',
          icon: 'error',
        });
        this.empresa.razonSocial = "";
      }
      else {
        this.empresa = r.result;
      }
    });
  }


}
