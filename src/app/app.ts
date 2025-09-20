import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "./components/sidebar/sidebar";
import { Navbar } from "./components/navbar/navbar";
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Sidebar, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sunhive');
}
