import React, { useState, useRef } from 'react';
import './App.css';

function DynamicDivs() {
  const [divs, setDivs] = React.useState([{ id: Date.now(), content: 'Editable content' }]);

  const addDiv = () => {
    setDivs([...divs, { id: Date.now(), content: 'New Div' }]);
  };

  const deleteDiv = (id) => {
    setDivs(divs.filter(div => div.id !== id));
  };

  const saveDiv = (id) => {
    setDivs(divs.map(div => div.id === id ? { ...div, content: div.content } : div));
  };

  const handleContentChange = (id, value) => {
    setDivs(divs.map(div => div.id === id ? { ...div, content: value } : div));
  };

  return (
    <div style={{ marginTop: 40 }}>
      <button onClick={addDiv} style={{ marginBottom: 12 }}>Add Div</button>
      {divs.map(div => (
        <div key={div.id} style={{ border: '1px solid #ccc', margin: 8, padding: 8 }}>
          <textarea
            value={div.content}
            onChange={e => handleContentChange(div.id, e.target.value)}
            style={{ width: '80%' }}
          />
          <button onClick={() => deleteDiv(div.id)} style={{ marginLeft: 8 }}>Delete</button>
          <button onClick={() => saveDiv(div.id)} style={{ marginLeft: 8 }}>Save</button>
        </div>
      ))}
    </div>
  );
}

