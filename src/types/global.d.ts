// 路由props
declare type Recordable<T extends any = any> = Record<string, T>;

//下标键值对
declare type Indexable<T extends any = any> = {
  [key: string]: T;
};
