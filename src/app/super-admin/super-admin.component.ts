import { FlatTreeControl } from '@angular/cdk/tree';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
// import { NavItem, NavItemNode } from './SideNav';
import { NavItem, NavItemNode } from './sAdminNav';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.scss'],
})
export class SuperAdminComponent implements OnInit, AfterViewInit {
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
        name: 'Super Admin',
        isExpanded: true,
        children: [
          { name: 'Dashboard', url: 'dashboard' },
          { name: 'List of Admin', url: 'list-admin' },
          { name: 'Add Admin', url: 'add-admin' },
        ],
      },
      {
        name: 'DevOps Platform',
        isExpanded: true,
        children: [
          { name: 'Contacts', url: 'add-admin' },
          { name: 'Contacts2', url: 'add-admin' },
        ],
      },
      {
        name: 'Multi Cluster',
        isExpanded: true,
        children: [
          { name: 'Contacts', url: 'add-admin' },
          { name: 'Contacts2', url: 'add-admin' },
        ],
      },

      {
        name: 'Support',
        isExpanded: true,
        children: [
          { name: 'Contacts', url: 'add-admin' },
          { name: 'Contacts2', url: 'add-admin' },
        ],
      },
      {
        name: 'F.A.Q.R',
        isExpanded: true,
        children: [
          { name: 'Contacts', url: 'add-admin' },
          { name: 'Contacts2', url: 'add-admin' },
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