function App() {
  const defaultImage1 = 'https://picsum.photos/600/400?random=1';
  const defaultImage2 = 'https://picsum.photos/600/400?random=2';
  const defaultImage3 = 'https://picsum.photos/600/400?random=3';
  const defaultImage4 = 'https://picsum.photos/600/400?random=4';
  const defaultImage5 = 'https://picsum.photos/600/400?random=5';
  const defaultImage6 = 'https://picsum.photos/600/400?random=6';
  
  const [image1, setImage1] = useState(() => localStorage.getItem('uploadedImage1') || defaultImage1);
  const [image2, setImage2] = useState(() => localStorage.getItem('uploadedImage2') || defaultImage2);
  const [image3, setImage3] = useState(() => localStorage.getItem('uploadedImage3') || defaultImage3);
  const [image4, setImage4] = useState(() => localStorage.getItem('uploadedImage4') || defaultImage4);
  const [image5, setImage5] = useState(() => localStorage.getItem('uploadedImage5') || defaultImage5);
  const [image6, setImage6] = useState(() => localStorage.getItem('uploadedImage6') || defaultImage6);
  const [paragraph1, setParagraph1] = useState(() => localStorage.getItem('savedParagraph1') || 'Edit this paragraph 1.');
  const [paragraph2, setParagraph2] = useState(() => localStorage.getItem('savedParagraph2') || 'Edit this paragraph 2.');
  const [paragraph3, setParagraph3] = useState(() => localStorage.getItem('savedParagraph3') || 'Edit this paragraph 3.');
  const [paragraph4, setParagraph4] = useState(() => localStorage.getItem('savedParagraph4') || 'Edit this paragraph 4.');
  const [paragraph5, setParagraph5] = useState(() => localStorage.getItem('savedParagraph5') || 'Edit this paragraph 5.');
  const [paragraph6, setParagraph6] = useState(() => localStorage.getItem('savedParagraph6') || 'Edit this paragraph 6.');
  const [paragraph7, setParagraph7] = useState(() => localStorage.getItem('savedParagraph7') || 'Edit this paragraph 7.');
  const [paragraph8, setParagraph8] = useState(() => localStorage.getItem('savedParagraph8') || 'Edit this paragraph 8.');
  const [paragraph9, setParagraph9] = useState(() => localStorage.getItem('savedParagraph9') || 'Edit this paragraph 9.');
  const [paragraph10, setParagraph10] = useState(() => localStorage.getItem('savedParagraph10') || 'Edit this paragraph 10.');
  const [paragraph11, setParagraph11] = useState(() => localStorage.getItem('savedParagraph11') || 'Edit this paragraph 11.');
  const [paragraph12, setParagraph12] = useState(() => localStorage.getItem('savedParagraph12') || 'Edit this paragraph 12.');
  const [paragraph13, setParagraph13] = useState(() => localStorage.getItem('savedParagraph13') || 'Edit this paragraph 13.');
  const [paragraph14, setParagraph14] = useState(() => localStorage.getItem('savedParagraph14') || 'Edit this paragraph 14.');
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);
  const fileInputRef3 = useRef(null);
  const fileInputRef4 = useRef(null);
  const fileInputRef5 = useRef(null);
  const fileInputRef6 = useRef(null);

  const handleImageChange = (e, idx) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        switch(idx) {
          case 1: setImage1(result); localStorage.setItem('uploadedImage1', result); break;
          case 2: setImage2(result); localStorage.setItem('uploadedImage2', result); break;
          case 3: setImage3(result); localStorage.setItem('uploadedImage3', result); break;
          case 4: setImage4(result); localStorage.setItem('uploadedImage4', result); break;
          case 5: setImage5(result); localStorage.setItem('uploadedImage5', result); break;
          case 6: setImage6(result); localStorage.setItem('uploadedImage6', result); break;
          default: break;
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleParagraphSave = (idx, value) => {
    localStorage.setItem(`savedParagraph${idx}`, value);
    alert(`Paragraph ${idx} saved!`);
  };

  const handlePreview = () => {
    const htmlContent = `
      <html>
        <head>
          <title>Preview</title>
          <style>
            body { font-family:Arial, Helvetica, sans-serif; }
          </style>
        </head>
        <body>        
          <table align="center" border="0" cellspacing="0" cellpadding="0" bgcolor="#efeefe" style="max-width:602px; border:1px solid #e5e5e5; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
 <tr>
  <td valign="top" width="602">
   <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
    <tr>
     <td valign="top" align="center"><a href="https://www.ieplads.com/mailers/2025_ui/naukri/job-speak-03july/images/Jun25_JobSpeak_Report.pdf" target="_blank">${image1 ? `<img src='${image1}' alt='Naukri Jobspeak' /><br/>` : ''}</a></td>
    </tr>
    <tr>
     <td valign="top" align="center">
      <a href="https://www.ieplads.com/mailers/2025_ui/naukri/job-speak-03july/images/Jun25_JobSpeak_Report.pdf" target="_blank" style="text-decoration:none;">
      <span>
      <table width="96%" align="center" border="0" cellspacing="0" cellpadding="0" style="min-width:280px; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
       <tr>
        <td valign="top" align="center">
         <table align="center" border="0" cellspacing="0" cellpadding="0">
          <tr>
           <td valign="top" width="521">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
             <tr>
              <td valign="top" align="center" style="font-family:Arial, Helvetica, sans-serif; font-size:18px; color:#484848; font-weight:bold; text-transform:uppercase;">${paragraph1}</td>
             </tr>
             <tr>
              <td valign="top" height="16"></td>
             </tr>
             <tr>
              <td valign="top" align="center" style="font-family:Arial, Helvetica, sans-serif; font-size:23px; line-height:32px; color:#0B0969; font-weight:bold;">${paragraph2}</td>
             </tr>
             <tr>
              <td valign="top" height="30"></td>
             </tr>
             <tr>
              <td valign="top">
               <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff" style="border-radius:24px;">
                <tr>
                 <td valign="top" height="21"></td>
                </tr>
                <tr>
                 <td valign="top" align="center">
                  <table width="95%" align="center" border="0" cellspacing="0" cellpadding="0" style="min-width:280px;">
                   <tr>
                    <td valign="top">
                     <table width="90%" align="left" border="0" cellspacing="0" cellpadding="0" style="min-width:280px;" class="fluidTable">
                      <tr>
                       <td width="20"></td>
                       <td valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:17px; line-height:24px; color:#484848; font-weight:normal;">${paragraph3}</td>
                      </tr>
                     </table>
                    </td>
                   </tr>
                   <tr>
                    <td valign="top" align="center">${image2 ? `<img src='${image2}' alt='Uploaded Image 2' style="max-width:489px;" /><br/>` : ''}</td>
                   </tr>
                   <tr>
                    <td valign="top" height="20"></td>
                   </tr>
                   <tr>
                    <td valign="top" align="center">
                     <table width="245" align="center" border="0" cellspacing="0" cellpadding="0" bgcolor="#f2a13a" style="border-radius:5px;">
                      <tr>
                       <td align="center">
                        <table align="center" border="0" cellspacing="0" cellpadding="0">
                         <tr>
                          <td width="2"><img src="https://www.ieplads.com/mailers/2023_ui/naukri/career-camp-15feb/images/space.png" width="2" height="42" /></td>
                          <td height="42" style="font-family:Arial, Helvetica, sans-serif; font-size:18px; line-height:42px; color:#ffffff; font-weight:bold; text-decoration:none; display:block;">Download Full Report</td>
                          <td width="25" align="right"><img src="https://www.ieplads.com/mailers/2025_ui/naukri/job-speak-03march/images/i1.png" width="17" height="42" /></td>
                          <td width="2"><img src="https://www.ieplads.com/mailers/2023_ui/naukri/career-camp-15feb/images/space.png" width="2" height="42" /></td>
                         </tr>
                        </table>
                       </td>           
                      </tr>
                     </table>
                    </td>
                   </tr>
                  </table>
                 </td>
                </tr>
                <tr>
                 <td valign="top" height="32"></td>
                </tr>
               </table>
              </td>
             </tr>
             <tr>
              <td valign="top" height="30"></td>
             </tr>
             <tr>
              <td valign="top">
               <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff" style="border-radius:20px;">
                <tr>
                 <td valign="top" height="21"></td>
                </tr>
                <tr>
                 <td valign="top" align="center">
                  <table width="90%" align="center" border="0" cellspacing="0" cellpadding="0">
                   <tr>
                    <td valign="top"><img src="https://www.ieplads.com/mailers/2025_ui/naukri/job-speak-03feb/images/icon.png" width="31" height="30" /></td>
                    <td width="10"><img src="https://www.ieplads.com/mailers/2023_ui/naukri/career-camp-15feb/images/space.png" width="6" height="2" /></td>
                    <td valign="top">
                     <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                       <td valign="top" colspan="3" style="font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:22px; color:#000000; font-weight:normal;">${paragraph4}</td>
                      </tr>
                      <tr>
                       <td valign="top" height="15"></td>
                      </tr>
                      <tr>
                       <td valign="top">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                         <tr>
                          <td width="71"><img src="https://www.ieplads.com/mailers/2025_ui/naukri/job-speak-03feb/images/img7.png" width="71" height="71" /></td>
                          <td width="12"></td>
                          <td>
                           <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                             <td style="font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:22px; color:#000000; font-weight:bold;">${paragraph5}</td>
                            </tr>
                            <tr>
                             <td style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#000000; font-weight:normal;">${paragraph6}</td>
                            </tr>
                           </table>
                          </td>
                         </tr>
                        </table>
                       </td> 
                      </tr>
                      <tr>
                       <td valign="top" height="20"></td>
                      </tr>
                     </table>
                    </td>
                   </tr>                  
                  </table>
                 </td>
                </tr>
               </table>
              </td>
             </tr>
            </table>
           </td>
          </tr>
         </table>
        </td>
       </tr>    
      </table>
      </span>
      </a>
     </td>
    </tr>  
    <tr>
     <td valign="top" height="30"></td>
    </tr> 
    <tr>
     <td valign="top" align="center" bgcolor="#f8fbfe">
      <a href="https://www.ieplads.com/mailers/2025_ui/naukri/job-speak-03july/images/Jun25_JobSpeak_Report.pdf" target="_blank" style="text-decoration:none;">
      <span>
      <table width="99%" align="center" border="0" cellspacing="0" cellpadding="0" style="min-width:280px;">
       <tr>
        <td valign="top" height="46"></td>
       </tr>
       <tr>
        <td valign="top" align="center">
         <table align="center" border="0" cellspacing="0" cellpadding="0" style="min-width:280px;">
          <tr>
           <td valign="top" width="591">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="min-width:280px;">
             <tr>
              <td valign="top" align="center">
               <table width="91%" align="center" border="0" cellspacing="0" cellpadding="0" style="min-width:280px;">
                <tr>
                 <td valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:26px; line-height:30px; color:#232278; font-weight:bold;">${paragraph7}</td>
                </tr>
               </table>
              </td>
             </tr>
             <tr>
              <td valign="top" height="24"></td>
             </tr>
             <tr>
              <td valign="top" align="center">${image3 ? `<img src='${image3}' alt='Uploaded Image 3' style="max-width:589px;" /><br/>` : ''}</td>
             </tr>
             <tr>
              <td valign="top" height="10"></td>
             </tr>
            </table>
           </td>
          </tr>
         </table>
        </td>
       </tr>      
      </table>
      </span>
      </a>
     </td>
    </tr>
    <tr>
     <td valign="top" align="center" bgcolor="#f8fbfe">
      <a href="https://www.ieplads.com/mailers/2025_ui/naukri/job-speak-03july/images/Jun25_JobSpeak_Report.pdf" target="_blank" style="text-decoration:none;">
      <span>
      <table width="96%" align="center" border="0" cellspacing="0" cellpadding="0" style="min-width:280px;">
       <tr>
        <td valign="top" height="10"></td>
       </tr>
       <tr>
        <td valign="top" align="center">
         <table align="center" border="0" cellspacing="0" cellpadding="0" style="min-width:280px;">
          <tr>
           <td valign="top" width="512">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="min-width:280px;">
             <tr>
              <td valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:26px; line-height:30px; color:#232278; font-weight:bold;">${paragraph8}</td>
             </tr>
             <tr>
              <td valign="top" align="center">${image4 ? `<img src='${image4}' alt='Uploaded Image 4' style="max-width:510px;" /><br/>` : ''}</td>
             </tr>
            </table>
           </td>
          </tr>
         </table>
        </td>
       </tr>
       <tr>
        <td valign="top" height="50"></td>
       </tr>       
      </table>
      </span>
      </a>
     </td>
    </tr>
    <tr>
     <td valign="top" align="center" bgcolor="#f8fbfe">
      <a href="https://www.ieplads.com/mailers/2025_ui/naukri/job-speak-03july/images/Jun25_JobSpeak_Report.pdf" target="_blank" style="text-decoration:none;">
      <span>
      <table width="96%" align="center" border="0" cellspacing="0" cellpadding="0" style="min-width:280px;">
       <tr>
        <td valign="top" height="14"></td>
       </tr>
       <tr>
        <td valign="top" align="center">
         <table align="center" border="0" cellspacing="0" cellpadding="0" style="min-width:280px;">
          <tr>
           <td valign="top" width="567">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="min-width:280px;">
             <tr>
              <td valign="top" align="center">
               <table width="92%" align="center" border="0" cellspacing="0" cellpadding="0" style="min-width:280px;">
                <tr>
                 <td valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:26px; line-height:30px; color:#232278; font-weight:bold;">${paragraph9}</td>
                </tr>
               </table>
              </td>
             </tr>
             <tr>
              <td valign="top" height="16"></td>
             </tr>
             <tr>
              <td valign="top" align="center">${image5 ? `<img src='${image5}' alt='Uploaded Image 5' style="max-width:565px;" /><br/>` : ''}</td>
             </tr>
            </table>
           </td>
          </tr>
         </table>
        </td>
       </tr>
       <tr>
        <td valign="top" height="50"></td>
       </tr>       
      </table>
      </span>
      </a>
     </td>
    </tr>     
    <tr>
     <td valign="top" align="center" bgcolor="#f9f2f2">
      <a href="https://www.ieplads.com/mailers/2025_ui/naukri/job-speak-03july/images/Jun25_JobSpeak_Report.pdf" target="_blank" style="text-decoration:none;">
      <span>
      <table width="96%" align="center" border="0" cellspacing="0" cellpadding="0" style="min-width:280px;">
       <tr>
        <td valign="top" height="21"></td>
       </tr>
       <tr>
        <td valign="top" align="center">
         <table align="center" border="0" cellspacing="0" cellpadding="0" style="min-width:280px;">
          <tr>
           <td valign="top" width="540">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="min-width:280px;">
             <tr>
              <td valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:26px; line-height:30px; color:#232278; font-weight:bold;">${paragraph10}</td>
             </tr>
             <tr>
              <td valign="top" height="11"></td>
             </tr>
             <tr>
              <td valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#484848; font-weight:normal;">${paragraph11}</td>
             </tr>
             <tr>
              <td valign="top" height="25"></td>
             </tr>
             <tr>
              <td valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:20px; line-height:24px; color:#232278; font-weight:bold;">${paragraph12}</td>
             </tr>
             <tr>
              <td valign="top" height="11"></td>
             </tr>
             <tr>
              <td valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#484848; font-weight:normal;">${paragraph13}</td>
             </tr>
            </table>
           </td>
          </tr>
         </table>
        </td>
       </tr>
       <tr>
        <td valign="top" height="20"></td>
       </tr> 
       <tr>
        <td valign="top" align="center">
         <table width="245" align="center" border="0" cellspacing="0" cellpadding="0" bgcolor="#f2a13a" style="border-radius:5px;">
          <tr>
           <td align="center">
            <table align="center" border="0" cellspacing="0" cellpadding="0">
             <tr>
              <td width="2"><img src="https://www.ieplads.com/mailers/2023_ui/naukri/career-camp-15feb/images/space.png" width="2" height="42" /></td>
              <td height="42" style="font-family:Arial, Helvetica, sans-serif; font-size:18px; line-height:42px; color:#ffffff; font-weight:bold; text-decoration:none; display:block;">Download Full Report</td>
              <td width="25" align="right"><img src="https://www.ieplads.com/mailers/2025_ui/naukri/job-speak-03march/images/i1.png" width="17" height="42" /></td>
              <td width="2"><img src="https://www.ieplads.com/mailers/2023_ui/naukri/career-camp-15feb/images/space.png" width="2" height="42" /></td>
             </tr>
            </table>
           </td>           
          </tr>
         </table>
        </td>
       </tr> 
       <tr>
        <td valign="top" height="40"></td>
       </tr>       
      </table>
      </span>
      </a>
     </td>
    </tr> 
   </table>
  </td>
 </tr>
</table>


        </body>
      </html>
    `;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.click();

    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <div className="App">
      <header className="App-header">        
        <div className='container' style={{backgroundColor:'#efeefe'}}>
          <div className="firstImage">
            {/* Image 1 */}
            {image1 && (
              <div style={{ marginTop: 0 }}>
                <img src={image1} alt="Uploaded Preview 1" width="100%" style={{ maxWidth: 600 }} />
              </div>
            )}
            <input type="file"
              accept="image/*"
              onChange={e => handleImageChange(e, 1)}
              ref={fileInputRef1}
            />
          </div>
          <div className="secOne">
           
          <table width="96%" align="center" border="0" cellSpacing="0" cellPadding="0" style={{minWidth:280, borderCollapse:'collapse', msoTableLspace:'0pt', msoTableRspace:'0pt'}}>
          <tr>
        <td valign="top" align="center">
         <table align="center" border="0" cellSpacing="0" cellPadding="0">
          <tr>
           <td valign="top" width="521">
            <table width="100%" border="0" cellSpacing="0" cellPadding="0">
             <tr>
              <td valign="top" align="center" style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'18px', color:'#484848', fontWeight:'bold', textTransform:'uppercase'}}>
              <textarea value={paragraph1} onChange={e => setParagraph1(e.target.value)} rows={4} style={{ width: '100%', color: '#484848', fontSize:'18px', textTransform: 'uppercase', textAlign:'center', fontWeight:'bold', fontFamily: 'Arial, Helvetica, sans-serif',height:'20px' }}/>
            <br />
              <button onClick={() => handleParagraphSave(1, paragraph1)} style={{ marginTop: 8 }}>Save Text</button>
              </td>
             </tr>
             <tr>
              <td valign="top" height="16"></td>
             </tr>
             <tr>
              <td valign="top" align="center" style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'23px', lineHeight:'32px', color:'#0B0969', fontWeight:'bold'}}>
              <textarea value={paragraph2} onChange={e => setParagraph2(e.target.value)} rows={4} style={{ width: '100%', color: '#0B0969', fontSize:'23px', lineHeight:'32px', fontWeight:'bold', fontFamily:'Arial, Helvetica, sans-serif', textAlign:'center',height:'90px' }}/>
              <br />
              <button onClick={() => handleParagraphSave(2, paragraph2)} style={{ marginTop: 8 }}>Save Text</button>
              </td>
             </tr>
             <tr>
              <td valign="top" height="30"></td>
             </tr>
             <tr>
              <td valign="top">
               <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#ffffff" style={{borderRadius:'24px'}}>
                <tr>
                 <td valign="top" height="21"></td>
                </tr>
                <tr>
                 <td valign="top" align="center">
                  <table width="95%" align="center" border="0" cellSpacing="0" cellPadding="0" style={{minWidth:'280px'}}>
                   <tr>
                    <td valign="top">
                     <table width="90%" align="left" border="0" cellSpacing="0" cellPadding="0" style={{minWidth:'280px'}} class="fluidTable">
                      <tr>
                       <td width="20"></td>
                       <td valign="top" style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'17px', lineHeight:'24px', color:'#484848', fontWeight:'normal'}}>
                       <textarea value={paragraph3} onChange={e => setParagraph3(e.target.value)} rows={4} style={{ width: '100%', color: '#484848', fontSize:'17px', lineHeight:'24px', fontFamily:'Arial, Helvetica, sans-serif',height:'50px' }}/>
                       <button onClick={() => handleParagraphSave(3, paragraph2)} style={{ marginTop: 8 }}>Save Text</button>
                       </td>
                      </tr>
                     </table>
                    </td>
                   </tr>
                   <tr>
                    <td valign="top" align="center">

                    {image2 && (
              <div style={{ marginTop: 0 }}>
                <img src={image2} alt="Uploaded Preview 2" width="100%" style={{ maxWidth: 489 }} />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={e => handleImageChange(e, 2)}
              ref={fileInputRef2}
            />
                    </td>
                   </tr>
                   <tr>
                    <td valign="top" height="20"></td>
                   </tr>
                   <tr>
                    <td valign="top" align="center">
                     <table width="245" align="center" border="0" cellSpacing="0" cellPadding="0" bgcolor="#f2a13a" style={{borderRadius:'5px'}}>
                      <tr>
                       <td align="center">
                        <table align="center" border="0" cellSpacing="0" cellPadding="0">
                         <tr>
                         <td width="2"><img src='https://www.ieplads.com/mailers/2023_ui/naukri/career-camp-15feb/images/space.png' width='2' height='42' /></td>
                          <td height="42" style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'18px', lineHeight:'42px', color:'#ffffff', fontWeight:'bold', textDecoration:'none', display:'block'}}>Download Full Report</td>
                          <td width="25" align="right"><img src='https://www.ieplads.com/mailers/2025_ui/naukri/job-speak-03march/images/i1.png' width='17' height='42' /></td>
                          <td width="2"><img src='https://www.ieplads.com/mailers/2023_ui/naukri/career-camp-15feb/images/space.png' width='2' height='42' /></td>
                         </tr>
                        </table>
                       </td>           
                      </tr>
                     </table>
                    </td>
                   </tr>
                  </table>
                 </td>
                </tr>
                <tr>
                 <td valign="top" height="32"></td>
                </tr>
               </table>
              </td>
             </tr>
             <tr>
              <td valign="top" height="30"></td>
             </tr>
             <tr>
              <td valign="top">
               <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#ffffff" style={{ borderRadius: '20px'}}>
                <tr>
                 <td valign="top" height="21"></td>
                </tr>
                <tr>
                 <td valign="top" align="center">
                  <table width="90%" align="center" border="0" cellSpacing="0" cellPadding="0">
                   <tr>
                    <td valign="top"><img src='https://www.ieplads.com/mailers/2025_ui/naukri/job-speak-03feb/images/icon.png' width='31' height='30' /></td>
                    <td width="10"><img src='https://www.ieplads.com/mailers/2023_ui/naukri/career-camp-15feb/images/space.png' width='6' height='2' /></td>
                    <td valign="top">
                     <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                      <tr>
                       <td valign="top" colspan="3" style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'15px', lineHeight:'22px', color:'#000000', fontWeight:'normal'}}>
                       <textarea value={paragraph4} onChange={e => setParagraph4(e.target.value)} rows={4} style={{ width: '100%', fontSize:'15px', lineHeight:'22px', fontFamily:'Arial, Helvetica, sans-serif', fontWeight:'normal', height:'160px' }}/>
            <br />
            <button onClick={() => handleParagraphSave(4, paragraph4)} style={{ marginTop: 8 }}>Save Text</button>


                       </td>
                      </tr>
                      <tr>
                       <td valign="top" height="15"></td>
                      </tr>
                      <tr>
                       <td valign="top">
                        <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                         <tr>
                          <td width="71"><img src="https://www.ieplads.com/mailers/2025_ui/naukri/job-speak-03feb/images/img7.png" width="71" height="71" /></td>
                          <td width="12"></td>
                          <td>
                           <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                            <tr>
                             <td style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'16px', lineHeight:'22px', color:'#000000', fontWeight:'bold'}}>
                             <textarea value={paragraph5} onChange={e => setParagraph5(e.target.value)} rows={1} style={{ width: '100%', fontSize:'16px', lineHeight:'22px', fontFamily:'Arial, Helvetica, sans-serif', fontWeight:'bold', height:'20px' }}/>
            <br />
            <button onClick={() => handleParagraphSave(5, paragraph5)} style={{ marginTop: 8 }}>Save Text</button>
                             </td>
                            </tr>
                            <tr>
                             <td style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'13px', lineHeight:'18px', color:'#000000', fontWeight:'normal'}}>
                             <textarea value={paragraph6} onChange={e => setParagraph6(e.target.value)} rows={1} style={{ width: '100%', fontSize:'13px', lineHeight:'18px', fontFamily:'Arial, Helvetica, sans-serif', fontWeight:'normal', height:'16px' }}/>
            <br />
            <button onClick={() => handleParagraphSave(6, paragraph6)} style={{ marginTop: 8 }}>Save Text</button>
                             </td>
                            </tr>
                           </table>
                          </td>
                         </tr>
                        </table>
                       </td> 
                      </tr>
                      <tr>
                       <td valign="top" height="20"></td>
                      </tr>
                     </table>
                    </td>
                   </tr>                  
                  </table>
                 </td>
                </tr>
               </table>
              </td>
             </tr>
             <tr>
              <td valign="top" height="30"></td>
             </tr>
            </table>
           </td>
          </tr>
         </table>
        </td>
       </tr>
           </table>
            
            
          </div>
