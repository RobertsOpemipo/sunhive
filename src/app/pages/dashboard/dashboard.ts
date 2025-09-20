import { Component } from '@angular/core';
import { CoinCard } from "../../components/coin-card/coin-card";
import { EnergyFlowChart } from "../../components/energy-flow-chart/energy-flow-chart";
import { VillageComparison } from "../../components/village-comparison/village-comparison";
import { DoubleChart } from "../../components/double-chart/double-chart";
import { GraphGroup } from "../../components/graph-group/graph-group";
import { AlertGroup } from "../../components/alert-group/alert-group";
import { Navbar } from "../../components/navbar/navbar";
import { Sidebar } from "../../components/sidebar/sidebar";

@Component({
  selector: 'app-dashboard',
  imports: [CoinCard, EnergyFlowChart, VillageComparison, DoubleChart, GraphGroup, AlertGroup, Navbar, Sidebar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
