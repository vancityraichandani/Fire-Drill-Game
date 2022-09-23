import React, { useEffect, useState } from 'react'
import '../App.css'
import Button from '@mui/material/Button';
import 'animate.css'
import Alert from '@mui/material/Alert';
import { TextField, Typography } from '@mui/material';
import meta from '../assets/metaverse.png'
import fire from '../assets/fire.gif'

function UploadPage(props) {
    let file = props.file
    let setFile = props.setFile
    const [fdx, setFdx] = useState('');

    return (
        <>
            {
                file !== null && props.login
                &&
                <div className='animate__animated animate__fadeIn' style={{ display: 'flex', justifyContent: 'center', marginTop: 90, fontWeight: 'bold', fontSize: 20 }}>
                    <Alert sx={{ width: '28%' }} severity="success">{file.name} has been uploaded successfully  !</Alert>
                </div>
            }
            <div className='upload' >
                {
                    props.login
                    &&
                    <div className='text'>
                        <Typography sx={{ width: 400, fontSize: '30px', fontWight: 'bold' }}>
                            Upload Your Revit Model Here!
                        </Typography>
                        <Typography>
                            Upload your Revit model here. This model will be loaded in the viewer which will enable you to experience a thrilling virtual fire drill.
                        </Typography>
                        <form style={{ marginTop: 30 }} className='formStyle animate__animated animate__fadeInUp' action="/action_page.php">
                            <Button variant="contained" sx={{ marginRight: 2, border: '3px solid #6200EE', backgroundColor: '#6200EE', color: '#fff' }} component="label">
                                Upload
                                <input hidden accept=".rvt" multiple type="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                            </Button>
                        </form>
                        <Typography sx={{ marginTop: 5, width: 400, fontSize: '30px', fontWight: 'bold' }}>
                            Upload FDX link here!
                        </Typography>
                        <Typography>
                            Use this to customise data to be sent.
                        </Typography>
                        <form style={{ marginTop: 30 }} className='formStyle animate__animated animate__fadeInUp' action="/action_page.php">
                            <TextField
                                sx={{ border: '3px solid #6200EE' }}
                                fullWidth
                                placeholder='Enter FDX link'
                                onChange={(e) => setFdx(e.target.value)}
                            />
                        </form>
                    </div>
                }
                {
                    file !== null &&
                    <div style={{ marginLeft: 40 }}>
                        {/* change this src to screen image */}
                        <img className='screen' src={'demo'} alt="Screen Image" />
                    </div>

                }
                <div>
                    <img className={`metaImg ${props.login ? 'animate__animated animate__fadeInLeft' : ''} ${file !== null ? 'remove' : ''} `} src={meta} />
                </div>
            </div>
            {
                props.login
                &&
                <Button variant="outlined"
                    className='submitbtn'
                    size="large"
                    sx={{ border: '3px solid #6200EE', backgroundColor: '#6200EE', color: '#fff' }} >
                    Submit
                </Button>
            }
        </>
    )
}

export default UploadPage


// function UploadPage() {

//     const [file, setFile] = useState(null)
//     // useEffect(() => {
//     //     console.log("file", file);
//     // }, [file])

//     return (
//         <div className='uploadPage'>
//             <h1 style={{ color: 'blue' }} className='name animate__animated animate__fadeInDown'>Play With Fire
//             </h1>
//             <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', }}>
//                 <Card sx={{border:'5px solid black', marginTop: 10, width: '35%', background: 'radial-gradient(circle at center, #82D6F1, #BCE5F2)', minWidth: 275 }}>
//                     <CardContent>
//                         <h1 className='text animate__animated animate__fadeInDown'>Upload your Revit model here!</h1>
//                     </CardContent>
//                     <CardActions style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
//                         <form className='formStyle animate__animated animate__fadeInUp' action="/action_page.php">
//                             <Button size="large" color="secondary" sx={{ color: 'black', marginRight: 5, fontWeight: 'bold' }} variant="contained" component="label">
//                                 Upload
//                                 <input hidden accept=".rvt" multiple type="file" onChange={(e) => setFile(e.target.files[0])} />
//                             </Button>
//                             <Button size="large" color="secondary" sx={{ color: 'black', fontWeight: 'bold' }} variant="contained" >
//                                 Submit
//                                 <input hidden type="submit" />
//                             </Button>
//                         </form>
//                     </CardActions>
//                 </Card>
//             </div>
//             {
//                 file !== null
//                 &&
//                 <div style={{ display:'flex', justifyContent:'center',marginTop: 50, fontWeight: 'bold', fontSize: 20 }}>
//                     <Alert sx={{ width: '30%' }} severity="success">{file.name} has been uploaded. Submit to continue.</Alert>
//                 </div>
//             }
//         </div>
//     )
// }

// export default UploadPage