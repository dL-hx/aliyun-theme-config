import React, {useEffect, useState, createRef} from 'react';
import ProCard from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';
import Right1 from "@/pages/Right1";

export default () => {

  return (
    <ProCard
      title="左右分栏带标题"
      extra="2019年9月28日"
      bordered
      headerBordered
      bodyStyle={{padding:0}}
    >
      <ProCard title="左侧详情" colSpan={'20%'}>
        <div style={{ minHeight: 360 }}>左侧内容</div>
      </ProCard>
      <ProCard title="流量占用情况"   colSpan={'80%'}>
        <div style={{ minHeight: 360,}}>
          {/*  右侧内容*/}
          <Right1 />
        </div>
      </ProCard>
    </ProCard>
  );
};
