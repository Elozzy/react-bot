import React from "react";
//import ReactDOM from 'react-dom/client';

import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import "./index.css";

//theme
const theme = {
  background: "#fff",
  fontFamily: "Helvetica Neue",
  headerBgColor: "purple",
  headerFontColor: "#FFF",
  headerFontSize: "20px",
  botBubbleColor: "purple",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const steps = [
  {
    id: "1",
    message: "Hello, Welcome to Tanny Bank. Is there anything I can help you with today?",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message:
      "can you provide the following details: name, phone number and date of birth",
    trigger: "4",
  },
  {
    id: "4",
    message: "what is your date of birth (dd/mm/yy)?   ",
    trigger: "5",
  },
  {
    id: "5",
    user: true,
    trigger: "6",
  },
  {
    id: "6",
    message: "what is your phone number? ",
    trigger: "7",
  },
  {
    id: "7",
    user: true,
    trigger: "8",
  },
  {
    id: "8",
    message: "what is your name? ",
    trigger: "9",
  },
  {
    id: "9",
    user: true,
    trigger: "10",
  },
  {
    id: "10",
    message:
      "Thank you so much {previousValue}, I have been able to Authenticate your identity. Kindly choose what you want me to help you with today ",
    trigger: "11",
  },
  {
    id: "11",
    options: [
      { value: "1", label: "Check Balance", trigger: "12" },
      { value: "2", label: "Account Opening", trigger: "13" },
      { value: "3", label: "Buy Airtime", trigger: "14" },
      { value: "4", label: "Send Money", trigger: "17" },
      { value: "5", label: "Buy Data", trigger: "1" },
      { value: "6", label: "Complain", trigger: "1" },
      { value: "7", label: "Get Statement", trigger: "1" },
      { value: "8", label: "Self Service", trigger: "1" },
      { value: "9", label: "Link New Account", trigger: "1" },
      { value: "10", label: "Reset Pin", trigger: "1" },
      { value: "11", label: "Loan Request", trigger: "1" },
      { value: "12", label: "FAQ", trigger: "20" },
    ],
  },
  {
    id: "12",
    message: "Your current account balance is : $4000.85",
    trigger: 'continue-chat',
  },
  {
    id: "13",
    message:
      "Visit the nearest branch to you, to enable you open an account. OR visit our website https://testbank.com",
    trigger: 'continue-chat',
  },
  {
    id: "14",
    message: "Input number with country code for airtime",
    trigger: "15",
  },
  {
    id: "15",
    user: true,
    trigger: "16",
  },
  {
    id: "16",
    message: "Airtime sent to {previousValue}",
    trigger: 'continue-chat',
  },

  {
    id: "17",
    message: "Input account number",
    trigger: "18",
  },
  {
    id: "18",
    user: true,
    trigger: "19",
  },
  {
    id: "19",
    message:
      "This account number {previousValue} has successfully been credited.",
    trigger: 'continue-chat',
  },
  {
    id: "20",
    message:
      "You can read up our FAQ here https://bit.ly/3BiH88t",
    trigger: 'continue-chat',
  },
  {
    id:'continue-chat', 
    message:'Do you want to perform another transaction?', 
    trigger:'end-chat',
   },
  {
    id: "end-chat",
    options: [
      { value: "y", label: "Yes", trigger: "yes-response" },
      { value: "n", label: "No", trigger: "no-response" },
    ],
  },
  {
    id: 'yes-response',
    message:"Greate !",
    trigger: "11"
  },
  {
    id: 'no-response',
    message: "Thanks for using my service!",
    end: true
  },


  
];

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          headerTitle="Tanny"
          speechSynthesis={{ enable: true, lang: 'en' }}
          className="container mt-40 px-3 md:ml-40 md:pl-10 "
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
