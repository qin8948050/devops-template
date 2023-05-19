import * as React from 'react';
import { render as renderAmis, ToastComponent, AlertComponent } from 'amis';
import { alert, confirm } from 'amis/lib/components/Alert';
import { toast } from 'amis/lib/components/Toast';
import axios from 'axios';
import '../../node_modules/amis/lib/themes/default.css';
import '../../node_modules/amis/lib/themes/cxd.css';

export default class PageRenderer extends React.Component<any, any> {
  render() {
    const { body } = this.props;
    let amisScoped;
    let theme = 'default';
    return (
      <div>
        {renderAmis(
          body,
          {},
          {
            // 下面三个接口必须实现
            fetcher: ({
              url, // 接口地址
              method, // 请求方法 get、post、put、delete
              data, // 请求数据
              responseType,
              config, // 其他配置
              headers, // 请求头
            }: any) => {
              config = config || {};
              config.withCredentials = true;
              responseType && (config.responseType = responseType);

              if (config.cancelExecutor) {
                config.cancelToken = new (axios as any).CancelToken(config.cancelExecutor);
              }

              config.headers = headers || {};

              if (method !== 'post' && method !== 'put' && method !== 'patch') {
                if (data) {
                  config.params = data;
                }

                return (axios as any)[method](url, config);
              } else if (data && data instanceof FormData) {
                config.headers = config.headers || {};
                config.headers['Content-Type'] = 'multipart/form-data';
              } else if (
                data &&
                typeof data !== 'string' &&
                !(data instanceof Blob) &&
                !(data instanceof ArrayBuffer)
              ) {
                data = JSON.stringify(data);
                config.headers = config.headers || {};
                config.headers['Content-Type'] = 'application/json';
              }

              return (axios as any)[method](url, data, config);
            },
            isCancel: (value: any) => (axios as any).isCancel(value),
            copy: (content) => {
              copy(content);
              toast.success('内容已复制到粘贴板');
            },
            theme,
          },
        )}
      </div>
    );
  }
}
