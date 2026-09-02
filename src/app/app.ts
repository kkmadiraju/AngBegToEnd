import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoShellModule } from './architecture-demo/demo-shell/demo-shell-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DemoShellModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
