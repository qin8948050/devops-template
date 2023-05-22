import PageRenderer from '../Amis';
import {
  FooterToolbar,
  ModalForm,
  PageContainer,
  ProDescriptions,
  ProFormText,
  ProFormTextArea,
  ProTable,
} from '@ant-design/pro-components';
import React, { Component } from 'react';
import { RouteChildrenProps } from 'react-router'
import {getPage} from '@/services/basic/api';
import { message } from 'antd';

type Props = {
  match: {
    params:any;
  }
}

type State = {
  content?:any;
  pageId:string;
}

export default class index extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state={
      pageId:props.match.params?.pageId,
    }
  }

  private fetchAndSetPage=async()=>{
    try {
      const {pageId}=this.state;
      const result=await getPage({pageId});
      this.setState({content:result.data})
    } catch(error) {
      message.error("获取页面失败!");
    }
  }

  componentDidMount(): void {
      this.fetchAndSetPage();
  }

  public render() {
    const {content}=this.state
    return (
    <PageContainer>
      {content && <PageRenderer body={content}></PageRenderer>}
    </PageContainer>
    );
  }
}

