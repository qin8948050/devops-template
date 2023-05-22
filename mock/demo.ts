import { Request, Response } from 'express';
import { MenuDataItem } from '@ant-design/pro-layout';

const getDemoList = (req: Request, res: Response) => {
  res.json({
    status: 0,
    msg: '获取成功',
    data: [
      {
        name: 'a',
        id: 1,
      },
      {
        name: 'b',
        id: 2,
      },
    ],
  });
};

const getPageJson=(req:Request,res:Response)=> {
  const body = {
    type: 'page',
    title: '查询',
    body: [
      {
        type: 'crud',
        syncLocation: false,
        api: {
          method: 'get',
          url: '/api/demoList',
        },
        columns: [
          {
            name: 'id',
            label: 'ID',
            type: 'text',
            id: 'u:62111751e17f',
          },
          {
            name: 'name',
            label: '名称',
            type: 'text',
            id: 'u:4837a9622e45',
            placeholder: '-',
          },
        ],
        bulkActions: [],
        itemActions: [],
        id: 'u:cefb69bf9d1d',
        perPageAvailable: [10],
        messages: {},
        initFetch: true,
      },
    ],
    id: 'u:6300d7419b45',
  };
  res.json({
    status: 0,
    msg: '获取成功',
    data: body,
  });
}

const getMenuData =(req: Request, res: Response) => {
  const menus=[
    {
      path: '/user',
      layout: false,
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/Login',
        },
        {
          component: './404',
        },
      ],
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: './Welcome',
    },
    {
      path: '/admin',
      name: 'admin',
      access: 'canAdmin',
      routes: [
        {
          path: '/admin/sub-page',
          name: 'sub-page',
          icon: 'smile',
          component: './Welcome',
        },
        {
          component: './404',
        },
      ],
    },
    {
      name: 'list.table-list',
      path: '/list',
      component: './TableList',
    },
    {
      path: '/demo',
      name: 'demo',
      routes: [
        {
          path: '/demo/1',
          name: 'demo-sub-1',
          icon: 'smile',
          component: './Demo',
        },
        {
          path: '/demo/2',
          name: 'demo-sub-2',
          icon: 'smile',
          component: './Demo',
        },
        {
          component: './404',
        },
      ],
    },
    {
      path: '/',
      redirect: '/welcome',
    },
    {
      component: './404',
    },
  ]
  res.json({
    status: 0,
    msg: '获取成功',
    data: menus,
  });
}
export default {
  'GET /api/demoList': getDemoList,
  'GET /api/menuData': getMenuData,
  'GET /api/page': getPageJson,
};

