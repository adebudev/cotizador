import React, { useState } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';

export const QuoteInformationForm = () => {
  return (
    <>
      <Form.Item
        label='Numero del presupuesto'
        required
        tooltip='This is a required field'
      >
        <Input placeholder='Ejemplo: 2022-001' />
      </Form.Item>
      <Row gutter={16}>
        <Col span={8} style={{ textAlign: 'right' }}>
          <Form.Item
            label='Fecha de emisión'
            required
            tooltip='This is a required field'
          >
            <Input placeholder='12/02/2022 (Today)' />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label='Fecha de Validéz'
            required
            tooltip='This is a required field'
          >
            <Input placeholder='' />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label='Moneda' required tooltip='This is a required field'>
            <Input placeholder='COP' />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};
