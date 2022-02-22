import React from 'react'
import { Button, Tooltip } from 'antd';
import { SearchOutlined, InfoCircleOutlined } from '@ant-design/icons';

export default function iconExample() {
  return (
    <div>
      <InfoCircleOutlined />

      <Tooltip title="search">
        <Button size="large" type="primary" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button type="primary" shape="circle">
        A
      </Button>
      <Button type="primary" icon={<SearchOutlined />} loading={true}>
        Search
      </Button>
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button icon={<SearchOutlined />}>Search</Button>
      <br />
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button icon={<SearchOutlined />}>Search</Button>
      <Tooltip title="search">
        <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button type="dashed" icon={<SearchOutlined />}>
        Search
      </Button>
      <Button icon={<SearchOutlined />} href="https://www.google.com" />
      <br />
      <br />
      <Tooltip title="search">
        <Button type="primary" shape="circle" icon={<SearchOutlined />} size="large" />
      </Tooltip>
      <Button type="primary" shape="circle" size="large">
        A
      </Button>
      <Button type="primary" icon={<SearchOutlined />} size="large">
        Search
      </Button>
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} size="large" />
      </Tooltip>
      <Button icon={<SearchOutlined />} size="large">
        Search
      </Button>
      <br />
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} size="large" />
      </Tooltip>
      <Button icon={<SearchOutlined />} size="large">
        Search
      </Button>
      <Tooltip title="search">
        <Button type="dashed" shape="circle" icon={<SearchOutlined />} size="large" />
      </Tooltip>
      <Button type="dashed" icon={<SearchOutlined />} size="large">
        Search
      </Button>
      <Button icon={<SearchOutlined />} size="large" href="https://www.google.com" />
       
    </div>
  )
}
