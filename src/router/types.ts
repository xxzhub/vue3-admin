import type { RouteRecordRaw } from 'vue-router';
import type {Component} from '@/components/types' // 组件类型
import {RoleEnum} from '@/enums/roleEnum'

// 路由META接口配置

export interface RouteMeta {
  // 路由title 
  title: string;
  //图标
  icon?: string;
  //是否忽略权限,只在权限模式为role有效
  openAuth?: boolean;
  // 可以访问的角色
  roles?:RoleEnum[];
  //是否开启keepalive缓存
  openKeepAlive?:boolean;
  //内嵌iframe地址
  frameSrc?:string;
  //是否隐藏在面包屑上显示
  hideBreadcrumb?:boolean;
  //是否固定标签
  affix?:boolean;
  //当前激活菜单
  currentAvtiveMenu?:boolean;
  //当前路由不在菜单显示
  hideMenu?:boolean;
  //当前路由不在标签页显示
  hideTab?:boolean;
}

//路由匹配接口
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  //路由名称
  name:string;
  //路由信息
  meta:RouteMeta;
  //组件
  component?: Component | string;
  //组件列表
  components?: Component;
  //子组件
  children?:AppRouteRecordRaw[];
  //属性参数
  props?: Recordable;
  //路由路径
  fullPath?:string;
}

//标签接口
export interface MenuTag {
  type?: 'primary' | 'error' | 'warn' | 'success';
  content?:string;
  dot?:string;
}

//菜单接口
export interface Menu {
  name: string;

  icon?: string;

  path: string;

  disabled?: boolean;

  children?: Menu[];

  orderNo?: number;

  roles?: RoleEnum[];

  meta?: Partial<RouteMeta>;

  tag?: MenuTag;
}

export interface MenuModule {
  orderNo?: number;
  menu: Menu;
}


export type AppRouteModule = AppRouteRecordRaw;