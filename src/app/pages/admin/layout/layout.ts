import { Component } from '@angular/core';
//import { RouterOutlet } from "../../../../../node_modules/@angular/router/types/_router_module-chunk";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
