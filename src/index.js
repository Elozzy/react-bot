import React from 'react';
//import ReactDOM from 'react-dom/client';
import { render } from "react-dom";
import ChatBot from 'react-simple-chatbot';
import './index.css';



const steps =[
  {
    id: '1',
    message: 'What is your name ?',
    trigger: '2',
  },
  {
    id: '2',
   user: true,
    trigger: '3',
  },
  {
    id: '3',
  message : 'Hi {previousValue}, nice to meet you! Welcome to KeyStone Bank',
    trigger: '4',
  },
  {
    id: '4',
    message : 'How may I help you',
    trigger: '5',
  },
  {
    id: '5',
    options: [
      { value: '1', label: 'Check Balance', trigger: '6' },
      { value: '2', label: 'Account Opening', trigger: '7' },
      { value: '3', label: 'Buy Airtime', trigger: '8' },
      { value: '4', label: 'Send Money', trigger: '11' },
      { value: '5', label: 'Buy Data', trigger: '3' },
      { value: '6', label: 'Complain', trigger: '3' },
      { value: '7', label: 'Get Statement', trigger: '3' },
      { value: '8', label: 'Self Service', trigger: '3' },
      { value: '9', label: 'Link New Account', trigger: '3' },
      { value: '10', label: 'Reset Pin', trigger: '3' },
      { value: '11', label: 'Loan Request', trigger: '3' },
      { value: '12', label: 'FAQ', trigger: '3' },
    ],
  },
  {
    id: '6',
    message : 'Your current account balance is : $4000.85',
    trigger: '5',
  },
  {
    id: '7',
    message : 'Visit the nearest branch to you, to enable you open an account. OR visit our website https://testbank.com',
    trigger: '5',
  },
  {
    id: '8',
    message : 'Input number with country code for airtime',
    trigger: '9',
  },
  {
    id: '9',
   user: true,
    trigger: '10',
  },
  {
    id: '10',
  message : 'Airtime sent to {previousValue} ',
    trigger: '5',
  },
  {
    id: '11',
    message : 'Input account number',
    trigger: '12',
  },
  {
    id: '12',
   user: true,
    trigger: '13',
  },
  {
    id: '13',
  message : 'Money sent to {previousValue} ',
    trigger: '5',
  },
  {
    id: '25',
    message: 'Thanks for using my service!',
    end: true,
  },
]


render(<ChatBot steps={steps} className="container mt-40 px-3 md:ml-40 md:pl-10" />, document.getElementById("root"));


