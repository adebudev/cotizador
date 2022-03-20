import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';

export const ClientInformation = () => {
  return (
    <>
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item
            label='Nombre o razón social'
            required
            tooltip='This is a required field'
          >
            <Input placeholder='Ejemplo: 2022-001' />
          </Form.Item>
        </Col>
        <Col span={6} style={{ textAlign: 'right' }}>
          <Form.Item label='NIT' required tooltip='This is a required field'>
            <Input placeholder='12/02/2022 (Today)' />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label='Email' required tooltip='This is a required field'>
            <Input placeholder='' />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label='Teléfono de contacto'
            required
            tooltip='This is a required field'
          >
            <Input placeholder='COP' />
          </Form.Item>
        </Col>
      </Row>

      {/* ROW 2 */}
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item
            label='País'
            required
            tooltip='This is a required field'
          >
            <Input placeholder='Ejemplo: 2022-001' />
          </Form.Item>
        </Col>
        <Col span={6} style={{ textAlign: 'right' }}>
          <Form.Item label='Ciudad' required tooltip='This is a required field'>
            <Input placeholder='12/02/2022 (Today)' />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label='Dirección' required tooltip='This is a required field'>
            <Input placeholder='' />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label='Código Postal'
            required
            tooltip='This is a required field'
          >
            <Input placeholder='COP' />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};
