import { useState } from 'react'
import Title from './index'
import { Button } from '../index'

export default {
  title: 'Title',
  component: Title,
}
// size
const Template = () => {
  return (
    <>
      <Title
        title="这是标题"
        subTitle="这是描述，相当于副标题"
        size="large"
        extra={<Button>这是extra信息</Button>}
        // style={{ marginTop: '30px' }}
      />
      <br />
      <Title
        title="这是标题"
        subTitle="这是描述，相当于副标题"
        size="middle"
        extra={<Button size="small">确认</Button>}
      />
      <br />
      <Title title="这是标题" subTitle="这是描述，相当于副标题" />
      <br />
      <Title title="这是标题" subTitle="这是描述，相当于副标题" size="small" />
      <br />
      <Title title="这是标题" subTitle="这是描述，相当于副标题" size="large" number={1} />
      <br />
      <Title title="这是标题" subTitle="这是描述，相当于副标题" size="middle" number={2} />
      <br />
      <Title title="这是标题" subTitle="这是描述，相当于副标题" number={3} />
      <br />
      <Title
        title="这是标题"
        subTitle="这是描述，相当于副标题"
        // tooltip="test"
        // placement="right"
        size="small"
        number={4}
        simple
      />
    </>
  )
}

export const 默认 = Template.bind({})
