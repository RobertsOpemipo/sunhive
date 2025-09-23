import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinCard } from "../../components/dashboard-components/coin-card/coin-card";
import { EnergyFlowChart } from "../../components/dashboard-components/energy-flow-chart/energy-flow-chart";
import { VillageComparison } from "../../components/dashboard-components/village-comparison/village-comparison";
import { DoubleChart } from "../../components/dashboard-components/double-chart/double-chart";
import { GraphGroup } from "../../components/dashboard-components/graph-group/graph-group";
import { AlertGroup } from "../../components/dashboard-components/alert-group/alert-group";
import { Navbar } from '../../components/navbar/navbar';
import { Sidebar } from '../../components/sidebar/sidebar';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    CoinCard, 
    EnergyFlowChart, 
    VillageComparison, 
    DoubleChart, 
    GraphGroup, 
    AlertGroup, 
    Navbar, 
    Sidebar
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
