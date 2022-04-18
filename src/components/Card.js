import React from 'react'
import { Card, Col, Row } from 'antd'
import CountUp from 'react-countup'
import { ArrowUpOutlined } from '@ant-design/icons'

function CardComponent({ totalIndiaCase }) {
    return (
        <div>
            {totalIndiaCase.map((item, index) => (
                <div className='row'>
                    <div className='col-lg-12'>
                        <div key={index} style={{ padding: '10px', background: '#ececec' }}>
                            <Row gutter={16}>
                                <Col span={6}>
                                    <Card
                                        title='Confirmed'
                                        bordered={false}
                                        style={{ width: 360, height: 215 }}
                                    >
                                        <br />
                                        <ArrowUpOutlined />
                                        <CountUp
                                            className='count'
                                            start={0}
                                            end={item.deltarecovered}
                                            duration={2.75}
                                            separator=','
                                        />
                                        <h2 className='text-warning' style={{ color: 'red' }}>{item.recovered}</h2>
                                    </Card>
                                </Col>


                                <Col span={6}>
                                    <Card
                                        title='Active'
                                        bordered={false}
                                        style={{ width: 360, height: 215 }}
                                    >
                                        <br />

                                        <h2 className='text-warning' style={{ color: 'blue' }}>{item.active}</h2>
                                    </Card>
                                </Col>


                                <Col span={6}>
                                    <Card
                                        title='Recovered'
                                        bordered={false}
                                        style={{ width: 360, height: 215 }}
                                    >
                                        <br />
                                        <ArrowUpOutlined />
                                        <CountUp
                                            className='count'
                                            start={0}
                                            end={item.deltaconfirmed}
                                            duration={2.75}
                                            separator=','
                                        />
                                        <h2 className='text-warning' style={{ color: 'green' }}>{item.recovered}</h2>
                                    </Card>
                                </Col>

                                <Col span={6}>
                                    <Card
                                        title='Deaths'
                                        bordered={false}
                                        style={{ width: 360, height: 215 }}
                                    >
                                        <br />
                                        <ArrowUpOutlined />
                                        <CountUp
                                            className='count'
                                            start={0}
                                            end={item.deltaconfirmed}
                                            duration={2.75}
                                            separator=','
                                        />
                                        <h2 className='text-warning' style={{ color: 'red' }}>{item.deaths}</h2>
                                    </Card>
                                </Col>


                            </Row>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardComponent