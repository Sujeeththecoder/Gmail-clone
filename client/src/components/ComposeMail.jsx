import {useState} from 'react';
import { Dialog, Box, Typography, styled, InputBase, TextField, Button} from '@mui/material';
import { Close, DeleteOutlined } from '@mui/icons-material';
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.urls';
const dialogstyle ={
    height: '90%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0'
} 
const Header = styled(Box)({
    display: 'flex',
    justifyContent:'space-between',
    padding: '10px 15px',
    background: '#f2f6fc',
    '& > p': {
        fontSize: 14,
        fontWeight: 600,
        
        
    }
});

const RecipientsWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    
    padding: '0 15px',
    ' & > div': {
        fontSize: 14,
        borderBottom: '1px solid #F5F5F5',
        marginTop: '10px'
    }
    
});
const Footer = styled(Box)({
    display: 'flex',
    justifyContent:'space-between',
    padding: '10px 15px',
    alignItems: 'center'
})
const SendButton = styled(Button)({
    background: 'grey',
    color: 'blue',
    fontWeight: '500',
    textTransform:'none',
    borderRadius: '18px',
    width: 100
})
const ComposeMail= ({openDialog, setOpenDialog}) => {
    const [data, setData] = useState({});
    const sentEmailService = useApi(API_URLS.saveSentEmail);
    const config = {
        
            Host : "smtp.elasticemail.com",
            Username : "process.env.REACT_APP_USERNAME",
            Password : "process.env.REACT_APP_PASSWORD",
            Port: 2525,
            
        
    }
    const closeComposeMail = (e) => {
    //    e.preventDefault();
       setOpenDialog(false); 
    }
    const sendMail =(e) => {
        if (window.Email) {
            window.Email.send({
                ...config,
                 To : 'them@website.com',
                 From : "you@isp.com",
                 Subject : "This is the subject",
                 Body : "And this is the body"
             }).then(
               message => alert(message)
             );
        }
         
        const payload = {
            to: 'them@website.com',
            from: 'you@isp.com',
            subject: data.subject,
            body: data.body,
            date: new Date(),
            image: '',
            name: 'code for interview',
            starred: false,
            type: 'sent'
            
        }
        sentEmailService.call(payload);
        if (!sentEmailService.error){
            setOpenDialog(false);
            setData({});
        }
        setOpenDialog(false);
     }
     const onValueChange = (e) => {
        setData({...data,[e.target.name]: e.target.value})
        console.log(data);
     }

    return (
        <Dialog 
        open = {openDialog} PaperProps={{ sx: dialogstyle}}> 
            <Header>
           <Typography> New Message </Typography>
           <Close fontSize='small' onClick = {(e) => closeComposeMail()}/>
            </Header>
            <RecipientsWrapper>
                <InputBase placeholder="recipients" name="to" onChange={(e) => onValueChange(e)}/>
                <InputBase placeholder="subject" name="subject" onChange={(e) => onValueChange(e)}/>
            
            </RecipientsWrapper>
           <TextField 
           multiline
           rows={20}
           sx={{'& .MuiOutlinedInput-notchedOutline': {border:'none'}}}
           onChange={(e) => onValueChange(e)}
           name="body"
           />
            <Footer>
              <SendButton onClick={(e) => sendMail(e)}>Send</SendButton>
              <DeleteOutlined onClick={() => setOpenDialog(false)}/>
            </Footer>
            </Dialog>
    );
};
export default ComposeMail;