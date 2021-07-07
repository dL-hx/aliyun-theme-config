import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Tag, Space } from 'antd';
import ProTable from '@ant-design/pro-table';
import request from 'umi-request';
import { Link, SelectLang, useIntl, connect, FormattedMessage } from 'umi';

const columns = [
  {
    title: '标题',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    tip: '标题过长会自动收缩',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    width: '30%',
    render:(_)=><Link to={'/list/detail'}>-</Link>
  },
  {
    title: '状态',
    dataIndex: 'state',
    filters: true,
    onFilter: true,
    valueType: 'select',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      open: {
        text: '未解决',
        status: 'Error',
      },
      closed: {
        text: '已解决',
        status: 'Success',
        disabled: true,
      },
      processing: {
        text: '解决中',
        status: 'Processing',
      },
    },
  },
  {
    title: '标签',
    dataIndex: 'labels',
    search: false,
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_);
    },
    render: (_, record) => (<Space>
      {record.labels.map(({ name, color }) => (<Tag color={color} key={name}>
        {name}
      </Tag>))}
    </Space>),
  },
  {
    title: '创建时间',
    key: 'showTime',
    dataIndex: 'created_at',
    valueType: 'date',
    hideInSearch: true,
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
  },
];
export default () => {
  return (<ProTable columns={columns} request={async (params = {}) => request('https://proapi.azurewebsites.net/github/issues', {
    params,
  })} rowKey="id" search={{
    labelWidth: 'auto',
  }} form={{
    ignoreRules: false,
  }} pagination={{
    pageSize: 5,
  }} dateFormatter="string" headerTitle="高级表格" toolBarRender={() => [
    <Button key="button" icon={<PlusOutlined />} type="primary">
      新建
    </Button>,
  ]}/>);
};
