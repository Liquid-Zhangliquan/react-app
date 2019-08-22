import React from "react"
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import 'antd/lib/form/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/checkbox/style/css';
import 'antd/lib/message/style/css';
// import 'antd/dist/antd.css';

const FormItem = Form.Item;
class NormalLoginForm extends React.Component {

    constructor() {
        super();
        NormalLoginForm.contextTypes = {
            router: () => ''
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = this.props.form.getFieldsValue();
        let history = this.context.router.history;
        // fetch(`http://localhost:8084/userdb/login`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     body: `data=${JSON.stringify(data)}`
        // })
        //     .then(res => res.json())
        //     .then(json => {
        //         console.log(json);
        //         if (json.length !== 0) {
        //             history.push('/home');
        //         } else {
        //             alert("账户名或密码错误");
        //         }
        //     })

        if (data.userName === 'zlq' && data.passWord === '123') {
            history.push('/home');
        } else {
            message.info('密码错误');
        }
        // axios.post("/users",data).then(function(res){
        //     let resMsg = res.data.data;
        //     if(resMsg.name === "lily" && resMsg.password==="1"){
        //         history.push('/manage');
        //     }else{
        //         alert("密码错误")
        //     }
        // })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form onSubmit={(e) => this.handleSubmit(e)} className="login-form">
                    <FormItem>
                        {
                            getFieldDecorator(
                                'userName', {
                                    rules: [{ required: true, message: '姓名不能为空！' }],
                                }
                            )(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )
                        }
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator(
                                "passWord", {
                                    rules: [{ required: true, message: "密码不能为空！" }]
                                }
                            )(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )
                        }
                    </FormItem>
                    <FormItem>
                        <Checkbox>Remember me</Checkbox>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </FormItem>
                    <FormItem>
                        <a
                            className="login-form-forgot"
                            href="#/findpassword"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Forgot password
                        </a>
                        Or <a
                            href="#/register"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            register now!
                        </a>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

let WrapForm = Form.create()(NormalLoginForm)
export default WrapForm
