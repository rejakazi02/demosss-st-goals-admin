

import { FlatTreeControl } from '@angular/cdk/tree';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
// import { NavItem, NavItemNode } from './SideNav';
import { NavItem, NavItemNode } from './SideNav';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
// export class SidebarComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

export class SidebarComponent implements OnInit,AfterViewInit {
  @ViewChild('tree') tree: any;
  navItems: NavItem[] = [];
  // Cloud Provider
  cloudProviderOptions!: any[];
  selectedCloudProvider!: string;

  constructor() {}
  private _transformer = (node: NavItem, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      url: node.url,
      icon: node.icon,
      level,
    };
  };
  // nav
  treeControl = new FlatTreeControl<NavItemNode>(
    (node) => node.level,
    (node) => node.expandable
  );
  treeFlattener: any = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: NavItemNode) => node.expandable;

  ngOnInit(): void {
    this.navItems = [
      {
        name: 'Concepts',
        isExpanded: true,
        children: [
          {
            name: 'Kubernetes',
            isExpanded: true,
            children: [
              { name: 'Containerization', url: 'containerization' },
              { name: 'Kubernetes', url: 'kubernetes' },
              // { name: 'Node', url: 'node' },
              // { name: 'Cluster', url: 'cluster' },
            ],
          },
          { name: 'Multi Cloud', url: 'multi-cloud' },
          {
            name: 'Klovercloud Components ',
            isExpanded: true,
            children: [
              { name: 'CI/CD', url: 'ci-cd' },
              { name: 'Databases', url: 'databases' },
              { name: 'Caches', url: 'caches' },
              { name: 'Queue', url: 'queue' },
              { name: 'Lighthouse', url: 'lighthouse' },
              { name: 'Logging and Monitoring', url: 'logging-and-monitoring' },
            ],
          },
        ],
      },
      {
        name: 'DevOps Platform',
        isExpanded: true,
        children: [

          {name: 'Getting Started', url: 'getting-started'},
          {name: 'Application Creation', url: 'application-creation'},
          {
            name: 'Existing Application On-boarding',
            url: 'existing-application',
          },
          {name: 'Advance Settings', isExpanded: true,  url: 'application-creation',
            children: [
              { name: 'Build Arguments', url: 'build-arguments' },
              { name: 'Environments', url: 'environments' },
              { name: 'Secrets', url: 'secrets' },
              { name: 'Application Resources', url: 'application-resources' },
              { name: 'Terminal', url: 'terminal' },
              { name: 'Application Configurations', url: 'application-configurations' },
              { name: 'Pipeline Configurations', url: 'pipeline-configurations' },
              { name: 'External Endpoints ', url: 'external-endpoints' },
            ],},
        ],
      },
      {
        name: 'Multi Cluster',
        isExpanded: true,
        children: [
          {
            name: 'AWS',
            isExpanded: true,
            children: [{name: 'Provider Configuration', url: 'provider-aws'},
              {name: 'Cluster Creation', url: 'create-cluster-aws'},],
          },
          {
            name: 'DIGITAL OCEAN',
            isExpanded: true,
            children: [{name: 'Coming Soon...', url: 'provider-digital-ocean'},
            ],
          },
          {
            name: 'GCP',
            isExpanded: true,
            children: [{name: 'Coming Soon...', url: 'gcp'}],
          },
        ],
      },

      {
        name: 'Support',
        isExpanded: true,
        children: [{name: 'Contacts', url: '/students'},],
      },
      {
        name: 'F.A.Q',
        isExpanded: true,
        children: [
          {
            name: 'Business Benefits of KloverClouds Central Logging System',
            url: 'faq-central-logging-system',
          },
          {
            name: 'Business Impact of Not Having Metrics-logs Aggregation and Monitoring Platform Like KloverCloud',
            url: 'faq-metrics-logs-aggregation',
          },
        ],
      },
    ];



    this.dataSource.data = this.navItems;
  }
  ngAfterViewInit() {
    const someNode = this.tree.treeModel.getNodeById('someId');
    someNode.expand();

    const firstRoot = this.tree.treeModel.roots[0];
    firstRoot.setActiveAndVisible();
  }
}
