/*
 * @Author: Tser
 * @Date: 2020-04-17 23:38:34
 * @GitHub: https://github.com/TserHub
 * @LastEditors: Tser
 * @LastEditTime: 2020-04-18 12:26:03
 */
// import { FormComponentProps } from 'antd/es/form';

export interface IProps {
  message: string;
}

// form
export interface IFormProps /*  extends FormComponentProps */ {
  username: string;
  password: number;
  remember: boolean;
}
