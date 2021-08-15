import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose, faFolderOpen, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')
  const [htmlcls,setHtmlcls] = useState('none')
  const [csscls,setCsscls] = useState('none')
  const [jscls,setJscls] = useState('none')
  const [open, setOpen] = useState(true)
  const [hopen, sethOpen] = useState(false)
  const [copen, setcOpen] = useState(false)
  const [jopen, setjOpen] = useState(false)

  useEffect(()=>{
    if(hopen){
      setHtmlcls('inherit');
    }
    else{
      setHtmlcls('none');
    }
  
    if(copen){
      setCsscls('inherit');
    }
    else{
      setCsscls('none');
    }
  
    if(jopen){
      setJscls('inherit');
    }
    else{
      setJscls('none');
    }
    if(hopen || copen || jopen){
      setOpen(false);
    }
    else{
      setOpen(true);
    }
  },[hopen,copen,jopen])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 150)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <div style={{backgroundColor:"hsl(225, 6%, 13%)"}}>
    <div style={{height:"9vh",textAlign:"center",color:"white",backgroundColor:"hsl(231, 9%, 15%)",border:"3px solid white",display:"flex"
    ,justifyContent:"space-between",alignItems:"center",width:"100%",padding:"0px 10px"}}><h1 style={{fontStyle:"italic"}}>AryaEditor</h1><h4 style={{cursor:"pointer"}}>Login | Sign-up</h4></div>
    <div className="row">
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}} className="col-12 col-md-2">
          <div style={{backgroundColor:"hsl(231, 9%, 15%)",width:"100%",border:"1px solid white",height:"8%"}}>
            <h3 style={{color:"white",padding:"1px",textAlign:"center"}}>File Explorer</h3>
          </div>
          <div style={{backgroundColor:"hsl(225, 6%, 25%)",color:"white",width:"100%",textAlign:"center"}}>
            <div style={{border:"1px solid white",padding:"10px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              HTML
              <button
              style={{color:hopen? "rgb(224, 66, 66)":"white"}}
              type="button"
              className="expand-collapse-btn"
              onClick={()=>sethOpen(!hopen)}
            >
            <FontAwesomeIcon icon={hopen? faWindowClose:faFolderOpen} />
            </button>
            </div>

            <div style={{border:"1px solid white",padding:"10px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              CSS
              <button
              style={{color:copen? "rgb(224, 66, 66)":"white"}}
              type="button"
              className="expand-collapse-btn"
              onClick={()=>setcOpen(!copen)}
            >
            <FontAwesomeIcon icon={copen? faWindowClose:faFolderOpen} />
            </button>
            </div>

            <div style={{border:"1px solid white",padding:"10px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              JavaScript
              <button
              style={{color:jopen? "rgb(224, 66, 66)":"white"}}
              type="button"
              className="expand-collapse-btn"
              onClick={()=>setjOpen(!jopen)}
            >
            <FontAwesomeIcon icon={jopen? faWindowClose:faFolderOpen} />
            </button>
            </div>
          </div>

          <div style={{backgroundColor:"hsl(231, 9%, 15%)",width:"100%",border:"1px solid white",marginTop:"10px",height:"11%",fontsize:"100%"}}>
            <h3 style={{color:"white",padding:"1px",textAlign:"center"}}>Developer</h3>
          </div>

          <div style={{backgroundColor:"hsl(225, 6%, 25%)",color:"white",width:"100%",textAlign:"center",height:"11%",fontsize:"100%"}}>
          <div style={{border:"1px solid white",padding:"10px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              Aryaman Singh
            </div>
          </div>

          <div style={{backgroundColor:"hsl(231, 9%, 15%)",width:"100%",border:"1px solid white",marginTop:"10px",height:"11%",fontsize:"100%"}}>
            <h3 style={{color:"white",padding:"1px",textAlign:"center"}}>Contact</h3>
          </div>

          <div style={{backgroundColor:"hsl(225, 6%, 25%)",color:"white",width:"100%",textAlign:"center",height:"11%",fontsize:"100%"}}>
          <div className="mail" style={{border:"1px solid white",padding:"10px",display:"flex",justifyContent:"space-between",alignItems:"center",overflowY:"hidden"}}>
              <span style={{fontSize:"13px"}}>aryaman.singh2142@gmail.com</span>
            </div>
          </div>

          <div style={{backgroundColor:"hsl(231, 9%, 15%)",width:"100%",border:"1px solid white",marginTop:"10px",height:"11%",fontsize:"100%"}}>
            <h3 style={{color:"white",padding:"1px",textAlign:"center"}}>Follow At:</h3>
          </div>

          <div style={{backgroundColor:"hsl(225, 6%, 25%)",color:"white",width:"100%",textAlign:"center",height:"11%",fontsize:"100%"}}>
          <div className="mail" style={{border:"1px solid white",padding:"10px",display:"flex",justifyContent:"space-between",alignItems:"center",overflowY:"hidden"}}>
              Github
              <button
              type="button"
              className="expand-collapse-btn"
            >
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            </button>
            </div>
          </div>

          <div style={{backgroundColor:"hsl(225, 6%, 25%)",color:"white",width:"100%",textAlign:"center",height:"11%",fontsize:"100%"}}>
          <div className="mail" style={{border:"1px solid white",padding:"10px",display:"flex",justifyContent:"space-between",alignItems:"center",overflowY:"hidden"}}>
              Instagram
              <button
              type="button"
              className="expand-collapse-btn"
            >
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            </button>
            </div>
          </div>

          <div style={{backgroundColor:"hsl(225, 6%, 25%)",color:"white",width:"100%",textAlign:"center",height:"11%",fontsize:"100%"}}>
          <div className="mail" style={{border:"1px solid white",padding:"10px",display:"flex",justifyContent:"space-between",alignItems:"center",overflowY:"hidden"}}>
              LinkedIn
              <button
              type="button"
              className="expand-collapse-btn"
            >
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            </button>
            </div>
          </div>

        </div>


        <div style={{borderLeft:"2px solid white",borderRight: "2px solid white"}} className="col-12 col-md-6">
        <div className="top-pane">
        <div style={{display:open?"flex":"none",justifyContent:"center",alignItems:"center",color:"white",flexDirection:"column",height:"100%"}}>
          <h2>Code Editor</h2>
          <h4>Select Files from explorer to open here</h4>
        </div>
          <Editor
            language="xml"
            displayName="HTML"
            value={html}
            onChange={setHtml}
            visible={htmlcls}
          />
          <Editor
            language="css"
            displayName="CSS"
            value={css}
            onChange={setCss}
            visible={csscls}
          />
          <Editor
            language="javascript"
            displayName="JS"
            value={js}
            onChange={setJs}
            visible={jscls}
          />
        </div>
        </div>
        <div className="col-12 col-md-4">
        <div className="smartphone">
          <div className="content">
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
            tabSize="0"
          />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App;
