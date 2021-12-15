import { useState } from 'react';
import styles from './index.less';
// @ts-ignore
import { marked } from 'marked';
import { ApplyPluginsType } from '@umijs/renderer-react/node_modules/@umijs/runtime';
import { CSSProperties } from 'react';
import { useModel, history } from 'umi';
// @ts-ignore
import hljs from 'highlight.js';
import { useEffect } from 'react';
import Helmet from 'react-helmet';
import 'highlight.js/styles/vs.css';
interface TextLine {
  textline: string;
  styles?: CSSProperties;
}
export default () => {
  const [visible, setVisible] = useState(false);
  const [texts, setTexts] = useState('');
  const { text, edit } = useModel('useEditor', (model) => ({ text: model.text, edit: model.edit }));
  hljs.initHighlightingOnLoad();
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    langPrefix: 'js',
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });
  const handleChange = (e: any) => {
    const str = e.target.value;
    const html = marked.parse(str);
    setTexts(str);
    edit(html);
    // setData({
    //     __html: html
    // })
  };
  const renderText: TextLine[] = [
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
      styles: {
        position: 'relative',
      },
    },
    {
      textline:
        'joweiafjoewajfioajfoeajfoejaofijewojoweiafjoewajfioajfoeajfoejaofijewojoweiafjoewajfioajfoeajfoejaofijewojoweiafjoewajfioajfoeajfoejaofijewojoweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
    {
      textline: 'joweiafjoewajfioajfoeajfoejaofijewo',
    },
  ];
  return (
    <div className={styles.inputContainer}>
      <Helmet title={`编辑器`} />
      <div className={styles.inputArea}>
        <div
          className={styles['codeMirror-code']}
          id="codeMirrorArea"
          // onClick={handlerEvent}
        >
          {/* <div className={styles['codeMirror-relative']}>
                        {
                            renderText.map(item=><pre className={styles['codeMirror-line']}>
                            <span style={item.styles}>{item.textline} </span>
                        </pre>)
                        }
                </div> */}
          <textarea name="" id={styles['codeMirror-relative']} onChange={handleChange}></textarea>
          {/* <div contentEditable="true" id={styles['codeMirror-relative']} onChange={handleChange}></div> */}
          <pre>
            <code
            // dangerouslySetInnerHTML={{__html:text}}
            >
              {texts}
            </code>
          </pre>
          {/* <div dangerouslySetInnerHTML={{__html:text}}>
                    </div> */}
        </div>
        {/* {true && <div className={styles.cursor}></div>} */}
      </div>
    </div>
  );
};
