import styled from "styled-components";
import { motion } from "framer-motion";

export const FramerContainer = styled(motion.div)`
  position: fixed;
  z-index: 98;
  bottom: 0;
  width: 90%;
`;

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  background-color: #212223;
  border-radius: 10px;
  padding: 1rem 0.1rem;
  margin-left: -1px;
`;

export const DatePicker = styled.input`
  flex: 50%;
  margin: 1rem;
  background-color: #181819 !important;
  border: 1px solid #1976d2;
  border-radius: 5px;
  padding: 3px;
`;

export const CustomForm = styled.form`
  padding: 1rem;
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  flex: 50%;
  text-align: right;
  padding: 1rem;
  color: #ea6262;
`;

export const SubmitButton = styled.button`
  border: none;
  background-color: #8e434338;
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
  color: #ea6262;
  border-radius: 1rem;
  text-transform: capitalize;
`;
