import PageRenderer from '../Amis';

export default () => {
  const body = {
    type: 'page',
    title: 'demo',
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
  return <PageRenderer body={body}></PageRenderer>;
};
