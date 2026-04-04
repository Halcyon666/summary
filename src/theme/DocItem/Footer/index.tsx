import React, {type ReactNode} from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): ReactNode {
  return (
    <>
      <div style={{ marginTop: '20px', textAlign: 'right', fontSize: '0.9em', opacity: 0.7 }}>
        <span id="busuanzi_container_page_pv" style={{ display: 'none' }}>
          👀 本文阅读量 <span id="busuanzi_value_page_pv"></span> 次
        </span>
      </div>
      <Footer {...props} />
    </>
  );
}
