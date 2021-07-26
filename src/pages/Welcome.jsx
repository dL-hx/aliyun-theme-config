import React, {useEffect, useState, createRef} from 'react';
import ProCard from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';
import Right1 from "@/pages/Right1";

export default () => {

  const [f,setF]=useState(false)
  const onclick = ()=>{
    setF(!f)

  }
  return (
    <div className="parent">
      <div className="left" style={{width:f?0:'20%'}}>
        <div style={{minHeight: 360, display:f?'none': 'block'}}>左侧内容</div>
        <div className='blue' onClick={onclick}>折叠</div>
      </div>
      <div className="right" style={{width:f?'100%':'80%'}}>
        <div style={{minHeight: 360,}}>
          {/*  右侧内容*/}
          <Right1/>
        </div>
      </div>
    </div>)
};
