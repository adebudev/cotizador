import React from 'react';
import { Form, Divider } from 'antd';
import QuoteInformationForm from '../../UI/organisms/QuoteInformationForm';
import './styles.css';
import ClientInformation from '../../UI/organisms/ClientInformation';
import Header from '../../UI/molecules/Header';

const QuotesForm = () => {
  return (
    <div className='quotes--container'>
      <div className='quotes--section-form'>
        {/* Header */}
        <Header />

        {/* Form */}
        <Form layout='vertical'>
          <Divider>Información General de la Cotización</Divider>
          <QuoteInformationForm />

          <Divider>Tus Datos Personales</Divider>
          <ClientInformation />

          <Divider>Los Datos de tu Cliente</Divider>
          <ClientInformation />
        </Form>
      </div>
      <div className='quotes--section-ads' style={{ backgroundColor: 'purple' }}>
        <p style={{ textAlign: 'center' }}>Section Ads</p>
      </div>
    </div>
  );
};

export default QuotesForm;
