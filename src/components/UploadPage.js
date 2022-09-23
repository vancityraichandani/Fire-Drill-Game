import React, { useEffect, useState } from 'react'
import '../App.css'
import Button from '@mui/material/Button';
import 'animate.css'
import Alert from '@mui/material/Alert';
import { TextField, Typography } from '@mui/material';
import meta from '../assets/metaverse.png'
import preview from '../assets/preview.png'

function UploadPage(props) {
    let file = props.file
    let submit = props.submit
    let setFile = props.setFile
    let setSubmit = props.setSubmit
    const [fdx, setFdx] = useState('');


    const handleSubmit = () => {
        setSubmit(true)
    }

    return (
        <>
            {
                file !== null && props.login && !submit
                &&
                <div className='animate__animated animate__fadeIn' style={{ display: 'flex', justifyContent: 'center', marginTop: 90, fontWeight: 'bold', fontSize: 20 }}>
                    <Alert sx={{}} severity="success">{file.name} has been selected successfully</Alert>
                </div>
            }
            {
                file !== null && props.login && submit
                &&
                <div className='animate__animated animate__fadeIn' style={{ display: 'flex', justifyContent: 'center', marginTop: 90, fontWeight: 'bold', fontSize: 20 }}>
                    <Alert severity="success">Upload Successful</Alert>
                </div>
            }
            <div className='upload' >
                {
                    props.login && !submit
                    &&
                    <div className='text'>
                        <Typography sx={{ width: 400, fontSize: '30px', fontWight: 'bold' }}>
                            Upload Your Revit Model Here!
                        </Typography>
                        <Typography>
                            Upload your Revit model here. This model will be loaded in the viewer which will enable you to experience a thrilling virtual fire drill.
                        </Typography>
                        <form style={{ marginTop: 15 }} className='formStyle animate__animated animate__fadeInUp' action="/action_page.php">
                            <Button variant="contained" sx={{ marginRight: 2, border: '3px solid #6200EE', backgroundColor: '#6200EE', color: '#fff' }} component="label">
                                Choose File &nbsp;
                                <span class="material-symbols-outlined">
                                    cloud_upload
                                </span>
                                <input hidden accept=".rvt" multiple type="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                            </Button>
                        </form>
                        <Typography sx={{ marginTop: 5, width: 400, fontSize: '30px', fontWight: 'bold' }}>
                            Upload FDX Link Here!
                        </Typography>
                        <Typography>
                            Use this to customise data to be sent.
                        </Typography>
                        <form style={{ marginTop: 15 }} className='formStyle animate__animated animate__fadeInUp' action="/action_page.php">
                            <TextField
                                sx={{ width: 300, border: '3px solid #6200EE' }}
                                placeholder='Enter FDX link'
                                onChange={(e) => setFdx(e.target.value)}
                            />
                        </form>
                    </div>
                }

                <div>
                    <img className={`metaImg ${props.login ? 'animate__animated animate__fadeInLeft' : ''} ${submit ? 'remove' : ''} `} src={meta} />
                </div>
            </div>
            {
                props.login && !submit
                &&
                <Button variant="contained"
                    className='submitbtn'
                    size="large"
                    onClick={handleSubmit}
                    sx={{ width: 150, border: '3px solid #6200EE', backgroundColor: '#6200EE', color: '#fff' }} >
                    Submit
                </Button>
            }
            {
                file !== null && submit &&
                <div className='upload'>
                    <div className='animate__animated animate__fadeInLeft'>
                        <Typography sx={{ marginTop: 5, width: 400, fontSize: '30px', fontWight: 'bold' }}>
                            Thanks for your submission
                        </Typography>
                        <Typography>
                            The fire safety officer has been notified.
                        </Typography>
                    </div>
                    <div style={{ marginLeft: 40 }}>
                        {/* change this src to screen image */}
                        <img className='animate__animated animate__fadeInRight screen2' src={preview} alt="Screen Image" />
                    </div>
                </div>
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