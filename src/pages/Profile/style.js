import { Upload } from "antd";
import styled from 'styled-components';

export const WrapperUploadFile = styled(Upload)`
    .ant-upload-icon{
        display : none;
    },
    .ant-upload-list-item-name{
        display : none;
    },
    .anticon-delete{
        display : none;
    },
    .ant-upload-list-item ant-upload-list-item-error{
        display : none;
    }
`   