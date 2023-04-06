import React from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form'; 
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase/compat/app'

function SendMail() {

  const {register,handleSubmit,formState:{errors}} = useForm();

  const onSubmit = (formData) => {

    db.collection('emails').add(
      {
        to:formData.to,
        subject:formData.subject,
        message:formData.message,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      }
    );

    dispatch(closeSendMessage());

  };
  const dispatch = useDispatch();

  return (
    <div className='sendMail'>
        
        <div className="sendMail_header">
            <h3>New Message</h3>
            <CloseIcon 
            onClick = {()=>dispatch(closeSendMessage())}
            className='sendMail_close' />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>

          <input
            name = 'to'
            type="email" 
            placeholder='To'
            {...register('to',{required:"Required"})}
          />

          {errors.to && <p className='sendMail_error'>To is required!</p>}

          <input 
            type="text" 
            placeholder='Subject'
            {...register('subject',{required:"Required"})}
          />

          {errors.subject && <p className='sendMail_error'>Subject is required!</p>}

          <input 
            type="text" 
            placeholder='Message...' 
            className='sendMail_message'
            {...register('message',{required:"Required"})}
          />

          {errors.message && <p className='sendMail_error'>Message is required!</p>}

          <div className="sendMail_options">

            <Button 
            type="submit"
            className='sendMail_send'>Send</Button>
          </div>
        </form>
    </div>
  )
}

export default SendMail