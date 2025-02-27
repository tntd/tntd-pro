## Title 组件

### 代码演示

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Table } from 'antd'
import { Title } from 'tntd'

const Demo = (props) => {
  return (
    <div>
      <Title
        title="这是标题"
        subTitle="这是描述，相当于副标题"
        tooltip="test"
        placement="right"
        size="large"
        extra={<Button>这是extra信息</Button>}
        style={{ marginBottom: '20px' }}
      />
      <br />
      <Title
        title="这是标题"
        subTitle="这是描述，相当于副标题"
        tooltip="test"
        placement="right"
        size="middle"
        extra={<Button>这是extra信息</Button>}
      />
      <br />
      <Title title="这是标题" subTitle="这是描述，相当于副标题" tooltip="test" placement="right" />
      <br />
      <Title
        title="这是标题"
        subTitle="这是描述，相当于副标题"
        tooltip="test"
        placement="right"
        size="small"
      />
      <br />
      <Title
        title="这是标题"
        subTitle="这是描述，相当于副标题"
        tooltip="test"
        placement="right"
        size="large"
        number={1}
      />
      <br />
      <Title
        title="这是标题"
        subTitle="这是描述，相当于副标题"
        tooltip="test"
        placement="right"
        size="middle"
        number={2}
      />
      <br />
      <Title
        title="这是标题"
        subTitle="这是描述，相当于副标题"
        tooltip="test"
        placement="right"
        number={3}
      />
      <br />
      <Title
        title="这是标题"
        subTitle="这是描述，相当于副标题"
        tooltip="test"
        placement="right"
        size="small"
        number={4}
        simple
      />
    </div>
  )
}

ReactDOM.render(<Demo />, document.getElementById('root'))
```

### API

#### common

| 属性名称 | 属性说明                            | 类型       | 默认值  | 是否必须 |
| :------- | :---------------------------------- | :--------- | :------ | :------- |
| title    | 标题                                | String     | -       | 否       |
| subTitle | 副标题                              | String     | -       | 否       |
| number   | 标题前是数字                        | Number     | -       | 否       |
| size     | 大小，large、middle、default、small | String     | default | 否       |
| extra    | 右边区域内容                        | React node | -       | 否       |

#### number

| 属性名称 | 属性说明             | 类型 | 默认值 | 是否必须 |
| :------- | :------------------- | :--- | :----- | :------- |
| simple   | 当数字时，是否有斜杆 | Bool | true   | 否       |
