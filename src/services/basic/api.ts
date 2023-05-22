import { request } from 'umi';
// import { MenuDataItem } from '@ant-design/pro-layout';

/** 获取菜单 /api/login/account */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/api/login/account', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}


/** 获取公共菜单 /api/getMenuData */
export async function getMenuData() {
  return request<API.RespType>('/api/menuData', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

export  async function getPage(  params: {
  // query
  pageId?:string;
}) {
  return request<API.RespType>('/api/page', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    }
  });
}