<div className='secTwo'>
  <table width="100%" align="center" border="0" cellSpacing="0" cellPadding="0" style={{minWidth:'280px'}}>
          <tr>
     <td valign="top" align="center" bgcolor="#f8fbfe">
      
      <table width="99%" align="center" border="0" cellSpacing="0" cellPadding="0" style={{minWidth:'280px'}}>
       <tr>
        <td valign="top" height="46"></td>
       </tr>
       <tr>
        <td valign="top" align="center">
         <table align="center" border="0" cellSpacing="0" cellPadding="0" style={{minWidth:'280px'}}>
          <tr>
           <td valign="top" width="591">
            <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{minWidth:'280px'}}>
             <tr>
              <td valign="top" align="center">
               <table width="91%" align="center" border="0" cellSpacing="0" cellPadding="0" style={{minWidth:'280px'}}>
                <tr>
                 <td valign="top" style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'26px', lineHeight:'30px', color:'#232278', fontWeight:'bold'}}>
                 <textarea value={paragraph7} onChange={e => setParagraph7(e.target.value)} rows={1} style={{ width: '100%', fontSize:'26px', lineHeight:'30px', color:'#232278', fontFamily:'Arial, Helvetica, sans-serif', fontWeight:'bold', height:'30px' }}/>
            <br />
            <button onClick={() => handleParagraphSave(7, paragraph7)} style={{ marginTop: 8 }}>Save Text</button>
                 </td>
                </tr>
               </table>
              </td>
             </tr>
             <tr>
              <td valign="top" height="24"></td>
             </tr>
             <tr>
              <td valign="top" align="center">
              {image3 && (
              <div style={{ marginTop: 0 }}>
                <img src={image3} alt="Uploaded Preview 3" width="100%" style={{ maxWidth: 589 }} />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={e => handleImageChange(e, 3)}
              ref={fileInputRef3}
            />

              </td>
             </tr>
             <tr>
              <td valign="top" height="10"></td>
             </tr>
            </table>
           </td>
          </tr>
         </table>
        </td>
       </tr>      
      </table>
     </td>
    </tr>
    </table>
</div>

{/* Section 3 */}
<div className="secThree">
<table width="100%" align="center" border="0" cellSpacing="0" cellPadding="0" style={{minWidth:'280px'}}>
<tr>
     <td valign="top" align="center" bgcolor="#f8fbfe">
      
      <table width="96%" align="center" border="0" cellSpacing="0" cellPadding="0" style={{minWidth:'280px'}}>
       <tr>
        <td valign="top" height="10"></td>
       </tr>
       <tr>
        <td valign="top" align="center">
         <table align="center" border="0" cellSpacing="0" cellPadding="0" style={{minWidth:'280px'}}>
          <tr>
           <td valign="top" width="512">
            <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{minWidth:'280px'}}>
             <tr>
              <td valign="top" style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'26px', lineHeight:'30px', color:'#232278', fontWeight:'bold'}}>
              <textarea value={paragraph8} onChange={e => setParagraph8(e.target.value)} rows={1} style={{ width: '100%', fontSize:'26px', lineHeight:'30px', color:'#232278', fontFamily:'Arial, Helvetica, sans-serif', fontWeight:'bold', height:'60px' }}/>
            <br />
            <button onClick={() => handleParagraphSave(8, paragraph8)} style={{ marginTop: 8 }}>Save Text</button>
              </td>
             </tr>
             <tr>
              <td valign="top" align="center">
              {image4 && (
              <div style={{ marginTop: 0 }}>
                <img src={image4} alt="Uploaded Preview 4" width="100%" style={{ maxWidth: 510 }} />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={e => handleImageChange(e, 4)}
              ref={fileInputRef4}
            />

              </td>
             </tr>
            </table>
           </td>
          </tr>
         </table>
        </td>
       </tr>
       <tr>
        <td valign="top" height="50"></td>
       </tr>       
      </table>
     </td>
    </tr>
    </table>           
</div>

<div className="secFour">
 <table width="100%" bgcolor="#f8fbfe">
 <tr>
     <td valign="top" align="center">
      
      <table width="96%" align="center" border="0" cellSpacing="0" cellPadding="0" style={{minWidth:'280px'}}>
       <tr>
        <td valign="top" height="14"></td>
       </tr>
       <tr>
        <td valign="top" align="center">
         <table align="center" border="0" cellSpacing="0" cellPadding="0" style={{minWidth:'280px'}}>
          <tr>
           <td valign="top" width="567">
            <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{minWidth:'280px'}}>
             <tr>
              <td valign="top" align="center">
               <table width="92%" align="center" border="0" cellSpacing="0" cellPadding="0" style={{minWidth:'280px'}}>
                <tr>
                 <td valign="top" style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'26px', lineHeight:'30px', color:'#232278', fontWeight:'bold'}}>
                 <textarea value={paragraph9} onChange={e => setParagraph9(e.target.value)} rows={4} style={{ width: '100%', fontSize:'26px', lineHeight:'30px', color:'#232278', fontFamily:'Arial, Helvetica, sans-serif', fontWeight:'bold', height:'30px' }}/>
            <br />
            <button onClick={() => handleParagraphSave(9, paragraph9)} style={{ marginTop: 8 }}>Save Text</button>

                 </td>
                </tr>
               </table>
              </td>
             </tr>
             <tr>
              <td valign="top" height="16"></td>
             </tr>
             <tr>
              <td valign="top" align="center">
              {image5 && (
              <div style={{ marginTop: 0 }}>
                <img src={image5} alt="Uploaded Preview 5" width="100%" style={{ maxWidth: 565 }} />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={e => handleImageChange(e, 5)}
              ref={fileInputRef5}
            />

              </td>
             </tr>
            </table>
           </td>
          </tr>
         </table>
        </td>
       </tr>
       <tr>
        <td valign="top" height="50"></td>
       </tr>       
      </table>
     </td>
    </tr>
   </table>
            
</div>
          
<div className="secFive">
<DynamicDivs />
<table width="100%" bgcolor="#f9f2f2">
  <tr>
     <td valign="top" align="center">
     
      <table width="96%" align="center" border="0" cellSpacing="0" cellPadding="0" style={{minWidth:'280px'}}>
       <tr>
        <td valign="top" height="21"></td>
       </tr>
       <tr>
        <td valign="top" align="center">
         <table align="center" border="0" cellSpacing="0" cellPadding="0" style={{minWidth:'280px'}}>
          <tr>
           <td valign="top" width="540">
            <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{minWidth:'280px'}}>
             <tr>
              <td valign="top" style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'26px', lineHeight:'30px', color:'#232278', fontWeight:'bold'}}>

              <textarea value={paragraph10}  onChange={e => setParagraph10(e.target.value)} rows={4}
              style={{ width: '100%', fontSize:'26px', lineHeight:'30px', color:'#232278', fontFamily:'Arial, Helvetica, sans-serif', fontWeight:'bold', height:'30px' }}
            />
            <br />
            <button onClick={() => handleParagraphSave(10, paragraph10)} style={{ marginTop: 8 }}>Save Text</button>
              </td>
             </tr>
             <tr>
              <td valign="top" height="11"></td>
             </tr>
             <tr>
              <td valign="top" style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'13px', lineHeight:'18px', color:'#484848', fontWeight:'normal'}}>
                <textarea value={paragraph11} onChange={e => setParagraph11(e.target.value)} rows={4}
                style={{ width: '100%', fontSize:'13px', lineHeight:'18px', color:'#484848', fontFamily:'Arial, Helvetica, sans-serif', fontWeight:'normal', height:'120px' }}/>
              <br />
              <button onClick={() => handleParagraphSave(11, paragraph11)} style={{ marginTop: 8 }}>Save Text</button>
              </td>
             </tr>
             <tr>
              <td valign="top" height="25"></td>
             </tr>
             <tr>
              <td valign="top" style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'20px', lineHeight:'24px', color:'#232278', fontWeight:'bold'}}>
              <textarea value={paragraph12} onChange={e => setParagraph12(e.target.value)} rows={1}
              style={{ width: '100%', fontSize:'20px', lineHeight:'24px', color:'#232278', fontFamily:'Arial, Helvetica, sans-serif', fontWeight:'bold', height:'24px' }}
            />
            <br />
            <button onClick={() => handleParagraphSave(12, paragraph12)} style={{ marginTop: 8 }}>Save Text</button>

              </td>
             </tr>
             <tr>
              <td valign="top" height="11"></td>
             </tr>
             <tr>
              <td valign="top" style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'13px', lineHeight:'18px', color:'#484848', fontWeight:'normal'}}>
              <textarea value={paragraph13} onChange={e => setParagraph13(e.target.value)} rows={4} style={{ width: '100%', fontSize:'13px', lineHeight:'18px', color:'#484848', fontFamily:'Arial, Helvetica, sans-serif', fontWeight:'normal', height:'120px' }}/>
              <br />
              <button onClick={() => handleParagraphSave(13, paragraph13)} style={{ marginTop: 8 }}>Save Text</button>
              </td>
             </tr>
            </table>
           </td>
          </tr>
         </table>
        </td>
       </tr>
       <tr>
        <td valign="top" height="20"></td>
       </tr> 
       <tr>
        <td valign="top" align="center">
         <table width="245" align="center" border="0" cellSpacing="0" cellPadding="0" bgcolor="#f2a13a" style={{borderRadius:'5px'}}>
          <tr>
           <td align="center">
            <table align="center" border="0" cellSpacing="0" cellPadding="0">
             <tr>
              <td width="2"><img src='https://www.ieplads.com/mailers/2023_ui/naukri/career-camp-15feb/images/space.png' width="2" height="42" /></td>
              <td height="42" style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'18px', lineHeight:'42px', color:'#ffffff', fontWeight:'bold', textDecoration:'none', display:'block'}}>Download Full Report</td>
              <td width="25" align="right"><img src='https://www.ieplads.com/mailers/2025_ui/naukri/job-speak-03march/images/i1.png' width="17" height="42" /></td>
              <td width="2"><img src='https://www.ieplads.com/mailers/2023_ui/naukri/career-camp-15feb/images/space.png' width="2" height="42" /></td>
             </tr>
            </table>
           </td>           
          </tr>
         </table>
        </td>
       </tr> 
       <tr>
        <td valign="top" height="40"></td>
       </tr>       
      </table>
      
     </td>
    </tr>

  </table>
            
</div>
          
        </div>

        
        
        
        <button onClick={handlePreview} style={{ marginTop: 16, backgroundColor:'#f2a13a', height:'40px', border:'0', padding:'0 10px', cursor:'pointer'  }}>Preview in New Window</button>
        <div style={{height:'50px'}}></div>

        {/* Add/Delete Div Module at the bottom */}
        <DynamicDivs />
      </header>
    </div>
  );
}

export default App;
