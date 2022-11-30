import { useState, useEffect } from 'react'
import { Button, Form, Input, Checkbox, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import ApiService from '@/src/services/client'
import URLS from '@/src/enums/urls'
import asyncLocalStorage from '@/src/utils/asyncLocalStorage'
 
const { useForm } = Form
const Login = () => {
 const [loading, setLoading] = useState(false)
 const navigate = useNavigate()
 const [form] = useForm()
 const onFinish = (values) => {
   setLoading(true)
   const { username, password, remember } = form.getFieldsValue()
   ApiService.request({
     method: 'post',
     url: 'auth/login',
     data: {
       username,
       password
     }
   })
     .then((res) => {
       message.success(res.data.message)
       asyncLocalStorage.setItem('token', res.data.data.token).then(() => {
         if (remember) {
           asyncLocalStorage.setItem('username', username)
         } else {
           asyncLocalStorage.setItem('username', '')
         }
         setLoading(false)
         navigate(URLS.PROFILE)
       })
     })
     .catch((err) => {
       console.log(err)
       setLoading(false)
       if ([400].includes(err.response.status)) {
         message.error(
           <ul>
             {err.response.data.message.map(({ param, msg }, i) => (
               <li key={i}>{msg}</li>
             ))}
           </ul>
         )
       } else {
         message.error(err.response.data.message)
       }
     })
 }
 const onFinishFailed = (errorInfo) => {
   console.log('Failed:', errorInfo)
 }
 useEffect(() => {
   new Promise((resolve) => {
     resolve(asyncLocalStorage.getItem('username'))
   }).then((value) => {
     if (!!value) {
       form.setFieldsValue({ remember: true, username: value })
     }
   })
 }, [])
 return (
   <Form
     form={form}
     name="basic"
     labelCol={{
       sm: {
         span: 6
       }
     }}
     wrapperCol={{
       sm: {
         span: 18
       }
     }}
     onFinish={onFinish}
     onFinishFailed={onFinishFailed}
     autoComplete="off">
     <Form.Item
       label="Username"
       name="username"
       rules={[
         {
           required: true,
           message: 'Please input your username!'
         }
       ]}>
       <Input />
     </Form.Item>
     <Form.Item
       label="Password"
       name="password"
       rules={[
         {
           required: true,
           message: 'Please input your password!'
         }
       ]}>
       <Input.Password />
     </Form.Item>
     <Form.Item
       name="remember"
       valuePropName="checked"
       wrapperCol={{
         sm: {
           offset: 6,
           span: 18
         }
       }}>
       <Checkbox>Remember me</Checkbox>
     </Form.Item>
     <Form.Item
       wrapperCol={{
         sm: {
           offset: 6,
           span: 18
         }
       }}>
       <Button
         loading={loading}
         shape="round"
         size="large"
         style={{
           background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)'
         }}
         type="primary"
         htmlType="submit">
         Masuk
       </Button>
     </Form.Item>
   </Form>
 )
}
export default Login